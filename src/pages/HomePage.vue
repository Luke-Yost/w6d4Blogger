<template>
  .<div class="container">
    <Blog v-for="b in blogs" :key="b.id" :blog="b" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState"
import { blogsService } from "../services/BlogsService"

export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      const res = await blogsService.getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
