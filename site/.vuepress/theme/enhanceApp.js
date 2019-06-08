import store from './store/index'

export default ({ Vue, options, router, siteData }) => {
  options.store = store
}