<template>
    <div class="app-charts-container">
      <h2 class="chart-title">Visão Geral Financeira</h2>
      <div class="chart-wrapper">
        <bar-chart :chartData="chartData" :options="chartOptions" />
      </div>
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
              data: [0, 0, 0, 0] 
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                font: {
                  size: 14
                }
              }
            },
            title: {
              display: true,
              text: 'Distribuição de Gastos',
              position: 'top',
              font: {
                size: 18,
                weight: 'bold'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Valor (R$)',
                font: {
                  size: 14
                }
              }
            }
          }
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
  
  <style scoped>
  .app-charts-container {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .chart-title {
    color: #333333;
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .chart-wrapper {
    min-height: 300px;
    position: relative;
  }
  </style>