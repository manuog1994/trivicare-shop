<template>
    <ul>
        <li>
             <n-link :to="{ path: '/shop' }">Ver Todo</n-link>
         </li>
        <li v-for="category in categories" :key="category.id">
            <a class="link-nav" @click.prevent="categoryId = category.slug">{{ category.name  }}</a>
        </li>
        <li>
            <n-link to="/contact">Contacto</n-link>
        </li>
     </ul>
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
            }
        },

        computed: {
            categories() {
                return this.$store.getters.getCategories
            },

            query() {
                this.$route.query
            }
        },

        created() {
            this.getCategories();
        },

        methods: {
            getCategories() {
                this.$store.dispatch('getCategories')
            },
        },

        watch: {
            categoryId() {
                this.$router.push({ path: '/shop', query: { category: this.categoryId } })
            },

            query() {
                if(!this.query.category) {
                    this.categoryId = '';
                    this.$router.push({ path: '/shop' })
                }
            }
        }
        

    }
</script>