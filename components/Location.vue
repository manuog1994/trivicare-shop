<template>
    <div class="container-fluid">
        <div class="d-md-flex justify-content-md-evenly row mt-2 mb-md-2 ms-sm-1 me-sm-1">
            <div class="box-one col-12 col-lg-4">
                <div class="ps-2 pt-2 border-bottom-1">
                  <h3>Puntos de venta Oficiales</h3>
                </div>
                <div class="p-3 border-bottom-1">
                  <h4>Alimentación Natalia</h4>
                  <p>
                    C. Perú, 2, 23640 Torredelcampo, Jaén
                  </p>
                  <a class="text-info" @click="openMap('torredelcampo')">Ver en el mapa</a>
                </div>
                <div class="p-3 border-bottom-1">
                  <h4>Esencia de Belleza by Noelia</h4>
                  <p>
                    C. la Dehesa, 14, 23600 Martos, Jaén
                    <br>
                    Tel. 953 100 547
                  </p>
                  <a class="text-info" @click="openMap('martos')">Ver en el mapa</a>
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
      const martos = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9501.552212757708!2d-3.9813319283471063!3d37.71629743248865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dc5c4f3297ef9%3A0xf39fd7f44716c8f1!2sEsencia%20De%20Belleza%20by%20NOELIA!5e0!3m2!1ses!2ses!4v1673549683851!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      const torredelcampo = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.110179886507!2d-3.893378501300336!3d37.77215781970382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dd03b845f5409%3A0x121d8cccc384a115!2sC.%20Per%C3%BA%2C%2023640%20Torredelcampo%2C%20Ja%C3%A9n!5e0!3m2!1ses!2ses!4v1673549803907!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      this.$refs.mapa.innerHTML = dfl;
      if (mapa == 'martos') {
        this.$refs.mapa.innerHTML = martos; 
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