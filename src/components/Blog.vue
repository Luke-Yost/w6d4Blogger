  <template>
  <div class="row d-flex justify-content-center my-2">
    <div class="col-8 d-flex elevation-2 bg-light selectable p-2 text-dark">
      <router-link
      :to="{name: 'Post', params: { id: blog.id}}"
      >
      <img class="img-fluid blog-img" :src="blog.imgUrl" alt="">
      <div class="mx-2">
        <h5><u>{{ blog.title }}</u></h5>
        <p>{{ blog.body }}</p>
      </div>
      </router-link>
    </div>
    <div class="col-4 d-flex bg-dark text-light p-2 justify-content-between selectable elevation-2">
      <router-link 
      :to="{name: 'Profile', params: { id: blog.creator.id}}" >
    
      <div class="mx-2">
        <h5><u>{{ blog.creator.name }}</u></h5>
        <p>{{ blog.creator.bio }}</p>
      </div>
      <img :src="blog.creator.picture" class="img-fluid blog-img" alt="">
      </router-link>
    </div>
    
  </div>
</template>
  
  
  <script>
export default {
  props: { blog: { type: Object, required: true } },
  setup() {
    return {}
  }
}
</script>
  
  
  <style lang="scss" scoped>
  .blog-img {
    height: 10vh;
  }
// router-link{

// }

  </style>