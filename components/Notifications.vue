<template>
    <div class="position-absolute box-notify" :class="{'d-none': openNotifications ? false : true}" style="right:0;background-color: white; border: 0.5px solid gray; border-radius: 5px; width: 260px;">
        <div class="d-block">
            <ul v-if="$auth.user?.notifications?.length > 0">
                <div v-for="notification in $auth.user?.notifications" :key="notification.id">
                    <a v-if="notification.read == 0" @click.prevent="read(notification.id)">
                        <li class="notify-list p-2 d-flex align-items-center">
                            <i v-if="notification.type == 'send'" class="fa fa-truck me-2"></i>
                            <i v-if="notification.type == 'review'" class="fa fa-star me-2"></i>
                            <i v-if="notification.type == 'complete'" class="fa fa-inbox me-2"></i>
                            <p>{{ notification.title }}</p>
                        </li>
                    </a>
                </div>
            </ul>
            <ul v-else>
                <li class="p-2 mt-2 text-center">
                    <p>No tienes notificaciones nuevas</p>
                    <n-link class="btn btn-notify mb-2" to="/notifications-center">Ver mis Notificaciones</n-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ["openNotifications"],

    data() {
        return {
            notificationsItems: 0
        }
    },

    methods: {
        read(id) {
            this.$axios.put('/api/notifications/' + id, {
                read: 1
            }).then(response => {
                //console.log(response)
                this.$auth.fetchUser()
                this.$router.push('/notifications-center')
            }).catch(error => {
                //console.log(error)
            })
        },

        countNotifications() {
            if(this.$auth.loggedIn == true) {
                let notifications = this.$auth.user?.notifications;
                //console.log(notifications)
                if(notifications != null) {
                    const noti = notifications.filter(notification => notification.read == 0)?.length;
                    this.notificationsItems = noti;
                }else {
                    this.notificationsItems = 0;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.notify-list {
    border-bottom: 0.5px solid gray;
    &:hover {
        background-color: #2AB5B2;
    }
}

.box-notify {
    position: relative;
    top: 50px;
    z-index: 999;
}

.btn-notify{
    background-color: #2AB5B2;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #2AB5B2;
    }
}
</style>