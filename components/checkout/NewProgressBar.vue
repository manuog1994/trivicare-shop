<template>
    <div class="stepper-wrapper">
        <div @click="changeStep(1)" class="cursor-pointer stepper-item active completed">
            <div class="step-counter">1</div>
            <div class="step-name">Email</div>
        </div>
        <div @click="changeStep(2)" :class="{'active completed': step2 ? true : false}" class="cursor-pointer stepper-item">
            <div class="step-counter">2</div>
            <div class="step-name">Dirección</div>
        </div>
        <div @click="changeStep(3)" :class="{'active completed': step3 ? true : false}" class="cursor-pointer stepper-item">
            <div class="step-counter">3</div>
            <div class="step-name">Envío</div>
        </div>
        <div @click="changeStep(4)" :class="{'active completed': step4 ? true : false}" class="cursor-pointer stepper-item">
            <div class="step-counter">4</div>
            <div class="step-name">Pago</div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    email: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      activeStep2: false,
      url: "",
    };
  },

  computed: {
    emailStore() {
      return this.$store.getters.getGuest.email;
    },

    guestStore() {
      return this.$store.getters.getGuest.address;
    },

    reserve() {
      return this.$store.getters.getReserve;
    },

    step2() {
      return this.$store.getters.getStep2;
    },

    step3() {
      return this.$store.getters.getStep3;
    },

    step4() {
      return this.$store.getters.getStep4;
    },
  },

  mounted() {
    const url = new URLSearchParams(window.location.search).get("step");
    this.url = url;
  },

  watch: {
    // escuchar cambios en la query
    '$route.query.step': function (val) {
        this.url = val;
    },
  },

  methods: {
    changeStep(step) {
      if (step == 1) {
        this.$store.commit('SET_STEP2', false)
        this.$store.commit('SET_STEP3', false)
        this.$store.commit('SET_STEP4', false)
        this.$router.push({ query: { reserve: this.reserve, step: 1 } });
      } else if (step == 2 && this.step2 == true) {
        this.$store.commit('SET_STEP3', false)
        this.$store.commit('SET_STEP4', false)
        this.$router.push({ query: { reserve: this.reserve, step: 2 } });
      } else if (step == 3 && this.step3 == true) {
        this.$store.commit('SET_STEP4', false)
        this.$router.push({ query: { reserve: this.reserve, step: 3 } });
      } else if (step == 4 && this.step4 == true) {
        this.$router.push({ query: { reserve: this.reserve, step: 4 } });
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.stepper-wrapper {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: #C6D42E;
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #C6D42E;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}
</style>