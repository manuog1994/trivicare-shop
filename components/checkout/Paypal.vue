<template>
    <div class="m-auto">
        <div class="d-flex justify-content-center" id="paypal-button-container"></div>
    </div>
</template>

<script>
export default {
    props: {
        load: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            paypal: null,
        }
    },

    computed: {
        total() {
            return this.$store.getters.getTotal * 1.21;
        },

        shipping() {
            return this.$store.getters.getShippingAmount;
        },

        order_id() {
            return this.$store.getters.getOrderId;
        },
    },


    watch: {
        load() {
            console.log(this.load)
            if(this.load === true) {
                this.loadPaypal();
            }
        }
    },

    methods: {
        makeToken(length) {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            document.cookie = "token_payment=" + result + "; path=/success; " + "expires=" + new Date(Date.now() + 60000).toUTCString();
        },

        loadPaypal() {
            paypal.Buttons({
                // Sets up the transaction when a payment button is clicked
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description : 'Compra en Trivicare.com',
                            amount: {
                                value: (this.total + this.shipping).toFixed(2), // Can also reference a variable or function
                            }
                        }]
                    });
                },
                // Finalize the transaction after payer approval
                onApprove: (data, actions) => {
                    const axios = this.$axios;
                    const order_id = this.order_id;
                    this.makeToken(20);
                    return actions.order.capture().then(function(orderData) {
                        // Successful capture! For dev/demo purposes:
                        //console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                        const transaction = orderData.purchase_units[0].payments.captures[0];
                        const token_id = transaction.id;
                        axios.post('/api/order-paid-paypal/' + token_id, {
                            order_id: order_id,
                            token_id: token_id
                        });
                        actions.redirect( process.env.url + '/success?payment_intent_client_secret=' + transaction.id);
                    });
                }
            
            }).render('#paypal-button-container');
        }


    },

}
</script>

<style>

</style>