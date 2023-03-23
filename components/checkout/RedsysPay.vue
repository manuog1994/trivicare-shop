<template>
    <div class="total-page">
        <form ref="formRedsys" :action="url" method="POST">
            <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1"/>
            <input type="hidden" name="Ds_MerchantParameters" :value="parameters"/>
            <input type="hidden" name="Ds_Signature" :value="signature"/>	
        </form>
        <BigLoader v-if="loading == true" />
    </div>
</template>

<script>
export default {

    data() {
        return {
            parameters: '',
            signature: '',
            token_id: '',
            orderId: 0,
            url: process.env.url_getnet,
            loading: false,
        }        
    },

    watch: {
        order_id() {
            this.orderId = this.order_id;
        },

        orderId() {
            if (this.orderId !== 0) {
                this.loading = true;
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

    components: {
        BigLoader: () => import('@/components/loaders/BigLoader.vue'),
    },

    methods: {
        async pay() {
            this.loading = true;
            await this.$axios.post('/api/redsys', { 
                amount: (this.total + this.shipping).toFixed(2) * 100,
                order_id: this.orderId,
                token_id: this.token_id,
            }).then(response => {
                    this.parameters = response.data.parameters;
                    this.signature = response.data.signature;
                    setTimeout(() => {
                        this.loading = false;
                        this.sendForm();
                    }, 1000);
                })
                .catch(error => {
                    this.loading = false;
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