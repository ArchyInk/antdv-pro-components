/*
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-15 16:02:06
 * @FilePath: \ant-design-vue-pro\preview\main.ts
 * @description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pro from '../components'


const app = createApp(App)

app.mount('#app')

app.use(pro)