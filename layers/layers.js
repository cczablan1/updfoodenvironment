var wms_layers = [];


        var lyr_PositronBasemap_0 = new ol.layer.Tile({
            'title': 'Positron Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_UPCampus_1 = new ol.format.GeoJSON();
var features_UPCampus_1 = format_UPCampus_1.readFeatures(json_UPCampus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPCampus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPCampus_1.addFeatures(features_UPCampus_1);
var lyr_UPCampus_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPCampus_1, 
                style: style_UPCampus_1,
                interactive: false,
                title: '<img src="styles/legend/UPCampus_1.png" /> UP Campus'
            });
var format_GyudFood_2 = new ol.format.GeoJSON();
var features_GyudFood_2 = format_GyudFood_2.readFeatures(json_GyudFood_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GyudFood_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GyudFood_2.addFeatures(features_GyudFood_2);
var lyr_GyudFood_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GyudFood_2, 
                style: style_GyudFood_2,
                interactive: true,
                title: '<img src="styles/legend/GyudFood_2.png" /> GyudFood'
            });
var format_Food_3 = new ol.format.GeoJSON();
var features_Food_3 = format_Food_3.readFeatures(json_Food_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Food_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Food_3.addFeatures(features_Food_3);
var lyr_Food_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Food_3, 
                style: style_Food_3,
                interactive: true,
                title: '<img src="styles/legend/Food_3.png" /> Food'
            });
var format_ConvenienceStore_4 = new ol.format.GeoJSON();
var features_ConvenienceStore_4 = format_ConvenienceStore_4.readFeatures(json_ConvenienceStore_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConvenienceStore_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConvenienceStore_4.addFeatures(features_ConvenienceStore_4);
var lyr_ConvenienceStore_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConvenienceStore_4, 
                style: style_ConvenienceStore_4,
                interactive: true,
                title: '<img src="styles/legend/ConvenienceStore_4.png" /> Convenience Store'
            });
var format_GreenGrocery_5 = new ol.format.GeoJSON();
var features_GreenGrocery_5 = format_GreenGrocery_5.readFeatures(json_GreenGrocery_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenGrocery_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenGrocery_5.addFeatures(features_GreenGrocery_5);
var lyr_GreenGrocery_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreenGrocery_5, 
                style: style_GreenGrocery_5,
                interactive: true,
                title: '<img src="styles/legend/GreenGrocery_5.png" /> Green Grocery'
            });

lyr_PositronBasemap_0.setVisible(true);lyr_UPCampus_1.setVisible(true);lyr_GyudFood_2.setVisible(true);lyr_Food_3.setVisible(true);lyr_ConvenienceStore_4.setVisible(true);lyr_GreenGrocery_5.setVisible(true);
var layersList = [lyr_PositronBasemap_0,lyr_UPCampus_1,lyr_GyudFood_2,lyr_Food_3,lyr_ConvenienceStore_4,lyr_GreenGrocery_5];
lyr_UPCampus_1.set('fieldAliases', {'Bgy_Name': 'Bgy_Name', });
lyr_GyudFood_2.set('fieldAliases', {'name': 'name', });
lyr_Food_3.set('fieldAliases', {'name': 'name', });
lyr_ConvenienceStore_4.set('fieldAliases', {'name': 'name', });
lyr_GreenGrocery_5.set('fieldAliases', {'name': 'name', });
lyr_UPCampus_1.set('fieldImages', {'Bgy_Name': 'TextEdit', });
lyr_GyudFood_2.set('fieldImages', {'name': 'TextEdit', });
lyr_Food_3.set('fieldImages', {'name': 'TextEdit', });
lyr_ConvenienceStore_4.set('fieldImages', {'name': 'TextEdit', });
lyr_GreenGrocery_5.set('fieldImages', {'name': 'TextEdit', });
lyr_UPCampus_1.set('fieldLabels', {'Bgy_Name': 'no label', });
lyr_GyudFood_2.set('fieldLabels', {'name': 'no label', });
lyr_Food_3.set('fieldLabels', {'name': 'no label', });
lyr_ConvenienceStore_4.set('fieldLabels', {'name': 'no label', });
lyr_GreenGrocery_5.set('fieldLabels', {'name': 'no label', });
lyr_GreenGrocery_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});