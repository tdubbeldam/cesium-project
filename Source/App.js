(function () {
    "use strict";

    
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNzFmNjQzYi1iOTBhLTQ3OTctYThjNy0xOWU4NWEwOTgyNTQiLCJpZCI6Mjc3MzEsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1OTE3MDI2MzZ9.4MzPdhl4tZ8mo0uWgrVZlGLffdF-BRvqYn4hiO8-hnU';

    
	/* username: wko
	password: CesiumION */

	
	//////////////////////////////////////////////////////////////////////////
    // Creating the Viewer
    //////////////////////////////////////////////////////////////////////////

    var viewer = new Cesium.Viewer('cesiumContainer', {
        scene3DOnly: false,
        selectionIndicator: false,
        baseLayerPicker: true,
		timeline: false,
        animation: false,
    });

    //////////////////////////////////////////////////////////////////////////
    // Loading Imagery
    //////////////////////////////////////////////////////////////////////////

   	viewer.imageryLayers.removeAll();
		
	//https://projectgeodata.zeeland.nl/geoserver/shore/wms?request=getcapabilities
	
	var OrthoPhotoServerWMSURL = 'https://projectgeodata.zeeland.nl/geoserver/shore/wms?';
	
	////////////////////////////////////////////////////////////
	// Orthophoto T1 (10 cm)
	///////////////////////////////////////////////////////////
	
	var ZLDproviderT1 = new Cesium.WebMapServiceImageryProvider({
		url: OrthoPhotoServerWMSURL,
		layers :'Orthophoto_KVS_T1_10cm_RD_new_jpg'
		});
		
	
	console.log(ZLDproviderT1);
	
	viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT1);
	

	// This line is not required to use a WMS imagery layer, but adding it will enable automatic
	// display of WMS feature information (if available) on click.
	//viewer.extend(Cesium.viewerEntityMixin);

	
	////////////////////////////////////////////////////////////
	// Orthophoto T3 (10 cm)
	////////////////////////////////////////////////////////////
		
	/* var ZLDproviderT3 = new Cesium.WebMapServiceImageryProvider({
		url: OrthoPhotoServerWMSURL,
		layers:'KVS_T3_201708_ORTHO_10cm_RD_new_JPEG'
		});

	viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT3);
	
	console.log(ZLDproviderT3); */
	
	
	
	
	////////////////////////////////////////////////////////////
	// Orthophoto T4 (10 cm)
	////////////////////////////////////////////////////////////
		
	/* var ZLDproviderT4 = new Cesium.WebMapServiceImageryProvider({
		url: OrthoPhotoServerWMSURL,
		layers:'KvS_T4_Orthofoto_10cm_201803_RDNAP_new_JPEG'
		}); */

	//viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT4);
	
	//console.log(ZLDproviderT4);
	
	
	////////////////////////////////////////////////////////////
	// Orthophoto T5 is er niet?
	////////////////////////////////////////////////////////////
		
	
	
    ////////////////////////////////////////////////////////////
	// Orthophoto T6 (3 cm)
	////////////////////////////////////////////////////////////
		
	/* var ZLDproviderT6 = new Cesium.WebMapServiceImageryProvider({
		url: OrthoPhotoServerWMSURL,
		layers:'201908-01_KVS_T6_Ortho_003m_compressed'
		});

	viewer.scene.imageryLayers.addImageryProvider(ZLDproviderT6);
	
	console.log(ZLDproviderT6); */
	
	
	//////////////////////////////////////////////////////////////////////////
    // Loading Terrain: tiles t0, t1, t3, t4, t5 en tiles_t6_thieu (en tiles_scenario_t1) laden 
    //////////////////////////////////////////////////////////////////////////
    
	var myTerrainProvider = new Cesium.CesiumTerrainProvider({
         url : '../SHORE/tilesets/tiles_t1',
	  });
	  
	  // tiles_t0, tiles_t1, tiles_t3, tiles_t4, tiles_t5 en tiles_t6_thieu (en tiles_scenario_t1) laden 
	
	//alert("Tiles geladen?")
	console.log(myTerrainProvider);
			
	//viewer.scene.terrainProvider = myTerrainProvider;
	viewer.terrainProvider = myTerrainProvider;	
		
		
    // Enable depth testing so things behind the terrain disappear.
    viewer.scene.globe.depthTestAgainstTerrain = true; 

   	
	//////////////////////////////////////////////////////////////////////////
    // Configuring the Scene
    //////////////////////////////////////////////////////////////////////////

    // Enable lighting based on sun/moon positions
    viewer.scene.globe.enableLighting = true;

    // Create an initial camera view
   	//changed Thieu: Nisse Zeeland: Cesium.Cartesian3.fromDegrees(3.8518473,51.4557231, 0.0));
	//var initialPosition = new Cesium.Cartesian3.fromDegrees(3.67, 51.69, 2500);
	
	// Zoom to the Kop van Schouwen
	var initialPosition = new Cesium.Cartesian3.fromDegrees(3.70, 51.65, 2400);
	var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
	var homeCameraView = {
        destination : initialPosition,
        orientation : {
            heading : initialOrientation.heading,
            pitch : initialOrientation.pitch,
            roll : initialOrientation.roll
        }
    };
    
	// Set the initial view
	//viewer.scene.camera.setView(homeCameraView);
	
	viewer.scene.camera.flyTo({destination: new Cesium.Cartesian3.fromDegrees(3.69, 51.69, 2470)});
	
    // Add some camera flight animation options
   /*  homeCameraView.duration = 2.0;
    homeCameraView.maximumHeight = 2000;
    homeCameraView.pitchAdjustHeight = 2000;
    homeCameraView.endTransform = Cesium.Matrix4.IDENTITY; */
    
	// Override the default home button
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
        e.cancel = true;
        viewer.scene.camera.flyTo(homeCameraView);
    }); 
	
 

    //////////////////////////////////////////////////////////////////////////
    // Load 3D Tileset
    //////////////////////////////////////////////////////////////////////////

    // Load the NYC buildings tileset
    //var city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(75343) }));

	//var osm_buildings = viewer.scene.primitives.add(Cesium.createOsmBuildings());
	
	var osm_style     = new Cesium.Cesium3DTileStyle({color: {conditions: [["${feature['building']} === 'retail'", "color('#0000FF')"],
       								    	    ["${feature['building']} === 'school'", "color('#00FF00')"],
												["${feature['building']} === 'yes'", "color('#ffffaa')"],
												["${feature['building']} === 'office'", "color('#ff0000')"],
												[true, "color('#ffffff')"]]}});


    //var osm_buildings = viewer.scene.primitives.add(Cesium.createOsmBuildings({style: osm_style}));

	

	// Load the Netherlands tileset: 3D buildings NL (LOD1)
	//var nl_buildings = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: 'https://www.nederlandin3d.nl/viewer/datasource-data/83812e58-981e-4461-b338-c95aa7212722/tileset.json'}));

	// load the Netherlands 3D terrain
	//var nl_terrain = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: 'https://www.nederlandin3d.nl/viewer/datasource-data/882a9596-4d32-479a-a130-33cfbc713696/layer.json'}));
    
	
	// landmarks Zeeland
	//var landmarks = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: 'https://www.nederlandin3d.nl/zeeland/datasource-data/ee22bd93-ab47-4e41-9756-87edf4f3f612/tileset.json', show: true}));
	

 
    /// een 3d model
    /// Zoom to Exton, PA, USA
	/// zoom to Nisse
	///# lon, lat Nisse = 3.8518473,51.4557231
 // var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      // Cesium.Cartesian3.fromDegrees(3.8518473,51.4557231, 0.0));
      // var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
      // url : './Source/SampleData/Models/GroundVehicle.glb',
      // modelMatrix : modelMatrix,
      // scale : 200.0
    // }));

  

}());
