export default (params) => `<!DOCTYPE html>
<html ${params.HTML_ATTRS} lang="es">
  <head ${params.HEAD_ATTRS}>
    <!-- Google Tag Manager -->
    <script defer>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K446ZB4');</script>
      <!-- End Google Tag Manager -->
    ${params.HEAD}
    <!-- add cache control con max-age-->
    <meta http-equiv="Cache-Control" content="max-age=3600" />
  </head>
  <body ${params.BODY_ATTRS}>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K446ZB4"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
    ${params.APP}
  </body>
</html>`