/* *************** Cambio del la malla del mundo ******************* */

//Selecciona las clases de los check de la malla
// let selectCheckMun = document.querySelectorAll('.leaflet-control-layers-selector');

// selectCheckMun.forEach(element => {
//     element.addEventListener("change",function (event) {
//         if (selectCheckMun[0].checked === true && selectCheckMun[1].checked === false) {
//             changeMun(0);
//         } else if (selectCheckMun[1].checked === true && selectCheckMun[0].checked === false) {
//             changeMun(1);
//         } else if (selectCheckMun[0].checked === true && selectCheckMun[1].checked === true){
//             changeMun(0);
//         } else {
//             layer_Mun_atlantico_2.remove();
//         }
//     })
// });

// function changeMun(valueJson) {

//     let style_Mun;

//     if (valueJson === 0) {
//         style_Mun = {
//             pane: 'pane_Mun_atlantico_2',
//             opacity: 1,
//             color: '#33691e',
//             // color: '#ffff',
//             dashArray: '',
//             lineCap: 'square',
//             lineJoin: 'bevel',
//             weight: 2.0,
//             fillOpacity: 0,
//             interactive: false,
//         }
//     } else if (valueJson === 1) {
//         style_Mun = {
//             pane: 'pane_Mun_atlantico_2',
//             opacity: 1,
//             // color: '#33691e',
//             color: '#ffff',
//             dashArray: '',
//             lineCap: 'square',
//             lineJoin: 'bevel',
//             weight: 2.0,
//             fillOpacity: 0,
//             interactive: false,
//         }
//     }

//     // //Elimina la malla del atlantico , ya creada
//     layer_Mun_atlantico_2.remove();

//     layer_Mun_atlantico_2 = new L.geoJson(json_Mun_atlantico_2[valueJson], {
//         attribution: '',
//         interactive: false,
//         dataVar: 'json_Mun_atlantico_2',
//         layerName: 'layer_Mun_atlantico_2',
//         pane: 'pane_Mun_atlantico_2',
//         style: style_Mun,
//     });

//     bounds_group.addLayer(layer_Mun_atlantico_2);
//     map.addLayer(layer_Mun_atlantico_2);
// }

/*  No se que paso aquí ? */

function getColorById (id){
    switch (id){
        case 1: return "#AA3210"
    }
}

function styleById (feature) {
    return {
        pane: 'municipios',
        fillColor: getColorById(feature.properties.id),
        fillOpacity: 0,
        opacity: 1,
        weight: 1,
        interactive: true
    };
}

function changeImage(imageSrc) {
    const currentImage = document.getElementById('currentImage');
    currentImage.src = imageSrc; // Cambia la fuente de la imagen principal
}

// Hover //
function highlightFeature(e) {
    var layer = e.target;
        layer.setStyle({
            weight: 3,
            color: "none",
            fillOpacity: 0.3,
        });
}
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer){
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
}

map.createPane("hover");
map.getPane("hover").style.zIndex=500;

map.createPane("municipios");
map.getPane("municipios").style.zIndex=400;

var geojson = L.geoJson(json_Mun_atlantico_2, {
    style: styleById,
    onEachFeature: onEachFeature,
}).addTo(map);


var layer_municipios_atlantico = L.geoJson(json_Mun_atlantico_2, {
    style: styleById,
}).addTo(map);


map.fitBounds(layer_municipios_atlantico.getBounds());
map.fitBounds(geojson.getBounds());

var layer_municipios_atlantico = L.geoJson(json_Mun_atlantico_2, {
    style: styleById,
    onEachFeature: onEachFeature
}).addTo(map);


/* ************ Puntos y rutas  ***************** */

// Obtener el valor del input
// let selectOpcion = document.getElementById("selectOpcion");

// // Escuchar el evento 'message' para recibir datos de la página principal
// window.addEventListener('message', function(event) {
//     const mensaje = event.data;
//     changeRouteSpot(mensaje)
// });

// function changeRouteSpot(value) {

//     let jsonSpot = null;
//     let jsonRoute = null;
//     // let jsonpoint = null;

//     if (value === "value0"){
//         jsonSpot = null;
//         jsonRoute = null;

//     } else if (value === "value1") {
//         // jsonpoint = json_Puntosturisticos_3[0];
//         jsonSpot = json_Puntosturisticos_3[1];
//         jsonRoute = json_Ruta_4[1];

//     } else if (value === "value2") {
//         // jsonpoint = json_Puntosturisticos_3[0];
//         jsonSpot = json_Puntosturisticos_3[2];
//         jsonRoute = json_Ruta_4[2];

//     } else if (value === "value3") {
//         // jsonpoint = json_Puntosturisticos_3[0];
//         jsonSpot = json_Puntosturisticos_3[3];
//         jsonRoute = json_Ruta_4[3];

//     } else if (value ==="value4"){
//         // jsonpoint = json_Puntosturisticos_3[0];
//         jsonSpot = json_Puntosturisticos_3[4];
//         jsonRoute = json_Ruta_4[4];
        
