/*
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 20:30:23
 * @FilePath: \ant-design-vue-pro\preview\main.ts
 * @description:
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import FormPro from '../components/formPro'
// import TablePro from '../es/components/tablePro'
import FormPro from '../es/components/formPro'
// import ant from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
// import '../components/formPro/style/index.less'
// import '../components/tablePro/style/index.less'

const app = createApp(App)
// app.use(ant)
app.use(FormPro, { prefix: 'a' })
// app.use(TablePro, { prefix: 'a' })
app.mount('#app')
