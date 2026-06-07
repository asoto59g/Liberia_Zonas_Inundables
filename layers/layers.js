var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Curvas_1k_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_1/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "curvas_1000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Curvas_1k',
                            popuplayertitle: 'Curvas_1k',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curvas_1k_1, 0]);
var lyr_CurvasdeNivel_25K_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Curvas_de_Nivel_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Curvas de Nivel_25K',
                            popuplayertitle: 'Curvas de Nivel_25K',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CurvasdeNivel_25K_2, 0]);
var format_Caudalesmaximosxcuenca_3 = new ol.format.GeoJSON();
var features_Caudalesmaximosxcuenca_3 = format_Caudalesmaximosxcuenca_3.readFeatures(json_Caudalesmaximosxcuenca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caudalesmaximosxcuenca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caudalesmaximosxcuenca_3.addFeatures(features_Caudalesmaximosxcuenca_3);
var lyr_Caudalesmaximosxcuenca_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caudalesmaximosxcuenca_3, 
                style: style_Caudalesmaximosxcuenca_3,
                popuplayertitle: 'Caudales maximos x cuenca',
                interactive: true,
                title: '<img src="styles/legend/Caudalesmaximosxcuenca_3.png" /> Caudales maximos x cuenca'
            });
var format_SubCuencasCLiberia_4 = new ol.format.GeoJSON();
var features_SubCuencasCLiberia_4 = format_SubCuencasCLiberia_4.readFeatures(json_SubCuencasCLiberia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubCuencasCLiberia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubCuencasCLiberia_4.addFeatures(features_SubCuencasCLiberia_4);
var lyr_SubCuencasCLiberia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubCuencasCLiberia_4, 
                opacity: 0.4,
                style: style_SubCuencasCLiberia_4,
                popuplayertitle: 'Sub Cuencas C Liberia',
                interactive: true,
    title: 'Sub Cuencas C Liberia<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_0.png" /> Queb. El Panteon<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_1.png" /> Queb. La Caraña<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_2.png" /> Queb. Los Piches<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_3.png" /> Queb. Los Piches Principal<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_4.png" /> Rio Claro<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_5.png" /> Rio La Arena<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_6.png" /> Rio Liberia Abajo<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_7.png" /> Rio Liberia Ciudad<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_8.png" /> Rio Salto Presa Pelon<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_9.png" /> Rio Santa Ines<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_10.png" /> Rio Tempisque Puente Guardia<br />\
    <img src="styles/legend/SubCuencasCLiberia_4_11.png" /> <br />' });
var format_RiosSubcuencasTempisque_5 = new ol.format.GeoJSON();
var features_RiosSubcuencasTempisque_5 = format_RiosSubcuencasTempisque_5.readFeatures(json_RiosSubcuencasTempisque_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosSubcuencasTempisque_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSubcuencasTempisque_5.addFeatures(features_RiosSubcuencasTempisque_5);
var lyr_RiosSubcuencasTempisque_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSubcuencasTempisque_5, 
                style: style_RiosSubcuencasTempisque_5,
                popuplayertitle: 'Rios Subcuencas Tempisque',
                interactive: true,
    title: 'Rios Subcuencas Tempisque<br />\
    <img src="styles/legend/RiosSubcuencasTempisque_5_0.png" /> CANAL<br />\
    <img src="styles/legend/RiosSubcuencasTempisque_5_1.png" /> QUEBRADA<br />\
    <img src="styles/legend/RiosSubcuencasTempisque_5_2.png" /> QUEBRADA INTERMITENTE<br />\
    <img src="styles/legend/RiosSubcuencasTempisque_5_3.png" /> RIO<br />\
    <img src="styles/legend/RiosSubcuencasTempisque_5_4.png" /> <br />' });
var format_Zonasproblema_6 = new ol.format.GeoJSON();
var features_Zonasproblema_6 = format_Zonasproblema_6.readFeatures(json_Zonasproblema_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasproblema_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasproblema_6.addFeatures(features_Zonasproblema_6);
var lyr_Zonasproblema_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasproblema_6, 
                style: style_Zonasproblema_6,
                popuplayertitle: 'Zonas problema',
                interactive: true,
                title: '<img src="styles/legend/Zonasproblema_6.png" /> Zonas problema'
            });

