<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="contacto" />
        <ContactInfo />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        auth: false,
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            ContactInfo: () => import('@/components/ContactInfo'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter')
        },
        head() {
            return {
                title: "Contacto"
            }
        }
    };
</script>
