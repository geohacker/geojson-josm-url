'use strict'

module.exports = function (geojson) {
    var baseURL = "http://localhost:8111/load_object?new_layer=true&objects=";

    var featuresLength = geojson.features.length;
    geojson.features.forEach(function (f) {
        var prefix = Object.keys(f.properties).indexOf('_osm_way_id') == -1 ? 'n' : 'w';
        var osmID = f.properties._osm_way_id || f.properties._osm_node_id;
        f.properties['_josm_url'] = baseURL + prefix + osmID;
        f.properties['_josm_link'] = '<a href="' + f.properties['_josm_url'] + '">Open in JOSM</a>';
    });
    return geojson;
};
