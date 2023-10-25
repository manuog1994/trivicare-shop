<template>
    <div class="">
        <div class="container-fluid">
            <div class="d-xl-flex">
                <div class="img-about">
                    <img class="" src="@/static/img/cristina-gerente.webp" alt="gerente">
                    <!-- Pie de foto -->
                </div>
                <div class="text-about">
                    <div class="welcome-content text-center">
                        <h5>¿Quiénes somos?</h5>
                        <h1>TriviCare Natural Cosmetics</h1>
                        <p>Somos una marca de cosmética natural, orgánica, bio y cruelty free. Utilizamos ingredientes orgánicos y naturales en nuestros productos, evitando el uso de químicos dañinos y conservantes artificiales. También nos comprometemos a no probar nuestros productos en animales. Creemos en la importancia de cuidar tanto nuestra piel como el medio ambiente, y es por eso que trabajamos duro para ofrecer productos de alta calidad que cumplan con estos estándares.</p>
                        <p>Tenemos toda una gama de productos para el cuidado de la piel, todo con la promesa de ofrecer una experiencia de belleza segura y natural. Ofrecemos una amplia variedad de opciones para diferentes tipos de piel y necesidades, desde limpiadores suaves hasta cremas hidratantes ricas en nutrientes.</p>
                        <p>Además de nuestra filosofía de ingredientes naturales y orgánicos, también nos esforzamos por ofrecer productos con un enfoque en la sostenibilidad. Utilizamos envases y materiales reciclables y buscamos reducir nuestra huella de carbono en cada etapa del proceso de fabricación.</p>
                        <p>En resumen, somos una marca de cosmética natural, orgánica, bio y cruelty free que se esfuerza por ofrecer productos de alta calidad y sostenibles que mejoran la salud de la piel y del medio ambiente. Estamos comprometidos con la educación y la transparencia para ayudar a nuestros clientes a tomar decisiones informadas sobre su cuidado de la piel.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="text-center mt-4">
                    <h3>Nuestros logos</h3>
                </div>
                <div class="row p-5">
                    <div class="col-12 col-md-4 m-auto d-flex justify-content-center mb-5">
                        <img src="@/static/campain/TriviCare_byn Positivo.svg" style="width:200px; margin:auto;" alt="logo">
                    </div>
                    <div class="col-12 col-md-4 m-auto d-flex justify-content-center mb-5">
                        <img src="@/static/campain/TriviCare_byn Round Positivo.svg" style="width:100px; margin:auto;" alt="logo">
                    </div>
                    <div class="col-12 col-md-4 m-auto d-flex justify-content-center mb-5">
                        <img src="@/static/campain/TriviCare_byn Vertical Positivo.svg" style="width:150px; margin:auto;" alt="logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.img-about {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    img {
        width: 500px;
        height: 500px;
        margin: auto;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }
    @media (min-width: 1200px) {
        flex: 1;
        position: relative;
        width: 50%;
        img {
            width: 100%;
            height: 100%;
            max-height: 800px;
            object-fit: cover;
            object-position: top;
            border-radius: 10px;
        }
    }
}

.text-about {
    flex: 1;

}
</style>

