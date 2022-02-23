<template>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        position: fixed
        style="top:0px; max-height: 100%"
        v-model="drawer"
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
</template>

<script>
  import { mapGetters, mapMutations} from "vuex";
  export default {
    name: "Drawer",
    data () {
      return {
        drawer: true,
        mini: true,
      }
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