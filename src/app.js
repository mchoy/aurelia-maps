import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {

  configureRouter(config, router){
    config.title = 'Aurelia Maps';
    config.map([
        { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: 'leafletMap', name: 'leafletMap', moduleId: './leafletMap', nav: true, title:'Leaflet Map' },
        { route: 'cesiumMap', name: 'cesiumMap', moduleId: './cesiumMap', nav: true, title:'Cesium Map' }
    ]);

    this.router = router;
  }
  attached() {
    console.info("attached in app js");
  }
}
