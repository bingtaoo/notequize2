import mutations from './mutations';
import state from './state';
import createStore from 'vuex';

const debug = process.env.NODE_ENV !== 'production';

//创建一个新的store实例，然后挂载上面的三个对象
const store = createStore({
  //key: value同名同值,可以简写
  strict: debug,
  mutations,
  state,
});
//导出store实例
export default store;
