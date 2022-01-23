<template>
  <article class="mailAbout">
    <div class="scroll">
      <table class="container">
        <tbody>
          <tr>
            <td>Google</td>
            <td>Title</td>
            <td>Date</td>
            <td>Text preview</td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>Title</td>
            <td>Date</td>
             <td>Text preview</td>
          </tr>
          <tr>
            <td>Amazon</td>
            <td>Title</td>
            <td>Date</td>
             <td>Text preview</td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>Title</td>
            <td>Date</td>
             <td>Text preview</td>
          </tr>
          <tr>
            <td>CodePen</td>
            <td>Title</td>
            <td>Date</td>
             <td>Text preview</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>Title</td>
            <td>Date</td>
             <td>Text preview</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="current_mail">
      <p align="center">
        <iframe
          width="100%"
          height="315"
          src="/SentMail"
        ></iframe>
      </p>
    </div>
  </article>
</template>
<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color: #a7a1ae;
  background-color: #1f2739;
}

h1 {
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #4dc3fa;
}

h2 {
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  display: block;
  line-height: 1em;
  padding-bottom: 2em;
  color: #fb667a;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #fb667a;
  text-decoration: none;
}

.blue {
  color: #185875;
}
.yellow {
  color: #fff842;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #185875;
  width: 100%;
}

.container td {
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 95%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container tbody {
  width: 95%;
}

.container td,
.container th {
  padding-bottom: 0.8%;
  padding-top: 0.8%;
  padding-left: 0.8%;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  background-color: rgba(49, 68, 85, 0.2);
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: rgba(165, 136, 136, 0.2);
}

.container th {
  background-color: #1f2739;
}

.container td:first-child {
  color: #030101;
}

.container tr:hover {
  background-color: rgba(9, 55, 204, 0.2);
  -webkit-box-shadow: 0 6px 6px -6px rgba(8, 22, 34, 0.2);
  -moz-box-shadow: 0 6px 6px -6px rgba(8, 22, 34, 0.2);
  box-shadow: 0 6px 6px -6px rgba(8, 22, 34, 0.2);
}

.container td:hover {
  background-color: #fff842;
  color: #403e10;
  font-weight: bold;

  box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px,
    #7f7c21 -4px 4px, #7f7c21 -5px 5px, #7f7c21 -6px 6px;
  transform: translate3d(6px, -6px, 0);

  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: line;
}

.current_mail {
  margin:auto;
  margin-top: 20px;
  width: 90%;
  border: 3px solid green;
}

div.scroll {
  height: 200px;
  width: 100%;
  overflow-y: scroll;
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}
</style>