/*
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 09:13:25
 * @FilePath: \ant-design-vue-pro\preview\main.ts
 * @description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pro from '../components'


const app = createApp(App)

app.use(pro)
app.mount('#app')
