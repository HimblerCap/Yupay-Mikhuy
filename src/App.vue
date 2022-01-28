<template>
  <v-app>
    <!-- v-if="$route.meta.requiresAuth" -->
    <Toolbar />
    <Drawer />
    <BootomNav />
    <Views/>
  </v-app>
</template>

<script>
export default {
  name: "Yupay Mikhuy",
  components: {
    Toolbar: ()=>import('@/components/core/Toolbar'),
    Drawer: ()=>import('@/components/core/Drawe'),
    BootomNav: ()=>import('@/components/core/BottomNav'),
    Views:()=>import('@/components/core/Views'),
  },
};
</script>

