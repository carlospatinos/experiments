 var rsr = Raphael('map', '744.09448819', '1052.3622047');
 var path3352 = rsr.path("m 9.0714331,6.1479154 0,1029.5713846 724.7142969,0 0,-1031.8954368 z");
 path3352.attr({
     id: 'path3352',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-opacity": '1',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none'
 }).data('id', 'path3352');
 
  TraceMap = rsr.set();
 TraceMap.attr({
     'id': 'TraceMap',
     'style': 'display:inline;opacity:0.5',
     'name': 'TraceMap'
 });
 
  exitPoints = rsr.set();
 var path4277 = rsr.path("m 668.72098,1030.1388 c 0,-9.428 0,-18.8561 0,-28.2842 0,-0.4801 0.22641,-7.62843 0,-8.08124 -0.42591,-0.85184 -1.59438,-1.16847 -2.0203,-2.02031 -0.26118,-0.52235 0,-10.68983 0,-12.12183 0,-0.95257 -0.0916,-10.00996 0,-10.10152 1.39336,-1.39336 3.77762,1.49432 4.04061,2.0203 0.30117,0.60234 0,1.34687 0,2.02031 0,0.67343 0,1.34687 0,2.0203 l 62.62946,0 0.41498,60.12869 z").attr({
     id: 'path4277',
     parent: 'exitPoints',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4277');
 
 exitPoints.attr({
     'id': 'exitPoints',
     'style': 'display:inline',
     'name': 'exitPoints'
 });
 
  meetingRooms = rsr.set();
 var path4159 = rsr.path("m 107.07616,22.006609 0,115.157381 c 51.93735,2.0203 107.14411,0 169.70563,2.0203 l -2.0203,-117.177681 z").attr({
     id: 'path4159',
     parent: 'meetingRooms',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4159');
 var path41591 = rsr.path("m 105.03341,882.61484 0,115.15739 c 51.93735,2.0203 107.14411,0 169.70563,2.0203 l -2.0203,-117.17769 z").attr({
     id: 'path4159-1',
     parent: 'meetingRooms',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path41591');
 meetingRooms.attr({
     'id': 'meetingRooms',
     'style': 'display:inline',
     'name': 'meetingRooms'
 });
 
 breakoutRooms = rsr.set();
 var path415910 = rsr.path("m 464.64771,460.37107 0,115.15739 c 51.93735,2.0203 107.14411,0 169.70563,2.0203 l -2.0203,-117.17769 z").attr({
     id: 'path4159-1-0',
     parent: 'breakoutRooms',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path415910');
 breakoutRooms.attr({
     'id': 'breakoutRooms',
     'style': 'display:inline',
     'name': 'breakoutRooms'
 });
 
  quietRooms = rsr.set();
 var path41980 = rsr.path("m 359.62719,32.10811 -2.0203,98.99495 80.8122,0 0,-101.01526 z").attr({
     id: 'path4198-0',
     parent: 'quietRooms',
     display: 'inline',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path41980');
 var path419849 = rsr.path("m 440.46516,30.12027 -2.0203,98.99494 80.8122,0 0,-101.01525 z").attr({
     id: 'path4198-4-9',
     parent: 'quietRooms',
     display: 'inline',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path419849');
 var path419899 = rsr.path("m 361.67327,902.89206 -2.0203,98.99504 80.8122,0 0,-101.01534 z").attr({
     id: 'path4198-9-9',
     parent: 'quietRooms',
     display: 'inline',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path419899');
 var path4198432 = rsr.path("m 444.50577,900.87176 -2.0203,98.99491 80.8122,0 0,-101.01521 z").attr({
     id: 'path4198-43-2',
     parent: 'quietRooms',
     display: 'inline',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4198432');
 quietRooms.attr({
     'id': 'quietRooms',
     'style': 'display:inline',
     'name': 'quietRooms'
 });
 
 desktops8 = rsr.set();
 var path4168 = rsr.path("m 109.09647,165.44828 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168',
     parent: 'desktops8',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4168');
 var path416864 = rsr.path("m 109.09647,208.88484 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-64',
     parent: 'desktops8',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path416864');
 desktops8.attr({
     'id': 'desktops8',
     'style': 'display:inline',
     'name': 'desktops8'
 });
 
 desktops7 = rsr.set();
 var path41685 = rsr.path("m 357.59399,166.45843 169.70564,0 0,42.4264 -169.70564,0 z").attr({
     id: 'path4168-5',
     parent: 'desktops7',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path41685');
 var path41686 = rsr.path("m 357.59398,208.88483 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-6',
     parent: 'desktops7',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path41686');
 desktops7.attr({
     'id': 'desktops7',
     'style': 'display:inline',
     'name': 'desktops7'
 });
 
 desktops1 = rsr.set();
 var path41681 = rsr.path("m 114.14723,336.66913 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-1',
     parent: 'desktops1',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path41681');
 var path4168644 = rsr.path("m 114.14723,380.10569 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-64-4',
     parent: 'desktops1',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4168644');
 desktops1.attr({
     'id': 'desktops1',
     'style': 'display:inline',
     'name': 'desktops1'
 });
 
  desktops2 = rsr.set();
 var path416852 = rsr.path("m 362.64475,337.67928 169.70564,0 0,42.4264 -169.70564,0 z").attr({
     id: 'path4168-5-2',
     parent: 'desktops2',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path416852');
 var path416866 = rsr.path("m 362.64474,380.10568 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-6-6',
     parent: 'desktops2',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path416866');
 desktops2.attr({
     'id': 'desktops2',
     'style': 'display:inline',
     'name': 'desktops2'
 });
 
  desktops3 = rsr.set();
 var path41684 = rsr.path("m 128.28937,589.20727 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-4',
     parent: 'desktops3',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path41684');
 var path4168646 = rsr.path("m 128.28937,632.64383 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-64-6',
     parent: 'desktops3',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4168646');
 desktops3.attr({
     'id': 'desktops3',
     'style': 'display:inline',
     'name': 'desktops3'
 });
 
  desktops4 = rsr.set();
 var path416856 = rsr.path("m 376.78689,590.21742 169.70564,0 0,42.4264 -169.70564,0 z").attr({
     id: 'path4168-5-6',
     parent: 'desktops4',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path416856');
 var path416860 = rsr.path("m 376.78688,632.64382 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-6-0',
     parent: 'desktops4',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path416860');
 desktops4.attr({
     'id': 'desktops4',
     'style': 'display:inline',
     'name': 'desktops4'
 });
 
  desktops5 = rsr.set();
 var path416869 = rsr.path("m 130.30967,732.64892 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-69',
     parent: 'desktops5',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path416869');
 var path4168648 = rsr.path("m 130.30967,776.08548 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-64-8',
     parent: 'desktops5',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4168648');
 desktops5.attr({
     'id': 'desktops5',
     'style': 'display:inline',
     'name': 'desktops5'
 });
 
  desktops6 = rsr.set();
 var path416855 = rsr.path("m 378.80719,733.65907 169.70564,0 0,42.4264 -169.70564,0 z").attr({
     id: 'path4168-5-5',
     parent: 'desktops6',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path416855');
 
 var path4168604 = rsr.path("m 378.80718,776.08547 169.70563,0 0,42.4264 -169.70563,0 z").attr({
     id: 'path4168-6-04',
     parent: 'desktops6',
     fill: 'none',
     "fill-rule": 'evenodd',
     stroke: '#000000',
     "stroke-width": '5',
     "stroke-linecap": 'butt',
     "stroke-linejoin": 'miter',
     "stroke-miterlimit": '4',
     "stroke-dasharray": 'none',
     "stroke-opacity": '1'
 }).data('id', 'path4168604');
 desktops6.attr({
     'id': 'desktops6',
     'style': 'display:inline',
     'name': 'desktops6'
 });
 var rsrGroups = [TraceMap, exitPoints, meetingRooms, breakoutRooms, quietRooms, desktops8, desktops7, desktops1, desktops2, desktops3, desktops4, desktops5, desktops6];
 TraceMap.push();
 exitPoints.push(path4277);
 meetingRooms.push(path4159, path41591);
 breakoutRooms.push(path415910);
 quietRooms.push(path41980, path419849, path419899, path4198432);
 desktops8.push(path4168, path416864);
 desktops7.push(path41685, path41686);
 desktops1.push(path41681, path4168644);
 desktops2.push(path416852, path416866);
 desktops3.push(path41684, path4168646);
 desktops4.push(path416856, path416860);
 desktops5.push(path416869, path4168648);
 desktops6.push(path416855, path4168604);
 
/*   for (var i = 0; i<rsrGroups.length; i++) {
	if(i==0){}
	else{
	var thisElement = rsrGroups[i];
	for (var i = 0; i<thisElement.length; i++) {
    thisElement[i].mouseover(function (e){
        this.node.style.opacity = 0.7
        document.getElementById('status').innerHTML = this.data('id');
    });

    thisElement[i].mouseout(function (e){
        this.node.style.opacity = 1
    });
	}
	}
 } */ 
 
 //Functions for hovering over rooms
 //ExitPoints
 for (var i = 0; i<exitPoints.length; i++) {
    exitPoints[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
    //    document.getElementById('status').innerHTML = this.data('id');
		document.getElementById('exitPoints').style.color = "red";
    });

    exitPoints[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('exitPoints').style.color = "black";
    });
 }
 
 //desktops8 = DeskTop8
	for (var i = 0; i<desktops8.length; i++) {
    desktops8[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('desktops8').style.color = "red"; 
    });

    desktops8[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops8').style.color = "black";
    });
}

//BreakoutRooms
for (var i = 0; i<breakoutRooms.length; i++) {
    breakoutRooms[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('breakoutRooms').style.color = "red"; 
    });

    breakoutRooms[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('breakoutRooms').style.color = "black";
    });
 }

 //QuietRooms
 for (var i = 0; i<quietRooms.length; i++) {
    quietRooms[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('quietRooms').style.color = "red"; 
    });

    quietRooms[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('quietRooms').style.color = "black";
    });
 }
 
  //DeskTop1
 for (var i = 0; i<desktops1.length; i++) {
    desktops1[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
        document.getElementById('desktops1').style.color = "red"; 
    });

    desktops1[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops1').style.color = "black";
    });
 }
 
   //DeskTop2
 for (var i = 0; i<desktops2.length; i++) {
    desktops2[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
        document.getElementById('desktops2').style.color = "red"; 
    });

    desktops2[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops2').style.color = "black";
    });
 }
 
    //DeskTop3
 for (var i = 0; i<desktops3.length; i++) {
    desktops3[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('desktops3').style.color = "red"; 
    });

    desktops3[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops3').style.color = "black";
   });
 }
 
     //DeskTop4
 for (var i = 0; i<desktops4.length; i++) {
    desktops4[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('desktops4').style.color = "red"; 
    });

    desktops4[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops4').style.color = "black";
   });
 }
 
     //DeskTop5
 for (var i = 0; i<desktops5.length; i++) {
    desktops5[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('desktops5').style.color = "red"; 
    });

    desktops5[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops5').style.color = "black";
   });
 }
 
     //DeskTop6
 for (var i = 0; i<desktops6.length; i++) {
    desktops6[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('desktops6').style.color = "red"; 
    });

    desktops6[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops6').style.color = "black";
   });
 }
 
      //""desktops7"
 for (var i = 0; i<desktops7.length; i++) {
    desktops7[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('desktops7').style.color = "red"; 
    });

    desktops7[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('desktops7').style.color = "black";
   });
 }
 
// meetingRooms = meetingRooms
 for (var i = 0; i<meetingRooms.length; i++) {
    meetingRooms[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="yellow";
		document.getElementById('meetingRooms').style.color = "red"; 
    });

    meetingRooms[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('meetingRooms').style.color = "black";
   });
 }
 
 //TraceMap
  for (var i = 0; i<TraceMap.length; i++) {
    TraceMap[i].mouseover(function (e){
        this.node.style.opacity = 0.7
		this.node.style.fill="red";
		document.getElementById('zone6').style.color = "red"; 
    });

    TraceMap[i].mouseout(function (e){
        this.node.style.opacity = 1
		this.node.style.fill="none";
		document.getElementById('zone6').style.color = "black";
   });
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //Functions for hover on/off legend
 //BreakoutRooms
 function highlightBreakoutRooms(){
	breakoutRooms.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 function hoverOffBreakoutRooms(){
	breakoutRooms.attr({
    fill: 'none',
    opacity: 1
	});
 }
 //QuietRooms
 function highlightQuietRooms(){
	quietRooms.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffQuietRooms(){
	quietRooms.attr({
    fill: 'none',
    opacity: 1
	});
 }
 
 //MeetingRooms
 function highlightMeetingRooms(){
	meetingRooms.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffMeetingRooms(){
	meetingRooms.attr({
    fill: 'none',
    opacity: 1
	});
 }
 
  //ExitPoints
 function highlightExitPoints(){
	exitPoints.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffExitPoints(){
	exitPoints.attr({
    fill: 'none',
    opacity: 1
	});
 }

    //Desktops1
 function highlightDesktops1(){
	desktops1.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops1(){
	desktops1.attr({
    fill: 'none',
    opacity: 1
	});
 } 
   //Desktops2
 function highlightDesktops2(){
	desktops2.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops2(){
	desktops2.attr({
    fill: 'none',
    opacity: 1
	});
 }
 
    //Desktops3
 function highlightDesktops3(){
	desktops3.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops3(){
	desktops3.attr({
    fill: 'none',
    opacity: 1
	});
 }
 
    //Desktops4
 function highlightDesktops4(){
	desktops4.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops4(){
	desktops4.attr({
    fill: 'none',
    opacity: 1
	});
 }
    //Desktops5
 function highlightDesktops5(){
	desktops5.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops5(){
	desktops5.attr({
    fill: 'none',
    opacity: 1
	});
 }
    //Desktops6
 function highlightDesktops6(){
	desktops6.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops6(){
	desktops6.attr({
    fill: 'none',
    opacity: 1
	});
 }
    //Desktops7
 function highlightDesktops7(){
	desktops7.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops7(){
	desktops7.attr({
    fill: 'none',
    opacity: 1
	});
 }
    //Desktops8
 function highlightDesktops8(){
	desktops8.attr({
    fill: 'yellow',
    opacity: 0.7
	});
 }
 
 function hoverOffDesktops8(){
	desktops8.attr({
    fill: 'none',
    opacity: 1
	});
 }