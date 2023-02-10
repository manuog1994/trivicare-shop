<template>
    <div>
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-1" id="titleSelect">Introduzca sus datos de envío </a></h3>
        </div>
        <div id="my-account-1" class="panel-collapse" data-bs-parent="#faq">
            <div class="panel-body">
                <div class="myaccount-info-wrapper">
                    <NewGuest />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        NewGuest: () => import('@/components/profile/NewGuest.vue'),
    },

}
</script>

<style>

</style>