<template>
  <div class="wrapper">
    <Header /> 
    
    <Nav />
    
    <MainAbout />
         
    <SideBar />

    <SideBar2 />
    <Footer />
</div>

</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import MainAbout from '../components/MainAbout.vue';
import SideBar from '../components/SideBar.vue';
import SideBar2 from '../components/SideBar2.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';


export default {
  name: "About",
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
    MainAbout
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 150px 50px 20% 20% 20% 20%;
}
.header {
  grid-column: 1/6;
  grid-row-start: 1;
}
.nav {
  grid-row-start: 2;
  grid-column: 1/6;
}
.mainAbout {
  text-align: center;
  background: rgba(218, 218, 218, 0.151);
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
.footer {
  grid-row: 7;
  grid-column: 1/6;
}

@media all and (min-width: 600px) {
}

@media all and (min-width: 800px) {
}

@media (max-width: 1000px) { 
	
	.wrapper{
		background: rgba(134, 134, 134, 0.151);
		grid-template-columns: 100%;
		grid-template-rows: 150px 50px 20% 20% 20% 20%;
	}
	
	.header {
		grid-column: 1;
	}
	
	.nav {
		grid-column: 1;
	}
	.mainAbout {
		grid-column: 1;
	}

	.aside-1 {
		grid-column: 1;
	}

	.aside-2 {
		grid-column: 1;
		grid-row: 7;
	}
	.footer {
		grid-column: 1;
		grid-row: 8;
	}
}





</style>
