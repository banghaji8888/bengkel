<template>
  <div class="container fluid">
    <v-layout row wrap>
      <v-flex sm12>
        <h3>Data Karyawan</h3>
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
            <v-btn icon outline small fab color="success" @click="form">
              <v-icon>add</v-icon>
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
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.phone }}</td>
                <td>
                  <v-btn depressed outline icon fab dark color="primary" small>
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn depressed outline icon fab dark color="pink" small>
                    <v-icon>delete</v-icon>
                  </v-btn>
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
import { Items as Users } from '@/api/karyawan'
export default {
  name: 'HelloWorld',
  data () {
    return {
      search: '',
      complex: {
        selected: [],
        headers: [
          {
            text: 'ID',
            value: 'id'
          },
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Email',
            value: 'email'
          },
          {
            text: 'Phone',
            value: 'phone'
          },
          {
            text: 'Action',
            value: ''
          },
        ],
        items: Users
      }
    }
  },
  methods:{
    form () {
      this.$router.push({
        name: 'formKaryawan'
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
