<template >
<v-main fluid class="fixed ml-n8">

  <!-- Desktop view -->
  <v-container fluid class="mr-n9 hidden-sm-and-down" >
  </v-container>
  <!-- Desktop view -->

  <!-- Mobile view -->
  <HomeViewPhone/>
  <!-- Mobile view -->

</v-main>
   
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeViewPhone: ()=>import('@/components/Home/HomeViewPhone')
  }
}
</script>
<style>
  .fixed{
    left: 0 !important;
  }
  .add-margin{
    margin: auto !important;
  }
</style>