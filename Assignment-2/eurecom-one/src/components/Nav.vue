<template>
  <div class="nav">
    <a id="homeBtn" @click="iconClick('home')" class="active">Home</a>
    <a id="mailBtn" @click="iconClick('email')">Email</a>
    <a id="aboutBtn" @click="iconClick('about')">About</a>

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
    iconClick(location) {
      this.$router.push("/" + location);
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
  margin-top: 0px;
  scale: 0.4;
  top: -40px;
  position: relative;
}

.user {
  height: 8px;
}
.user h1 {
  float: right;
  margin-left: auto;
  margin-bottom: 5px;
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1em;
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
