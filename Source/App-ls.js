var viewer;
var terrainT0;
var terrainT1;
var terrainT2;
var terrainT3;
var terrainT4;
var terrainT5;
var terrainT6;
var terrainT7;
var terrainS1;



var OrthoPhotoServerWMSURL = 'https://projectgeodata.zeeland.nl/geoserver/shore/wms?';

function setTerrain(terrainProviderAlias)
{
  var evilProvider = eval(terrainProviderAlias);
	viewer.terrainProvider = evilProvider;
  
  viewer.imageryLayers.removeAll();
  
  // now load the image_layer
      
  // smelling code! - refacture
  if (terrainProviderAlias == 'terrainT0')
	{
		//viewer.imageryLayers.removeAll();
		//Er is geen Orthofoto voor T0 dus laadt de WORLD ondergrond van cesium/bing
		var ZLDWorld   = new Cesium.createWorldImagery({style: Cesium.IonWorldImageryStyle.AERIAL});
		viewer.scene.imageryLayers.addImageryProvider(ZLDWorld);
 		
	}
	if (terrainProviderAlias == 'terrainT1')
	{
		//viewer.imageryLayers.removeAll();
		//laad de orto T1
    var ZLDproviderT1 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'Orthophoto_KVS_T1_10cm_RD_new_jpg'});
		viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT1);
		
				
		// laad de achtergrond en zet die transparant
		//var ZLDWorld   = new Cesium.createWorldImagery({style: Cesium.IonWorldImageryStyle.AERIAL});
		//viewer.scene.imageryLayers.addImageryProvider(ZLDWorld);
		//viewer.scene.imageryLayers.lower(ZLDWorld);
		//ZLDWorld.alpha = 0.2;
			
	}
	
	if (terrainProviderAlias == 'terrainT2')
	{
		//viewer.imageryLayers.removeAll();
		//Er is geen Orthofoto voor T2 dus laadt de WORLD ondergrond van cesium/bing
		var ZLDWorld   = new Cesium.createWorldImagery({style: Cesium.IonWorldImageryStyle.AERIAL});
		viewer.scene.imageryLayers.addImageryProvider(ZLDWorld);
		
	}
	
	if (terrainProviderAlias == 'terrainT3')
	{	
		//viewer.imageryLayers.removeAll();
		//laad de orto T3
		var ZLDproviderT3 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL,layers:'KVS_T3_201708_ORTHO_10cm_RD_new_JPEG'});
		viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT3);
	}
	
	if (terrainProviderAlias == 'terrainT4')
	{
		
		//viewer.imageryLayers.removeAll();
		//laad de orto T4
		var ZLDproviderT4 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers:'KvS_T4_Orthofoto_10cm_201803_RDNAP_new_JPEG'});
		viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT4);
	}
	if (terrainProviderAlias == 'terrainT5')
	{
		
		//viewer.imageryLayers.removeAll();
		//Er is geen Orthofoto voor T5 dus laadt de WORLD ondergrond van cesium/bing
		var ZLDWorld   = new Cesium.createWorldImagery({style: Cesium.IonWorldImageryStyle.AERIAL});
		viewer.scene.imageryLayers.addImageryProvider(ZLDWorld); 
	}
	if (terrainProviderAlias == 'terrainT6')
	{
			
		//viewer.imageryLayers.removeAll();
		var ZLDproviderT6 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL,layers:'201908-01_KVS_T6_Ortho_003m_compressed'});
		viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT6);
	}
	if (terrainProviderAlias == 'terrainT7')
	{
			
		//viewer.imageryLayers.removeAll();
		var ZLDproviderT7 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL,layers:'SHORE_KVS_T7_Orthophoto_RD_010m_minA_JPEG'});
		viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT7);
	}
	if (terrainProviderAlias == 'terrainS1')
	{
			
		//viewer.imageryLayers.removeAll();
		//var ZLDWorld   = new Cesium.createWorldImagery({style: Cesium.IonWorldImageryStyle.AERIAL});
		//viewer.scene.imageryLayers.addImageryProvider(ZLDWorld);

			
		//load a polygon (representing the sea) below the terrainmodel
		viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId : 3954 }));
		
				
		/* var seaPolygon = viewer.entities.add({
			name: "Sea polygon", 
			polygon: { 
				hierarchy: Cesium.Cartesian3.fromDegreesArray([
					-115.0,
					37.0,
					-115.0,
					32.0,
					-107.0,
					33.0,
					-102.0,
					31.0,
					-102.0,
					35.0,
					]),
					material: Cesium.Color.BLUE,
					},
		); */

	}
}

