import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import TabMenu from 'primevue/tabmenu'
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; 

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('TabMenu', TabMenu)
app.component('Button', Button)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)

app.mount('#app')
