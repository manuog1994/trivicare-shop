<template>
    <div class="support-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(policy, index) in policies" :key="index">
                    <div class="support-wrap-2 support-padding-2 support-shape-3 mb-30 text-center">
                        <div class="support-content-2">
                            <div class="support-icon">
                                <nuxt-img class="animated" provider="customProvider" :src="policy.icon" :alt="policy.title"/>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                policies: [
                {
                        icon: "support-1.webp",
                        title: "Envío gratis",
                        subTitle: "Envío gratis en pedidos superiores a 50€"
                    },
                    {
                        icon: "support-2.webp",
                        title: "Atención al cliente",
                        subTitle: "Atención al cliente personal y profesional"
                    },
                    {
                        icon: "support-4.webp",
                        title: "10% de descuento",
                        subTitle: "10% de descuento en tu primera compra"
                    },
                ]
            }
        },
    };
</script>
