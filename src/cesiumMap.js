export class CesiumMap {
    heading = 'Cesium Map';
    attached() {
        console.info("Attached in cesiumMap");
        this.viewer = new Cesium.Viewer('cesiumContainer');
    }

}