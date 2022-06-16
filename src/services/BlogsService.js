import { AppState } from "../AppState";
import { api } from "./AxiosService";


class BlogsService {

  async getBlogs() {
    const res = await api.get()
    console.log(res.data);
    AppState.blogs = res.data
  }

}

export const blogsService = new BlogsService()