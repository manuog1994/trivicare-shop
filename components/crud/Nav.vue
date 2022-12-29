<template>
    <div class="pt-35 pb-35 bg-gray-3">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div>
                    <nuxt-link to="/">
                        <nuxt-img provider="customProvider" src="nuxt/logo-ajustado2.webp" width="15%" height="100%" alt="logo" />
                    </nuxt-link>
                </div>

                <div class="d-inline-flex justify-content-lg-around align-content-center" style="text-align:end;">
                    <div class="ms-5">
                        <ul>
                            <li>
                                <n-link to="/">
                                    <i class="fs-2 fa fa-home"></i>
                                </n-link>
                            </li>
                        </ul>
                    </div>
                    <div class="ms-5">
                        <ul>
                            <li>
                                <a @click="logout">
                                    <img src="~/static/svg/sign-out-alt-solid.svg" width="30px" alt="logo">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        auth: true,

        methods: {
            async logout() {
                await this.$auth.logout();
                this.$router.push('/');
                this.$notify({ title: 'Has cerrado sesión!'})

            },
        }
    };
</script>