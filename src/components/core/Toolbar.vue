<template>
  <v-div>
    <v-app-bar app fixed clipped-left color="#ffffdf" elevation="0" height="70px" style= "box-shadow: 0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0">
        <div>
            <v-card 
              color="#FFDA97"
              rounded="10px"
              elevation="0">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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

      </v-app-bar>

      <v-navigation-drawer
              app
              clipped
              floating
              v-model="drawer"
              color="#ffffdf"
              elevation="0"
              width="210"
            >
            
              <v-divider></v-divider>

              <v-list rounded>
                <v-list-item
                  v-for="(link, i) in links"
                  :key="i"
                  :to="link.to"
                  :href="link.href"
                  @click="onClick($event, link)"
                  class="google-font my-0 py-0"
                  color="#FFA500"
                >
                  <v-list-item-icon>
                    <v-icon v-text="link.icon"></v-icon>
                  </v-list-item-icon>
                  <br/>
                  <v-list-item-content>
                  <v-list-item-title v-text="link.text" />
                  </v-list-item-content>

                </v-list-item>
              </v-list>
            </v-navigation-drawer>
  </v-div>
</template>
<script>
import { mapGetters, mapMutations} from "vuex"; 

export default {
  name: "Toolbar",
  data () {
    return {
      drawer: null,
    }
  },
  computed: {
    ...mapGetters(["links"]),
    drawered: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    }
  },
  methods: {
    ...mapMutations(['setDrawer']),
    onclick (e, item) {
      e.stopPropagation()
        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }
        if (item.to || item.href) return
        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
    }
  }
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