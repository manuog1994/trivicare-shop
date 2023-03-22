<template>
    
<form ref="formRedsys" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
	<input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1"/>
	<input type="hidden" name="Ds_MerchantParameters" :value="parameters"/>
	<input type="hidden" name="Ds_Signature" :value="signature"/>	
</form>
          
</template>

<script>
export default {

    data() {
        return {
            parameters: '',
            signature: '',
            token_id: '',
            orderId: 0,
        }        
    },

    watch: {
        order_id() {
            this.orderId = this.order_id;
        },

        orderId() {
            if (this.orderId !== 0) {
                this.makeToken(20);
            }
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
        }
    },

    methods: {
        async pay() {
            console.log(this.orderId)
            await this.$axios.post('/api/redsys', { 
                amount: (this.total + this.shipping).toFixed(2) * 100,
                order_id: this.orderId,
                token_id: this.token_id,
            }).then(response => {
                    this.parameters = response.data.parameters;
                    this.signature = response.data.signature;
                    setTimeout(() => {
                        this.sendForm();
                    }, 1000);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        sendForm() {
            this.$refs.formRedsys.submit();
        },

        makeToken(length) {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            document.cookie = "token_payment=" + result + "; path=/success; " + "expires=" + new Date(Date.now() + 60000).toUTCString();

            this.token_id = result;
             
            if(this.token_id !== '') {
                this.pay();
            }
        },
    }

}
</script>

<style>

</style>