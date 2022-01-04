export const state = () => ({
  menu: {},
  footer: {},
})

export const mutations = {
  SET_STATE(state, payload) {
    state[payload.name] = payload.item
  },
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = (await $prismic.api.getSingle('main_menu')).data
      commit('SET_STATE', { name: 'menu', item: menu })
    } catch (e) {
      const error = 'Please create a main_menu document'
      console.log(error)
    }
  },
  async fetchFooter({ commit }, $prismic) {
    try {
      const footer = (await $prismic.api.getSingle('footer')).data
      commit('SET_STATE', { name: 'footer', item: footer })
    } catch (e) {
      const error = 'Please create a footer document'
      console.log(error)
    }
  },
}

export const getters = {
  menu: (state) => state?.menu,
  footer: (state) => state?.footer,
}
