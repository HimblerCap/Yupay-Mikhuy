<template>
  <v-app>
    <Login/>
    <Views/>
  </v-app>
</template>

<script>
export default {
  name: "Yupay Mikhuy",
  components: {
    Views:()=>import('@/components/core/Views'),
    Login:()=>import('@/views/Login.vue')
  },
};
</script>

