<template>
    <client-only>
        <modal name="quickview" @before-open="beforeOpen" width="50%" :scrollable="true" height=auto >
            <div class="quickview-wrapper row">
                <div class="col-md-6">
                    <div class="product-details-slider">
                        <div class="product-details-img">
                            <div class="product-badges">
                                <span class="product-label pink" v-if="product.new">New</span>
                                <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
                            </div>
                            <swiper :options="swiperOptionTop">
                                <div class="large-img swiper-slide">
                                    <img class="img-fluid" src="../static/img/product/cosmetics/1.jpg" :alt="product.name">
                                </div>
                                <div class="quickview-nav swiper-button-prev">
                                    <i class="pe-7s-angle-left"></i>
                                </div>
                                <div class="quickview-nav swiper-button-next">
                                    <i class="pe-7s-angle-right"></i>
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="product-details-content">
                        <div slot="top-right">
                            <button @click="$modal.hide('quickview')" class="modal-close">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                        <h2>{{ product.name }}</h2>
                        <div class="product-details-price">
                            <span>{{ discountedPrice(product).toFixed(2) }} &euro;</span>
                            <span class="old" v-if="product.discount > 0">{{ product.price_base}} &euro;</span>
                        </div>
                        <div class="pro-details-rating-wrap">
                            <client-only>
                                <vue-star-rating :read-only="true" :rating="product.rating" :star-size="20" :show-rating="false" :increment="0.5"></vue-star-rating>
                            </client-only>
                            <span><a class="ms-1" href="#">{{ product.total_reviews }} Reviews</a></span>
                        </div>
                        <p>{{ product.description }}</p>
                        <div class="pro-details-size-color" v-if="product.variation">
                            <div class="pro-details-color-wrap">
                                <h6 class="label">Color</h6>
                                <div class="pro-details-color-content">
                                    <client-only>
                                        <label :class="item" class="radio" v-for="(item, index) in product.variation.color" :key="index" >
                                            <input type="radio" name="colorGroup"/>
                                            <span class="check-mark"></span>
                                        </label>
                                    </client-only>
                                </div>
                            </div>
                            <div class="pro-details-size-wrap">
                                <h6 class="label">Size</h6>
                                <div class="pro-details-size-content">
                                    <client-only>
                                        <label class="radio" v-for="(item, index) in product.variation.sizes" :key="index">
                                            <input type="radio" name="sizeGroup" />
                                            <span class="check-mark">{{ item }}</span>
                                        </label>
                                    </client-only>
                                </div>
                            </div>
                        </div>
                        <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)">Añadir al carrito</button>
                            </div>
                            <div class="pro-details-wishlist">
                                <button @click="addToWishlist(product)"><i class="fa fa-heart-o"></i></button>
                            </div>
                            <!-- <div class="pro-details-compare">
                                <button @click="addToCompare(product)"><i class="pe-7s-shuffle"></i></button>
                            </div> -->
                        </div>
                        <div class="pro-details-meta">
                            <span class="label">Categoría:</span>
                            <ul>
                                <client-only>
                                    <div v-for="category in categories" :key="category.id">
                                        <li v-if="category.id == product.category_id">
                                            <a @click.prevent="changePage(category.slug)">{{category.name}}</a>                                
                                        </li>
                                    </div>
                                </client-only>
                            </ul>
                        </div>
                        <div class="pro-details-meta">
                            <span class="label me-2">Tag:</span>
                            <ul>
                                <client-only>
                                    <li v-for="tag in product.tags" :key="tag.id">
                                        <n-link class="tag-block" :style="`background-color:${tag.color}`" :to="`/shop?tag=${tag.slug}`">#{{ tag.tag }}  </n-link>
                                    </li>
                                </client-only>
                            </ul>
                        </div>
                        <div class="pro-details-social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/trivicare" target="_blank">
                                        <fa-icon icon="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/trivicare" target="_blank">
                                        <fa-icon icon="fa-brands fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@trivicare" target="_blank">
                                        <fa-icon icon="fa-brands fa-tiktok" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </client-only>
</template>

<script>
    export default {
        data() {
            return {
                item: '',
                singleQuantity: 1,
                swiperOptionTop: {
                    loop: true,
                    slidesPerView : 1,
                    spaceBetween: 10,
                    effect: 'fade',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
            }
        },

        computed: {
            product() {
                return this.item;
            },

            categories() {
                return this.$store.getters.getCategories;
            },
        },

        mounted() {
            this.getCategories();
        },

        methods: {
            beforeOpen ({params: product}) {
                this.item = product
            },

            changePage(slug) {
                this.$modal.hide('quickview');
                this.$router.push({ name: 'shop', query: { category: slug } });
            },

            addToCart(product) {
                const prod = {...product, cartQuantity: this.singleQuantity}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Se ha actualizado la cantidad de producto' })
                } else {
                    this.$notify({ title: 'Añadido al carrito!'})
                }
                
                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
            },

            increaseQuantity(){
                if(this.product.stock > this.singleQuantity){
                    this.singleQuantity++
                } else {
                    this.$notify({ title: 'No hay más stock' })
                }
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Ya esta en tu lista de deseos!' })
                } else {
                    this.$notify({ title: 'Añadido a la lista de deseos!'})
                }

                this.$store.dispatch('addToWishlist', product)
            },

            async getCategories() {
                await this.$store.dispatch('getCategories')
            },

            // addToCompare(product) {
            //     // for notification
            //     if (this.$store.state.compare.find(el => product.id === el.id)) {
            //         this.$notify({ title: 'Already added to compare!' })
            //     } else {
            //         this.$notify({ title: 'Add to compare successfully!'})
            //     }

            //     this.$store.dispatch('addToCompare', product)
            // }
        }, 
        watch: {
            // categorySlug() {
            //     this.$router.push({ path: `/shop?category=${this.categorySlug}` })
            // }
        }
    };
</script>

<style lang="scss">
    .quickview-wrapper {
        .product-details-content {
            @media #{$xs-layout} {
                padding-top: 30px;
            }
            .pro-details-cart {
                &.btn-hover {
                    button {
                        @media #{$xxs-layout}{
                            padding: 23px 15px;
                        }
                    }
                }
            }
        }
    }
    .vm--overlay {
        background-color: rgba($dark, 0.8);
    }
    .vm--modal {
        padding: 15px;
        overflow-y: auto;
    }
    .modal-close {
        top: -20px;
        right: -20px;
        width: 40px;
        height: 40px;
        color: $white;
        font-size: 20px;
        border-radius: 50%;
        position: absolute;
        border: 1px solid $theme-color;
        background-color: $theme-color;
    }
    .quickview-nav {
        color: $black;
        width: 40px;
        height: 40px;
        font-size: 40px;
        line-height: 40px;
        background-color: rgba($black, 0.2);
        transition: 0.4s;
        &:hover {
            color: $white;
            background-color: $theme-color;
        }
    }
    .vm--container.scrollable .vm--modal {
        width: 1000px !important;
        left: 50% !important;
        transform: translateX(-50%);
        overflow: unset;
        @media #{$md-layout}{
            width: 700px !important;
        }
        @media #{$xs-layout}{
            width: 320px !important;
            top: 30px !important;
        }
        @media only screen and (min-width: 480px) and (max-width: 579px){
            width: 420px !important;
        }
        @media #{$sm-layout}{
            width: 500px !important;
        }
    }
</style>    