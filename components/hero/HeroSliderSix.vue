<template>
    <div class="container-fluid mb-5">
        <div class="row">
            <div class="col-12 p-0">
                <div class="newBanner d-flex flex-column justify-content-center align-items-center p-5 text-center">
                    <h1>
                        <strong>Cosmética natural hecha en España</strong>
                    </h1>
                    <p>Con los mejores ingredientes procedentes de agricultura ecológica</p>
                    <n-link to="/shop" class="btn bg-trivi-green" title="Ir a la tienda">Ir a la tienda</n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    p.img-mobile {
        width: 100%;
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

    .newBanner {
        width: 100%;
        height: 500px;
        max-height: 800px;
    }
    /* Animar newBanner añadiendo pequeñas estrellas que se iluminan cada cierto tiempo */
    .newBanner::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("/campain/fondo-lote.webp") no-repeat center center;
        background-size: cover;
        opacity: 0.5;
        animation: animate 25s linear infinite;
        z-index: -1;
    }
    
    .img-banner {
        width: 100%;
        height: 100%;

    }


</style>

<script>
    export default {
    };
</script>