<template>
    <div class="pt-35 pb-35 bg-gray-3">
        <div class="container">
            <div class="d-flex align-items-center">
                <div>
                    <nuxt-img provider="customProvider" src="logo-ajustado2.webp" width="15%" height="100%" alt="logo" />
                </div>

                <div class=" d-inline-flex" style="text-align:end;">
                    <div class="ms-5">
                        <ul>
                            <li>
                                <n-link to="/">
                                    <i class="fs-2 fa fa-home"></i>
                                </n-link>
                            </li>
                        </ul>
                    </div>
                    <div class="ms-3">
                        <ul>
                            <li>
                                <a @click="logout">
                                    <img src="~/static/svg/sign-out-alt-solid.svg" width="70%" alt="logo">
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