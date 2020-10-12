//二次封装axios模块,包含拦截器等信息
import axios from 'axios'
import config from './config'
import Cookies from "js-cookie"
import router from 'vue-router'

export default function $axios(options){
  return new Promise(((resolve, reject) => {
    const instance=axios.create({

    })
  }))
}
