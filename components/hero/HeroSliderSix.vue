<template>
    <div>
        <div class="d-none d-md-flex">
            <img loading="lazy" src="@/static/campain/diamujer.svg" alt="banner">
        </div>
        <div class="d-md-none">
            <n-link to="/shop" class="cursor-pointer">
                <img loading="lazy" src="@/static/campain/diamujer_mobile.svg" alt="banner_movil" style="width: 100%;">
            </n-link>
        </div>
    </div>
</template>

<style>
    p.img-mobile {
        width: 100%;
        background: url('@/static/campain/aloegranada.webp');
        padding: 5rem 0;
        font-size: 22px;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .bg-span {
        background-color: #ffffffdc;
        color: rgb(73, 73, 73);
        font-size: 24px;
        padding: 3rem 0;
        margin: 15px;
    }

    .btn-mobile {
        background-color: white;
        padding: 10px 10px;
        margin: 25px;
    }
    
    .bg-slider-img {
        padding: 8rem 5rem;
    }
</style>

<script>
    export default {
    };
</script>