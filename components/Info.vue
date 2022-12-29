<template>
    <div class="d-md-none mb-5">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex">
                    <h2 class="text-center img-info">Cuidamos tu piel con ingredientes naturales, orgánicos y ecológicos.
                        <br>
                        <a href="/shop" class="btn btn-light mt-4">Ver más</a>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.img-info{
    width: 100%;
    height: auto;
    background-image: url('/campain/aloe.webp');
    background-size: cover;
    font-size: 24px;
    color: white;

    @media #{$xxs-layout} {
        padding: 2rem;
    }

    @media #{$sm-layout} {
        padding: 4rem;
    }

    @media only screen and (max-width: 359px) {
        margin-top: 1rem;
        padding: 1rem;
    }
}

</style>