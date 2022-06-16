import { AppState } from "../AppState";
import { api } from "./AxiosService";


class BlogsService {

  async getBlogs() {
    const res = await api.get()
    console.log(res.data);
    AppState.blogs = res.data
  }
  async setActivePost(id){
    const res = await api.get(id)
    console.log('active post', res.data);
    AppState.activePost = res.data 
  }
  setActiveProfile(id){
      AppState.profilePosts = AppState.blogs.filter(p=>p.creator.id == id)
    }

}

export const blogsService = new BlogsService()