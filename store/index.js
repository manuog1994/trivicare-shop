import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);


export const state = () => ({
    products: [],
    categories: [],
    cart: [],
    wishlist: [],
    compare: [],
    pagination: [],
    tags: [],
    cupon: [],
})


// your root getters
export const getters = {
    getProducts(state) {
        return state.products
    },

    getCategories(state) {
        return state.categories
    },

    getTags(state) {
        return state.tags
    },

    getCupon(state) {
        return state.cupon
    },

    getPagination(state) {
        return state.pagination
    },

    getCart: state => {
        return state.cart
    },

    cartItemCount: state => {
        return state.cart.length
    },

    getWishlist: state => {
        return state.wishlist
    },

    getCompare: state => {
        return state.compare
    },

    wishlistItemCount: state => {
        return state.wishlist.length
    },

    compareItemCount: state => {
        return state.compare.length
    },

    getSubTotal: state => {
        let subTotal = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            subTotal += price * item.cartQuantity
        })
        return subTotal;
    },

    getTotal: state => {
        let total = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            total += price * item.cartQuantity
        })
        if (state.cupon.id) {
            total = total - (total * (state.cupon.discount / 100))
        }

        return total;
    }
}

// contains your mutations
export const mutations = {
    SET_PRODUCT(state, product) {
        state.products = product
    },

    SET_CATEGORY(state, category) {
        state.categories = category
    },

    SET_PAGINATION(state, pagination) {
        state.pagination = pagination
    },

    SET_TAG(state, tag) {
        state.tags = tag
    },

    SET_CUPON(state, cupon) {
        state.cupon = cupon
    },

    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)
        if (item) {
            const price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            item.cartQuantity = item.cartQuantity + payload.cartQuantity
            item.total = item.cartQuantity * price
        } else {
            const price = payload.discount ? payload.price - (payload.price *(payload.discount)/100) : payload.price;
            state.cart.push({...payload, cartQuantity: payload.cartQuantity, total: price })
        }
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => {
            return product.id !== item.id
        });
    },

    DECREASE_PRODUCT(state, payload) {
        const found = state.cart.find(el => payload.id === el.id)
        const price = found.discount ? found.price - (found.price *(found.discount)/100) : found.price;
        found.cartQuantity = found.cartQuantity - payload.cartQuantity
        found.total = found.cartQuantity * price
    },

    CLEAR_CART(state) {
        state.cart = []
    },

    ADD_TO_WISHLIST(state, product) {
        const item = state.wishlist.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.wishlist.push(product)
        }
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        state.wishlist = state.wishlist.filter(item => {
            return product.id !== item.id
        });
    },

    ADD_TO_COMPARE(state, product) {
        const item = state.compare.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.compare.push(product)
        }
    },

    REMOVE_FROM_COMPARE(state, product) {
        state.compare = state.compare.filter(item => {
            return product.id !== item.id
        });
    },
}


// contains your actions
export const actions = {

    addToCartItem({commit}, payload) {
        commit('UPDATE_CART', payload)
    },

    removeProductFromCart({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product)
    },

    decreaseProduct({ commit }, product) {
        commit('DECREASE_PRODUCT', product)
    },

    addToWishlist({commit}, payload) {
        commit('ADD_TO_WISHLIST', payload)
    },

    addToCompare({commit}, payload) {
        commit('ADD_TO_COMPARE', payload)
    },

    removeProductFromWishlist({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', product)
    },

    removeFromCompare({commit}, product) {
        commit('REMOVE_FROM_COMPARE', product)
    },

    async getProducts(context, {perPage, page, category, search, slug, sort, tag}) {
        const { data } = await axios.get(
          'http://localhost:8000/api/products?perPage=' + perPage + '&page=' + page + '&filter[category_id]=' + category + '&filter[name]=' + search + '&filter[slug]=' + slug + '&sort=' + sort + '&tags=' + tag
        );
        context.commit("SET_PRODUCT", data);
        context.commit("SET_PAGINATION", data.meta);
    },

    async getCategories(context) {
        const { data } = await axios.get(
          'http://localhost:8000/api/categories'
        );
        context.commit("SET_CATEGORY", data.data);
    },

    async getTags(context) {
        const { data } = await axios.get(
          'http://localhost:8000/api/tags'
        );
        context.commit("SET_TAG", data.data);
    },


}