// Layer on/off on the map
$('#t1_2016').change(function(terrainProviderAlias){
  
  // check layer visibility
  if ($('input#t1_2016').is(':checked')) {
    // checked layer 
    var terrainProvider= $('input#t1_2016').val();
    // set Terrain on the map
    setTerrain(terrainProvider);

  } else{
    //alert('layer OFF');
    viewer.imageryLayers.removeAll();
  }
}); // END layer on/of 

function setTerrainT1_T0(terrainProviderAlias)
{
	//set the terrain T1
	var evilProvider = eval(terrainProviderAlias);
	viewer.terrainProvider = evilProvider;
	
	//console.log(evilProvider);
	
	// remove all
	viewer.imageryLayers.removeAll();
	//load the imageprovider orthofoto for T1
	//var ZLDproviderT1 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'Orthophoto_KVS_T1_10cm_RD_new_jpg'});
	//viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT1);
	
	//Load the WMS for T1-T0
	var ZLDT1_T0 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'T1_T0'});
	viewer.scene.imageryLayers.addImageryProvider(ZLDT1_T0);
	
}


function setTerrainT4_T2(terrainProviderAlias)
{
	//set the terrain T1
	var evilProvider = eval(terrainProviderAlias);
	viewer.terrainProvider = evilProvider;
	
	// remove all
	viewer.imageryLayers.removeAll();
	
	//laad de orto T4
	//var ZLDproviderT4 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers:'KvS_T4_Orthofoto_10cm_201803_RDNAP_new_JPEG'});
	//viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT4);
	
	//Load the WMS for T5-T4
	var ZLDT4_T2 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'T4_T2'});
	viewer.scene.imageryLayers.addImageryProvider(ZLDT4_T2);
	
		
}

function setTerrainT5_T4(terrainProviderAlias)
{
	//set the terrain T1
	var evilProvider = eval(terrainProviderAlias);
	viewer.terrainProvider = evilProvider;
	
	//load the imageprovider orthofoto for T1
	viewer.imageryLayers.removeAll();
	//Er is geen Orthofoto voor T5 dus laadt de WORLD ondergrond van cesium/bing
	//var ZLDWorld   = new Cesium.createWorldImagery({style: Cesium.IonWorldImageryStyle.AERIAL});
	//viewer.scene.imageryLayers.addImageryProvider(ZLDWorld); 
	
	//Load the WMS for T5-T4
	var ZLDT5_T4 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'T5_T4'});
	viewer.scene.imageryLayers.addImageryProvider(ZLDT5_T4);
	
}

function setTerrainT6_T5(terrainProviderAlias)
{
	//set the terrain T1
	var evilProvider = eval(terrainProviderAlias);
	viewer.terrainProvider = evilProvider;
	
	// remove all
	viewer.imageryLayers.removeAll();
	//load the imageprovider orthofoto for T1
		
	//var ZLDproviderT6 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL,layers:'201908-01_KVS_T6_Ortho_003m_compressed'});
	//viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT6);
	
	//Load the WMS for T6-T5
	var ZLDT6_T5 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'T6_T5'});
	viewer.scene.imageryLayers.addImageryProvider(ZLDT6_T5);
	
}



function setTerrainT7_T6(terrainProviderAlias)
{
	//set the terrain T1
	var evilProvider = eval(terrainProviderAlias);
	viewer.terrainProvider = evilProvider;
	
	// remove all
	viewer.imageryLayers.removeAll();
		
	//Load the WMS for T7-T6, this is the 0.5 m cell size
	var ZLDT7_T6 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'T7_T6'});
	viewer.scene.imageryLayers.addImageryProvider(ZLDT7_T6);
	
}

function setTerrainT7_T6_2m(terrainProviderAlias)
{
	//set the terrain T1
	var evilProvider = eval(terrainProviderAlias);
	viewer.terrainProvider = evilProvider;
	
	// remove all
	viewer.imageryLayers.removeAll();
		
	//Load the WMS for T7-T6, this is the 2m cellsize.
	var ZLDT7_T6_2m = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'T7_T6_2m'});
	viewer.scene.imageryLayers.addImageryProvider(ZLDT7_T6_2m);
	
	
	
}


