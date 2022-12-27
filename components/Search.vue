<template>
    <client-only>
        <div class="container d-lg-flex d-none">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Encuentra tu lado más natural..." aria-label="Buscar..." aria-describedby="basic-addon1" @input="searchFather = true">
                <span class="input-group-text" id="basic-addon1">
                    <i class="fa fa-search"></i>
                </span>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {

    data() {
        return {
            searchFather: false,
        }
    },

    watch: {
        searchFather() {
            this.$root.$emit('opacityOther', this.searchFather);
        }
    }

}
</script>

<style>
    .d-new{
        display: flex;
    }
    @media only screeen and (max-width: 991px) {
        .d-new{
            display: none;
        }
    }
</style>