import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['2016', '2017', '2018'],
      datasets: [
        {
          label: 'Transaksi',
          backgroundColor: '#f87979',
          data: [30, 20, 9]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
