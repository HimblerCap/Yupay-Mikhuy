<template>
  <v-app>
    <!-- v-if="$route.meta.requiresAuth" -->
    <Views />
  </v-app>
</template>

<script>
export default {
  name: "Yupay Mikhuy",
  components: {
    Views:()=>import('@/components/core/Views'),
  },
};
</script>

