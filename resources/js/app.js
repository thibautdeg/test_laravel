/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import 'jquery/dist/jquery'
import 'jquery-ui-dist/jquery-ui.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'sparklines/source/sparkline'
import 'jqvmap-novulnerability/dist/jquery.vmap.min'
import 'jqvmap-novulnerability/dist/maps/jquery.vmap.usa'
import 'jquery-knob-chif/dist/jquery.knob.min'
import 'moment/dist/moment'
import 'daterangepicker/daterangepicker'
import 'tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min'
import 'summernote/dist/summernote-bs4.min'
import 'overlayscrollbars/js/jquery.overlayScrollbars.min'
import 'admin-lte/dist/js/adminlte'

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
