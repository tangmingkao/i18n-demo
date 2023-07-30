import { createI18n } from "vue-i18n";
import messages from '@/locales/index';
import { useGloblaStore } from "@/store/index.js";

// 默认初始化语言
const defaultLang = 'en-US';

// 创建i18n
const i18nPlugin = () => {
  let store = useGloblaStore();
  let _localLang = store.getters["common/getLanguage"];
  return createI18n({
    legacy: false,
    locale: _localLang || defaultLang,
    fallbackLocale: 'en-US',
    messages: messages,
    dateTimeFormats: {
      'en-US': {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
    },
  });
};
export default i18nPlugin;