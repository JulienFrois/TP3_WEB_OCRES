
// Fonction appelée lors du click du bouton
function start() {
  var city = document.getElementById('city-input').value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTreedaysForecast

  apiWeather
    .fetchTreeDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      for(var i=0; i<4; i++)
      {
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

      // Modifier le DOM
      console.log('tommorow-'+i+'-forecast-main');
      document.getElementById('tommorow-'+i+'-forecast-main').innerHTML = main;
      document.getElementById('tommorow-'+i+'-forecast-more-info').innerHTML = description;
      document.getElementById('tommorow-'+i+'-icon-weather-container').innerHTML = icon;
      document.getElementById('tommorow-'+i+'-forecast-temp').innerHTML = `${temp}°C`;
      }
      
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
