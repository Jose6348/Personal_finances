<template>
    <div>
      <h2>Visão Geral Financeira</h2>
      <bar-chart :chartData="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: ['Alimentação', 'Transporte', 'Saúde', 'Lazer'],
          datasets: [
            {
              label: 'Gastos',
              backgroundColor: '#f87979',
              data: [0, 0, 0, 0] // Inicialmente, todos os valores são zero
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {
      this.updateChartData()
    },
    methods: {
      updateChartData() {
        const expenses = this.$store.state.transactions.filter(t => t.type === 'expense')
        const data = this.chartData.datasets[0].data
  
        // Reset para zero todos os valores
        for (let i = 0; i < data.length; i++) {
          data[i] = 0
        }
  
        // Atualizar os dados com base nas transações
        expenses.forEach(expense => {
          const index = this.chartData.labels.indexOf(expense.category)
          if (index !== -1) {
            data[index] += expense.amount
          }
        })
  
        // Atualizar o gráfico
        this.renderChart(this.chartData, this.chartOptions)
      }
    },
    watch: {
      '$store.state.transactions': 'updateChartData'
    }
  }
  </script>