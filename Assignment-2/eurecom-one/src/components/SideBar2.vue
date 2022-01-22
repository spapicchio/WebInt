<template>
  <aside class="aside aside-2">
    <div class="event-bde">
      <hr />
      <h1>Event BDE</h1>
      <h3>
        Fantastic Party at the house of <br />
        <b>{{ completeName }}</b>
      </h3>
      <p>
        Thank you {{ firstName }} for invinting all the Eurecom students at your
        house
      </p>
      <p><b> Party details: </b> {{ partyDateCity }}</p>
      <details @toggle="detailClick">
        <summary>show map of the party location</summary>
        <div id="map">.</div>
      </details>
    </div>
    <marquee
      class="marquee"
      height="50%"
      width="100%"
      behavior="scroll"
      direction="up"
      scrollamount="2"
      onmouseover="this.stop();"
      onmouseout="this.start();"
    >
      <ul>
        <li>
          <p class="title">Title</p>
          <img
            src="https://study-eu.s3.amazonaws.com/uploads/image/path/471/wide_fullhd_eurecom-entree-nord-mer-1920x960.jpg"
          />
          <p class="link">link</p>
        </li>
        <li>
          <p class="title">Title</p>
          <img
            src="https://study-eu.s3.amazonaws.com/uploads/image/path/471/wide_fullhd_eurecom-entree-nord-mer-1920x960.jpg"
          />
          <p class="link">link</p>
        </li>
        <li>
          <p class="title">Title</p>
          <img
            src="https://study-eu.s3.amazonaws.com/uploads/image/path/471/wide_fullhd_eurecom-entree-nord-mer-1920x960.jpg"
          />
          <p class="link">link</p>
        </li>
        <li>
          <p class="title">Title</p>
          <img
            src="https://study-eu.s3.amazonaws.com/uploads/image/path/471/wide_fullhd_eurecom-entree-nord-mer-1920x960.jpg"
          />
          <p class="link">link</p>
        </li>
      </ul>
    </marquee>
  </aside>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  data() {
    var obj = JSON.parse(sessionStorage.getItem("account"));
    console.log(obj);
    this.creationMap();
    return {
      firstName: obj.firstName,
      lastName: obj.lastName,
      completeName: obj.completName,
      showForm: false,
      email: obj.email,
      mailBDE: "",
      picked: "No",
      selected: "General Question",
      sent: false,
      latitude: "",
      longitude: "",
      partyDateCity: "",
      count: 0,
    };
  },
  methods: {
    detailClick() {
      console.log("detail clicked");
      if (this.count == 0) {
        this.setupLeafletMap();
        this.count = 1;
      }
    },
    creationMap() {
      var getPosition = function (options) {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      };

      getPosition()
        .then((position) => {
          this.latitude = position.coords["latitude"];
          this.longitude = position.coords["longitude"];
          return this.latitude + "," + this.longitude;
        })
        .then((latLong) => {
          let api =
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            latLong +
            "&key=AIzaSyCLgL8NUcjeqaxkGR-KhcPpkVJLraMtwfQ";
          return fetch(api);
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data.results[9]["formatted_address"];
        })
        .then((city_country) => {
          this.create_comment(city_country);
        })

        .catch((err) => {
          console.error(err.message);
        });
    },
    create_comment(city_country) {
      //select the date
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      this.partyDateCity = date + " | " + city_country;

      // Initialize and add the map
      console.log(this.latitude);
      console.log(this.longitude);
    },
    setupLeafletMap: function () {
      var map = L.map("map").setView([this.latitude, this.longitude], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1Ijoic2ltb25lLXBhcGljY2hpbyIsImEiOiJja3lwcTFsY3QwY2s0MnJtbWludjBwdWVzIn0.corFRlWJ4egLfUnsY74S1A",
        }
      ).addTo(map);

      L.circle([this.latitude, this.longitude], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 250,
      }).addTo(map);

      L.popup()
        .setLatLng([this.latitude, this.longitude])
        .setContent("Yes this is your House!")
        .openOn(map);
    },
  },
};
</script>

<style scoped>
#map {
      height: 180px;
      widows: 60%;
      margin: 10px auto 10px auto;
}
</style>