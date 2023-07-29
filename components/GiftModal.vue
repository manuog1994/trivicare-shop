<template>
    <modal name="giftModal" @before-open="beforeOpen" class="modal-over" :width="size" :scrollable="true" height="auto">
        
        <div class="p-3 p-lg-5">
            <!-- Botón de cerrar -->
            <button class="btn-clse" @click="closeModalGift">
                <i class="fa fa-times fa-2x"></i>
            </button>

            <div class="mb-2">
                <h3>Elige uno de los siguientes regalos 🎁</h3>
            </div>
            <!-- Mostrar un listado con los productos que incluya una miniatura de las imágenes -->

            <ul class="p-1 p-lg-3 mt-lg-3">
                <li v-for="product in gifts" :key="'gifts' + product.id">
                    <div class="row">
                        <div class="col-4">
                            <div class="p-2">
                                <div v-if="product.images?.length == 0 || product.images?.length == 1">
                                    <nuxt-img loading="lazy" class="default-img m-auto" provider="customProvider" src="nuxt/default400x400.webp" :alt="product.name" width="200" height="auto"/>
                                </div>
                                <div v-else>
                                    <nuxt-img loading="lazy" class="default-img m-auto" provider="customProvider" :src="product.images[0].path + '280x280/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name" width="200" height="auto"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 p-3 d-flex flex-column align-content-center">
                            <div class="mt-2">
                                <h4>{{ product.name }} {{ product.variations?.length > 0 ? ' -- (Aleatorio)' : '' }}</h4>
                            </div>
                            <div>
                                <button class="btn bg-trivi-blue p-2 rounded-0" @click="addToCart(product)">Elegir</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <p v-if="total <= 200" class="banner-var-gift">Te faltan {{ rest }} &euro; para poder obtener más regalos</p>
        </div>
    </modal>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    props: ['size'],

    data() {
        return {
            gifts: [],
            rest: 0,
        }
    },

    computed: {
        products() {
            return this.$store.getters.getProducts.data
        },
        
        total() {
            return this.$store.getters.getTotal * 1.21
        },
    },

    watch: {
        total() {
            this.giftVar();
            this.filterProducts();
        }
    },

    mounted() {
        this.giftVar();
    },

    methods: {
        beforeOpen () {
            this.filterProducts();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },

        filterProducts() {
            //filtra todos los productos que tengan un precio inferior a 14 euros
            if (this.total >= 200) {
                const gifts = this.products.filter(product => product.price < 15);
                this.gifts = gifts;
            }else if (this.total >= 150) {
                const gifts = this.products.filter(product => product.price < 10);
                this.gifts = gifts;
            }else if (this.total >= 120) {
                const gifts = this.products.filter(product => product.price < 7);
                this.gifts = gifts;
            }else if (this.total >= 100) {
                const gifts = this.products.filter(product => product.price < 5);
                this.gifts = gifts;
            }else if(this.total >= 75) {
                const gifts = this.products.filter(product => product.price < 3);
                this.gifts = gifts;
            }
        },

        closeModalGift() {
            this.$modal.hide('giftModal');
        },

        giftVar() {
            if (this.total < 100) {
                this.rest = (100 - this.total).toFixed(2);
            }else if (this.total < 120) {
                this.rest = (120 - this.total).toFixed(2);
            }else if (this.total < 150) {
                this.rest = (150 - this.total).toFixed(2);
            }else if (this.total < 200) {
                this.rest = (200 - this.total).toFixed(2);
            } 
        },

        addToCart(product) {
            //modificar el producto para poner precio base a 0
            const prod = {...product, price_base: 0, cartQuantity: 1}
            this.$emit('deleteButton');
            this.$store.dispatch('addToCartItem', prod);
        },
    }
}
</script>

<style lang="scss">

.btn-clse {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    margin: 0;
    z-index: 999;

    @media #{ $xs-layout } {
        position: fixed;
        padding: 10px;
    }
}

.modal-over {
    overflow: auto;
    height: 200vh;
}

// .vm--container {
//     position: fixed;
//     box-sizing: border-box;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100vh;
//     z-index: 9999;
//     overflow: hidden;
// }

// .vm--overlay {
//     position: fixed;
//     box-sizing: border-box;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 250vh;
//     background: rgba(0, 0, 0, 0.2);
//     /* z-index: 999; */
//     opacity: 1;
// }

.banner-var-gift {
  background-color: #f3e395;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #eeda72;
}
</style>