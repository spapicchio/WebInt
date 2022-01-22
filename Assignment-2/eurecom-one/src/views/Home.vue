<template>

<div class="wrapper">
    <Header /> 
    
    <Nav />
    
    <article class="main">
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
    </article>
    <SideBar />

    <aside class="aside aside-2">Aside 2</aside>
    <Footer />
</div>

</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';

export default {
  name: "Home",
  data(){


    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj)

    return {
      
    }

  },

  components: {
    SideBar,
    Footer,
    Nav,
    Header,
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
.main {
  text-align: left;
  background: deepskyblue;
}

.aside-1 {
  background: rgba(134, 134, 134, 0.151);
}

.aside-2 {
  background: hotpink;
}

@media all and (min-width: 600px) {
  .aside { flex: 1 0 0; }
}

@media all and (min-width: 800px) {
  .main    { flex: 3 0px; }
  .nav     { order: 1  }
  .aside-1 { order: 2; } 
  .main    { order: 3; }
  .aside-2 { order: 4; }
  .footer  { order: 5; }
}

body {
  padding: 2em; 
}

</style>