export default (params) => `<!DOCTYPE html>
<html ${params.HTML_ATTRS} lang="es">
  <head ${params.HEAD_ATTRS}>
    ${params.HEAD}
    <!-- add cache control con max-age-->
    <meta http-equiv="Cache-Control" content="max-age=3600" />
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6FYD0CCL8E"></script>
    <script>
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6FYD0CCL8E');

    </script>
  </head>
  <body ${params.BODY_ATTRS}>
    ${params.APP}
  </body>
</html>`