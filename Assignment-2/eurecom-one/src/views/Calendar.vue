<template>
  <div class="wrapper">
    <Header /> 
    
    <Nav />
    
    <MainCalendar />
         
    <SideBar />

    <SideBar2 />
    <Footer />
</div>

</template>

<script>
import Header from '../components/Header.vue';
import MainCalendar from '../components/MainCalendar.vue';
import SideBar from '../components/SideBar.vue';
import SideBar2 from '../components/SideBar2.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';


export default {
  name: "Calendar",
  data(){


    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj)

    return {
      
    }

  },

  components: {
    SideBar,
    SideBar2,
    Footer,
    Nav,
    Header,
    MainCalendar
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;  
  flex-flow: row wrap;
  text-align: center; 
}


.wrapper > * {
  padding: 10px;
  flex: 1 100%;
}
.mainCalendar {
  text-align: left;
  background: rgba(0, 0, 0, 0.151);
}

.aside-1 {
  background: rgba(134, 134, 134, 0.151);
}

.aside-2 {
  background: rgba(134, 134, 134, 0.151);
}

@media all and (min-width: 600px) {
  .aside { flex: 1 0 0; }
}

@media all and (min-width: 800px) {
  .mainCalendar    { flex: 3 0px; }
  .nav     { order: 1  }
  .aside-1 { order: 2; } 
  .mainCalendar    { order: 3; }
  .aside-2 { order: 4; }
  .footer  { order: 5; }
}

body {
  padding: 2em; 
}

</style>
