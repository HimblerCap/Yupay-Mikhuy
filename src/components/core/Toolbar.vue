<template>
<v-div>
  <v-navigation-drawer
      absolute
      permanent
      right
      width="300"
      color="#f1f4f6"
    >
      <template v-slot:prepend class="google-font">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img
                  height="40px"
                  max-width="40px"
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/gengis_rafael_gutierrez_chiara.jpeg">  
                </v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Gengis Fortachon</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-template class="google-font">
        <v-list-item-title style="font-size: 15px;">Comidas que puedes preparar</v-list-item-title>
      </v-template>

    </v-navigation-drawer>
</v-div>
  
</template>
<script>


export default {
  name: "Toolbar",
  data () {
     return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
  },
}
</script>
