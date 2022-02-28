<template>
  <v-app>
    <!-- v-if="$route.meta.requiresAuth" -->
    <Drawer  v-if="$route.meta.requiresAuth"/>
    <Toolbar v-if="$route.meta.requiresAuth"/>
    <Views />
  </v-app>
</template>

<script>
export default {
  name: "YupayMikhuy",
  components: {
    Views:()=>import('@/components/core/Views'),
    Toolbar: ()=>import('@/components/core/Toolbar'),
    Drawer: ()=>import('@/components/core/Drawer')
  },
};
</script>

<style scoped>
.theme--light.v-application {
    background: #FEF7DF;
}
</style>

