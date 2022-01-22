<template>
  <header class="header">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Eurecom.svg/2560px-Eurecom.svg.png"
      width="300"
      @click="iconClick"
    />

    <div class="user">
      <h3>Welcome to Eurecom One!</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

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
.header {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  height: 150px;
  justify-content: space-between;
  border-bottom: solid black;
}

.header img {
  max-width: 30%;
  margin: 10px 0 auto 50px;
  float: right;
}



.user h3 {
  float: right;
  margin-right: 30px;
  margin-bottom: 5px;
}

h3 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1.5em;
  text-align: center;
  color: #2c3e50;
}

@media screen and (max-width: 800px) {
  .user h1,
  .user h3 {
    float: right;
    margin-right: 30px;
    margin-bottom: 5px;
    font-size: 1em;
  }
}
</style>
