<template>
    <ul>
        <li>
            <n-link to="/shop">Ver Todo</n-link>
         </li>
        <li v-for="category in categories" :key="category.id">
            <n-link :to="`/categories/${category.slug}`">{{ category.name  }}</n-link>
        </li>
        <li>
            <n-link to="/contact">Contacto</n-link>
        </li>
    </ul>
</template>

<script>
    export default {

        data() {
            return {
                categoryNumber: [],
                categories: [],

            }
        },

        created() {
            this.getCategories();
        },

        methods: {
            async getCategories() {
                const response = await this.$axios.get('/api/categories')
                this.categories = response.data.data
            }
        }
    }
</script>