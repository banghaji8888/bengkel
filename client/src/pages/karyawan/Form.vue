<template>
  <div class="container fluid">
    <v-layout row wrap>
      <v-flex lg12>
        <h3>Form Karyawan</h3>
        <v-card class="pa-4">
          <v-form>
            <div class="d-flex my-2">
              <v-text-field 
                label="Nama"
              ></v-text-field>
            </div>
            <div class="d-flex my-2">
              <v-text-field 
                label="Email"
              ></v-text-field>
            </div>
            <div class="d-flex my-2">
              <v-text-field 
                label="Phone"
              ></v-text-field>
            </div>
            <div class="d-flex my-2">
              <v-textarea
                name="input-7-1"
                label="Alamat"
              ></v-textarea>
            </div>
            <div class="d-flex my-2">
              <v-radio-group v-model="row" row>
                <v-radio label="Pria" value="pria"></v-radio>
                <v-radio label="Wanita" value="wanita"></v-radio>
              </v-radio-group>
            </div>
            <div class="d-flex my-2">
               <div class="form-btn">
                  <v-btn @click="submit" color="success">Simpan</v-btn>
                </div>
            </div>
          </v-form>
        </v-card>
      </v-flex>        
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      row: null
    }
  },
  methods: {
    submit () {
      this.$router.push({
        name: 'karyawan'
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
