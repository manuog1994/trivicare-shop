<template>
    <client-only>
        <div class="product-details-page-wrapper">
            <HeaderWithTopbar containerClass="container"/>
            <Breadcrumb pageTitle="Pasarela de Pago" />
            <div class="container">
                <div class="row">
                    <div class="col-8 mt-3">
                        <div class="card m-2 p-3">
                            <h2>Resumen de tu Pedido</h2>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div class="col-4 mt-3">
                        <div class="card m-2 p-3">
                            <h3>Métodos de Pago</h3>
                        </div>
    
                        <div>
                        </div>

                    </div>
                </div>
            </div>
            <TheFooter />
        </div>
    </client-only>
</template>

<script>    
    export default {
        auth: true,

        components: {
            HeaderWithTopbar : () => import('@/components/HeaderWithTopbar'),
            Breadcrumb : () => import('@/components/Breadcrumb'),
            TheFooter : () => import('@/components/TheFooter'),
        },

        

        mounted() {

        },

        methods: {

        },
        
        
    }

</script>

<style>


</style>