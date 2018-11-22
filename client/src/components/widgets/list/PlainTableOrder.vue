<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>List Barang Yang Tinggal Sedikit</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="items"
          hide-actions
          class="elevation-0 table-striped"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.product }}</td>
            <td class="text-xs-left">{{ props.item.stock }}</td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import items from '@/api/order'
export default {
  data () {
    return {
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Barang', value: 'deadline' },
        { text: 'Stok', value: 'progress' }

      ],
      items: items,
      colors: {
        processing: 'blue',
        sent: 'red',
        delivered: 'green'
      }
    }
  },
  computed: {
    randomColor () {
      let item = Math.floor(Math.random() * this.colors.length)
      return this.colors[item]
    }
  }
}
</script>
