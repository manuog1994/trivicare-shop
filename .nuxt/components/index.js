export { default as AboutMission } from '../../components/AboutMission.vue'
export { default as Auth } from '../../components/Auth.vue'
export { default as CartContainer } from '../../components/CartContainer.vue'
export { default as CheckoutContainer } from '../../components/CheckoutContainer.vue'
export { default as ContactInfo } from '../../components/ContactInfo.vue'
export { default as ContactModal } from '../../components/ContactModal.vue'
export { default as CookiesPolicyContent } from '../../components/CookiesPolicyContent.vue'
export { default as ForgotPasswordContainer } from '../../components/ForgotPasswordContainer.vue'
export { default as HeaderWithTopbar } from '../../components/HeaderWithTopbar.vue'
export { default as IconsActions } from '../../components/IconsActions.vue'
export { default as Intro } from '../../components/Intro.vue'
export { default as IntroMobile } from '../../components/IntroMobile.vue'
export { default as LegalWarningProtectionDatesContainer } from '../../components/LegalWarningProtectionDatesContainer.vue'
export { default as Location } from '../../components/Location.vue'
export { default as Login } from '../../components/Login.vue'
export { default as MiniCart } from '../../components/MiniCart.vue'
export { default as MobileBar } from '../../components/MobileBar.vue'
export { default as ModalError } from '../../components/ModalError.vue'
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
export { default as ProductDetailsDescriptionReview } from '../../components/ProductDetailsDescriptionReview.vue'
export { default as QuestionsCont } from '../../components/QuestionsCont.vue'
export { default as QuickView } from '../../components/QuickView.vue'
export { default as Register } from '../../components/Register.vue'
export { default as ResponsiveMobileMenu } from '../../components/ResponsiveMobileMenu.vue'
export { default as Reviews } from '../../components/Reviews.vue'
export { default as Search } from '../../components/Search.vue'
export { default as ShopContainer } from '../../components/ShopContainer.vue'
export { default as ShopSidebar } from '../../components/ShopSidebar.vue'
export { default as SuggestionsModal } from '../../components/SuggestionsModal.vue'
export { default as TermsConditionsContainer } from '../../components/TermsConditionsContainer.vue'
export { default as Testimonials } from '../../components/Testimonials.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as UnsubscribeContainer } from '../../components/UnsubscribeContainer.vue'
export { default as WelcomeMessage } from '../../components/WelcomeMessage.vue'
export { default as WishListContainer } from '../../components/WishListContainer.vue'
export { default as CheckoutAddressStep } from '../../components/checkout/AddressStep.vue'
export { default as CheckoutCouponForm } from '../../components/checkout/CouponForm.vue'
export { default as CheckoutEmailStep } from '../../components/checkout/EmailStep.vue'
export { default as CheckoutNewProgressBar } from '../../components/checkout/NewProgressBar.vue'
export { default as CheckoutPayStep } from '../../components/checkout/PayStep.vue'
export { default as CheckoutPaypal } from '../../components/checkout/Paypal.vue'
export { default as CheckoutPickupModal } from '../../components/checkout/PickupModal.vue'
export { default as CheckoutRedsysPay } from '../../components/checkout/RedsysPay.vue'
export { default as CheckoutResumen } from '../../components/checkout/Resumen.vue'
export { default as CheckoutSendStep } from '../../components/checkout/SendStep.vue'
export { default as CheckoutSuccessOrder } from '../../components/checkout/SuccessOrder.vue'
export { default as CheckoutTimerNav } from '../../components/checkout/TimerNav.vue'
export { default as HeroSliderSix } from '../../components/hero/HeroSliderSix.vue'
export { default as PolicyServicePolicyFour } from '../../components/policy/ServicePolicyFour.vue'
export { default as LoadersBigLoader } from '../../components/loaders/BigLoader.vue'
export { default as LoadersSmallLoading } from '../../components/loaders/SmallLoading.vue'
export { default as ProductDetailsWrapper } from '../../components/product/ProductDetailsWrapper.vue'
export { default as ProductGridItem } from '../../components/product/ProductGridItem.vue'
export { default as ProductGridItemTwo } from '../../components/product/ProductGridItemTwo.vue'
export { default as ProductGridStyleThree } from '../../components/product/ProductGridStyleThree.vue'
export { default as ProductWrapperCosmetics } from '../../components/product/ProductWrapperCosmetics.vue'
export { default as ProfileNewGuest } from '../../components/profile/NewGuest.vue'
export { default as ProfileNewProfile } from '../../components/profile/NewProfile.vue'
export { default as HeaderCheckout } from '../../components/header/HeaderCheckout.vue'

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