(function () 
{
    "use strict";

    /**
     *  username: wko
     *  password: CesiumION
     */ 
     Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNzFmNjQzYi1iOTBhLTQ3OTctYThjNy0xOWU4NWEwOTgyNTQiLCJpZCI6Mjc3MzEsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1OTE3MDI2MzZ9.4MzPdhl4tZ8mo0uWgrVZlGLffdF-BRvqYn4hiO8-hnU';

        
    /**
     *  Create the viewer object
     */
     viewer = new Cesium.Viewer('cesiumContainer', {scene3DOnly: false,
                                                    selectionIndicator: false,
                                                    baseLayerPicker : true,
                                                    timeline: false,
                                                    animation: false,
													//terrainProvider : Cesium.createWorldTerrain({requestWaterMask : true, requestVertexNormals : true}),
													orderIndependentTranslucency: false});

    /**
     * Clean layers
     */ 
     //viewer.scene.imageryLayers.removeAll();

     // World base
     //var ZLDWorld   = new Cesium.createWorldImagery({style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS});
     //var worldLayer = viewer.scene.imageryLayers.addImageryProvider(ZLDWorld); 
	
	
	//laad standaard T1 bij het opstarten
	var myTerrainProvider = new Cesium.CesiumTerrainProvider({
         url : '../SHORE/tilesets/tiles_t1',
	  });
	  
	viewer.terrainProvider = myTerrainProvider;	
	//load the orthophoto  
	var ZLDproviderT1 = new Cesium.WebMapServiceImageryProvider({url: OrthoPhotoServerWMSURL, layers :'Orthophoto_KVS_T1_10cm_RD_new_jpg'});
    viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT1);
	
	
    
    /**
     * SHORE terrain providers
     */
     terrainT0 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t0'});
     terrainT1 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t1'});
	 terrainT2 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t2'});
     terrainT3 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t3'});
     terrainT4 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t4'});
     terrainT5 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t5'});
     terrainT6 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t6_thieu'});
	 terrainT7 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_t7'});
	 terrainS1 = new Cesium.CesiumTerrainProvider({url : '../SHORE/tilesets/tiles_scenario_t1'});


	
	/* Enable depth testing so things behind the terrain disappear. */
    viewer.scene.globe.depthTestAgainstTerrain = true;
       

    /**
     *  Enable lighting based on sun/moon positions
     */
     viewer.scene.globe.enableLighting = true;


    /**
     * Create an initial camera view
     */
     var shore = true;

     var shorePosition      = new Cesium.Cartesian3.fromDegrees(3.67, 51.65, 2400);
     var shoreOrientation   = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306); 
     var shoreCameraView    = {destination : shorePosition, orientation : {heading : shoreOrientation.heading, pitch : shoreOrientation.pitch, roll : shoreOrientation.roll}};

     var abdijPosition      = new Cesium.Cartesian3.fromDegrees(3.6136, 51.4954, 350);
     var abdijOrientation   = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
     var abdijCameraView    = {destination : abdijPosition, orientation : {heading : abdijOrientation.heading, pitch : abdijOrientation.pitch, roll : abdijOrientation.roll}};

     if (shore === true)
     {
       var initialPosition    = shorePosition;
       var initialOrientation = shoreOrientation;
       var homeCameraView     = shoreCameraView; 
     }
     else
     {
       var initialPosition    = abdijPosition;
       var initialOrientation = abdijOrientation;
       var homeCameraView     = abdijCameraView; 
     }


    /**
     * Assign the initial view
     */
     viewer.scene.camera.setView(homeCameraView);


    /**
     *  Fligh animation
     */
     homeCameraView.duration          = 2.0;
     homeCameraView.maximumHeight     = 2000;
     homeCameraView.pitchAdjustHeight = 2000;
     homeCameraView.endTransform      = Cesium.Matrix4.IDENTITY;


    /* Override the default home button */
     viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) 
     {
       e.cancel = true;
       viewer.scene.camera.flyTo(homeCameraView);
     }); 


    /**
     *  HTML overlay for showing feature name on mouseover
     */
     var nameOverlay = document.createElement("div");

     viewer.container.appendChild(nameOverlay);
     
     nameOverlay.className               = "backdrop";
     nameOverlay.style.display           = "none";
     nameOverlay.style.position          = "absolute";
     nameOverlay.style.bottom            = "0";
     nameOverlay.style.left              = "0";
     nameOverlay.style["pointer-events"] = "none";
     nameOverlay.style.padding           = "4px";
     nameOverlay.style.backgroundColor   = "black";


    /**
     *  Hold info about currently selected feature
     */
     var selected = {feature: undefined, originalColor: new Cesium.Color()};


    /**
     * An entity object which will hold info about the currently selected feature for infobox display
     */
     var selectedEntity = new Cesium.Entity();


    /**
     *  Get default left click handler for when a feature is not picked on left click
     *
     *  https://cesium.com/downloads/cesiumjs/releases/1.2/Build/Documentation/WebMapServiceImageryProvider.html
     *  https://github.com/TerriaJS/terriajs
     *
     *
     *
     */
     var clickHandler = viewer.screenSpaceEventHandler.getInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);

     
     viewer.screenSpaceEventHandler.setInputAction(function(e) 
     {
       //  Force focus to the viewer canvas
       // viewer.scene.canvas.focus();

       //console.log('clicked a feature');
       //console.log(name);

       // Get the picked feature
       // returns a Cesium3DTileFeature
       // (https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileFeature.html)
       var pickedFeature = viewer.scene.pick(e.position);
       //console.log('pickedFeature');
       //console.log(pickedFeature);

       // Get the property names
       var propertyNames = pickedFeature.getPropertyNames();

       // Loop properties in the console
       var length = propertyNames.length;
       //console.log('Looping properies');

       for (var i = 0; i < length; ++i) 
       {
         var propertyName = propertyNames[i];
         console.log(propertyName + ': ' + pickedFeature.getProperty(propertyName));
       }

       // Show attributes
       var attribs = pickedFeature.getProperty('attributes');
       var id      = pickedFeature.getProperty('id');
       var ref     = pickedFeature.getProperty('ref:bag'); 
 
       alert('Reference: '+ref);

       //alert('Pand met id: '+id+' is gebouwd in '+attribs.Bouwjaar);
       console.log(attribs);
       clickHandler(e);
       return; 

     }, Cesium.ScreenSpaceEventType.LEFT_CLICK);  // Was LEFT_DOWN


    /**
     *  Load 3D tiles
     */

     // Load the NYC buildings tileset
     // var city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(75343) }));

     // OSM buildings

     /* var osm_style     = new Cesium.Cesium3DTileStyle({color: {conditions: [["${feature['building']} === 'retail'", "color('#0000FF')"],
       								    	    ["${feature['building']} === 'school'", "color('#00FF00')"],
									    ["${feature['building']} === 'yes'", "color('#ffffaa')"],
									    ["${feature['building']} === 'office'", "color('#ff0000')"],
        								    [true, "color('#ffffff')"]]}});


     var osm_buildings = viewer.scene.primitives.add(Cesium.createOsmBuildings({style: osm_style})); */
	

     // Load the Netherlands tileset: 3D buildings NL (LOD1)
     //var nl_buildings = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: 'https://www.nederlandin3d.nl/viewer/datasource-data/83812e58-981e-4461-b338-c95aa7212722/tileset.json'}));

     // load the Netherlands 3D terrain
     //var nl_terrain = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: 'https://www.nederlandin3d.nl/viewer/datasource-data/882a9596-4d32-479a-a130-33cfbc713696/layer.json'}));
    
     // landmarks
     //var landmarks = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: 'https://www.nederlandin3d.nl/zeeland/datasource-data/ee22bd93-ab47-4e41-9756-87edf4f3f612/tileset.json'}));


     // The 3D BAG tiles using WMS
     // http://3dbag.bk.tudelft.nl/data/wms?request=getcapabilities
     //var bag_provider = new Cesium.WebMapServiceImageryProvider({url: 'http://3dbag.bk.tudelft.nl/data/wms?', layers : 'pand3d'});
     //viewer.scene.imageryLayers.addImageryProvider(bag_provider);
     //console.log(bag_provider);


   


}());
