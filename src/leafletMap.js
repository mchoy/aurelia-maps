import L from 'leaflet';

export class LeafletMap {
  
  heading = 'Leaflet Map';
  
  constructor() {
    // Basic options.
    this.options = {
      center: L.latLng(32.71,-117.16), // @TODO: Change to L.LatLng Object,
      zoom: 15
    };
    
    this.OpenStreetMap_Mapnik  =  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.Esri_WorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    });
    
    this.OpenWeatherMap_Precipitation = L.tileLayer('http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.5
    });
    
    this.OpenWeatherMap_Wind = L.tileLayer('http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.5
    });
    
    this.OpenWeatherMap_Temperature = L.tileLayer('http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.5
    });
    
    this.OpenWeatherMap_Pressure = L.tileLayer('http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.5
    });
    
    this.OpenWeatherMap_PrecipitationClassic = L.tileLayer('http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.5
    });

    this.OpenWeatherMap_Snow = L.tileLayer('http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	opacity: 0.5
    });
      
    this.baseLayers = {
			"OSM Mapnik": this.OpenStreetMap_Mapnik,
			"OSM Black And White": this.OpenStreetMap_BlackAndWhite,
            "ESRI World Street Map": this.Esri_WorldStreetMap
	};
    
    this.overlayMaps = {
            "OpenWeatherMap Precipitation Classic": this.OpenWeatherMap_PrecipitationClassic,
			"OpenWeatherMap Precipitation": this.OpenWeatherMap_Precipitation,     
			"OpenWeatherMap Wind": this.OpenWeatherMap_Wind,
            "OpenWeatherMap Temperature": this.OpenWeatherMap_Temperature,
            "OpenWeatherMap Pressure": this.OpenWeatherMap_Pressure,
            "OpenWeatherMap Snow": this.OpenWeatherMap_Snow
	};
}

  attached() {
    this.map = L.map('map').setView(this.options.center);
    this.map.setZoom(this.options.zoom);

    this.setMapLayer();
  }

  setMapLayer() {
    // More layers http://leaflet-extras.github.io/leaflet-providers/preview/
   (this.OpenStreetMap_Mapnik).addTo(this.map);
    L.control.layers(this.baseLayers, this.overlayMaps).addTo(this.map);   
  }

}

