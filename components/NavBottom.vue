<template>
    <client-only>
        <div class="d-block bg-banner">
            <div>
                <div class="">
                    <div class="custom-banner">
                        <vue-typer class="custom-two" text="Envío gratis a Península y Baleares partir de 50 €" :repeat="0"></vue-typer>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {

}
</script>

<style>
.custom-banner{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 14px;
    color: #ff0000;
}

.bg-banner {
    background-color: #dd88b8df;
}

</style>