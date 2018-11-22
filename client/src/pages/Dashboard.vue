<template>
  <div class="container fluid">
    <v-flex lg12 sm12 xs12 mb-4>
      <v-widget title="Transaksi Per Hari" content-bg="white">
        <v-btn icon slot="widget-header-action">
          <v-icon class="text--secondary">refresh</v-icon>
        </v-btn>
        <div slot="widget-content">
          <d-chart/>
        </div>
      </v-widget>
    </v-flex>
    <v-layout row wrap>
      <v-flex lg6 sm12 xs12 pr-3>
        <v-widget title="Transaksi Per Bulan" content-bg="white">
          <v-btn icon slot="widget-header-action">
            <v-icon class="text--secondary">refresh</v-icon>
          </v-btn>
          <div slot="widget-content">
            <m-chart/>
          </div>
        </v-widget>
      </v-flex>
      <v-flex lg6 sm12 xs12 pl-3>
        <v-widget title="Transaksi Per Tahun" content-bg="white">
          <v-btn icon slot="widget-header-action">
            <v-icon class="text--secondary">refresh</v-icon>
          </v-btn>
          <div slot="widget-content">
            <y-chart/>
          </div>
        </v-widget>
      </v-flex>
      <v-flex lg6 sm12 xs12 mt-4 pr-3>
        <plain-table-order></plain-table-order>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import YChart from '@/components/chart/ychart'
import MChart from '@/components/chart/mchart'
import DChart from '@/components/chart/dchart'
import VWidget from '@/components/VWidget'
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder'
export default {
  components: {
    VWidget,
    YChart,
    MChart,
    DChart,
    PlainTableOrder
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
