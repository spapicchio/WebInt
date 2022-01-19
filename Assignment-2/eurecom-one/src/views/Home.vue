<template>
  <Navbar/>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

export default {
  name: "Home",
  data(){


    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj)

    return {
      
    }

  },

  components: {
    Navbar
  },
};
</script>
