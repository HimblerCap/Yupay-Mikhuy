<template>
  <v-app>
    <Views/>
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

