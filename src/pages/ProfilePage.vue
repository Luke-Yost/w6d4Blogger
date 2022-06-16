<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https:thiscatdoesnotexist.com" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>

</template>


<script>
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { blogsService } from "../services/BlogsService"

export default {
  setup(){
    const route = useRoute()
    onMounted(async()=>{
      await blogsService.setActiveProfile(route.params.id)
    })
    return {
      info: computed(()=> AppState.active)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>