<template>
   <div class="wrapper">
    <Header /> 
    
    <Nav />
    

    <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';


export default {
  name: "Mail",
  data(){


    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj)

    return {
      
    }

  },

  components: {
    Footer,
    Nav,
    Header,
  
  },
};
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-rows: 150px 50px 50% 50% 20%;
    grid-template-columns: 20% 80% 20%;
    
}
.header{
    grid-column: 1/6;
    grid-row-start:1;
}
.nav{
    grid-row-start: 2;
    grid-column: 1/4;
}
.footer{
    grid-row-start: 4;
    grid-column: 1/4;
}


@media all and (min-width: 600px) {
  .aside { flex: 1 0 0; }
}
</style>

