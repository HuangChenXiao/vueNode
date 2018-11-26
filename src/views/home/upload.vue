<template>
    <div>
        <form>
            <input type="file" name="imageFile" @change="getFile($event)">
            <button @click="submitForm($event)">提交</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      file: ''
    }
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    submitForm(event) {
      event.preventDefault()
      let formData = new FormData()
      formData.append('imageFile', this.file)

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      this.axios
        .post('/api/upload', formData, config)
        .then(function(response) {
          if (response.status === 200) {
            console.log(response.data)
          }
        })
    }
  }
}
</script>

<style scoped>
</style>