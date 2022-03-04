<template>
    <v-container fluid class="pa-0 fill-height">
      
        <!-- Desktop -->
        <span class="bg"></span>
        <v-row align="center" justify="center" class="d-none d-sm-block" >
          <v-col lg="5" offset-md="1" class="py-5" style="max-width:1300px;margin-left:auto;margin-right:auto"> 
            <v-container fluid class="fill-height ma-0 pa-0">
              <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="8">
                  <v-card>
                    <v-row align="center" justify="center" class="ma-0 pa-0">
                      <v-col cols="12" md="6" class="pa-0">
                        <v-card align="center" justify="center" min-height="600px" color="#EEC373" class="fix" flat>
                          <v-img 
                          max-width="270px"
                          src="https://i.imgur.com/GaaTYIJ.png"
                          ></v-img>
                        </v-card>
                      </v-col>
                      <v-col cols="12" md="6" class="pa-0"> 
                        <v-card color="#FFF1BD" min-height="600px" class="pa-4" flat>
                          <v-img 
                            class="pt-4 ma-10"
                            src="https://i.imgur.com/AkWPSNz.png"
                          ></v-img>
                          <v-form>
                            <v-text-field 
                            class="field" 
                            prepend-inner-icon="email" 
                            background-color="#96CEB425" 
                            label="Email" 
                            type="text"  
                            color="#1C0D0290" 
                            v-model= "email" outlined></v-text-field>
                            <v-text-field class="field" 
                            prepend-inner-icon="lock" 
                            background-color="#96CEB425" 
                            label="Password" 
                            type="password" 
                            color="#1C0D0290" 
                            v-model= "password" outlined></v-text-field>
                          </v-form>
                          <div class="text-center mt-3">
                        <v-btn v-on:click="login" class="ma-12 white--text" style="height:50px; width:200px;"  rounded :loading="loading" color="#2ECC7195">Log In</v-btn>
                          </div>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        
        <!-- Desktop -->

        <!--Mobile-->   
        <v-container fluid class="hidden-sm-and-up ; fill-height; fill-width ; ma-0 pa-0 ">
          <v-row  align="center" justify="center" class="pa-0 ma-0">
            <v-card color ="#FFF1BD" align="center" height="100%">
            <v-container fluid style="height:100vh" class="pa-0"  >
                <v-col align="center" justify="center"  class=" d-sm-block pa-0 ma-0">
                  <v-row align="center" justify="center" width="100%" class="pa-0 ma-0">
                        <v-card flat class="pa-0 ma-0" width="100%" color="#FFF1BD" >
                          <v-img 
                            width="100%"
                            :src="require('@/assets/backgrounds/background-mobile-2.png')"
                          ></v-img>
                        </v-card>


                  </v-row>
                    <v-row align="center" justify="center" color="#FFF1BD" class="ma-0 pa-0">
                        <v-card class="fix2" flat color="#FFF1BD" >
                          
                        <v-form>
                          <v-img 
                          width="80%"
                          src="https://i.imgur.com/AkWPSNz.png"
                          ></v-img>
                        <v-card-text class="fix2 " align="center" justify="center">
                        <v-text-field                  
                            class="field" 
                            prepend-inner-icon="email" 
                            background-color="#96CEB425" 
                            label="Email" 
                            type="email"  
                            color="#1C0D0290" 
                            v-model= "email" outlined
                        ></v-text-field>

                        <v-text-field 
                            class="field" 
                            prepend-inner-icon="lock" 
                            background-color="#96CEB425" 
                            label="Password" 
                            type="password" 
                            color="#1C0D0290" 
                            v-model= "password" outlined>
                        </v-text-field>
                        </v-card-text>
                    </v-form>
                    <v-card-actions class="justify-center" >
                        
                        <div class="text-center m-0">
                        <v-btn v-on:click="login" class="ma-0 white--text" style="height:50px; width:200px;"  rounded :loading="loading" color="#2ECC7195">Log In</v-btn>
                          </div>

                    </v-card-actions>
                    </v-card>
                                       
                    </v-row>
                             
                </v-col>
            </v-container>
            </v-card>
            </v-row>
        </v-container>
        
        <!--Mobile-->
    </v-container>
</template>

<script>
import firebase from "@/config/firebase";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    loading: false,
    alertMsg: ""
  }),
  mounted() {
    if (firebase.auth.currentUser) {
      this.$router.replace("/");
    } else {
      this.alertMsg = "Error with the authentication";
    }
  },
  methods: {
    login() {
      var self = this;
      self.loading = true;
      firebase.auth
        .signInWithEmailAndPassword(self.email, self.password)
        .then((user) => {
          
        })
        .catch(e => {
          self.loading = false;
          alert("Alert " + e);
        });
    }
  }
};
</script>
<style>
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('https://i.imgur.com/b0J7fZN.png') no-repeat center center;
    background-size: cover;
    background-color: rgba(0,0,0,0.8);
    transform: scale(1);

    filter:blur(6px);
    -o-filter:blur(6px);
    -ms-filter:blur(6px);
    -moz-filter:blur(6px);
    -webkit-filter:blur(6px);
  }
  .field {
    margin: 2px 10px 4px 10px !important;
    padding: 2px !important;
  }
  .fix {
    padding: 130px 10px 0px 10px !important;
  }
  .fix2{
    padding: 10px 10px 0px 10px !important;
  }

  .bgcel{
    background-image: none;
  }   
</style>

