 //Omar alejandro mendoza aguilar
 //SIG web de la cuenca del río mocorito
 //Maestria en Ciencias de la Ingeniería
 // construcción del mapa

var map = new L.map('map', {
    center: new L.LatLng(25.28, -107.98),
    zoom: 10,
    maxZoom: 18,
    zoomControl: false, 
    layers: pod
});
  L.control.zoom({
     position:'topright'
}).addTo(map);

//<!--inicio de capas--> 
    //capa de municipios de Culiacan // capa del aguifero editada por omar
function getColor1(d) { 
		return d == 'Sinaloa' ? '#6bf310' : 
								  '#f75312';			//#FFEDA0  color naranja claro
		}
		
		function style1(feature) { 
		return { 
		fillColor: getColor1(
		 feature.properties.NOM_MUN), 
		 weight: 1, 
		 opacity: 1, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

 function popup1(feature, layer) {
		 if (feature.properties && feature.properties.NOM_MUN) {
		 layer.bindPopup(feature.properties.NOM_MUN); 
		 } 
		 } 

var geojson1 = L.geoJson(a_mcpsinaloa, {
			style: style1,
			onEachFeature: popup1
			});

//fin de municipios
//capa de ICA
function getColor1(d) { 
		return d == 'BOCA DE ARROYO (CNA-402)' ? '#f80707' : 
		d == 'POZO CNA-159' ? '#f5e619' : 
		d == 'POZO CNA 188' ? '#b2f546':
		d == 'POZO CNA 1' ? '#6242d6':
		d == 'POZO CNA-264 (ALHUEY)' ? '#95ff9e':
		d == 'POZO CNA-268 (AGUSTINA RAMIREZ)' ? '#f5550c':
		d == 'SAN ANTONIO - (SINALOA)' ? '#5b95eb':
						 '#FFEDA0';			//#FFEDA0  color naranja claro
		}
		
		function style1(feature) { 
		return { 
		fillColor: getColor1(
		 feature.properties.NOMBRE_DEL), 
		 weight: 1, 
		 opacity: 1, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

 function popup1(feature, layer) {
		 if (feature.properties && feature.properties.NOMBRE_DEL) {
		 layer.bindPopup(feature.properties.NOMBRE_DEL + "</br> ICA: " + feature.properties.ICA  
		 	 ); 
		 } 
		 } 

var geojson6 = L.geoJson(ICA, {
			style: style1,
			onEachFeature: popup1
			});//.addTo(map);

//fin de icas
//inicio de capa de acuifero omar
function getColor3(d) { 
		return d == 'RIO MOCORITO' ? '#8579ec3f' : 
						  '#e5e5e5';
		}
		
		function style3(feature) { 
		return { 
		fillColor: getColor3(
		 feature.properties.NOM_ACUI), 
		 weight: 1, 
		 opacity: 1, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

 function popup3(feature, layer) {
		 if (feature.properties && feature.properties.NOM_ACUI) {
		 layer.bindPopup("<b>SubCuenca:</b> " + feature.properties.NOM_ACUI + 
		 	"</br> Con un area de: " + feature.properties.AREA_KM2 + " km<sup>2</sup>"+ 
		 	"</br> Con una Disponibilidad de: " + feature.properties.Disponi + " hm<sup>3</sup>");
				
		 } 
		 }

var geojson3 = L.geoJson(acuiferoM, {
			style: style3,
			onEachFeature: popup3
			}).addTo(map);

//fin capa sub cuenca

//inicio de capa uso de suelo 2013 mod   modificado primero por omar
function getColor2(d) { 
		return d == 'Acuicola' ? '#5381a3' : 
		d == 'Agricola permanente' ? '#47ff45' : 
		d == 'Agricola temporal' ? '#d6ffa9':
		d == 'Bosque' ? '#1a8d0d':
		d == 'Cuerpo de agua' ? '#95f0ff':
		d == 'Manglar' ? '#ff7efa':
		d == 'Matorral' ? '#cccccc':
		d == 'Pastizal' ? '#fff464':
		d == 'Selva' ? '#ff0c4e':
		d == 'Sin Vegetacion Aparente' ? '#ffffff':
		d == 'Tular' ? '#eb9931':
		d == 'Urbano' ? '#060606':
						 '#FFEDA0';
		}
		
		function style2(feature) { 
		return { 
		fillColor: getColor2(
		 feature.properties.NAME), 
		 weight: 0.55, 
		 opacity: 0.8, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

		 function popup2(feature, layer) {
		 if (feature.properties && feature.properties.NAME) {
		 layer.bindPopup("<strong>Clasificación de uso de suelo de 2013</strong></br>"+"<b>Clase:</b> " + feature.properties.NAME +
		 	"</br> Con una extension total de: " + feature.properties.Area + " <strong>ha</strong>"+"</br><a style='text-decoration: none;' href='javascript:Abrir()'>Mas Información <i class='fas fa-tree'></a>");
				
		 } 
		 }

		 var geojson2 = L.geoJson(ClasifiMocorito13 , {
			style: style2,
			onEachFeature: popup2
			});//.addTo(map);

//fin de capa uso de suelo 2013 mod
//inicio de capa uso de suelo 2022 mod  (cambio 03 12 de maezo)
function getColor4(d){ 
		return d == 'Acuicola' ? '#5381a3' : 
		d == 'Agricola permanente' ? '#47ff45' : 
		d == 'Agricola temporal' ? '#d6ffa9':
		d == 'Bosque' ? '#1a8d0d':
		d == 'Cuerpo de agua' ? '#95f0ff':
		d == 'Manglar' ? '#ff7efa':
		d == 'Matorral' ? '#cccccc':
		d == 'Pastizal' ? '#fff464':
		d == 'Selva' ? '#ff0c4e':
		d == 'Sin Vegetacion Aparente' ? '#ffffff':
		d == 'Tular' ? '#eb9931':
		d == 'Urbano' ? '#060606':
						 '#FFEDA0';
		}
		
		function style4(feature) { 
		return { 
		fillColor: getColor4(
		 feature.properties.NAME), 
		 weight: 0.55, 
		 opacity: 0.8, 
		 color: 'black', 
		 dashArray: '0', 
		 fillOpacity: 0.7 
		 }; 
		 }

		 function popup4(feature, layer) {
		 if (feature.properties && feature.properties.NAME) {
		 layer.bindPopup("<strong>Clasificación de uso de suelo de 2022</strong></br>"+"<b>Clase:</b> " + feature.properties.NAME +
		 	"</br> Con una extension total de: " + feature.properties.Area + " <strong>ha</strong>"+"</br><a style='text-decoration: none;' href='javascript:Abrir()'>Mas Información <i class='fas fa-tree'></a>");
				
		 } 
		 }

		 var geojson4 = L.geoJson(ClasifiMocorito22, {
			style: style4,
			onEachFeature: popup4
			});//.addTo(map);

//fin de capa uso de suelo 2022 mod

//<!--fin de capas--> 

             //mapas base
              
                var minis=L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      	maxZoom: 18,
      	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
        
              
              var pod=L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      	maxZoom: 18,
      	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
        pod;//addTo(map);
          
        
              var mapycz2 =  L.tileLayer('http://m{s}.mapserver.mapy.cz/base-m/{z}-{x}-{y}',{ident:'mapycz',attribution:'&copy;Seznam.cz a.s., | &copy;OpenStreetMap <a href="http://mapy.cz"><img class="print" target="_blank" src="//api.mapy.cz/img/api/logo.png" style="cursor: pointer; position:relative;top: 5px;"></a>',maxZoom:20,subdomains:"1234"});
              var baseMap = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/gvenech.m13knc8e/{z}/{x}/{y}.png'); 
              var mapycz =  L.tileLayer('http://m{s}.mapserver.mapy.cz/base-m/{z}-{x}-{y}',{ident:'mapycz',attribution:'&copy;Seznam.cz a.s., | &copy;OpenStreetMap <a href="http://mapy.cz"><img class="print" target="_blank" src="//api.mapy.cz/img/api/logo.png" style="cursor: pointer; position:relative;top: 5px;"></a>',maxZoom:20,subdomains:"1234"});   
              var esri_img = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		  		attribution: 'Tiles &copy; &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
				}).addTo(map);


            var prec= L.OWM.precipitationClassic = L.OWM.precipitationClassic({showLegend: false, opacity: 0.5,appId: '8b816162ce03197c15265e47b0149f36'});
            var city = L.OWM.current({intervall: 5,showOwmStationLink: true,minZoom:2, lang: 'es', appId:"8b816162ce03197c15265e47b0149f36"});
   
    var baseMaps = {
    "OSM" : pod,
    "<b style=color:red;>M</b><b style=color:black;>APY.CZ":mapycz,
    "Satelite": esri_img
    };

    var groupedOverlays = {                                                              
    "<b style=color:rgb(220,31,37);>Clasificación de Uso de Suelo</b>": {
    
    "Uso de suelo 2013": geojson2,//omar
    
    "Uso de suelo 2022</br></br><img src='img/leyenda1.png' height=180px  style= 'margin-left: 25px'>": geojson4,//omar 2 8
  },

 // "<b style=color:rgb(220,31,37);>Simulación de Cambio de Uso de Suelo</b> <br>": {
  //  "Mapa de Simulacion 2049": geojson4,
  //},
 
  "<b style=color:rgb(220,31,37);>Capas de Interes</b> <br>": {
    "Municipios": geojson1,
   	"Acuifero": geojson3,
   	"ICA": geojson6,
  },

  "<b style=color:rgb(220,31,37);>Clima actual</b>": {
    "Clima actual":   city,
    "Precipitación": prec,
  } ,  

};
var sidebar = L.control.sidebar('sidebar').addTo(map);
sidebar.open('vrstvy');
   var panel= L.control.groupedLayers(baseMaps,groupedOverlays,{collapsed:false}).addTo(map);
    var htmlObject = panel.getContainer();
      var a = document.getElementById('seznamvrstev')
      function setParent(el, newParent){
        newParent.appendChild(el);
      }
      setParent(htmlObject, a);
             
var homebutton= L.easyButton('fa-home fa-lg', function()
{map.setView([25.40, -107.45],9);}, 'Posición Inicial',{ position: 'topright'});
homebutton.addTo(map);

         
            
          map.on('click', function(e) {
    $('#latInput').val(e.latlng.lat);
    $('#lngInput').val(e.latlng.lng);
    updateMarker(e.latlng.lat, e.latlng.lng);
});  
       
            
            var updateMarkerByInputs = function() {
	return updateMarker( $('#latInput').val() , $('#lngInput').val());
}
$('#latInput').on('input', updateMarkerByInputs);
$('#lngInput').on('input', updateMarkerByInputs);


     L.control.scale({position: 'bottomright', maxWidth:150, metric:true}).addTo(map);
     
        
            var tisk= L.control.browserPrint({position: 'topright'}).addTo(map);
        
            var miniMap = new L.Control.MiniMap(minis, { toggleDisplay: true, width:120, height:120, zoomLevelOffset:-4.5 }).addTo(map); // minimapa 
       
  L.Control.geocoder().addTo(map);

//////funciones que abren y cierran ventanas modales//////////////
 
        function Abrir(){
            document.getElementById("vent").style.display="block";
        }
        function cerrar(){
            document.getElementById("vent").style.display="none";
        }

        function Abrir_us(){
            document.getElementById("vent_us").style.display="block";
        }
        function cerrar_us(){
            document.getElementById("vent_us").style.display="none";
        }

        function Abrir_co(){
            document.getElementById("vent_co").style.display="block";
        }
        function cerrar_co(){
            document.getElementById("vent_co").style.display="none";
        }


 

       