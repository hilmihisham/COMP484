var map;

// variable of all rectangles on the map
var jacaranda;
var chaparral;
var sierraquad;
var campusstore;
var reccenter;

// keep track of which question the user is currently at
var numclicks = 1;

// keep track of correct answer
var correctAnswer = 0;

// initialize Google Maps
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 34.238944, lng: -118.527500},
        zoom: 17,
        disableDoubleClickZoom: true,
        zoomControl: false,
        mapTypeControl: false,
        draggable: false,
        keyboardShortcuts: false,
        streetViewControl: false,
    });

    map.setOptions({styles: styles["hide"]});
    
    // add double-click listener to map
    map.addListener("dblclick", function(e) {
        drawRectangle(e.latLng, map);
    })
}

// hide building markings and road names
var styles = {
    hide: [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{visibility: "off"}]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{visibility: "off"}]
        }
    ]
};

// draw rectangle of every specified building
function drawRectangle(latLng, map) {

    switch(numclicks) {
        case 1:
            // set bounds for jacaranda (LatLngBounds(sw, ne))
            var jacBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.240997, -118.529400),
                new google.maps.LatLng(34.242119, -118.527800)
            );
            // create rectangle
            jacaranda = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: jacBounds
            });
            // if we click on the correct building, green rectangle
            if (jacBounds.contains(latLng)) {
                jacaranda.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showRightWrong(1, true);
            }
            else { // wrong building, red rectangle
                jacaranda.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showRightWrong(1, false)
            }
            // go to next question on list
            numclicks++;
            // show result
            showNumResult();
            break;
        case 2:
            // LatLngBounds(sw, ne)
            var chapBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.237850, -118.527250),
                new google.maps.LatLng(34.238600, -118.526700)
            );
            // create rectangle
            chaparral = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: chapBounds
            });
            // if we click on the correct building, green rectangle
            if (chapBounds.contains(latLng)) {
                chaparral.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showRightWrong(2, true);
            }
            else { // wrong building, red rectangle
                chaparral.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showRightWrong(2, false);
            }
            // go to next question on list
            numclicks++;
            // show result
            showNumResult();
            break;
        case 3:
            // LatLngBounds(sw, ne)
            var sierraBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.237900, -118.529680),
                new google.maps.LatLng(34.239120, -118.528940)
            );
            // create rectangle
            sierraquad = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: sierraBounds
            });
            // if we click on the correct building, green rectangle
            if (sierraBounds.contains(latLng)) {
                sierraquad.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showRightWrong(3, true);
            }
            else { // wrong building, red rectangle
                sierraquad.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showRightWrong(3, false);
            }
            // go to next question on list
            numclicks++;
            // show result
            showNumResult();
            break;
        case 4:
            // LatLngBounds(sw, ne)
            var storeBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.237000, -118.528750),
                new google.maps.LatLng(34.237760, -118.527600)
            );
            // create rectangle
            campusstore = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: storeBounds
            });
            // if we click on the correct building, green rectangle
            if (storeBounds.contains(latLng)) {
                campusstore.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showRightWrong(4, true);
            }
            else { // wrong building, red rectangle
                campusstore.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showRightWrong(4, false);
            }
            // go to next question on list
            numclicks++;
            // show result
            showNumResult();
            break;
        case 5:
            // LatLngBounds(sw, ne)
            var reccBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(34.239300, -118.525200),
                new google.maps.LatLng(34.240680, -118.524650)
            );
            // create rectangle
            reccenter = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: reccBounds
            });
            // if we click on the correct building, green rectangle
            if (reccBounds.contains(latLng)) {
                reccenter.setOptions({
                    strokeColor: "#008000",
                    fillColor: "#008000"    
                });
                correctAnswer++;
                showRightWrong(5, true);
            }
            else { // wrong building, red rectangle
                reccenter.setOptions({
                    strokeColor: "#FF0000",
                    fillColor: "#FF0000"
                });
                showRightWrong(5, false);
            }
            // go to next question on list
            numclicks++;
            // show result
            showNumResult();
            break;
        default:
            break;
    }
}

function showRightWrong(qnum, correct) {
    if (correct == true)
        document.getElementById("result" + qnum).innerHTML = "✔";
    else
        document.getElementById("result" + qnum).innerHTML = "✖";
}

function showNumResult() {
    document.getElementById("correctCount").innerHTML = correctAnswer;
}
