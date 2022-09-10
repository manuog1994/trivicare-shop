<template>
    <ul>
        <li>
            <n-link to="/">Home</n-link>
        </li>
        <li>
            <n-link to="/shop"> Shop</n-link>
        </li>
        <li>
            <n-link to="">Pages <i class="fa fa-angle-down"></i></n-link>
            <ul class="submenu">
                <li><n-link to="/cart">Cart</n-link></li>
                <li><n-link to="/checkout">Checkout</n-link></li>
                <li><n-link to="/wishlist">Wishlist</n-link></li>
                <!-- <li><n-link to="/compare">Compare</n-link></li> -->
                <li><n-link to="/about">about us</n-link></li>
                <li><n-link to="/my-account">My Account</n-link></li>
                <li><n-link to="/login-register">Login / Register</n-link></li>
                <li><n-link to="/contact">Contact us</n-link></li>
                <li><n-link to="/privacy-policy">Privacy Policy</n-link></li>
                <li><n-link to="/terms-conditions">Terms Conditions</n-link></li>
            </ul>
        </li>
        <li>
            <n-link to="/blog">Blog <i class="fa fa-angle-down"></i></n-link>
            <ul class="submenu">
                <li>
                    <n-link to="/blog">blog standard</n-link>
                </li>
                <li>
                    <n-link to="/blog/blog-right-sidebar">blog right sidebar</n-link>
                </li>
                <li>
                    <n-link to="/blog/blog-without-sidebar">blog No sidebar</n-link>
                </li>
                <li>
                    <n-link to="/blog/a-guide-to-latest-trends-product">blog details</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/contact">Contacto</n-link>
        </li>
    </ul>
</template>