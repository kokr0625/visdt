<template>
  <div>
    <div v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
      </div>
    </div>
    <button v-else v-on:click="searchTerm">글 불러오기</button>
  </div>
</template>

<script>


export default {
  
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    searchTerm: function () {
      // using JSONPlaceholder
      
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then((result) => {
        console.log(result)
        this.posts = result.data
      })
    }
  }
}
</script>

<style>


</style>
