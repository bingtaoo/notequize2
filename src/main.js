import 'normalize.css';
import {
    createApp
} from 'vue';

import lazyPlugin from 'vue3-lazy';
import App from './App';
import loadingError from './assets/icon/loading-error.svg';
import loadingIcon from './assets/icon/loading-icon.svg';
import './mock/mock';
import router from './router';
import store from './store';


// import 'vue-awesome/icons/angle-left';
// import 'vue-awesome/icons/angle-right';
// import 'vue-awesome/icons/question-circle';

const app = createApp(App)
app.use(lazyPlugin, {
    loading: loadingIcon,
    error: loadingError
})

app.use(store)
app.use(router)
//app.template = '<App/>'
app.mount('#app')