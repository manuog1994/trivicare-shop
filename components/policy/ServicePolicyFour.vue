<template>
    <div class="">
        <div class="support-area pb-70 d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6" v-for="(policy, index) in policies" :key="index">
                        <div class="support-wrap-2 support-padding-2 support-shape-3 mb-30 text-center">
                            <div class="support-content-2">
                                <div class="support-icon">
                                    <nuxt-img loading="lazy" class="animated" provider="customProvider" :src="'nuxt/' + policy.icon" :alt="policy.title"/>
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
        <div class="d-flex justify-content-between justify-content-sm-around mt-4 mt-md-0 mb-4 mb-md-5 d-lg-none p-4 p-sm-4">
            <div v-for="policy in policies" :key="policy.title" class="text-center">
                <div class="policy-icons">
                    <nuxt-img loading="lazy" class="animated" provider="customProvider" :src="'nuxt/' + policy.icon" :alt="policy.title" width="30px"/>
                    <p class="display-min">{{ policy.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.policy-icons{
    width: 80px;
    height: auto;
    margin: auto;
}
</style>

<script>
    export default {
        data() {
            return {
                policies: [
                {
                        icon: "support-1.webp",
                        title: "Envío gratis",
                        subTitle: "Envío gratis en pedidos superiores a 50€ (solo Península y Baleares)"
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
