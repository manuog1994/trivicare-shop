<template>
    <modal name="StripeElement" @before-open="beforeOpen" width="530px" height=auto>
      <div class="d-flex justify-content-center">
      <!-- Display a payment form -->
          <form id="payment-form" @submit="handleSubmit" ref="form">
              <div id="payment-element">
                  <!--Stripe.js injects the Payment Element-->
              </div>
              <button id="submit" type="submit">
                  <div class="spinner hidden" id="spinner"></div>
                  <span id="button-text">Pagar</span>
              </button>
              <div id="payment-message" class="hidden"></div>
          </form>
      </div>
    </modal>
</template>

<script>
export default {
  auth: true,
  name: "StripeElement",

    data() {
        return {
            stripe: Stripe("pk_test_51M7hp1JHUqdFIZqmVk4sv7dtIe4N9zVPLxRu3DU6moGliUBJqxu5KUlESl07jLb2eowUB7hGCh4cCSHiWayluIeY00UJebhW39"),
            elements: '',
            clientSecret: '',
            shipping: 0,
            orderId: 0,
        }
    },

    mounted() {

    },

    computed: {
        products() {
            return this.$store.getters.getCart
        },
        total() {
            return this.$store.getters.getTotal
        },
    },

    methods: {
        beforeOpen ({params: {shipping, orderId}}) {
            this.shipping = shipping;
            this.orderId = orderId;
            console.log({orderId})
            console.log({shipping})
            this.initialize();
            this.checkStatus();
        },

        async initialize() {
            const total = ((this.total * 1.21) + this.shipping).toFixed(2);
            const orderId = this.orderId;
            const { clientSecret } = await this.$axios.post('/api/stripe', { total, orderId })
                .then((r) => {
                    return r.data;
                });
            this.clientSecret = clientSecret;
              

            const appearance = {
                theme: 'stripe',
            }

            this.elements = this.stripe.elements({ clientSecret, appearance });

            const paymentElementOptions = {
                layout: "tabs",
            };

            const paymentElement = this.elements.create("payment", paymentElementOptions);
            paymentElement.mount("#payment-element");
        },

        async handleSubmit(e) {
            e.preventDefault();
            this.setLoading(true);


            let elements = this.elements;
            const {error} = await this.stripe.confirmPayment({
                elements,
                confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "https//trivicare.com/success",
                },
            });


            if (error.type === "card_error" || error.type === "validation_error") {
                this.showMessage(error.message);
            } else {
                this.showMessage("Ha ocurrido un error inesperado.");
            }

            this.setLoading(false);
        },

        // Fetches the payment intent status after payment submission
        async checkStatus() {

            if (!this.clientSecret) {
                return;
            }

            const { paymentIntent } = await this.stripe.retrievePaymentIntent(this.clientSecret);
 
            switch (paymentIntent.status) {
                case "succeeded":
                this.showMessage("Hemos recibido tu pago. ¡Gracias!");
                break;
                case "processing":
                this.showMessage("Tu pago esta en proceso.");
                break;
                case "requires_payment_method":
                this.showMessage("Tu pago no se ha podido realizar. Intentalo de nuevo.");
                break;
                default:
                this.showMessage("Algo salió mal.");
                break;
            }
        },

        // ------- UI helpers -------

        showMessage(messageText) {
            const messageContainer = document.querySelector("#payment-message");

            messageContainer.classList.remove("hidden");
            messageContainer.textContent = messageText;

            setTimeout(function () {
                messageContainer.classList.add("hidden");
                messageText.textContent = "";
            }, 4000);
        },

        // Show a spinner on payment submission
        setLoading(isLoading) {
            if (isLoading) {
                // Disable the button and show a spinner
                document.querySelector("#submit").disabled = true;
                document.querySelector("#spinner").classList.remove("hidden");
                document.querySelector("#button-text").classList.add("hidden");
            } else {
                document.querySelector("#submit").disabled = false;
                document.querySelector("#spinner").classList.add("hidden");
                document.querySelector("#button-text").classList.remove("hidden");
            }

            //alert("Su pago se ha realizado con éxito");
        }
    },
}


</script>

<style scoped>
/* Variables */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
}

form {
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
}

.hidden {
  display: none;
}

#payment-message {
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
}

#payment-element {
  margin-bottom: 24px;
}

/* Buttons and links */
button {
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}
button:hover {
  filter: contrast(115%);
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
}
.spinner {
  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.spinner:before,
.spinner:after {
  position: absolute;
  content: "";
}
.spinner:before {
  width: 10.4px;
  height: 20.4px;
  background: #5469d4;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}
.spinner:after {
  width: 10.4px;
  height: 10.2px;
  background: #5469d4;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
    min-width: initial;
  }
}

</style>