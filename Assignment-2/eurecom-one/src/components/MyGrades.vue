<template>
  <div class="container">
    <h1><img src="https://cdn-icons-png.flaticon.com/512/1946/1946058.png" width="4%" style="margin-top:10px"> My Grades:</h1>
    <div class="table-wrapper">
     <table class="fl-table">
        <thead>
        <tr>
            <th>Course</th>
            <th>Code</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Quantum Information Science</td>
            <td><a href="https://www.eurecom.fr/en/course/quantis-2021fall" target="_blank">QUANTIS 	</a></td>
            <td>2.5</td>
            <td>14/20</td>
            <td>2021-02-17</td>
        </tr>
        <tr>
            <td>Software development methodologies</td>
            <td><a href="https://www.eurecom.fr/en/course/softdev-2021fall" target="_blank">SoftDev</a></td>
            <td>2.5</td>
            <td>18/20</td>
            <td>2021-02-13</td>
 
        </tr>
        <tr>
            <td>Interaction Design and Development of Modern Web Applications</td>
           <td><a href="https://www.eurecom.fr/en/course/webint-2022fall" target="_blank">WebInt</a></td>
            <td>2.5</td>
            <td>20/20</td>
            <td>2020-12-17</td>

        </tr>
        <tr>
            <td>Advanced Statistical Inference </td>
            <td><a href="https://www.eurecom.fr/en/course/asi-2022spring" target="_blank">ASI</a></td>
            <td>5.0</td>
            <td>11/20</td>
            <td>2021-12-10</td>

        </tr>
        </tbody>
    </table>
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

.table-wrapper{
    margin: 10px 30px 30px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 750px) {
    .fl-table {
        display: block;
        width: 95%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}

@import url('https://fonts.googleapis.com/css?family=Pirata+One|Rubik:900');

h1 {
text-transform: Uppercase;
margin-bottom: .5em;
font-family: 'Rubik', sans-serif;
font-size: 1rem;
color: #E4E5E6; }

h1 {
position: relative;
background: linear-gradient(to right, #24243e, #141E30, #0f0c29);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent; }

</style>
