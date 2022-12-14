import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
    const getGDPR = localStorage.getItem('cookieconsent_status');

    Vue.use(VueGtag, {
        config: { id: 'G-6FYD0CCL8E' },
        bootstrap: getGDPR === 1,
        appName: 'Trivicare Natural Cosmetics',
        enabled: getGDPR === 1,
        pageTrackerScreenviewEnabled: true
    }, app.router);
}