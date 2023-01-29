import { createApp } from 'vue';

import VueLazyLoad from 'vue3-lazyload';
// import App from './App';
import HelloApp from './HelloApp';
// import '/mock/mock';
//import router from './router';
import store from './store';

// import 'vue-awesome/icons/angle-left';
// import 'vue-awesome/icons/angle-right';
// import 'vue-awesome/icons/question-circle';

// const app = createApp(App);
const app = createApp(HelloApp);
app.use(VueLazyLoad, {
  loading: './assets/icon/loading-icon.svg',
  error: './assets/icon/loading-error.svg',
});

app.use(store);
//app.use(router);
//app.template = '<App/>'
app.mount('#app');
