<template>
    <div>
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-1">Elige una dirección </a></h3>
        </div>
        <div id="my-account-1" class="panel-collapse" data-bs-parent="#faq">
            <div class="panel-body">
                <div class="form-group p-4 p-md-5">
                    <select class="form-select rounded-0" v-model="selected" @change="enableButton" ref="userIdProfile">
                        <option v-if="selected == 'Seleccione una dirección' " selected disabled>{{ selected }}</option>
                        <option v-else selected disabled>Seleccione una dirección</option>
                        <client-only>
                            <option v-for="profile in $auth.user.user_profile" :key="profile.id" :value="profile.id">{{ profile.name }} {{ profile.lastname }}, {{ profile.address }}, {{ profile.zipcode }} {{ profile.city }} ({{ profile.state }})</option>
                        </client-only>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'Seleccione una dirección',
            userIdProfile: '',
        }
    },

    watch: {
        userIdProfile() {
            this.$emit('userIdProfile', this.userIdProfile);
        }
    },

    methods: {
        enableButton(e) {
            this.userIdProfile = e.target.value;
            document.getElementById("my-account-3").classList.remove("collapse");
        },
    },
}
</script>

<style>

</style>