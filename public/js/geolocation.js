/**
 * Created by esterlingaccime on 5/6/17.
 */
console.log("Hello World!!");
var x = document.getElementById("demo");


var app = {
    showPosition: function (position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    },


    getLocation: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    },
    beacons: function () {
        $.ajax({url: "/api/beacons", method:"GET"})
            .done(function (data) {
                console.log(data);
            });
    }
};



app.getLocation();
app.beacons();