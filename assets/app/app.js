var ipValue = $(".ip-input");

$(".ip-btn").click(function (a) {
a.preventDefault();

ip = ipValue.val();

var url = "http://ip-api.com/json/" + ip + "?lang=pt-BR";

$.ajax({
    method: "POST",
    url: url,
    data: ip,
    dataType: "json"
  }).done(function(data){
      var countryCode = data['countryCode'];
      var country = data['country'];
      var city = data['city'];
      var regionName = data['regionName'];

      $('#countryCode').html(countryCode);
      $('#country').html(country);
      $('#city').html(city);
      $('#regionName').html(regionName);
      
      var gseUrl = "https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyCGvkyavlUGQJN8ognVNM0wDRoERpR7yok&cx=c05e46acb65f8482e&q=" + country + " flag";
      $.ajax({
        method: "GET",
        url: gseUrl,
        data: regionName,
        dataType: "json"
      }).done(function(data){
          var imgResponse = data['items'][0]['link'];

          $('#flagImg').attr('src', imgResponse);
      });
  });
});