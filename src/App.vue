<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";


const { locale} = useI18n();
const store = useStore();

const languageConfig = [
  {
    key: 'EN',
    value: 'en-US',
  },
  {
    key: 'CN',
    value: 'zh-CN',
  },
];

const localLanguage = computed(() => {
  let _lang = store.getters["common/getLanguage"] || 'en-US';
  return _lang; 
});
const languageName = computed(() => {
  let langItem = languageConfig.find(item => {
    return item.value == localLanguage.value;
  }) || {};
  let _name = langItem.key || 'EN';
  return _name;
});


const changeLanguage = () => {
  let toggleLang = languageName.value == 'CN' ? "en-US" : "zh-CN"; 
  if(languageName.value == 'CN'){
    store.commit("common/setLanguage",toggleLang);
  } else {
    store.commit("common/setLanguage",toggleLang);
  }
  locale.value = toggleLang;
};

</script>

<template>
  <button @click="changeLanguage">更改语言</button>
  <div class="test-item">{{ $t("home.t2") }}</div>
</template>

<style scoped>
.test-item{
  margin-top: 30px;
  text-align: center;
}
</style>
