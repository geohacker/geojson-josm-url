'use strict'
var turffc = require('turf-featurecollection');

module.exports = function (feature) {
    var fc = turffc(feature);
    var baseURL = "http://localhost:8111/load_object?new_layer=true&objects=";

    fc.features.forEach(function (f) {
        var prefix = Object.keys(f.properties).indexOf('_osm_way_id') == -1 ? 'n' : 'w';
        var osmID = f.properties._osm_way_id || f.properties._osm_node_id;
        f.properties['_josm_url'] = baseURL + prefix + osmID;
    });
    return fc;
};