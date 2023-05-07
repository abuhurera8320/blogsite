/* eslint-disable import/no-anonymous-default-export */
import { Service } from "..";

const blogService = Service('GetBLogs')

export default {
  getBlogsList(params) {
    return blogService({
      method: 'GET',
      url: '/',
      params,
    })
  },
  getBlog(id) {
    return blogService({
      method: 'GET',
      url: '/'+id,
    })
  },

}
