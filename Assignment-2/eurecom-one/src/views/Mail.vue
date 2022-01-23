<template>
   <div class="wrapper">
    <Header /> 
    
    <Nav />
    
    <MailAbout />
         
    <MailSideBar />

    <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import MailAbout from '../components/MailAbout.vue';
import MailSideBar from '../components/MailSideBar.vue';
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
    MailSideBar,
    Footer,
    Nav,
    Header,
    MailAbout
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
.mailAbout {
  text-align: left;
  background: rgba(0, 0, 0, 0.151);
}

.mail-aside {
  background: rgba(134, 134, 134, 0.151);
}



@media all and (min-width: 600px) {
  .aside { flex: 1 0 0; }
}

@media all and (min-width: 800px) {
  .mailAbout    { flex: 3 0px; }
  .nav          { order: 1  }
  .mail-aside   { order: 2; } 
  .mailAbout    { order: 3; }
  .footer       { order: 5; }
}

body {
  padding: 2em; 
}


</style>

