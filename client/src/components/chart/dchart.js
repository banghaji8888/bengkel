import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['24', '25', '26', '27'],
      datasets: [
        {
          label: 'Transaksi',
          backgroundColor: '#f87979',
          data: [20, 10, 3, 5]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
