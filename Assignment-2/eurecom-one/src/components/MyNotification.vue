<template>
  <div class="container">
    <h1>
      <img
        src="https://image.similarpng.com/very-thumbnail/2020/08/Youtube-notification-bells-Unread-Clipart-PNG.png"
        width="4%"
        style="margin-top: 10px"
      />
      My Notifications:
    </h1>
    <div class="notice info">
      <h2>Notification Title</h2>
      <p>
        This to inform you that next week MALIS presentation will be held on Friday 30/01/2022 in Amphi at 15.30pm. 
      </p>
    </div>

    <div class="notice success">
      <h2>Notification Title</h2>
      <p>
        You passed the WebInt exam! Congratulations!
      </p>
    </div>

    <div class="notice warning">
      <h2>Notification Title</h2>
      <p>
        You have to see Mrs. LE STIR Gwenaelle to bring her some important document!
      </p>
    </div>

    <div class="notice error">
      <h2>Notification Title</h2>
      <p>
        Ops! You miss the OPTIM Assignment 1 Deadline!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  props: {
    class: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: inline-block;
  margin-top: 20px;
  background-color: white;
  border: 1px solid;
  padding: 0px;
  height: 95%;
  width: 100%;
  box-shadow: 0px 5px 10px 0px #888888;
}

/* Table Styles */
* {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #34495e;
  -webkit-font-smoothing: antialiased;
  line-height: 1.6em;
}

p {
  margin: 0;
}

.notice {
  position: relative;
  margin: 1.4em;
  background: #f9f9f9;
  padding: 1em 1em 1em 2em;
  border-left: 4px solid #ddd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125);
}

.notice:before {
  position: absolute;
  top: 50%;
  margin-top: -17px;
  left: -17px;
  background-color: #ddd;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  font-family: Georgia;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
}

.info {
  border-color: #0074d9;
}

.info:before {
  content: "i";
  background-color: #0074d9;
}

.success {
  border-color: #2ecc40;
}

.success:before {
  content: "√";
  background-color: #2ecc40;
}

.warning {
  border-color: #ffdc00;
}

.warning:before {
  content: "!";
  background-color: #ffdc00;
}

.error {
  border-color: #ff4136;
}

.error:before {
  content: "X";
  background-color: #ff4136;
}

@import url("https://fonts.googleapis.com/css?family=Pirata+One|Rubik:900");

h1 {
  text-transform: Uppercase;
  margin-bottom: 0.5em;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  color: #e4e5e6;
}

h1 {
  position: relative;
  background: linear-gradient(to right, #24243e, #141e30, #0f0c29);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  height: 24px;
  line-height: 23px;
  margin: 12px 0 !important;
  padding: 0px 0 20px 10px;
  text-shadow: 2px 2px 3px #222222;
}

.info h2 {
  background: #0074d9;
}
.success h2 {
  background: #2ecc40;
}
.warning h2 {
  background: #ffdc00;
}
.error h2 {
  background: #ff4136;
}
</style>
