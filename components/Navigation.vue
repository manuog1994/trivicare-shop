<template>
    <client-only>
        <ul>
            <li>
                 <a class="link-nav" :href="url + '/shop'">Ver Todo</a>
             </li>
                <li v-for="category in categories" :key="category.id">
                    <a class="link-nav" :href="url + '/shop?category=' + category.slug">{{ category.name  }}</a>
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