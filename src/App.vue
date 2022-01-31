<template>
  <v-app>
    <!-- v-if="$route.meta.requiresAuth" -->
    <Toolbar v-if="$route.meta.requiresAuth"/>
    
    <Views v-else/>
  </v-app>
</template>

<script>
export default {
  name: "Yupay Mikhuy",
  components: {
    Views:()=>import('@/components/core/Views'),
    Toolbar: ()=>import('@/components/core/Toolbar'),
  },
};
</script>

