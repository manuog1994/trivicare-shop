<template>
    <div class="container-fluid">
        <div class="d-md-flex justify-content-md-evenly row mt-2 mb-md-2 ms-sm-1 me-sm-1">
            <div class="box-one col-12 col-lg-4">
                <div class="ps-2 pt-2 border-bottom-1">
                  <h3>Puntos de venta Oficiales</h3>
                </div>
                <div class="p-3 border-bottom-1">
                  <h4>El Duende De La Plaza</h4>
                  <p>
                    Pl. la Constitución, 15, 18500 Guadix, Granada
                  </p>
                  <a class="text-info" @click="openMap('guadix')">Ver en el mapa</a>
                </div>
            </div>
            <div class="box-two col-12 col-lg-8">
                <div class="p-md-5 text-center" ref="mapa"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

  mounted() {
    this.openMap();
  },

  methods: {
    openMap(mapa) {
      const dfl = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25327.279233273344!2d-2.7898612913655225!3d37.48645241156611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6fe9d0d80680eb%3A0xf9a39b340386e0d2!2s18800%20Baza%2C%20Granada!5e0!3m2!1ses!2ses!4v1673550354819!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      const guadix = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.756998702242!2d-3.137362484134837!3d37.3008926470534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6e2b01ac8f31ab%3A0x6d518d3ddf4acad4!2sEl%20Duende%20De%20La%20Plaza!5e0!3m2!1ses!2ses!4v1673615987967!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      this.$refs.mapa.innerHTML = dfl;
      if (mapa == 'guadix') {
        this.$refs.mapa.innerHTML = guadix; 
      } else if (mapa == 'torredelcampo') {
        this.$refs.mapa.innerHTML = torredelcampo;
      }
    }
  }
}
</script>

<style scope>
  .box-one {
    background-color: #F3F3F3;
    height: auto;
  }
  
  .box-two {
    background-color: #F3F3F3;
    height: auto;
  }

</style>