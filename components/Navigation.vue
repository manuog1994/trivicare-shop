<template>
    <client-only>
        <ul>
            <li>
                <n-link to="/shop">Ver Todo</n-link>
             </li>
                <li v-for="category in categories" :key="category.id">
                    <n-link :to="`/shop?category=${category.slug}`">{{ category.name }}</n-link>
                </li>
             <li>
                <n-link to="/contact">Contacto</n-link>
            </li>
         </ul>
    </client-only>
</template>

<style>
    a.link-nav{
        color: #666666;
    }
</style>

<script>
    export default {

        data() {
            return {
                categoryId : '',
                url: process.env.url,
            }
        },

        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
        },

        created() {
            this.getCategories();
        },

        methods: {
            getCategories() {
                this.$store.dispatch('getCategories')
            },
        
            redirectHome() {
                this.categoryId = '';
                this.$router.push({ path: '/shop' })
            },
        },

        watch: {
            categoryId() {
                this.$router.push({ path: '/shop', query: { category: this.categoryId } })
            },

        }
        

    }
</script>