export { default as AboutMission } from '../../components/AboutMission.vue'
export { default as Auth } from '../../components/Auth.vue'
export { default as BrandLogoCarousel } from '../../components/BrandLogoCarousel.vue'
export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as CartContainer } from '../../components/CartContainer.vue'
export { default as CheckoutContainer } from '../../components/CheckoutContainer.vue'
export { default as ContactInfo } from '../../components/ContactInfo.vue'
export { default as ContactModal } from '../../components/ContactModal.vue'
export { default as CookiesPolicyContent } from '../../components/CookiesPolicyContent.vue'
export { default as ForgotPasswordContainer } from '../../components/ForgotPasswordContainer.vue'
export { default as FormReview } from '../../components/FormReview.vue'
export { default as FunFact } from '../../components/FunFact.vue'
export { default as HeaderWithTopbar } from '../../components/HeaderWithTopbar.vue'
export { default as Info } from '../../components/Info.vue'
export { default as InstagramPostWrapper } from '../../components/InstagramPostWrapper.vue'
export { default as Intro } from '../../components/Intro.vue'
export { default as IntroMobile } from '../../components/IntroMobile.vue'
export { default as LegalWarningProtectionDatesContainer } from '../../components/LegalWarningProtectionDatesContainer.vue'
export { default as Loading } from '../../components/Loading.vue'
export { default as Location } from '../../components/Location.vue'
export { default as Login } from '../../components/Login.vue'
export { default as MiniCart } from '../../components/MiniCart.vue'
export { default as MobileBar } from '../../components/MobileBar.vue'
export { default as MyAccountContainer } from '../../components/MyAccountContainer.vue'
export { default as MyOrdersCom } from '../../components/MyOrdersCom.vue'
export { default as NavBottom } from '../../components/NavBottom.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as NewsletterModal } from '../../components/NewsletterModal.vue'
export { default as Notifications } from '../../components/Notifications.vue'
export { default as NotificationsContent } from '../../components/NotificationsContent.vue'
export { default as OffCanvasMobileMenu } from '../../components/OffCanvasMobileMenu.vue'
export { default as OrderConfirmation } from '../../components/OrderConfirmation.vue'
export { default as OrdersCom } from '../../components/OrdersCom.vue'
export { default as OrdersProfileCom } from '../../components/OrdersProfileCom.vue'
export { default as Paypal } from '../../components/Paypal.vue'
export { default as ProductDetailsDescriptionReview } from '../../components/ProductDetailsDescriptionReview.vue'
export { default as QuestionsCont } from '../../components/QuestionsCont.vue'
export { default as QuickView } from '../../components/QuickView.vue'
export { default as Register } from '../../components/Register.vue'
export { default as ResponsiveMobileMenu } from '../../components/ResponsiveMobileMenu.vue'
export { default as Reviews } from '../../components/Reviews.vue'
export { default as Search } from '../../components/Search.vue'
export { default as SectionTitleWithSubTitle } from '../../components/SectionTitleWithSubTitle.vue'
export { default as ShopContainer } from '../../components/ShopContainer.vue'
export { default as ShopSidebar } from '../../components/ShopSidebar.vue'
export { default as StripeElement } from '../../components/StripeElement.vue'
export { default as SuggestionsModal } from '../../components/SuggestionsModal.vue'
export { default as TeamMembers } from '../../components/TeamMembers.vue'
export { default as TermsConditionsContainer } from '../../components/TermsConditionsContainer.vue'
export { default as TestimonialOne } from '../../components/TestimonialOne.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as UnsubscribeContainer } from '../../components/UnsubscribeContainer.vue'
export { default as WelcomeMessage } from '../../components/WelcomeMessage.vue'
export { default as WishListContainer } from '../../components/WishListContainer.vue'
export { default as BannerItem } from '../../components/banner/BannerItem.vue'
export { default as BannerStyleFour } from '../../components/banner/BannerStyleFour.vue'
export { default as BannerStyleOne } from '../../components/banner/BannerStyleOne.vue'
export { default as HeroSliderSix } from '../../components/hero/HeroSliderSix.vue'
export { default as PolicyServicePolicyFour } from '../../components/policy/ServicePolicyFour.vue'
export { default as ProductDetailsWrapper } from '../../components/product/ProductDetailsWrapper.vue'
export { default as ProductGridItem } from '../../components/product/ProductGridItem.vue'
export { default as ProductGridItemTwo } from '../../components/product/ProductGridItemTwo.vue'
export { default as ProductGridStyleThree } from '../../components/product/ProductGridStyleThree.vue'
export { default as ProductWrapperCosmetics } from '../../components/product/ProductWrapperCosmetics.vue'
export { default as ProfileNewGuest } from '../../components/profile/NewGuest.vue'
export { default as ProfileNewProfile } from '../../components/profile/NewProfile.vue'
export { default as CrudAll } from '../../components/crud/All.vue'
export { default as CrudCoupons } from '../../components/crud/Coupons.vue'
export { default as CrudCreate } from '../../components/crud/Create.vue'
export { default as CrudEdit } from '../../components/crud/Edit.vue'
export { default as CrudErrorModal } from '../../components/crud/ErrorModal.vue'
export { default as CrudModalTrack } from '../../components/crud/ModalTrack.vue'
export { default as CrudNav } from '../../components/crud/Nav.vue'
export { default as CrudNewInvoice } from '../../components/crud/NewInvoice.vue'
export { default as CrudNote } from '../../components/crud/Note.vue'
export { default as CrudOrders } from '../../components/crud/Orders.vue'
export { default as CrudOrdersHistory } from '../../components/crud/OrdersHistory.vue'
export { default as CrudSuccessInvoiceModal } from '../../components/crud/SuccessInvoiceModal.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
