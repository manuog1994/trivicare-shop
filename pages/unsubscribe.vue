<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
        <div id="post-nav" class="" @click="closeMenus">
            <NavBottom/>
            <UnsubscribeContainer />
            <TheFooter />
        </div>
    </div>
  </template>
  
  <script>
    import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
    import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
    export default {
        auth: false,
  
        data() {
            return {
                searchChildren: '',
            }
        },
  
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar.vue'),
            TheHeader: () => import('@/components/TheHeader.vue'),
            NavBottom: () => import('@/components/NavBottom.vue'),
            UnsubscribeContainer: () => import('@/components/UnsubscribeContainer.vue'),
            TheFooter: () => import('@/components/TheFooter.vue'),
            CookieConsent,
            VueIfBot
          },
  
          mounted() {
              this.$nextTick(() => {
                  this.$nuxt.$loading.start()
                  setTimeout(() => {
                      this.$nuxt.$loading.finish()
                  }, 500)
              })
          },

          methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
            },
            
            searchOpacity(searchFather) {
                if (searchFather == true) {
                    document.getElementById("post-nav").classList.add("search-screen");
                } else {
                    document.getElementById("post-nav").classList.remove("search-screen");
                }
            }
          },
  

    
    }
    </script>
  
