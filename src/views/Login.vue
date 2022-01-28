<template>
    <v-container fluid class="pa-0 fill-height">
        <!-- Desktop -->
        <v-row align="center" justify="center" class="d-none d-sm-block" >
            <v-col md="8" lg="10" offset-md="1" sm="12" class="py-5" style="max-width:1300px;margin-left:auto;margin-right:auto"> 
                <v-container fluid class="ma-0 pa-0 white elevation-1 mt-5">
                <v-row align="stretch" justify="center" class="ma-0 pa-0">
                    <v-col md="5" lg="5" sm="6" class="pa-5"> 
                        <p class="google-font mt-5 mb-0" style="text-align: center; font-size:35px">Yupay Mikhuy</p>
                        <br>
                        <p class="google-font mb-5 mt-0">Cuida tu consumo :3</p>
                        <br>
                        <v-text-field class="ma-0 pa-0" label="Email" v-model="email" outlined></v-text-field>
                        <v-text-field class="ma-0 pa-0" label="Password" type="password" v-model="password" outlined></v-text-field>
                        <v-btn v-on:click="login" style="height:38px;width:150px;" :loading="loading" depressed>Login</v-btn>
                    </v-col>
                </v-row>
                </v-container>
            </v-col>
        </v-row>
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
      this.alertMsg = ":3";
    }
  },
  methods: {
    login() {
      var self = this;
      self.loading = true;
      firebase.auth
        .signInWithEmailAndPassword(self.email, self.password)
        .then((user) => {
          console.log(user)
          this.$router.replace('/')
        })
        .catch(e => {
          self.loading = false;
          alert("Alert " + e);
        });
    }
  }
};
</script>


