<template>
    <div v-if="product.status == 'Publicado'" class="shop-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-details-slider">
                        <div class="product-details-img">
                            <div class="product-badges">
                                <span class="product-label pink" v-if="product.new === 'Nuevo'">Nuevo</span>
                                <span class="product-label bg-danger text-white p-3 rounded-circle" v-if="product?.discount !== null">-{{ product?.discount?.discount }}%</span>
                             </div>
                            <swiper :options="swiperOptionTop" ref="swiperTop">
                                <div v-if="product.images?.length == 0" class="swiper-slide text-center">
                                    <nuxt-img loading="lazy" class="principal" provider="customProvider" src="nuxt/default.webp" alt="default"  />
                                </div>
                                <div v-else id="product-single" class="swiper-slide text-center" v-for="image in product.images" :key="'image-' + image.id">
                                    <nuxt-img id="image-principal" loading="lazy" class="principal" provider="customProvider" :src="image.path + image.name + '.' + image.ext" alt="default" />
                                </div>
                            </swiper>
                            <swiper class="mt-2" :options="swiperOptionThumbs" ref="swiperThumbs">
                                <div v-if="product.images?.length == 0" class="thumb-img swiper-slide">
                                    <nuxt-img loading="lazy" provider="customProvider" src="nuxt/default280x280.webp" alt="default" width="106" height="auto"/>
                                </div>
                                <div v-else class="thumb-img swiper-slide" v-for="image in product.images" :key="'imagetwo-' + image.id">
                                    <nuxt-img loading="lazy" provider="customProvider" :src="image.path + '270x360/' + image.name + '.' + image.ext" alt="default" width="106" height="auto"/>
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>
                <div v-if="product" class="col-lg-6 col-md-6">
                    <div class="product-details-content ml-70">
                        <h1 class="h2-h1">{{ product.name }}</h1>
                        <div class="product-details-price">
                            <span v-if="product.discount === null">{{ ((product.price_base) * 1.21).toFixed(2) }} &euro;</span>
                            <span v-if="product.discount !== null">{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
                            <span class="old" v-if="product.discount !== null">{{ (product.price_base * 1.21).toFixed(2) }} &euro;</span>
                            <span class="ms-2 fs-6" v-if="exclusive.max_uses >= 10"><i>Queda(n) 10 unidad(es) a este precio</i></span>
                            <span class="ms-2 fs-6" v-else-if="exclusive.max_uses < 10"><i>Queda(n) {{ exclusive.max_uses }} unidad(es) a este precio</i></span>
                        </div>
                        <div class="pro-details-rating-wrap">
                            <client-only>
                                <vue-star-rating :star-size="30" :read-only="true" :show-rating="false" :rating="product.rating"></vue-star-rating>
                            </client-only> 
                            <span><a class="ms-2" href="#des-details3" title="Valoraciones">{{ product.total_reviews }} Valoraciones</a></span>
                        </div>
                        <div class="spects-menu">
                            <div class="description-menu">
                                <div class="title-menu">
                                    <h4 class="text-menu">Descripción</h4>
                                    <i class="fa fa-angle-down icon-move" :class="{'active': descriptionMenu ? true : false}" @click="descriptionMenu = !descriptionMenu"></i>
                                </div>
                                <div class="content-menu" :class="{'active': descriptionMenu ? true : false}">
                                    <div v-html="product.description"></div>
                                </div>
                                <div class="title-menu">
                                    <h4 class="text-menu">Ingredientes</h4>
                                    <i class="fa fa-angle-down icon-move" :class="{'active': ingredientsMenu ? true : false}" @click="ingredientsMenu = !ingredientsMenu"></i>
                                </div>
                                <div class="content-menu" :class="{'active': ingredientsMenu ? true : false}">
                                    <div v-html="product.ingredients"></div>
                                </div>
                                <div class="title-menu">
                                    <h4 class="text-menu">Información adicional</h4>
                                    <i class="fa fa-angle-down icon-move" :class="{'active': additionalInfoMenu ? true : false}" @click="additionalInfoMenu = !additionalInfoMenu"></i>
                                </div>
                                <div class="content-menu" :class="{'active': additionalInfoMenu ? true : false}">
                                    <div v-html="product.specifications"></div>
                                </div>
                            </div>
                        </div>
                        <div class="pro-details-size-color" v-if="product.variations">
                            <!-- <div v-if="product.discount?.discount > 0">
                                <CountdownMini :targetDate="product.discount?.end_date" />
                            </div> -->
                            <div v-if="errorVariation">
                                <p class="text-danger">
                                    <i>Debes seleccionar el modelo, color o tamaño antes de añadirlo al carrito.</i>
                                </p>
                            </div>
                            <div class="pro-details-color-wrap mt-2">
                                <div v-if="model?.length > 0">
                                   <h6 class="label">Modelo</h6>
                                    <div class="d-flex mb-4">
                                        <div class="d-flex justify-content-around" v-for="modelo, index in model">
                                            <button :id="index" class="btn btn-hover-blue border-black rounded-0 ms-2" :title="modelo" @click="setVariation">{{ modelo }}</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="color?.length > 0">
                                   <h6 class="label">Color</h6>
                                    <div class="d-flex mb-4">
                                        <div class="d-flex justify-content-around" v-for="colores, index in color">
                                            <button :id="index" class="btn btn-hover-blue border-black rounded-0 ms-2" :title="colores" @click="setVariation">{{ colores }}</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="size?.length > 0">
                                   <h6 class="label">Tamaño</h6>
                                    <div class="d-flex mb-4">
                                        <div class="d-flex justify-content-around" v-for="tamanos, index in size">
                                            <button :id="index" class="btn btn-hover-blue border-black rounded-0 ms-2" :title="tamanos" @click="setVariation">{{ tamanos }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="product.stock > 0" class="pro-details-quality">
                            <div class="cart-plus-minus" v-if="exclusive == 'NO'">
                                <button @click="decreaseQuantity()" class="dec qtybutton" title="Quitar">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton" title="Añadir">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)" title="Añadir al Carrito">Añadir al Carrito</button>
                            </div>
                            <div class="pro-details-wishlist">
                                <button @click="addToWishlist(product)" title="Añadir a la lista de deseos"><i class="fa fa-heart-o"></i></button>
                            </div>
                            <!-- <div class="pro-details-compare">
                                <button @click="addToCompare(product)" title="compare"><i class="pe-7s-shuffle"></i></button>
                            </div> -->
                        </div>
                        <div v-else-if="product.stock == 0 && product.presale == 'Si'" class="pro-details-quality">
                            <div class="cart-plus-minus" v-if="exclusive == 'NO'">
                                <button @click="decreaseQuantity()" class="dec qtybutton" title="Quitar">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton" title="Añadir">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)" title="Añadir al Carrito">Preventa</button>
                            </div>
                            <div class="pro-details-wishlist">
                                <button @click="addToWishlist(product)" title="Añadir a la lista de deseos"><i class="fa fa-heart-o"></i></button>
                            </div>
                            <!-- <div class="pro-details-compare">
                                <button @click="addToCompare(product)" title="compare"><i class="pe-7s-shuffle"></i></button>
                            </div> -->
                        </div>
                        <div v-else-if="product.stock == 0 && product.presale == 'No'">
                            <p class="text-danger fst-italic">En estos momento no tenemos stock del producto.</p>
                        </div>
                        <div v-if="product.stock == 0 && product.presale == 'Si'" class="mb-2">
                            <p class="text-danger">
                                <i>
                                    Los productos en preventa se enviarán en la medida que vayamos recibiendo stock, el plazo de entrega es de un máximo de 20 días.
                                </i>
                            </p>
                        </div>
                        <div class="pro-details-meta">
                            <span class="label">Categoría: </span>
                            <ul>
                                <li>
                                    <div>
                                        <a :href="`https://trivicare.com/${product.category.slug}`" :title="product.category.name">{{ product.category.name  }}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="pro-details-meta">
                            <span class="label me-2">Tag:</span>
                            <ul>
                                <li v-for="taggy in product.tags" :key="'tag-' +  taggy.id">
                                    <n-link class="tag-block" :style="`color:${taggy.color}`" :to="`/shop?tag=${taggy.slug}`" title="Etiqueta">{{ taggy.tag }}</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .tag-block {
        display: inline-flex;
        padding: 1rem, 1rem;   
    }

    .principal {


    }

    .btn-hover-blue:hover {
        background-color: #2AB5B2;
    }

    // Copiar estilo de h2 de bootstrap
    .h2-h1 {
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }

    .description-menu{
        
        .title-menu{
            display: flex;
            justify-content: space-between;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 0.3rem 0;
            border-bottom: 1px solid #cecdcd;

            .text-menu{
                margin: 0 0.5rem;
            }

            .icon-move{
                cursor: pointer;
                transform: rotate(90deg);
                margin-right: 0.5rem;

                &.active{
                    transform: rotate(0deg);
                }
            }
        }

        .content-menu{
            margin: 0.7rem 0;
            display: none;

            &.active{
                display: block;
            }
        }
    }

</style>

<script>
import Swal from 'sweetalert2'
    export default {
        auth: false,
        props: ['product', 'exclusive'],

        components: {
            CountdownMini: () => import('@/components/CountdownMini.vue'),
        },

        data() {
            return {
                singleQuantity: 1,
                model: [],
                color: [],
                size: [],
                variation: '',
                errorVariation: false,
                selectVariation: false,
                idButtonVariation: '',
                imageVariation: [],
                urlProduct: process.env.url + '/product/' + this.product.slug,
                urlLogo: process.env.baseUrl + '/nuxt/TriviCare_byn%20Positivo.svg',

                swiperOptionTop: {
                    loop: true,
                    slidesPerView : 1,
                    spaceBetween: 10,
                    effect: 'fade',
                    loopedSlides: 5, // looped slides should be the same
                    zoom: true,
                    modules: '',
                },

                swiperOptionThumbs: {
                    loop: true,
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 5,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: true,
                    loopedSlides: 5, // looped slides should be the same
                },

                descriptionMenu: true,
                ingredientsMenu: false,
                additionalInfoMenu: false,
            }
        },

        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            });
            
            this.getModels();
            this.getColors();
            this.getSizes();
        },

        methods: {
            addToCart(product) {
                if (this.exclusive == 'NO') {
                    if (product.variations.length > 0 && this.variation !== '') {
                        const prod = {...product, cartQuantity: this.singleQuantity, variation: this.variation}
                        // for notification
                        if (this.$store.state.cart.find(el => product.id === el.id && product.variation == '')) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Actualizado!',
                                text: 'Se ha actualizado la cantidad!',
                            })
                        } else {
                            Swal.fire({
                                icon: 'success',
                                title: 'Añadido!',
                                text: 'Se ha añadido al carrito!',
                            })
                        }
                        this.$store.dispatch('addToCartItem', prod)
                    } else if (product.variations.length == 0 && this.variation == '') {
                        const prod = {...product, cartQuantity: this.singleQuantity}
                        // for notification
                        if (this.$store.state.cart.find(el => product.id === el.id)) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Actualizado!',
                                text: 'Se ha actualizado la cantidad!',
                            })
                        } else {
                            Swal.fire({
                                icon: 'success',
                                title: 'Añadido!',
                                text: 'Se ha añadido al carrito!',
                            })
                        }
                        this.$store.dispatch('addToCartItem', prod)

                    }else {
                        this.errorVariation = true; 
                    }
                } else {
                    //Limitamos la unidades del carrito a un máximo de 1
                    
                    if (product.variations.length > 0 && this.variation !== '') {
                        const prod = {...product, cartQuantity: 1, variation: this.variation, priceExclusive: 'Si'}
                        // for notification
                        if (this.$store.state.cart.find(el => product.id === el.id && product.variation == '')) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Solo puedes añadir 1!',
                                text: 'No puedes añadir más de 1 producto con esta oferta!',
                            })
                            return;
                        } else {
                            Swal.fire({
                                icon: 'success',
                                title: 'Añadido!',
                                text: 'Se ha añadido al carrito!',
                            })

                            //Añadimos el id del producto a la lista de productos con oferta
                            this.$store.dispatch('setExclusiveProducts', this.product.id)
                        }
                        this.$store.dispatch('addToCartItem', prod)
                    } else if (product.variations.length == 0 && this.variation == '') {
                        const prod = {...product, cartQuantity: 1, priceExclusive: 'Si'}
                        // for notification
                        if (this.$store.state.cart.find(el => product.id === el.id)) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Solo puedes añadir 1!',
                                text: 'No puedes añadir más de 1 producto con esta oferta!',
                            })
                            return;
                        } else {
                            Swal.fire({
                                icon: 'success',
                                title: 'Añadido!',
                                text: 'Se ha añadido al carrito!',
                            })

                            //Subimos el id del producto al array de productos con oferta
                            this.$store.dispatch('setExclusiveProducts', this.product.id)
                        }
                        this.$store.dispatch('addToCartItem', prod)

                    }else {
                        this.errorVariation = true; 
                    }


                }
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount?.discount / 100)
            },

            increaseQuantity(){
                if(this.product.stock > this.singleQuantity){
                    this.singleQuantity++
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No tenemos stock suficiente del producto!',
                    })
                }
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'El producto ya está en la lista de deseos!',
                    })
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Añadido!',
                        text: 'Se ha añadido a la lista de deseos!',
                    })
                }
                this.$store.dispatch('addToWishlist', product)
            },

            getModels() {
                this.product.variations.map(el => {
                    if(el.model) {
                        this.model.push(el.model);
                    }
                })
            },

            getColors() {
                this.product.variations.map(el => {
                    if(el.color){
                        this.color.push(el.color);
                    }
                })
            },

            getSizes() {
                this.product.variations.map(el => {
                    if(el.size){
                        this.size.push(el.size);
                    }
                })
            },

            setVariation(e) {
                let id = e.target.id;
                this.variation = e.target.title;
                this.errorVariation = false;

                if(id !== this.idButtonVariation && this.idButtonVariation !== '') {
                    document.getElementById(this.idButtonVariation).classList.remove('bg-trivi-blue');
                }
                
                //Marcar el botón según la id recibida
                document.getElementById(id).classList.add('bg-trivi-blue');

                this.idButtonVariation = id;

                //Extraer variación según el título

                this.product.variations.map(el => {
                    if (el.model === e.target.title || el.color === e.target.title || el.size === e.target.title) {
                        this.$axios.get('api/variations/' + el.id).then(res => {
                            let response = res.data.data;
                            response.map(element => {
                                let imageVariation = element.image;
                                let slide = document.querySelector('#product-single.swiper-slide-active');
                                let imagen = slide.querySelector('img');
                                imagen.src = process.env.baseUrl + '/' + imageVariation.path + '800x800/' + imageVariation.name + '.' + imageVariation.ext;                            })
                        })
                    }
                })
            }   

        },

    };
</script>