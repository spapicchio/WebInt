<template>
  <article class="mailAbout">
    <div class="about-section">
      <h1>About Us:</h1>
      <p>
        Sent a mail
      </p>
    </div>
    <h2 style="text-align: center">Our Team</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <img
            src="https://www.eurecom.fr/sites/default/files/images/people/gesbert-david_4.jpg"
            alt="GESBERT David "
            style="width: 100%"
          />
          <div class="container">
            <div class="space"></div>
            <h2>GESBERT David</h2>
            <p class="title">Direction</p>
            <p>Some text that describes me</p>
            <p>david@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://www.eurecom.fr/sites/default/files/images/people/grammare-laurence_1.jpg"
            alt="GRAMMARE Laurence"
            style="width: 100%"
          />
          <div class="container">
            <h2>GRAMMARE Laurence</h2>
            <p class="title">Communication</p>
            <p>Some text that describes me</p>
            <p>laurence@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://www.eurecom.fr/sites/default/files/images/people/troncy-raphael_1.jpg"
            alt="TRONCY Raphaël"
            style="width: 100%"
          />
          <div class="container">
            <h2>TRONCY Raphaël</h2>
            <p class="title">WebInt Professor</p>
            <p>Some text that describes me</p>
            <p>raphaël@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://study-eu.s3.amazonaws.com/uploads/image/path/471/wide_fullhd_eurecom-entree-nord-mer-1920x960.jpg");
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
.space {
    height: 32px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

</style>