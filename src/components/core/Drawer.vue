<template>
    <v-container class="ma-0 pa-0">
        <!-- Desktop view -->
        <v-navigation-drawer
        class="hidden-sm-and-down"
        app
        permanent
        expand-on-hover
        position: fixed
        style="top:0px; max-height: 100%"
        v-model="drawerDesk"
        color="#FFE162"
        :mini-variant.sync="mini"
        :right="$vuetify.rtl"
        width="260"    
        >
        <v-list-item class="px-2 pt-3 pb-3" >
            <div >
                <v-img
                src="https://i.imgur.com/Z7vwOkV.png"
                width="40px">
                </v-img>
                <!--<v-card 
                color="#FFDA97"
                rounded="10px"
                elevation="0">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </v-card>-->
            </div>
            <div style="margin: 0 0 0 20px" >
                <v-img
                    max-width="150px"
                    src="https://i.imgur.com/TTiKXEg.png">  
                </v-img>
            </div>
            
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense bottom>
            <v-list-item
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            :href="link.href"
            @click="onClick($event, link)"
            class="google-font my-0 py-0"
            color="white"
            >
            <v-list-item-icon 
            class="pt-6 pb-6">
                <v-icon color="#000">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title style="font-size: 15px;">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-list dense class="logout">
            <v-list-item
            v-for="(link, i) in others"
            :key="i"
            :to="link.to"
            :href="link.href"
            @click="onClick($event, link)"
            class="google-font my-0 py-0"
            color="white"
            >
            <v-list-item-icon class="pt-6 pb-6">
                <v-icon color="#000">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title style="font-size: 15px;">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
        <!-- Desktop view -->
        <!-- Mobile view -->
            <v-toolbar
            class="hidden-sm-and-up ma-auto pa-0"
            color="#FFE162"
            elevation="1"
            >
              <v-app-bar-nav-icon @click.stop="drawerMob = !drawerMob"></v-app-bar-nav-icon>

              <v-item>
                <v-row align="center" justify="center">
                    <v-col align="start" justify="start" class="ma-0" style="padding:12px 12px 8px 16px;" cols="8">
                        <v-img     
                        max-width="150px"
                        src="https://i.imgur.com/TTiKXEg.png">  
                        </v-img>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col align="end" justify="end" class="pl-13 pt-2 pb-2" cols="4">         
                        <v-img                
                        src="https://i.imgur.com/ZAEnwEZ.png"
                        max-width="60px">
                        </v-img>
                    </v-col>
                </v-row>
              </v-item>
            </v-toolbar>
    <v-navigation-drawer
      v-model="drawerMob"
      absolute
      top
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
        <!-- Mobile view -->
    </v-container>
</template>

<script>
  import { mapGetters, mapMutations} from "vuex";
  export default {
    name: "Drawer",
    data () {
      return {

        drawerMob: false,
        group: null,

        drawerDesk: true,
        mini: true,
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    computed: {
    ...mapGetters(["links", "others"]),
    },
    methods: {
        ...mapMutations("toogleDrawer"),
        onclick (e, item) {
        e.stopPropagation()
        this.$router.push(item.to)
        }
    }
  }
</script>
<style >
    .logout{    
        position: absolute !important;
        bottom: 0 !important;
        width: 100%;
    }
</style>