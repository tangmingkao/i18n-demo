import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import common from "./modules/common";

// 需要持久化存储的模块
const persistModules = ['common'];

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: persistModules,
});

const store = createStore({
  modules: {
    common,
  },
  plugins: [vuexLocal.plugin]
});

export const useGloblaStore = () => {
  return store;
}

export default store