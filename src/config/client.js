import axios from 'axios'

export default {
  default: {
    client: axios.create({
      baseURL: 'http://react-todolist.getsandbox.com',
      responseType: 'json'
    })
  }
}
