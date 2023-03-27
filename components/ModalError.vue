<template>
    <modal name="errorModal" :width="300" :height="'auto'">
        <div class="modal-header">
            <div>
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div></div>
            <h4 class="modal-title">Error</h4>
        </div>
        <div class="modal-body">
            <p>Ha ocurrido un error técnico en la web. Por favor pongase en contacto por WhatsApp pulsando el botón.</p>
            <a @click="contactWhatsApp">
                <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
            </a>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn bg-whatsapp text-white" @click="$modal.hide('errorModal')">
                <i class="fa fa-whatsapp"></i>
                Cerrar
            </button>
        </div>
    </modal>
</template>

<script>
export default {
    methods: {
        contactWhatsApp() {
            window.onbeforeunload = null;
            window.history.pushState(null, '', window.location.href);
            window.open('https://api.whatsapp.com/send?phone=+34613036942&text=Hola,%20estoy%20intentando%20realizar%un%20pedido%y%20a%20ocurrido%20un%20error.', '_blank');
        },
    },
}
</script>

<style>
.bg-whatsapp {
    background-color: #25d366;
}

</style>