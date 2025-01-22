import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import TransactionList from '../components/TransactionList.vue'
import AppGoals from '../components/AppGoals.vue'
import FinancialSummary from '../components/FinancialSummary.vue'

const routes = [
  { path: '/', component: App },
  { path: '/transactions', component: TransactionList },
  { path: '/goals', component: AppGoals },
  { path: '/summary', component: FinancialSummary }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router