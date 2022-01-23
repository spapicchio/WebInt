<template>

<div class="wrapper">
    <Header /> 
    
    <Nav />
        <article class="main">
            <CardArticle />
        </article>

        <article class="main">
            <CardArticle />
        </article>

        <article class="main">
            <CardArticle />
        </article>
    <SideBar />
    <SideBar2 />
    <Footer />
</div>

</template>

<script>
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';
import SideBar2 from '../components/SideBar2.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';
import CardArticle from '../components/CardArticle.vue';

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
    SideBar2,
    Footer,
    Nav,
    Header,
    CardArticle,
  },
};
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 150px 3% 20% 20% 20% 20%;
}
.header{
    grid-column: 1/6;
    grid-row-start:1;
}
.nav{
    grid-row-start: 2;
    grid-column: 1/6;
}
.main {
    text-align: center;
    background:  rgba(218, 218, 218, 0.151);
    grid-column: 2/5;
    grid-row: 3/7;
}

.aside-1 {
    background: rgba(134, 134, 134, 0.151);
    grid-column: 1;
    grid-row: 3/7;
}

.aside-2 {
    background: rgba(134, 134, 134, 0.151);
    grid-column: 5;
    grid-row: 3/7;
}
.footer{
    grid-row: 7;
    grid-column: 1/6;
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