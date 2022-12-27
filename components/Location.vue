<template>
  <div class="text-center map-location">
    <h2>¿Donde nos encontramos?</h2>
    <p class="p-30">Actualmente no tenemos ninguna tienda oficial abierta, pero si disponemos de diferentes puntos de venta. En el mapa encontrarás todos los puntos de venta disponibles hasta el momento.</p>
    <div class="contact-map">
        <iframe frameborder=0 style='width:1250px;height:500px' src='//www.zeemaps.com/pub?group=4518473'> </iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>

.map-location {
    margin-top: 30px;
}

@media screen and (min-width: 420px) {
    .p-30 {
        padding: 0 10rem;
    }
}

</style>