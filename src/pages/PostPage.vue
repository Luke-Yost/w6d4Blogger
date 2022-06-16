<template>

</template>


<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { blogsService } from "../services/BlogsService";

export default {
  setup(){
    const route = useRoute();
    onMounted( async ()=> {
      await blogsService.setActivePost(route.params.id)
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>