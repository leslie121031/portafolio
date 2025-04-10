if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function (compareFn) {
    return this.slice().sort(compareFn);
  };
}

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
