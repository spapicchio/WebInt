<template>
  <form>
    <input name="Object" type="text" class="feedback-input" placeholder="Object" />
    <input
      name="email"
      type="text"
      class="feedback-input"
      placeholder="Insert recipient address"
    />
    <textarea
      name="text"
      class="feedback-input"
      placeholder="Message"
    ></textarea>
    <input type="submit" value="SUBMIT" />
  </form>
</template>

<script>
export default {
  name: "SentMail",
  data() {
    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj);

    return {};
  },

  components: {},
};
</script>

<style scoped>
* {background: rgba(37, 30, 30, 0.2);}

.feedback-input {
  color:black;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 10px;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid #084e17;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:95%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { border:2px solid #0f6113; }

textarea {
  height: 150px;
  line-height: 150%;
  
  resize:vertical;
}

[type="submit"] {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background:#298d15;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color: black;
  font-size:24px;
  padding-top:10px;
  padding-bottom:10px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}
[type="submit"]:hover { background:#05410d; }
</style>
