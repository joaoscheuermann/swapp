import store from './store/index'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

export default ({ Vue, options, router, siteData }) => {
  Vue.use(VueMaterial)

  options.store = store
}