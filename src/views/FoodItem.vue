<template>
    <v-col cols="12" class="pa-1">
        <v-card outlined>
          <v-col cols="11" class="ma-0 pa-0 ">
            <v-row justify="center" align="center">
              <v-col cols="3" justify="center" align="center" class="pa-0 pl-1">
              <v-card class="pa-1" flat>
                <v-img
                max-width="70"
                max-hight="40"
                :src="food.images[0]"
                ></v-img>
              </v-card> 
            </v-col>
            <v-col cols="9" class="ma-0 pa-1">
              <v-row justify="center" align="center">
                <v-col cols="4" class="pa-0 ml-3">
                    <h5 style="font-family: 'Lato', sans-serif;">{{food.name | capitalize}}</h5>
                </v-col>
                <v-col cols="6" class="pa-0 pl-3 ml-3">
                  <v-text-field
                    v-model="amount"
                    label="Peso"
                    :key="i"
                    suffix="Kg"
                    append-outer-icon="mdi-plus"
                    @click:append-outer="sendMessage"
                  ></v-text-field>
                </v-col>
                <v-col cols="0" class="pa-0">
                </v-col>
              </v-row>
            </v-col>
            </v-row>
          </v-col>  
        </v-card>
    </v-col>
</template>
<script>
export default({
    props: {
        food: {
          type: Object,
          required: true,
        }
    },
    filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})
</script>
