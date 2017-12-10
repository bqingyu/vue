import axios from "axios"
const mock=false
const serverUrl="http://localhost:3000/"
const mockUrl="/static/mock"
const baseUrl=mock?mockUrl:serverUrl

axios.defaults.baseURL=baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //form-data