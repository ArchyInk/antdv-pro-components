/*
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 21:24:35
 * @FilePath: \ant-design-vue-pro\preview\main.ts
 * @description:
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pro from '../components';
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.use(pro);
app.use(ant);
app.mount('#app');
//# sourceMappingURL=main.js.map