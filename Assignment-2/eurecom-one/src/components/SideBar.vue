<template>
     <aside class="aside aside-1">
        <SideBarElement />
        <Bde />
     </aside>

    
</template>

<script>
import SideBarElement from './ContactSide.vue';
import Bde from './BdeSide.vue';

export default {
  name: "Home",
  data(){
    return {

    }
  },

  components: {
    SideBarElement,
    Bde
  },
};
</script>

<style scoped>

</style>