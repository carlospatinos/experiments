var rsr = Raphael('map', 800, 600);
var zonesLayer = rsr.set();
var fullZ5 = rsr.rect(41.304966, 25.645388, 552.45392, 140.69504).attr({
    id: 'fullZ5',
    x: '41.304966',
    y: '25.645388',
    parent: 'zonesLayer',
    fill: '#b3b3b3',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'fullZ5');
var fullZ6 = rsr.rect(38.723404, 184.41135, 553.74469, 144.56738).attr({
    id: 'fullZ6',
    x: '38.723404',
    y: '184.41135',
    parent: 'zonesLayer',
    fill: '#b3b3b3',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'fullZ6');
var fullZ7 = rsr.rect(45.177307, 356.08511, 546, 117.46099).attr({
    id: 'fullZ7',
    x: '45.177307',
    y: '356.08511',
    parent: 'zonesLayer',
    fill: '#b3b3b3',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'fullZ7');
zonesLayer.attr({
    'id': 'zonesLayer',
    'style': 'display:inline',
    'name': 'zonesLayer'
});
var zoneFiveDesktops = rsr.set();
var be126 = rsr.rect(76.156029, 65.659569, 49.049644, 50.340427).attr({
    id: 'be126',
    x: '76.156029',
    y: '65.659569',
    parent: 'zoneFiveDesktops',
    fill: '#2b0000',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'be126');
var be127 = rsr.rect(180.70923, 68.241135, 54.212765, 49.049644).attr({
    id: 'be127',
    x: '180.70923',
    y: '68.241135',
    parent: 'zoneFiveDesktops',
    fill: '#2b0000',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'be127');
var be128 = rsr.rect(280.0993, 70.822693, 58.085106, 51.631207).attr({
    id: 'be128',
    x: '280.0993',
    y: '70.822693',
    parent: 'zoneFiveDesktops',
    fill: '#2b0000',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'be128');
var be129 = rsr.rect(393.68796, 69.531914, 55.503548, 54.212765).attr({
    id: 'be129',
    x: '393.68796',
    y: '69.531914',
    parent: 'zoneFiveDesktops',
    fill: '#2b0000',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'be129');
var be130 = rsr.rect(507.27661, 75.985809, 63.248226, 55.503548).attr({
    id: 'be130',
    x: '507.27661',
    y: '75.985809',
    parent: 'zoneFiveDesktops',
    fill: '#2b0000',
    'stroke-width': '0',
    'stroke-opacity': '1'
}).data('id', 'be130');
zoneFiveDesktops.attr({
    'id': 'zoneFiveDesktops',
    'style': 'display:inline',
    'name': 'zoneFiveDesktops'
});
//var rsrGroups = [zonesLayer, zoneFiveDesktops];
//zonesLayer.push(fullZ5, fullZ6, fullZ7);
//zoneFiveDesktops.push(be126, be127, be128, be129, be130);

var rsrGroups = [zonesLayer, zoneFiveDesktops];
zonesLayer.push(fullZ5, fullZ6, fullZ7);
zoneFiveDesktops.push(be126, be127, be128, be129, be130);

fullZ5.node.setAttribute('fill', 'gold');

for (var i = 0; i<zonesLayer.length; i++) {
    zonesLayer[i].mouseover(function (e){
        this.node.style.opacity = 0.7
        document.getElementById('region-name').innerHTML = this.data('id');
    });

    zonesLayer[i].mouseout(function (e){
        this.node.style.opacity = 1
    });
}

