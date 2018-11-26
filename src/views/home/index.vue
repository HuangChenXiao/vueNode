<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <form>
            <input type="text" name="username" v-model="bItem.username"> <br>
            <input type="text" name="age" v-model="bItem.age"> <br>
            <a href="javascript:;" @click="submit_user">提交</a>
        </form>
    </div>
</template>

<script>
import { addUser } from '@/api/index.js'
export default {
  data() {
    return {
      msg:'vue + express + mysql',
      bItem: {
        username: null,
        age: null
      }
    }
  },
  methods: {
    submit_user() {
      addUser(this.bItem).then(res=>{
          console.log(res)
      })
    }
  }
}
</script>

<style scoped>
</style>