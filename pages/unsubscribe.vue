<template>
    <client-only>
        <div class="shop-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid" />
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom/>
                <UnsubscribeContainer />
                <TheFooter />
            </div>
        </div>
    </client-only>
  </template>
  
  <script>
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
  
