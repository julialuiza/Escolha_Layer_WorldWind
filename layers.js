var wwd = new WorldWind.WorldWindow("canvasOne");
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);



function escolheLayer(sel){
	var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
	var layer = document.getElementById("escolheLayer").value;
   
    if(layer == '1'){ 	
    	document.getElementById("selecionado").innerHTML = "Layer: Temperatura da superfície da terra (LST)";
		var layerName = "MOD_LSTD_M";
		var createLayer = function (xmlDom) {
		    var wms = new WorldWind.WmsCapabilities(xmlDom);
		    var wmsLayerCapabilities = wms.getNamedLayer(layerName);
		    var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
		    var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
		    wwd.addLayer(wmsLayer);
		};

		$.get(serviceAddress).done(createLayer).fail(logError);
    }
    else if (layer=='2') {
    	document.getElementById("selecionado").innerHTML = "Layer: Índice de vegetação";
    	var layerName = "MOD_NDVI_M";
		var createLayer = function (xmlDom) {
		    var wms = new WorldWind.WmsCapabilities(xmlDom);
		    var wmsLayerCapabilities = wms.getNamedLayer(layerName);
		    var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
		    var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
		    wwd.addLayer(wmsLayer);
		};

		$.get(serviceAddress).done(createLayer).fail(logError);
    }
}