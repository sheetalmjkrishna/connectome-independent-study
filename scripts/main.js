"use strict";function main(){!function(e){var n=(performance.now(),new Graph(e));performance.now();performance.now();var t=[],a=[],l=!0,d=!1,o=void 0;try{for(var r,s=$("input[id^='node']")[Symbol.iterator]();!(l=(r=s.next()).done);l=!0){var i=r.value;"regex"==$(i).parent().find("input[name^='input-type']:checked").val()?t.push(new RegExp(""==$(i).val()?".*":$(i).val().replace(/ *, */g,"|"))):t.push($(i).val().split(",").map(Number))}}catch(e){d=!0,o=e}finally{try{!l&&s.return&&s.return()}finally{if(d)throw o}}var c=!0,u=!1,p=void 0;try{for(var h,f=$("input[id^='edge']")[Symbol.iterator]();!(c=(h=f.next()).done);c=!0){var g=h.value;"regex"==$(g).parent().find("input[name^='input-type']:checked").val()?a.push(new RegExp(""==$(g).val()?".*":$(g).val().replace(/ *, */g,"|"))):a.push($(g).val().split(",").map(Number))}}catch(e){u=!0,p=e}finally{try{!c&&f.return&&f.return()}finally{if(u)throw p}}var v=n.findPathsByRegex(t,a);performance.now(),listOfFinalPaths=v;var b=mungePathData(listOfFinalPaths);new Adjacency_matrix(b).draw()}(globalJSON)}function getIntermediateNodeData(e){var n={},t=!0,a=!1,l=void 0;try{for(var d,o=e.paths[Symbol.iterator]();!(t=(d=o.next()).done);t=!0)for(var r=d.value,s=1;s<r.nodes.length-1;s++)r.nodes[s].id in n?s in n[r.nodes[s].id]?n[r.nodes[s].id][s]+=1:n[r.nodes[s].id][s]=1:(n[r.nodes[s].id]={},n[r.nodes[s].id][s]=1)}catch(e){a=!0,l=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw l}}return n}function mungePathData(e){var n={},t=0,a=[],l=!0,d=!1,o=void 0;try{for(var r,s=listOfFinalPaths[Symbol.iterator]();!(l=(r=s.next()).done);l=!0){var i=r.value;i.nodes[0].label in n?i.nodes.slice(-1)[0].label in n[i.nodes[0].label]?(n[i.nodes[0].label][i.nodes.slice(-1)[0].label].paths.push(i),n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count=n[i.nodes[0].label][i.nodes.slice(-1)[0].label].paths.length,t=n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count>t?n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count:t):(a.includes(i.nodes.slice(-1)[0].label)||a.push(i.nodes.slice(-1)[0].label),n[i.nodes[0].label][i.nodes.slice(-1)[0].label]={},n[i.nodes[0].label][i.nodes.slice(-1)[0].label].paths=[i],n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count=1,t=n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count>t?n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count:t):(a.includes(i.nodes.slice(-1)[0].label)||a.push(i.nodes.slice(-1)[0].label),n[i.nodes[0].label]={},n[i.nodes[0].label][i.nodes.slice(-1)[0].label]={},n[i.nodes[0].label][i.nodes.slice(-1)[0].label].paths=[i],n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count=1,t=n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count>t?n[i.nodes[0].label][i.nodes.slice(-1)[0].label].count:t)}}catch(e){d=!0,o=e}finally{try{!l&&s.return&&s.return()}finally{if(d)throw o}}return{nestedPaths:n,sortedStartTypes:Object.keys(n).sort(),sortedEndTypes:a.sort(),maxCount:t}}function loadFileAsText(){if($("#adjacency_matrix_table")[0].innerHTML="",$("#intermediate_node_table")[0].innerHTML="",$("#loadSample").is(":checked"))d3.json("assets/tiny-network.json",function(e,n){globalJSON=n}),$("#myModal").modal("hide");else{var e=document.getElementById("fileToLoad").files[0],n=new FileReader;n.onload=function(e){var n=JSON.parse(e.target.result);n.nodes.length<1||n.edges.length<1?alert("Invalid File!"):(globalJSON=n,$("#myModal").modal("hide"))},n.readAsText(e,"UTF-8")}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var globalJSON=[],listOfFinalPaths=[];$(document).ready(function(){$("#hop-count").on("change",function(){$("#change-file").show();var e=parseInt($("#hop-count").val()),n=$("#filter-dropdowns");n.html("");var t=1;for(t=1;t<=e;t++){var a=$("<div/>");a.append("<p/>").text("Node "+t+" Type: ");var l=$("<label/>").text("Regex"),d=$("<input/>").attr({name:"input-type-node"+t,value:"regex",type:"radio",checked:"checked"});l.append(d),a.append(l),l=$("<label/>").text("Ids"),d=$("<input/>").attr({name:"input-type-node"+t,value:"ids",type:"radio"}),l.append(d),a.append(l);var o=$("<input/>").attr({id:"node-"+t,type:"text",class:"form-control"});a.append(o),n.append(a),a=$("<div/>"),a.append("<p/>").text("Edge "+t+" Type: "),l=$("<label/>").text("Regex"),d=$("<input/>").attr({name:"input-type-edge"+t,value:"regex",type:"radio",checked:"checked"}),l.append(d),a.append(l),l=$("<label/>").text("Ids"),d=$("<input/>").attr({name:"input-type-edge"+t,value:"ids",type:"radio"}),l.append(d),a.append(l),o=$("<input/>").attr({id:"edge-"+t,type:"text",class:"form-control"}),a.append(o),n.append(a)}var r=$("<div/>");r.append("<p/>").text("Node "+t+" Type: ");var s=$("<label/>").text("Regex"),i=$("<input/>").attr({name:"input-type-node"+t,value:"regex",type:"radio",checked:"checked"});s.append(i),r.append(s),s=$("<label/>").text("Ids"),i=$("<input/>").attr({name:"input-type-node"+t,value:"ids",type:"radio"}),s.append(i),r.append(s);var c=$("<input/>").attr({id:"node-"+t,type:"text",class:"form-control"});r.append(c),n.append(r),r=$("<div/>");var u=$("<button/>").attr({class:"btn btn-default",id:"get-paths",onclick:"main()"}).text("Get Paths");r.append(u),n.append(r)})}),$(window).on("load",function(){$("#loadFile").prop("disabled",!0),$("#loadSample").on("change",function(){$(this).is(":checked")?($("#fileToLoad").closest(".col-md-4").hide(),$("#loadFile").prop("disabled",!1)):($("#fileToLoad").closest(".col-md-4").show(),$("#fileToLoad").val().length>1?$("#loadFile").prop("disabled",!1):$("#loadFile").prop("disabled",!0))}),$("#fileToLoad").on("change",function(){$("#fileName").html($("#fileToLoad").val().replace("C:\\fakepath\\","")),$("#loadFile").prop("disabled",!1)}),$("#myModal").modal("show")});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),Graph=function(){function e(n){_classCallCheck(this,e);var t=this;t.data=n,t.nodes=[],t.edges=[],t.nodeIdToIndexes={},t.nodeLabelToIndexes={},t.nodeOutEdgeIndexes=[],t.nodeInEdgeIndexes=[],t.verbose=!1,t.maxNumPaths=1e5,t.createNodes(n.nodes),t.createEdges(n.edges)}return _createClass(e,[{key:"createNodes",value:function(e){for(var n=this,t=0;t<e.length;++t){var a=n.nodes.length,l=new Node(e[t]);n.nodeIdToIndexes[l.id]=a,n.nodes.push(l),n.nodeOutEdgeIndexes.push([]),n.nodeInEdgeIndexes.push([]);n.nodeLabelToIndexes[l.label]?n.nodeLabelToIndexes[l.label].push(a):n.nodeLabelToIndexes[l.label]=[a]}}},{key:"createEdges",value:function(e){for(var n=this,t=0;t<e.length;++t){var a=n.edges.length,l=new Edge(e[t]);n.edges.push(l);var d=l.sourceId,o=l.targetId,r=n.nodeIdToIndexes[d],s=n.nodeIdToIndexes[o];n.nodeOutEdgeIndexes[r].push(a),n.nodeInEdgeIndexes[s].push(a),l.directional||(l=new Edge(e[t]),l.id=-l.id,l.targetId=d,l.sourceId=o,a=n.edges.length,n.edges.push(l),n.nodeOutEdgeIndexes[s].push(a),n.nodeInEdgeIndexes[r].push(a))}}},{key:"fillInPathsByRegex",value:function(e,n,t){var a=this,l=this;l.verbose;for(var d=t.length,o=[],r=l.maxNumPaths;e.length&&r>0;){(function(){var s=e.shift(),i=s.getLastNode(),c=s.getNumEdges();if(c>=d)return l.verbose,s.edges.length==s.nodes.length&&s.nodes.push(s.graph.nodes.filter(function(e){return e.id==s.edges.slice(-1)[0].targetId})[0]),o.push(s),"continue";l.verbose;for(var u=n[c+1],p=t[c],h=l.nodeIdToIndexes[i.id],f=l.nodeOutEdgeIndexes[h],g=0;g<f.length;++g){var v=f[g],b=l.edges[v];if(l.verbose,null==p.length&&b.type.match(p)||null!=p.length&&p.includes(b.id)){var m=b.targetId,y=l.nodeIdToIndexes[m],w=l.nodes[y];if(l.verbose,null==u.length&&w.label.match(u)||null!=u.length&&u.includes(w.id)){var x=new Path(a,s.nodes,s.edges);x.addNode(w),x.addEdge(b),e.push(x),l.verbose}}}r--})()}return o}},{key:"findPathsByRegex",value:function(e,n){for(var t=this,a=[],l=0;l<t.nodes.length;++l){var d=t.nodes[l];if(null==e[0].length&&d.label.match(e[0])||null!=e[0].length&&e[0].includes(d.id)){var o=new Path(this);o.addNode(d),a.push(o),t.verbose}}return t.fillInPathsByRegex(a,e,n)}}]),e}(),Node=function e(n){_classCallCheck(this,e);var t=this;t.id=n.StructureID,t.label=n.Label?n.Label.trim():"Unknown",t.tags=n.Tags},Edge=function e(n){_classCallCheck(this,e);var t=this;t.id=n.ID,t.sourceId=n.SourceStructureID,t.targetId=n.TargetStructureID,t.type=n.Type?n.Type.trim():"Unknown",t.label=n.Label?n.Label.trim():"Unknown",t.links=n.Links,t.directional=n.Directional},_createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),Path=function(){function e(n,t,a){_classCallCheck(this,e);var l=this;l.graph=n,l.nodes=t?[].concat(t):[],l.edges=a?[].concat(a):[]}return _createClass(e,[{key:"addNode",value:function(e){var n=this,t=n.getLastEdge();t&&t.targetId!=e.id||n.nodes.push(e)}},{key:"addEdge",value:function(e){this.edges.push(e)}},{key:"getLastEdge",value:function(){var e=this;return e.edges.length?e.edges[e.edges.length-1]:null}},{key:"getLastNode",value:function(){var e=this;return e.nodes.length?e.nodes[e.nodes.length-1]:null}},{key:"getNumEdges",value:function(){return this.edges.length}}]),e}(),_createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),Adjacency_matrix=function(){function e(n){_classCallCheck(this,e),this.nestedPaths=n.nestedPaths,this.sortedStartTypes=n.sortedStartTypes,this.sortedEndTypes=n.sortedEndTypes,this.maxCount=n.maxCount,this.table=d3.select("#adjacency_matrix_table")}return _createClass(e,[{key:"draw",value:function(){var e=this;e.table.node().innerHTML="";var n=d3.scaleLinear().domain([0,e.maxCount]).range(["#e6ffff","#00e6e6"]),t=document.createElement("tr");[""].concat(e.sortedEndTypes).forEach(function(e,n){var a=document.createElement("th");a.innerHTML=e,t.appendChild(a)}),e.table.node().appendChild(t),e.sortedStartTypes.forEach(function(t,a){var l=document.createElement("tr"),d=document.createElement("td");d.innerHTML=t,d3.select(d).attr("style","font-weight:bold;-webkit-min-logical-width:70px"),l.appendChild(d),e.sortedEndTypes.forEach(function(a,d){var o=document.createElement("td"),r=d3.select(document.createElementNS("http://www.w3.org/2000/svg","svg")).attr("width",15).attr("height",30),s=document.createElementNS("http://www.w3.org/2000/svg","g");d3.select(s).attr("style","transform:translate(-7px,0px");var i=d3.select(document.createElementNS("http://www.w3.org/2000/svg","rect")).attr("fill",n(a in e.nestedPaths[t]?e.nestedPaths[t][a].count:0)).attr("y",10).attr("x",10).attr("height",a in e.nestedPaths[t]?10:0).attr("width",10);i.append("title").text(a in e.nestedPaths[t]?e.nestedPaths[t][a].count:0),i.datum(a in e.nestedPaths[t]?e.nestedPaths[t][a]:[]),i.on("click",function(e){var n=getIntermediateNodeData(e);if(0!=Object.keys(n).length){new Intermediate_table(n).draw()}}),s.appendChild(i.node()),r.node().appendChild(s),o.append(r.node()),l.append(o)}),e.table.node().appendChild(l)})}}]),e}(),_createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),Intermediate_table=function(){function e(n){_classCallCheck(this,e),this.data=n,this.table=d3.select("#intermediate_node_table")}return _createClass(e,[{key:"draw",value:function(){var e=this;e.table.node().innerHTML="";for(var n=+$("#hop-count").val(),t=document.createElement("tr"),a=1;a<=n;a++){var l=document.createElement("th");l.innerHTML=1!=a?a+" node ":"",t.appendChild(l)}e.table.node().appendChild(t);for(var d in e.data){for(var o=document.createElement("tr"),r=1;r<=n;++r)if(1==r){var s=document.createElement("td");s.innerHTML=d,d3.select(s).attr("style","font-weight:bold;-webkit-min-logical-width:70px"),o.appendChild(s)}else{var i=document.createElement("td"),c=r-1 in e.data[d]?e.data[d][r-1]:"";i.innerHTML=c,o.appendChild(i)}e.table.node().appendChild(o)}}}]),e}();