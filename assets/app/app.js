$(function () {
  var ipValue = $(".ip-input");

  $(".ip-btn").click(function (a) {
    a.preventDefault();

    ip = ipValue.val();

    var url = "http://ip-api.com/json/" + ip + "?lang=pt-BR";

    $.ajax({
      method: "POST",
      url: url,
      data: ip,
      dataType: "json",
    }).done(function (data) {
      var countryCode = data["countryCode"];
      var country = data["country"];
      var city = data["city"];
      var regionName = data["regionName"];
      var lat = data["lat"];
      var lon = data["lon"];
      var position = { lat: lat, lng: lon };

      initMap(position);

      $("#countryCode").html(countryCode);
      $("#country").html(country);
      $("#city").html(city);
      $("#regionName").html(regionName);

      var gseUrl =
        "https://www.googleapis.com/customsearch/v1?searchType=image&key=[YOUR GSE API KEY]&cx=[YOUR GSE CX]&q=" +
        country +
        " flag";
      $.ajax({
        method: "GET",
        url: gseUrl,
        data: regionName,
        dataType: "json",
      }).done(function (data) {
        console.log(data);
        var imgResponse = data["items"][0]["link"];
        $("#flagImg").attr("src", imgResponse);

        var imgHeight = $("#flagImg").height();
        console.log(imgHeight);

        if (imgHeight === imgHeight) {
          console.log("é igual");
          var flagStyle2 = $("#map").height();
          console.log(flagStyle2);
        } else {
          
          var flagStyle = $("#flagImg").height();
          console.log(flagStyle);
          console.log("n é igual");
        }
      });
    });
  });
});
let map;

function initMap(position) {

  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: position,
    map: map,
  });

}

