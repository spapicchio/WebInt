<template>
  <div class="nav">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#email">Email</a>
    <a href="#contact">Contact</a>
    <div class="nav-right">
      <div class="user">
        <a href="#search"
          ><h1>Hello {{ form.completName }}</h1></a
        >
        <img
          id="user-image"
          v-if="form.seen"
          :src="form.picture"
          :alt="`${form.firstName} ${form.lastName}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",

  data() {
    // it contains all the detail of the account
    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj);
    return {
      form: obj,
    };
  },
  components: {},
  props: {},
  methods: {
    iconClick() {
      console.log("Icon clicked");
      this.$router.push("/home");
    },
    userClick() {
      console.log("User clicked");
      this.$router.push("");
    },
    whishClick() {
      console.log("Whish clicked");
      this.$router.push("whish");
    },
    logoutClick() {
      console.log("LogOut clicked");
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
/* Add a black background color to the top navigation */
.nav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.nav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.nav a.active {
  background-color: #04aa6d;
  color: white;
}

/* Right-aligned section inside the top navigation */
.nav-right {
  float: right;
}

.nav-right #user-image {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 0.8rem;
}


.user h1 {
  float: right;
  margin-right: 30px;
  margin-bottom: 5px;
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 2em;
  text-align: center;
  color: #f2f2f2;
}

/*Hide image and name*/
@media screen and (max-width: 800px) {
  .nav-right #user-image {
    display: none;
  }

  .user h1 {
    font-size: 0px;
  }
}
</style>
