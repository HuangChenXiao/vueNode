
import { getToken, setToken, removeToken } from '@/utils/auth'


const user = {
  state: {
    token: getToken(),
    user_info: null,//用户信息
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, user_info) => {
      state.user_info = user_info
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          setToken(res.data.token)
          commit('SET_TOKEN', res.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    setToken({ commit }, token) {
      return new Promise((resolve, reject) => {
        if (token) {
          commit('SET_TOKEN', token)
          resolve(token)
        }
        else {
          reject('null token')
        }
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        userInfo({}).then(res => {
          commit('SET_USER_INFO', res.data)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