lyr_googlesatellitehybrid_0.setVisible(true);lyr_Curvas_1k_1.setVisible(true);lyr_CurvasdeNivel_25K_2.setVisible(true);lyr_Caudalesmaximosxcuenca_3.setVisible(true);lyr_SubCuencasCLiberia_4.setVisible(true);lyr_RiosSubcuencasTempisque_5.setVisible(true);lyr_Zonasproblema_6.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,lyr_Curvas_1k_1,lyr_CurvasdeNivel_25K_2,lyr_Caudalesmaximosxcuenca_3,lyr_SubCuencasCLiberia_4,lyr_RiosSubcuencasTempisque_5,lyr_Zonasproblema_6];
lyr_Caudalesmaximosxcuenca_3.set('fieldAliases', {'qc_id': 'qc_id', 'cuenca': 'cuenca', 'SumAreaHa': 'SumAreaHa', 'Longm': 'Longm', 'Elevsupmsnm': 'Elevsupmsnm', 'Elevinfmsnm': 'Elevinfmsnm', 'Tcmin': 'Tcmin', 'i_mm/hr': 'i_mm/hr', 'S%': 'S%', 'Tr': 'Tr', 'CN': 'CN', 'Qmax': 'Qmax', });
lyr_SubCuencasCLiberia_4.set('fieldAliases', {'qc_id': 'qc_id', 'cuenca': 'cuenca', 'areatotal': 'areatotal', });
lyr_RiosSubcuencasTempisque_5.set('fieldAliases', {'qc_id': 'qc_id', 'nom_objeto': 'nom_objeto', 'origen': 'origen', 'codigo': 'codigo', 'nombre': 'nombre', 'orden': 'orden', 'longitud': 'longitud', });
lyr_Zonasproblema_6.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_Caudalesmaximosxcuenca_3.set('fieldImages', {'qc_id': 'TextEdit', 'cuenca': 'TextEdit', 'SumAreaHa': 'TextEdit', 'Longm': 'TextEdit', 'Elevsupmsnm': 'TextEdit', 'Elevinfmsnm': 'TextEdit', 'Tcmin': 'TextEdit', 'i_mm/hr': 'TextEdit', 'S%': 'TextEdit', 'Tr': 'TextEdit', 'CN': 'TextEdit', 'Qmax': 'TextEdit', });
lyr_SubCuencasCLiberia_4.set('fieldImages', {'qc_id': 'TextEdit', 'cuenca': 'TextEdit', 'areatotal': 'TextEdit', });
lyr_RiosSubcuencasTempisque_5.set('fieldImages', {'qc_id': '', 'nom_objeto': 'TextEdit', 'origen': 'TextEdit', 'codigo': 'TextEdit', 'nombre': 'TextEdit', 'orden': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Zonasproblema_6.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', });
lyr_Caudalesmaximosxcuenca_3.set('fieldLabels', {'qc_id': 'no label', 'cuenca': 'no label', 'SumAreaHa': 'no label', 'Longm': 'no label', 'Elevsupmsnm': 'no label', 'Elevinfmsnm': 'no label', 'Tcmin': 'no label', 'i_mm/hr': 'no label', 'S%': 'no label', 'Tr': 'no label', 'CN': 'no label', 'Qmax': 'no label', });
lyr_SubCuencasCLiberia_4.set('fieldLabels', {'qc_id': 'no label', 'cuenca': 'no label', 'areatotal': 'no label', });
lyr_RiosSubcuencasTempisque_5.set('fieldLabels', {'qc_id': 'no label', 'nom_objeto': 'no label', 'origen': 'no label', 'codigo': 'no label', 'nombre': 'no label', 'orden': 'no label', 'longitud': 'no label', });
lyr_Zonasproblema_6.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', });
lyr_Zonasproblema_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});