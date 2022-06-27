import { createStore } from 'vuex'
import { newsModule } from '@/store/newsModule'
import { tableModule } from '@/store/table/tableModule'
import { tableFormModule } from '@/store/table/tableFormModule'

export default createStore({
  modules: {
    news: newsModule,
    tabel: tableModule,
    tabelForm: tableFormModule
  }
})
