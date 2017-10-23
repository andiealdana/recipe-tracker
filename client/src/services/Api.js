// connector which can be used for setting up the back end

import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
