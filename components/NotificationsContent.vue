<template>
    <client-only>
        <div class="card rounded-0 m-2 m-md-5 mt-5 mb-5">
            <div class="p-2 text-center">
                <h2>Centro de Notificaciones</h2>
            </div>
            <div class="p-2">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Notificación</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Leído</th>
                        </tr>
                    </thead>
                    <tbody v-if="notifications?.length > 0">
                        <tr v-for="notification in paginatedItems" :key="notification.id" class="btn-hover-table" @click="openNotification(notification.id)">
                            <td>
                                <i v-if="notification.type == 'send'" class="fa fa-truck me-2"></i>
                                <i v-if="notification.type == 'review'" class="fa fa-star me-2"></i>
                                <i v-if="notification.type == 'complete'" class="fa fa-inbox me-2"></i>
                                {{ notification.title }}
                            </td>
                            <td>{{ new Date(notification.created_at).toLocaleDateString() }}</td>
                            <td v-if="notification.read == 1">Si</td>
                            <td v-if="notification.read == 0">No</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="3" class="text-center">No tienes notificaciones</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="notification_id == 0 && notifications?.length > 10" class="d-flex justify-content-center">
                <pagination v-model="page" :records="notifications?.length" :perPage="perPage" @paginate="myCallBack" />
            </div>
            <div class="p-2" v-if="notification_id != 0">
                <div class="card rounded-0">
                    <div class="card-body">
                        <div>
                            <h5 class="card-title"><strong>{{ notification.title }}</strong></h5>
                            <p class="card-text">{{ notification.message }}</p>
                            <p v-if="notification.url">
                                <a :href="url + notification.url">Valorar Pedido</a>
                            </p>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-danger rounded-0 text-white" @click.prevent="destroy(notification.id)">Eliminar</button>
                            <button class="btn btn-sm btn-notify rounded-0" @click.prevent="openNotification(0)">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            showNotification: false,
            notification_id: 0,
            notification: {},
            notifications: [],
            page: 1,
            perPage: 10,
            url: process.env.url
        }
    },
    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.notifications.slice(start, start + this.perPage)
        }
    }, 

    mounted() {
        this.getNotifications();
    },

    methods: {
        async getNotifications() {
            await this.$axios.get('/api/notifications/' + this.$auth.user.id)
            .then(response => {
                this.notifications = response.data.data;
            }).catch(error => {
                //console.log(error)
            })
        },

        openNotification(id) {
            if(id == 0) {
                this.showNotification = !this.showNotification;
                this.notification_id = 0;
                return;
            }
            this.getNotification(id);
            this.read(id);
            this.notification_id = id;
            this.showNotification = !this.showNotification;
            this.$auth.fetchUser();
        },

        read(id) {
            this.$axios.put('/api/notifications/' + id, {
                read: 1
            }).then(response => {
                //console.log(response)
                this.$auth.fetchUser()
            }).catch(error => {
                //console.log(error)
            })
        },

        getNotification(id) {
            let notification_id = id;
            let notifications = this.notifications;
            notifications.map(notification => {
                if(notification.id == notification_id) {
                    this.notification = notification;
                }
            })
        },

        myCallBack(page) {
            this.page = page;
        },

        destroy(id) {
            this.$axios.delete('/api/notifications/' + id)
            .then(response => {
                this.$auth.fetchUser();
                this.setNotifications();
                this.openNotification(0);
                this.$auth.fetchUser();
                let page = (this.page - 1) * 10;
                //console.log(page)
                setTimeout(() => {
                    if(this.notifications?.length == page) {
                        this.page = this.page - 1;
                        this.myCallBack(this.page);
                    }
                }, 1000);
            }).catch(error => {
                //console.log(error)
            })
        }
    }

}
</script>

<style lang="scss">
.btn-hover-table {
    cursor: pointer;
    &:hover {
        background-color: #2AB5B2;
    }
}

</style>