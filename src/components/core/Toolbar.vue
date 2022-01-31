<template>
    <v-container class="ma-0 pa-0" fluid>
      <v-toolbar color="#FEF7DF" elevation="1" height="70px">
        <div>
          <v-card 
            color="#EFD3A0"
            elevation="0">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-card>
        </div>

        <div style="margin: 0 0 0 20px">
          <v-img
            max-width="180px"
            src="https://i.imgur.com/TTiKXEg.png">  
          </v-img>
        </div>
        <v-spacer></v-spacer>

        <div>
          <v-card width="210px" outlined class="fix-toolbar">
            <v-container fluid>
              <v-list-item two-line style="margin-top: -20px">
              <v-card style="border-radius: 8px" flat>
                <v-img
                  height="40px"
                  max-width="40px"
                  src="https://i.imgur.com/i4IsveJ.jpg">  
                </v-img>
              </v-card>

              <v-list-item-content class="pa-0" style="margin:0 0 0 10px">
                <v-list-item-title>Jane Smith</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>
              </v-list-item>
            </v-container>
          </v-card>     
      
        </div>

      </v-toolbar>
    </v-container>
</template>
<script>
export default {
  name: "Toolbar",
};
</script>
<style>
  .fix-toolbar{
    color: #f8f8f9;
    margin:"2px 10px 2px 0px" !important;
    max-height: 50px;
    align-content: center;
    border-radius: 10px !important;
  }
</style>