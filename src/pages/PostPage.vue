<template>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex flex-column ">
        <p class="my-2 text-info">{{ post.creator.name }}</p>
        <img class="img-fluid align-self-start post-img" :src="post.imgUrl" alt="">
        <h1><u>{{ post.title }}</u></h1>
        <p>{{ post.body }}</p>
      </div>
      <div class="col-12 d-flex my-5 border-top border-primary border-3 bg-light elevation-2">
        <div class="d-flex flex-column my-2">
          <h4>{{ post.creator.name }}</h4>
          <img class="creator-img" :src="post.creator.picture" alt="">
        </div>
        <p class="align-self-center mx-2">{{ post.creator.bio }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { blogsService } from "../services/BlogsService";

export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      await blogsService.setActivePost(route.params.id)
    })
    return {
      post: computed(() => AppState.activePost)
    }
  }
}
</script>


<style lang="scss" scoped>
.post-img {
  height: 40vh;
  object-fit: contain;
}

.creator-img {
  height: 15vh;
  object-fit: cover;
  border-radius: 75%;
}
</style>