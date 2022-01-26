<template>
  <div class="wrapper">
    <Header />
    <Nav />

    <article class="card-classes">
      <MyClasses />
    </article>

    <article class="card-notifications">
        <MyNotification/>
    </article>

    <article class="card-grades">
      <MyGrades />
    </article>

    <SideBar class="SideBar" />
    <SideBar2 id="SideBar2" class="SideBar2" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import SideBar2 from "../components/SideBar2.vue";
import Footer from "../components/Footer.vue";
import Nav from "../components/Nav.vue";
import MyClasses from "../components/MyClasses.vue";
import MyGrades from "../components/MyGrades.vue";
import MyNotification from "../components/MyNotification.vue";

export default {
  name: "Home",
  data() {
    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj);

    return {
      cardEmail: {
        name: "Email",
        text: "bla bla bla",
        img: "src",
        email: true,
        library: false,
        sifi: false,
      },
      cardLibrary: {
        name: "Library",
        text: "bla bla bla",
        img: "src",
      },
    };
  },

  components: {
    SideBar,
    SideBar2,
    Footer,
    Nav,
    Header,
    MyClasses,
    MyGrades,
    MyNotification
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
.main {
  text-align: center;
  background: rgba(218, 218, 218, 0.151);
  grid-column: 2/5;
  grid-row: 3/7;
}
.card-classes {
  text-align: center;
  grid-column: 2/5;
  grid-row: 3;
}
.card-notifications {
  text-align: center;
  grid-column: 2/5;
  grid-row: 4;
}

.card-grades {
  text-align: center;
  grid-column: 2/5;
  grid-row: 5;
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

body {
  padding: 2em;
}

@media (max-width: 1000px) { 
	
	
	.SideBar2{
		grid-column: 1;
		grid-row: 6;
		padding-top: 1em;

	}
	
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
	
	.main {
		text-align: center;
		background: rgba(218, 218, 218, 0.151);
		grid-column: 1;
		grid-row: 3/7;
	}
	
	.card-classes {
		text-align: center;
		grid-column: 1;
		grid-row: 3;
	}
	
	.card-notifications {
		text-align: center;
		grid-column: 1;
		grid-row: 4;
	}

	.card-grades {
		text-align: center;
		grid-column: 1;
		grid-row: 5;
	}

	.aside-1 {
		background: rgba(134, 134, 134, 0.151);
		grid-column: 1;
		grid-row: 3/7;
	}

	.aside-2 {
		background: rgba(134, 134, 134, 0.151);
		grid-column: 1;
		grid-row: 6/7;
	}
	.footer {
		grid-row: 7;
		grid-column: 1;
	}
	
 }
</style>