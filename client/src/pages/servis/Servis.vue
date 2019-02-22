<template>
  <div class="container fluid">
    <h3>Form Servis</h3>
    <v-layout row wrap>
      <v-flex lg8 pr-3>
        <v-card class="pa-4">
          <v-form>
            <div class="d-flex my-2">
              <v-text-field 
                label="Nama Barang"
              ></v-text-field>
            </div>
            <div class="d-flex my-2">
              <v-text-field 
                label="Harga Beli"
              ></v-text-field>
            </div>
            <v-flex class="d-flex my-2">
              <v-text-field 
                label="Harga Jual"
              ></v-text-field>
            </v-flex>
            <div class="d-flex my-2">
              <v-text-field 
                label="Stok"
              ></v-text-field>
            </div>
            <div class="d-flex my-2">
              <v-select
                v-model="montirModel"
                :items="montir"
                label="Montir"
                item-text="name"
                item-value="id"
              ></v-select>
            </div>
            <div class="d-flex my-2">
               <div class="form-btn">
                  <v-btn color="success" @click="simpan">Simpan</v-btn>
                </div>
            </div>
          </v-form>
        </v-card>
      </v-flex>  
      <v-flex lg4 pl-3>
        <v-card>
          <v-toolbar flat dense cad>
            <v-toolbar-title>Tambah Onderdil</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="flex-row-reverse d-flex justify-content-end mt-3">
              <v-switch
                v-model="isOnderdil"
                color="indigo darken-3"
              ></v-switch>
            </div>
          </v-toolbar>
          <div class="pa-4">
            <v-expand-transition>
              <div v-if="isOnderdil">
                <v-layout row>
                  <v-autocomplete
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    color="white"
                    hide-no-data
                    hide-selected
                    item-text="Name"
                    item-value="idProduct"
                    placeholder="Ketik nama barang"
                    return-object
                  ></v-autocomplete>
                  <v-btn fab dark small icon color="success" @click="tambah"><v-icon>add</v-icon></v-btn>
                </v-layout> 
                <v-card v-if="products.length > 0">
                  <v-slide-y-transition
                    class="py-0"
                    group
                    tag="v-list"
                  >
                    <template v-for="(entry, i) in products">
                      <v-divider
                        v-if="i !== 0"
                        :key="`${i}-divider`"
                      ></v-divider>
                      <v-list-tile :key="`${i}-${entry.product}`">
                        <v-list-tile-content>
                          <v-list-tile-title>{{ entry.product }} Stock ({{ entry.stock }})</v-list-tile-title>
                        </v-list-tile-content>
                        <v-spacer></v-spacer>
                        <v-scroll-x-transition>
                          <v-btn flat icon color="red" @click="hapus(i)">
                            <v-icon>clear</v-icon>
                          </v-btn>
                        </v-scroll-x-transition>
                      </v-list-tile>
                    </template>
                  </v-slide-y-transition>
                </v-card>
              </div>
            </v-expand-transition>
          </div>
        </v-card>
      </v-flex>      
    </v-layout>
  </div>
</template>

<script>
import produk from '@/api/order'
import {Items as montirs} from '@/api/karyawan'
export default {
  data: () =>  ({
    isOnderdil: false,
    isLoading: false,
    model: null,
    entries: [],
    products: [],
    search: null,
    montir: [],
    montirModel: null
  }),
  computed: {
    items () {
      return this.entries.map(entry => {
        const Name = entry.product + " (Stock " + entry.stock + ")"

        return Object.assign({}, entry, { Name })
      })
    }
  },
  mounted () {
    this.montir = montirs
  },
  watch: {
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true
      this.entries = produk
      this.isLoading = false
    }
  },
  methods: {
    tambah () {
      if(this.model == null) alert("Kolom barang harus diisi")

      this.products.push(this.model)
      this.model = null
    },
    hapus (i) {
      this.products.splice(i,1)
    },
    simpan () {
      console.log(this.montirModel)
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
