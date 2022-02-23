<template>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        position: fixed
        style="top:0px; max-height: 100%"
        v-model="drawer"
        color="#FFF8E1"
        :mini-variant.sync="mini"
        mini-variant-width="100"
        :right="$vuetify.rtl"
        width="260"   
        >
        <v-list-item class="px-2 pt-3 pb-3" >
                <div>
                <v-card 
                color="#FFDA97"
                rounded="10px"
                elevation="0">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </v-card>
            </div>
                <div style="margin: 0 0 0 20px">
                <v-img
                    max-width="150px"
                    src="https://i.imgur.com/TTiKXEg.png">  
                </v-img>
            </div>
            <v-btn
            icon
            @click.stop="mini = !mini"
            >
            <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            :href="link.href"
            @click="onClick($event, link)"
            class="google-font my-0 py-0"
            color="#FFA500"
            >
            <v-list-item-icon class="pt-6 pb-6">
                <v-icon color="#000">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title style="font-size: 15px;">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
            <v-list dense>
            <v-list-item
            v-for="(link, i) in others"
            :key="i"
            :to="link.to"
            :href="link.href"
            @click="onClick($event, link)"
            class="google-font my-0 py-0"
            color="#FFA500"
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
        drawer: false,
        mini: false,
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