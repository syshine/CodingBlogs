


### 定义
```ts
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: '',
      avatar: '',
    };
  },
  getters: {
    isLogin: (state) => state.token === undefined || state.token === '',
  },
  actions: {
    // user login
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          const { data } = response
          // 直接设置state
          this.token = data.token
          resolve(null)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
})
```


### 使用
```vue
<p>store.token</p>
<p>store.isLogin</p>
```
```ts
import { useUserStore } from '@/stores/user'
const store = useUserStore()

const setAvatar = () => {
  // 设置单个属性
  state.avatar = 'localhost/a.jpg'
}

const setData = () => {
  // 批量(多个属性)修改集合内部分对象
  store.$patch((state) => {
    state.token = 'abcdefg'
    state.avatar = 'localhost/b.jpg'
  })
}
```




### 对比Vuex
#### 调用方法
##### Vuex
commit调用mutations:
 例：commit('ADD_VISITED_VIEW', view)
 this.$store.commit('ADD_VISITED_VIEW', view)
dispatch调用acionts, 例：(dispatch('addVisitedView', view)
##### Pinia
调用acionts
store.addVisitedView(外部)
this.addVisitedView(store内部)


#### 取消mutations
##### Vuex
mutations用commit('SET_TOKEN', data.token)修改state.token;
##### Pinia
在acionts中直接用this.token=data.token设置state.token

