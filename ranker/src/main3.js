// The Vue build version to load with the `import` command
// (runtime-only ./App3.vuelone) has been set in webpack.base.conf with an alias.
import 'normalize.css';
import Vue from 'vue';
import 'vue-awesome/icons/angle-left';
import 'vue-awesome/icons/angle-right';
import 'vue-awesome/icons/question-circle';
import VueLazyload from 'vue-lazyload';
import App from '/App';
import loadingError from '/assets/icon/loading-error.svg';
import loadingIcon from '/assets/icon/loading-icon.svg';
import '/mock/mock';
import router from '/router';
import store from '/store';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: loadingIcon,
  error: loadingError,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});
