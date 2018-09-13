import Vue from 'vue'
const { DateTime } = require('luxon')

const VueLuxon = {
    install (Vue, options) {
        Vue.prototype.$luxon = DateTime

        Vue.filter('date.local', function (value) {
            if (value instanceof DateTime) {
                return value.toLocaleString()
            }
        })
    }
}
Vue.use(VueLuxon)