//     } else if (value ==="value5"){
//         // jsonpoint = json_Puntosturisticos_3[0];
//         jsonSpot = json_Puntosturisticos_3[5];
//         jsonRoute = json_Ruta_4[5];
//     }

//     // Remueve los marcardores
//     geojsonLayer.remove();

//     //Marcadores
//     geojsonLayer = new L.geoJson(jsonSpot, {
//         attribution: '',
//         interactive: true,
//         dataVar: 'json_Puntosturisticos_3',
//         layerName: 'geojsonLayer',
//         pane: 'pane_Puntosturisticos_3',
//         onEachFeature: modal_Puntosturisticos_4,
//         pointToLayer: function (feature, latlng) {
//             return L.marker(latlng, { icon: style_Puntosturisticos_3_0(feature) });
//         },
//     });
//     bounds_group.addLayer(geojsonLayer);
//     map.addLayer(geojsonLayer);


//     //Remueve las rutas
//     layer_Ruta_4.remove();

//     //Rutas
//     layer_Ruta_4 = new L.geoJson(jsonRoute, {
//         attribution: '',
//         interactive: false,
//         dataVar: 'json_Ruta_4',
//         layerName: 'layer_Ruta_4',
//         pane: 'pane_Ruta_4',
//         // onEachFeature: pop_Ruta_4,
//         style: style_Ruta_4_0,
//     });
//     bounds_group.addLayer(layer_Ruta_4);
//     map.addLayer(layer_Ruta_4);

//     //Marcadores - puntos
//     // geojsonPoint = new L.geoJson(jsonpoint, {
//     //     attribution: '',
//     //     interactive: true,
//     //     dataVar: 'json_Puntosturisticos_3',
//     //     layerName: 'geojsonPoint',
//     //     pane: 'pane_Puntosturisticos_3',
//     //     onEachFeature: modal_Puntosturisticos_4,
//     //     pointToLayer: function (feature, latlng) {
//     //         return L.marker(latlng, { icon: style_Puntosturisticos_3_0(feature) });
//     //     },
//     // });
//     // bounds_group.addLayer(geojsonPoint);
//     // map.addLayer(geojsonPoint);

// }

// changeRouteSpot(null);

/* Modal */ 

// Para mostrar el modal
function showModal( name, img, titular,description, url, lugarA, lugarB, lugarC, lugarD, DescripA, DescripB, DescripC, DescripD ) {

    const modal = document.getElementById("myModal");
    const placeName = document.getElementById("place-name");
    const placeImg1 = document.getElementById("place-img1");
    const placeImg2 = document.getElementById("place-img2");
    // const placeImg3 = document.getElementById("place-img3");
    // const placeImg4 = document.getElementById("place-img4");
    const placethumb1 = document.getElementById ("thumb1");
    const placethumb2 = document.getElementById ("thumb2");
    // const placethumb3 = document.getElementById ("thumb3");
    // const placethumb4 = document.getElementById ("thumb4");
    const placeDescription = document.getElementById("place-description");
    const placeTitular = document.getElementById("place-titular");
    // const lugar1 = document.getElementById("lugar1");
    // const lugar2 = document.getElementById("lugar2");
    // const lugar3 = document.getElementById("lugar3");
    // const lugar4 = document.getElementById("lugar4");
    // const descrip1 = document.getElementById("descrip1");
    // const descrip2 = document.getElementById("descrip2");
    // const descrip3 = document.getElementById("descrip3");
    // const descrip4 = document.getElementById("descrip4");
    const placeUrl = document.getElementById("place-url");

    placeName.textContent = name;
    placeImg1.src = img[0];
    placeImg2.src = img[1];
    // placeImg3.src = img[2];
    // placeImg4.src = img[3];
    placethumb1.src = img[0];
    placethumb2.src = img[1];
    // placethumb3.src = img[2];
    // placethumb4.src = img[3];
    placeTitular.textContent = titular;
    placeDescription.textContent = description;

    // lugar1.textContent = lugarA;
    // lugar2.textContent = lugarB;
    // lugar3.textContent = lugarC;
    // lugar4.textContent = lugarD;
    // descrip1.textContent = DescripA;
    // descrip2.textContent = DescripB;
    // descrip3.textContent = DescripC;
    // descrip4.textContent = DescripD;

    placeUrl.href = url;
    placeUrl.target = '_blank';
    modal.style.display = "block";
}

// Cerrar el modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* ********* Carrusel *********** */

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide *100 ;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

showSlide(currentSlide);



/* Popup */

const popupContainer = document.getElementById('popupContainer');

function showPopup(event) {
    popupContainer.style.display = 'block';
    popupContainer.style.left = `${event.layerPoint.x}px`; 
    popupContainer.style.top = `${event.layerPoint.y}px`;
}

function closePopup(event) {
    popupContainer.style.display = 'none';
}