<template>
  <div class="container fluid">
    <v-layout row wrap>
      <v-flex sm12>
        <h3>Data Barang</h3>
      </v-flex>        
      <v-flex lg12>
        <v-card>
          <v-toolbar card color="white">
            <v-text-field
            flat
            solo
            prepend-icon="search"
            placeholder="Type something"
            v-model="search"
            hide-details
            class="hidden-sm-and-down"
            ></v-text-field>     
            <v-btn raised @click="form" color="success">
              New
            </v-btn>         
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              :headers="complex.headers"
              :search="search"
              :items="complex.items"
              :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
              class="elevation-1"
              item-key="id"
              select-all
              v-model="complex.selected"
              >
              <template slot="items" slot-scope="props">
              <td>
                <v-checkbox
                  primary
                  hide-details
                  v-model="props.selected"
                ></v-checkbox>
              </td>              
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.product }}</td>
                <td>{{ props.item.harga_beli }}</td>
                <td>{{ props.item.harga_jual }}</td>
                <td>{{ props.item.stock }}</td>
                <td>
                  <v-btn icon>
                    <v-icon color="primary">edit</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="red">delete</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="info" @click="dialog = true">info</v-icon>
                  </v-btn>
                   <v-dialog scrollable v-model="dialog" max-width="800">
                    <v-card>
                      <v-card-title class="headline">Detail Karyawan</v-card-title>
                      <v-card-text>
                        <span class="subheading">Name: Suprapto</span> <br/>
                        <span class="subheading">Email: suprapto27@gmail.com</span> <br/>
                        <span class="subheading">Phone: 085785428551</span> <br/>
                      </v-card-text>
                    </v-card>
                   </v-dialog>
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Items from '@/api/order'
export default {
  name: 'HelloWorld',
  data () {
    return {
      search: '',
      dialog: false,
      complex: {
        selected: [],
        headers: [
          {
            text: 'ID',
            value: 'id'
          },
          {
            text: 'Name',
            value: 'product'
          },
          {
            text: 'Harga Beli',
            value: 'harga_beli'
          },
          {
            text: 'Harga Jual',
            value: 'harga_jual'
          },
          {
            text: 'Stok',
            value: 'stock'
          },
          {
            text: 'Action',
            value: ''
          },
        ],
        items: Items
      }
    }
  },
  methods:{
    form () {
      this.$router.push({
        name: 'formBarang'
      })
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
