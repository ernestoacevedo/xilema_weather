// navigator.geolocation.getCurrentPosition(GetLocation);
// function GetLocation(location) {
// 	        console.log(location.coords.latitude, location.coords.longitude);
//           KEY = "ecd6220d5ae51a40"
//           GEOURL = "http://api.wunderground.com/api/"+KEY+"/geolookup/q/"+location.coords.latitude+","+location.coords.longitude+".json"
//           console.log(GEOURL);
//           $.get(GEOURL, function(data){
//             code = data.location.country_iso3166;
//             city = data.location.city;
//             URL = "http://api.wunderground.com/api/"+KEY+"/conditions/q/"+code+"/"+city+".json"
//             console.log(URL);
//             $.get(URL, function(data){
//               console.log(data);
//             });
//           });
// }
