<template>
    <client-only>
        <div class="container d-block">
            <div class="row">
                <div class="col-12">
                    <div class="input-group">
                        <input type="text" class="form-control rounded-0" placeholder="Encuentra tu lado más natural..." aria-label="Buscar..." aria-describedby="basic-addon1" @input="hidden = false" v-model="search">
                        <span class="input-group-text rounded-0 bg-blue-color" id="basic-addon2">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="position-relative">
                        <div id="search-box" class="search-box" :class="{'active' : hidden == false}">
                            <div class="box-products" v-for="product in products" :key="product.id">
                                <n-link :to="'/product/' + product.slug" class="single-product">
                                    <div v-if="product.images?.length == 0">
                                        <nuxt-img provider="customProvider" src="nuxt/default280x280.webp" alt="default" width="100px" />
                                    </div>
                                    <div v-else>
                                        <nuxt-img provider="customProvider" :src="product.images[0].path + '270x360/' + product.images[0].name + '.' + product.images[0].ext" :alt="product.name" width="100px" />
                                    </div>
                                    <div class="product-details-search ms-5">
                                        <p>{{ product.name }}</p>
                                        <div class="product-details-price">
                                            <span v-if="product.discount === null || !product.discount?.is_active">{{ ((product.price_base) * 1.21).toFixed(2) }} &euro;</span>
                                            <span v-if="product.discount !== null && product.discount?.is_active">{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
                                            <span class="old" v-if="product.discount !== null && product.discount?.is_active">{{ (product.price_base * 1.21).toFixed(2) }} &euro;</span>
                                        </div>
                                    </div>
                                </n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<style lang="scss">
    .d-new{
        display: flex;
    }
    @media only screeen and (max-width: 991px) {
        .d-new{
            display: none;
        }
    }

    .search-box {
        position: absolute;
        top: 45%;
        left: 0;
        width: 100%;
        height: max-content;
        scroll-margin-right: 5px;
        scroll-behavior: auto;
        background: #fff;
        z-index: 999;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        padding: 20px;
        visibility: hidden;
        &.active {
            visibility: visible;
        }
    }

    .box-products {
        display: flex;
        justify-content: center;
        width: auto;
        margin-bottom: 10px;
    }

    .single-product{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #000;
        padding: 10px;
        border-radius: 5px;
        transition: all 0.3s ease;
        &:hover {
            background: #f5f5f5;
        }
    }
</style>

<script>
export default {

    data() {
        return {
            searchFather: false,
            products: [],
            search: '',
            url: process.env.url,
            hidden: true,
        }
    },

    watch: {
        search(search) {
            if(search == '' || search == null) {
                this.products = []
                this.$root.$emit('opacityOther', false);
                this.hidden = true;
                return
            } else {
                this.search = search
                this.getProducts()
                this.$root.$emit('opacityOther', true);
            }
        },
    },

    methods: {
        async getProducts() {
            await this.$store.dispatch('getProducts', {
                perPage: '',
                page: '',
                category: '',
                search: this.search,
                slug: '',
                sort: '',
                tag: '',
                status: 2,
            })
            const products = this.$store.getters.getProducts
            this.products = products.data
            //console.log(this.products)
        },

        discountedPrice(product) {
            if (product.discount.is_active){
                return product.price_base - (product.price_base * product.discount.discount / 100)
            } else {
                return product.price_base
            }
        },
    }

}
</script>
