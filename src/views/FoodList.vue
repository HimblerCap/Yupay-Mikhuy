<template>
    <div class="row" v-if="foods.length > 0">
       <food :food="food" v-for="(food,i) in foods" :key="i"></food>
    </div>
</template>
<script>
import Food from './FoodItem.vue';
import {mapGetters} from 'vuex';

export default {
    components: {
        Food
    },
    computed: {
        ...mapGetters({
            foods : 'filteredFoods'
        })
    }
}

</script>
