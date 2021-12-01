import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

import Ads from 'vue-google-adsense'

App.use(require('vue-script2'))

App.use(Ads.AutoAdsense, { adClient: 'ca-pub-8270225967881362' })

createApp(App).use(store).use(router).mount('#app')
