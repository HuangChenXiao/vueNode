var com = {
    state: {
        side_cat: null,
    },
    mutations: {
        SET_SIDE_CAT: (state, side_cat) => {
            state.side_cat = side_cat
        },
    },
    actions: {
        setCatId({ commit }, side_cat) {
            commit('SET_SIDE_CAT', side_cat)
        },
    }
}
export default com