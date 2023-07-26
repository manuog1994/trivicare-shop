<template>
      <div class="countdown">
        <p class="title">Esta oferta termina en:</p>
        <div class="time-container">
          <div class="time-box">
            <span class="time-number">{{ days }}</span>
            <span class="time-label">Días</span>
          </div>
          <div class="time-box">
            <span class="time-number">{{ hours }}</span>
            <span class="time-label">Horas</span>
          </div>
          <div class="time-box">
            <span class="time-number">{{ minutes }}</span>
            <span class="time-label">Minutos</span>
          </div>
          <div class="time-box">
            <span class="time-number">{{ seconds }}</span>
            <span class="time-label">Segundos</span>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    props: ['targetDate'],

    data() {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    },
    mounted() {
      this.updateCountdown();
      this.intervalId = setInterval(this.updateCountdown, 1000);
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    },
    methods: {
      updateCountdown() {
        const now = new Date();
        const date = new Date(this.targetDate);
        const distance = date - now;
  
        if (distance < 0) {
          clearInterval(this.intervalId);
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          return;
        }
  
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }
  }
  </script>
  
  <style scoped>
  .countdown {
    text-align: center;
    padding: 1em;
    background: #E94B4C;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    margin-bottom: 1em;
    font-size: 1.2em;
    font-weight: bold;
    color: #ffffff;
  }
  
  .time-container {
    display: flex;
    justify-content: center;
  }
  
  .time-box {
    margin: 0 1em;
  }
  
  .time-number {
    display: block;
    font-size: 2em;
    color: #ffffff;
  }
  
  .time-label {
    font-size: 0.8em;
    color: #ffffff;
  }
  </style>
  