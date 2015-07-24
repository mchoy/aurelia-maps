export class CesiumViewer{
    viewer;

    getViewer() { 
        return this.viewer;
    }

    activate() {
        this.viewer = new Cesium.Viewer('cesiumContainer');
        console.info(this.viewer);
    }
}
