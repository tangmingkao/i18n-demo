const state = () => {
  return {
    language: 'en-US',
  }
}
const getters = {
  getLanguage: (state) => state.language,
}

const mutations = {
  setLanguage: (state, value) => {
    state.language = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
