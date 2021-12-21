export const state = () => ({
  menu: {},
})

export const mutations = {
  SET_STATE(state, payload) {
    state[payload.name] = payload.item
  },
  SET_ERROR(state, payload) {
    state[payload.name] = payload.error
  },
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = (await $prismic.api.getSingle('main_menu')).data
      commit('SET_STATE', { name: 'menu', item: menu })
    } catch (e) {
      // const error = 'Please create a menu document'
      // commit('SET_ERROR', { name: 'menu', error: error })
    }
  },
}

export const getters = {
  menu: (state) => state?.menu,
}
