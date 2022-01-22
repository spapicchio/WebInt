<template>
  <footer class="footer">
    <div class="footer-left">
      <h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Eurecom.svg/2560px-Eurecom.svg.png"
          width="240px"
        >
      </h3>

      <p class="footer-links">
        <a href="/home">Home</a>
        ·
        <a href="https://www.facebook.com/eurecomCommunication/" target="_blank">Facebook</a>
        ·
        <a href="https://www.linkedin.com/school/eurecom/" target="_blank">LinkedIn</a>
        ·
        <a href="#">Contact</a>
      </p>
    </div>

    <div class="footer-right">
      <p>Send us a Ticket</p>

      <form action="#" method="post">
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background:dimgray;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  font: bold 16px sans-serif;
  text-align: left;
  padding: 50px 60px 40px;
  overflow: hidden;
}

section {
  width: 100%;
  display: inline-block;
  background: #ccc;
  height: 60vh;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-decoration: underline;
}

/* Footer left */

.footer .footer-left {
  float: left;
}

/* Logo */

.footer h3 {
  font: normal 0px "Roboto", cursive;
}

.footer h3 span {
  color: #5383d3;
}

/* Footer links */

.footer .footer-links {
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
}

.footer .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}


/* Footer Right */

.footer .footer-right {
  float: right;
}

.footer .footer-right p {
  display: inline-block;
  vertical-align: top;
  margin: 15px 42px 0 0;
  color: #ffffff;
}

/* The contact form */

.footer form {
  display: inline-block;
}

.footer form input,
.footer form textarea {
  display: block;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #1f2022;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  border: none;
  resize: none;

  font: inherit;
  font-size: 14px;
  font-weight: normal;
  color: #d1d2d2;

  width: 400px;
  padding: 18px;
}

.footer ::-webkit-input-placeholder {
  color: #5c666b;
}

.footer ::-moz-placeholder {
  color: #5c666b;
  opacity: 1;
}

.footer :-ms-input-placeholder {
  color: #5c666b;
}

.footer form input {
  height: 10px;
  margin-bottom: 10px;
}

.footer form textarea {
  height: 50px;
  margin-bottom: 7px;
}

.footer form button {
  border-radius: 3px;
  background-color: #33383b;
  color: #ffffff;
  border: 0;
  padding: 10px 50px;
  font-weight: bold;
  float: right;
}

@media (max-width: 1000px) {
  .footer {
    font: bold 14px sans-serif;
  }

  .footer .footer-company-name {
    font-size: 12px;
  }

  .footer form input,
  .footer form textarea {
    width: 250px;
  }

  .footer form button {
    padding: 10px 35px;
  }
}

@media (max-width: 800px) {
  .footer {
    padding: 30px;
  }

  .footer .footer-left,
  .footer .footer-right {
    float: none;
    max-width: 300px;
    margin: 0 auto;
  }

  .footer .footer-left {
    margin-bottom: 40px;
  }

  .footer form {
    margin-top: 30px;
  }

  .footer form {
    display: block;
  }

  .footer form button {
    float: none;
  }
}
</style>