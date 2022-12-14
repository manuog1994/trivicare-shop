<template>
    <div class="support-area pt-100 pb-90">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-3 col-sm-6 mt-30" v-for="(policy, index) in policies" :key="index">
                    <div class="support-wrap support-1">
                        <div class="support-icon">
                            <nuxt-img class="animated" :src="policy.icon" :alt="policy.title" />
                        </div>
                        <div class="support-content">
                            <h5>{{ policy.title }}</h5>
                            <p>{{ policy.subTitle }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                policies: [
                    {
                        icon: "/img/icon-img/support-1.png",
                        title: "Envío gratis",
                        subTitle: "Envío gratis en pedidos superiores a 50€"
                    },
                    {
                        icon: "/img/icon-img/support-2.png",
                        title: "Atención al cliente",
                        subTitle: "Atención al cliente personal y profesional"
                    },
                    {
                        icon: "/img/icon-img/support-3.png",
                        title: "Devoluciones",
                        subTitle: "7 días para devolver el producto"
                    },
                    {
                        icon: "/img/icon-img/support-4.png",
                        title: "10% de descuento",
                        subTitle: "10% de descuento en tu primera compra"
                    },
                ]
            }
        },
    };
</script>
