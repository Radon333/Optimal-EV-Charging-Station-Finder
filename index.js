let map;
var coords = {
  Seattle: '47.6062095,-122.3320708',
  New_Delhi: '28.61393954039436,77.20902151729473',
};
function selectCity(city) {
  var c = coords[city].split(',');
  map.setCenter(new google.maps.LatLng(c[0], c[1]));
  console.log(city);
  if (city == 'Seattle') {
    fetch('ev_station_ranveer.json')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data[0].Longitude)
        var points = [];
        for (let i = 0; i < data.length; i++) {
          //console.log(data[i])
          points.push({
            lat: JSON.parse(data[i].Latitude),
            lng: JSON.parse(data[i].Longitude),
          });
        }

        for (let i = 0; i < points.length; i++) {
          const marker = new google.maps.Marker({
            position: points[i],
            map: map,
            icon: 'evstation_icon.png',
          });
        }
      });
    map.data.loadGeoJson('seattle.json');
  } else {
    fetch('./delhi_existing.json')
      .then((response) => response.json())
      .then((data) => {
        //console.log(data[0].Longitude)
        var points = [];
        for (let i = 0; i < data.length; i++) {
          //console.log(data[i])
          points.push({
            lat: JSON.parse(data[i].Latitude),
            lng: JSON.parse(data[i].Longitude),
          });
        }

        for (let i = 0; i < points.length; i++) {
          const marker = new google.maps.Marker({
            position: points[i],
            map: map,
            icon: 'evstation_icon.png',
          });
        }
      });
    map.data.loadGeoJson('./delhi-final_geo.json');
  }
}
function seattleinitMap() {
  fetch('ev_station_ranveer.json')
    .then((response) => response.json())
    .then((data) => {
      //console.log(data[0].Longitude)
      var points = [];
      for (let i = 0; i < data.length; i++) {
        //console.log(data[i])
        points.push({
          lat: JSON.parse(data[i].Latitude),
          lng: JSON.parse(data[i].Longitude),
        });
      }

      for (let i = 0; i < points.length; i++) {
        const marker = new google.maps.Marker({
          position: points[i],
          map: map,
          icon: 'evstation_icon.png',
        });
      }
    });
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: { lat: 47.6062095, lng: -122.3320708 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson('seattle.json');
}

function delhiInitMap() {
  fetch('./delhi_existing.json')
    .then((response) => response.json())
    .then((data) => {
      //console.log(data[0].Longitude)
      var points = [];
      for (let i = 0; i < data.length; i++) {
        //console.log(data[i])
        points.push({
          lat: JSON.parse(data[i].Latitude),
          lng: JSON.parse(data[i].Longitude),
        });
      }

      for (let i = 0; i < points.length; i++) {
        const marker = new google.maps.Marker({
          position: points[i],
          map: map,
          icon: 'evstation_icon.png',
        });
      }
    });
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: { lat: 28.61393954039436, lng: 77.20902151729473 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson('./delhi-final_geo.json');
}
