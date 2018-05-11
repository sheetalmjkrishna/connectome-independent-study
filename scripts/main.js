"use strict";function main(){!function(e){performance.now();graph=new Graph(e),$(".headers").show();performance.now();performance.now();var t=[],n=[],a=!0,r=!1,d=void 0;try{for(var l,o=$("input[id^='node']")[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var i=l.value;"regex"==$(i).parent().find("input[name^='input-type']:checked").val()?t.push(new RegExp(""==$(i).val()?".*":$(i).val().replace(/ *, */g,"|"))):t.push($(i).val().split(",").map(Number))}}catch(e){r=!0,d=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw d}}var s=!0,c=!1,p=void 0;try{for(var h,u=$("input[id^='edge']")[Symbol.iterator]();!(s=(h=u.next()).done);s=!0){var f=h.value;"regex"==$(f).parent().find("input[name^='input-type']:checked").val()?n.push(new RegExp(""==$(f).val()?".*":$(f).val().replace(/ *, */g,"|"))):n.push($(f).val().split(",").map(Number))}}catch(e){c=!0,p=e}finally{try{!s&&u.return&&u.return()}finally{if(c)throw p}}var g=graph.findPathsByRegex(t,n);performance.now(),listOfFinalPaths=g;var v=mungePathData(listOfFinalPaths,graph,t);new Adjacency_matrix(v,g.length).draw()}(globalJSON)}function getIntermediateNodeData(e){var t={},n=!0,a=!1,r=void 0;try{for(var d,l=e.paths[Symbol.iterator]();!(n=(d=l.next()).done);n=!0)for(var o=d.value,i=1;i<o.nodes.length-1;i++)o.nodes[i].id in t?i in t[o.nodes[i].id]?(t[o.nodes[i].id][i]+=1,t[o.nodes[i].id]["paths-"+i].push(o)):(t[o.nodes[i].id][i]=1,t[o.nodes[i].id]["paths-"+i]=[o]):(t[o.nodes[i].id]={},t[o.nodes[i].id][i]=1,t[o.nodes[i].id]["paths-"+i]=[o])}catch(e){a=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}return t}function getIntermediateNodeDataOld(e){var t={},n=!0,a=!1,r=void 0;try{for(var d,l=e.paths[Symbol.iterator]();!(n=(d=l.next()).done);n=!0)for(var o=d.value,i=1;i<o.nodes.length-1;i++)o.nodes[i].id in t?i in t[o.nodes[i].id]?t[o.nodes[i].id][i]+=1:t[o.nodes[i].id][i]=1:(t[o.nodes[i].id]={},t[o.nodes[i].id][i]=1)}catch(e){a=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}return t}function mungePathData(e,t,n){var a=mungePathDataOld(e),r=a.nestedPaths,d={},l=0;d.nodes=[],d.links=[],d.nestedPaths=[];var o={},i=!0,s=!1,c=void 0;try{for(var p,h=a.sortedStartTypes[Symbol.iterator]();!(i=(p=h.next()).done);i=!0){var u=p.value,f={};f.name=u,u in o||(d.nodes.push(f),o[u]=l++)}}catch(e){s=!0,c=e}finally{try{!i&&h.return&&h.return()}finally{if(s)throw c}}var g=!0,v=!1,m=void 0;try{for(var b,y=a.sortedEndTypes[Symbol.iterator]();!(g=(b=y.next()).done);g=!0){var x=b.value,w={};w.name=x,x in o||(d.nodes.push(w),o[x]=l++)}}catch(e){v=!0,m=e}finally{try{!g&&y.return&&y.return()}finally{if(v)throw m}}var $=!0,T=!1,k=void 0;try{for(var C,I=e[Symbol.iterator]();!($=(C=I.next()).done);$=!0){var E=C.value,L={};L.source=o[E.nodes[0].label],L.target=o[E.nodes.slice(-1)[0].label],L.value=1,d.links.push(L)}}catch(e){T=!0,k=e}finally{try{!$&&I.return&&I.return()}finally{if(T)throw k}}return d.nestedPaths=r,{data:d,node_index:o}}function mungePathDataOld(e){var t={},n=0,a=[],r=!0,d=!1,l=void 0;try{for(var o,i=listOfFinalPaths[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var s=o.value;s.nodes[0].label in t?s.nodes.slice(-1)[0].label in t[s.nodes[0].label]?(t[s.nodes[0].label][s.nodes.slice(-1)[0].label].paths.push(s),t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count=t[s.nodes[0].label][s.nodes.slice(-1)[0].label].paths.length,n=t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count>n?t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count:n):(a.includes(s.nodes.slice(-1)[0].label)||a.push(s.nodes.slice(-1)[0].label),t[s.nodes[0].label][s.nodes.slice(-1)[0].label]={},t[s.nodes[0].label][s.nodes.slice(-1)[0].label].paths=[s],t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count=1,n=t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count>n?t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count:n):(a.includes(s.nodes.slice(-1)[0].label)||a.push(s.nodes.slice(-1)[0].label),t[s.nodes[0].label]={},t[s.nodes[0].label][s.nodes.slice(-1)[0].label]={},t[s.nodes[0].label][s.nodes.slice(-1)[0].label].paths=[s],t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count=1,n=t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count>n?t[s.nodes[0].label][s.nodes.slice(-1)[0].label].count:n)}}catch(e){d=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(d)throw l}}return{nestedPaths:t,sortedStartTypes:Object.keys(t).sort(),sortedEndTypes:a.sort(),maxCount:n}}function restoreState(e){var t=getCookie(e).split("%%%");$("#hop-count").selectpicker("val",(t.length-1)/2),$("#hop-count").trigger("change");var n=$("#filter-dropdowns .form-control"),a=0,r=!0,d=!1,l=void 0;try{for(var o,i=n[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var s=o.value;$(s).val(t[a]),a++}}catch(e){d=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(d)throw l}}}function save_state(){var e=parseInt($("#hop-count").val()),t=1,n=getCookie("stateNum"),a="";for(""==n&&(n=1),t=1;t<=e;t++)a+=(""==$("#node-"+t).val()?".*":$("#node-"+t).val())+"%%%",a+=(""==$("#edge-"+t).val()?".*":$("#edge-"+t).val())+"%%%";a+=""==$("#node-"+t).val()?".*":$("#node-"+t).val(),setCookie("state"+n,a),$("#state"+n).text("State "+n+": "+a.replace(/%%%/g,", ")),$("#state"+n).attr("title",a.replace(/%%%/g,", ")),setCookie("stateNum",+n+1>5?1:+n+1)}function loadFileAsText(){if($("#adjacency_matrix")[0].innerHTML="",$("#intermediate_node_table")[0].innerHTML="",d3.select("#allPaths").node().innerHTML="",d3.select("#adj_totPaths").node().innerHTML="",d3.select("#int_totPaths").node().innerHTML="",$("#nodeDataTable")[0].innerHTML="",$("#nodeDataValidation")[0].innerHTML="",$(".headers").hide(),$("#loadSample").is(":checked"))d3.json("assets/medium-network.json",function(e,t){globalJSON=t}),$("#myModal").modal("hide");else{var e=document.getElementById("fileToLoad").files[0],t=new FileReader;t.onload=function(e){var t=JSON.parse(e.target.result);t.nodes.length<1||t.edges.length<1?alert("Invalid File!"):(globalJSON=t,$("#myModal").modal("hide"))},t.readAsText(e,"UTF-8")}}function setCookie(e,t){var n=new Date;n.setTime(n.getTime()+216e6);var a="expires="+n.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var r=n[a];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}function deleteCookie(e){var t=new Date;t.setTime(t.getTime());var n="expires="+t.toUTCString();document.cookie=e+"= ;"+n+";path=/"}function minMax(e){"max"==$(e).attr("data-attr")?($(e).attr("data-attr","min"),$(e).parent().addClass("minimized"),$(e).find("span")[0].innerHTML="&#751;"):($(e).attr("data-attr","max"),$(e).parent().removeClass("minimized"),$(e).find("span")[0].innerHTML="&#752;")}function getNodeData(){var e=$("#nodeData").val().trim().split(","),t=$("#nodeDataTable"),n=$("#nodeDataValidation"),a=0;t[0].innerHTML="",n[0].innerHTML="";var r=$("<tr/>"),d=$("<th/>").text("Node");r.append(d[0]),d=$("<th/>").text("Incoming Edge(s)"),r.append(d[0]),d=$("<th/>").text("From"),r.append(d[0]),d=$("<th/>").text("Outgoing Edge(s)"),r.append(d[0]),d=$("<th/>").text("To"),r.append(d[0]),t.append(r[0]);var l=!0,o=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(l=(s=c.next()).done);l=!0){var p=s.value;if(isNaN(p)){n[0].innerHTML="Please enter ',' seperated numbers!",t[0].innerHTML="";break}var h=graph.nodeIdToIndexes[p];if(null!=h){var u=graph.nodeOutEdgeIndexes[h],f=graph.nodeInEdgeIndexes[h],g=$("<tr/>"),v=$("<td/>").text(p+" ("+graph.nodes[h].label+")");g.append(v[0]);var m=$("<td/>"),b=$("<td/>"),y="",x="",w=!0,T=!1,k=void 0;try{for(var C,I=f[Symbol.iterator]();!(w=(C=I.next()).done);w=!0){var E=C.value;y+=Math.abs(graph.edges[E].id)+" <span class='grey'>("+graph.edges[E].type+")</span> <br/>",x+=Math.abs(graph.edges[E].sourceId)+" <span class='grey'> ("+graph.nodes[graph.nodeIdToIndexes[graph.edges[E].sourceId]].label+")</span> <br/>"}}catch(e){T=!0,k=e}finally{try{!w&&I.return&&I.return()}finally{if(T)throw k}}m[0].innerHTML=y,b[0].innerHTML=x,g.append(m[0]),g.append(b[0]),m=$("<td/>"),b=$("<td/>"),y="",x="";var L=!0,_=!1,P=void 0;try{for(var M,S=u[Symbol.iterator]();!(L=(M=S.next()).done);L=!0){var N=M.value;y+=Math.abs(graph.edges[N].id)+" <span class='grey'> ("+graph.edges[N].type+")</span> <br/>",x+=Math.abs(graph.edges[N].targetId)+" <span class='grey'> ("+graph.nodes[graph.nodeIdToIndexes[graph.edges[N].targetId]].label+")</span> <br/>"}}catch(e){_=!0,P=e}finally{try{!L&&S.return&&S.return()}finally{if(_)throw P}}m[0].innerHTML=y,b[0].innerHTML=x,g.append(m[0]),g.append(b[0]),t.append(g[0])}else a?n[0].innerHTML+=", "+p:(n[0].innerHTML+="Invalid Id(s): "+p,a=1)}}catch(e){o=!0,i=e}finally{try{!l&&c.return&&c.return()}finally{if(o)throw i}}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function displayAllPaths(e){var t=d3.select("#allPaths");t.node().innerHTML="";var n=$("<tr/>"),a=$("<th/>").text("#");n.append(a[0]),a=$("<th/>"),a[0].innerHTML="Node &#x2192; (Edge) &#x2192; Node ...",n.append(a[0]),t.node().append(n[0]);for(var r=0;r<e.length;r++){n=$("<tr/>");var d=$("<td/>").text(r+1);n.append(d[0]),d=$("<td/>");var l="",o=0;for(o=0;o<e[r].edges.length;o++)l+=e[r].nodes[o].id+"&#x2192;(",l+=Math.abs(e[r].edges[o].id)+")&#x2192;";l+=e[r].nodes[o].id,d[0].innerHTML=l,n.append(d[0]),t.node().append(n[0])}}var globalJSON=[],listOfFinalPaths=[],graph=[];$(document).ready(function(){$("#hop-count").on("change",function(){$("#change-file").show();var e=parseInt($("#hop-count").val()),t=$("#filter-dropdowns");t.html("");var n=1;for(n=1;n<=e;n++){var a=$("<div/>");a.append("<p/>").text("Node "+n+" Type: ");var r=$("<label/>").text("Regex"),d=$("<input/>").attr({name:"input-type-node"+n,value:"regex",type:"radio",checked:"checked"});r.append(d),a.append(r),r=$("<label/>").text("Ids"),d=$("<input/>").attr({name:"input-type-node"+n,value:"ids",type:"radio"}),r.append(d),a.append(r);var l=$("<input/>").attr({id:"node-"+n,type:"text",class:"form-control"});a.append(l),t.append(a),a=$("<div/>"),a.append("<p/>").text("Edge "+n+" Type: "),r=$("<label/>").text("Regex"),d=$("<input/>").attr({name:"input-type-edge"+n,value:"regex",type:"radio",checked:"checked"}),r.append(d),a.append(r),r=$("<label/>").text("Ids"),d=$("<input/>").attr({name:"input-type-edge"+n,value:"ids",type:"radio"}),r.append(d),a.append(r),l=$("<input/>").attr({id:"edge-"+n,type:"text",class:"form-control"}),a.append(l),t.append(a)}var o=$("<div/>");o.append("<p/>").text("Node "+n+" Type: ");var i=$("<label/>").text("Regex"),s=$("<input/>").attr({name:"input-type-node"+n,value:"regex",type:"radio",checked:"checked"});i.append(s),o.append(i),i=$("<label/>").text("Ids"),s=$("<input/>").attr({name:"input-type-node"+n,value:"ids",type:"radio"}),i.append(s),o.append(i);var c=$("<input/>").attr({id:"node-"+n,type:"text",class:"form-control"});o.append(c),t.append(o),o=$("<div/>"),p=$("<button/>").attr({class:"btn btn-default",id:"get-paths",onclick:"main()"}).text("Get Paths"),o.append(p);var p=$("<button/>").attr({class:"btn btn-default",id:"save-state",onclick:"save_state()"}).text("Save State");o.append(p),t.append(o);for(var h=$("<hr>").attr("style","margin-top:80px; border-top: 1px solid #cccccc"),u=$("<p/>").text("Saved States").attr("style","text-align:-webkit-center; font-weight: bold;margin: 0px;"),f=$("<p/>").text("(Click to restore)").attr("style","text-align:-webkit-center; font-style:italic;"),g=$("<ol/>").attr("style","padding-left: 0px"),v=1;v<=5;v++){var m=$("<li/>"),b=$("<a/>").text("State "+v+": "+getCookie("state"+v).replace(/%%%/g,", ")).attr("style","cursor: pointer; white-space: nowrap; width: 235px;overflow: hidden; text-overflow: ellipsis; display: block;");b.attr("title",getCookie("state"+v).replace(/%%%/g,", ")),b.attr("id","state"+v),b.click(function(e){restoreState(e.target.id)}),m.append(b),g.append(m)}t.append(h),t.append(u),t.append(f),t.append(g)})}),$(window).on("load",function(){$("#loadFile").prop("disabled",!0),$("#loadSample").on("change",function(){$(this).is(":checked")?($("#fileToLoad").closest(".col-md-4").hide(),$("#loadFile").prop("disabled",!1)):($("#fileToLoad").closest(".col-md-4").show(),$("#fileToLoad").val().length>1?$("#loadFile").prop("disabled",!1):$("#loadFile").prop("disabled",!0))}),$("#fileToLoad").on("change",function(){$("#fileName").html($("#fileToLoad").val().replace("C:\\fakepath\\","")),$("#loadFile").prop("disabled",!1)}),$("#myModal").modal("show")});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Graph=function(){function e(t){_classCallCheck(this,e);var n=this;n.data=t,n.nodes=[],n.edges=[],n.nodeIdToIndexes={},n.nodeLabelToIndexes={},n.nodeOutEdgeIndexes=[],n.nodeInEdgeIndexes=[],n.verbose=!1,n.maxNumPaths=1e5,n.createNodes(t.nodes),n.createEdges(t.edges)}return _createClass(e,[{key:"createNodes",value:function(e){for(var t=this,n=0;n<e.length;++n){var a=t.nodes.length,r=new Node(e[n]);t.nodeIdToIndexes[r.id]=a,t.nodes.push(r),t.nodeOutEdgeIndexes.push([]),t.nodeInEdgeIndexes.push([]);t.nodeLabelToIndexes[r.label]?t.nodeLabelToIndexes[r.label].push(a):t.nodeLabelToIndexes[r.label]=[a]}}},{key:"createEdges",value:function(e){for(var t=this,n=0;n<e.length;++n){var a=t.edges.length,r=new Edge(e[n]);t.edges.push(r);var d=r.sourceId,l=r.targetId,o=t.nodeIdToIndexes[d],i=t.nodeIdToIndexes[l];t.nodeOutEdgeIndexes[o].push(a),t.nodeInEdgeIndexes[i].push(a),r.directional||(r=new Edge(e[n]),r.id=-r.id,r.targetId=d,r.sourceId=l,a=t.edges.length,t.edges.push(r),t.nodeOutEdgeIndexes[i].push(a),t.nodeInEdgeIndexes[o].push(a))}}},{key:"fillInPathsByRegex",value:function(e,t,n){var a=this;a.verbose;for(var r=n.length,d=[],l=a.maxNumPaths;e.length&&l>0;){var o=e.shift(),i=o.getLastNode(),s=o.getNumEdges();if(s>=r)a.verbose,d.push(o);else{a.verbose;for(var c=t[s+1],p=n[s],h=a.nodeIdToIndexes[i.id],u=a.nodeOutEdgeIndexes[h],f=0;f<u.length;++f){var g=u[f],v=a.edges[g];if(a.verbose,null==p.length&&v.type.match(p)||null!=p.length&&p.includes(v.id)){var m=v.targetId,b=a.nodeIdToIndexes[m],y=a.nodes[b];if(a.verbose,null==c.length&&y.label.match(c)||null!=c.length&&c.includes(y.id)){var x=new Path(this,o.nodes,o.edges);x.addEdge(v),x.addNode(y),e.push(x),a.verbose}}}l--}}return d}},{key:"findPathsByRegex",value:function(e,t){for(var n=this,a=[],r=0;r<n.nodes.length;++r){var d=n.nodes[r];if(null==e[0].length&&d.label.match(e[0])||null!=e[0].length&&e[0].includes(d.id)){var l=new Path(this);l.addNode(d),a.push(l),n.verbose}}return n.fillInPathsByRegex(a,e,t)}}]),e}(),Node=function e(t){_classCallCheck(this,e);var n=this;n.id=t.StructureID,n.label=t.Label?t.Label.trim():"Unknown",n.tags=t.Tags},Edge=function e(t){_classCallCheck(this,e);var n=this;n.id=t.ID,n.sourceId=t.SourceStructureID,n.targetId=t.TargetStructureID,n.type=t.Type?t.Type.trim():"Unknown",n.label=t.Label?t.Label.trim():"Unknown",n.links=t.Links,n.directional=t.Directional},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Path=function(){function e(t,n,a){_classCallCheck(this,e);var r=this;r.graph=t,r.nodes=n?[].concat(n):[],r.edges=a?[].concat(a):[]}return _createClass(e,[{key:"addNode",value:function(e){var t=this,n=t.getLastEdge();if(n&&n.targetId!=e.id)throw"Tried to create a garbage path with edge/node mistmatch";t.nodes.push(e)}},{key:"addEdge",value:function(e){this.edges.push(e)}},{key:"getLastEdge",value:function(){var e=this;return e.edges.length?e.edges[e.edges.length-1]:null}},{key:"getLastNode",value:function(){var e=this;return e.nodes.length?e.nodes[e.nodes.length-1]:null}},{key:"getNumEdges",value:function(){return this.edges.length}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Adjacency_matrix=function(){function e(t,n){_classCallCheck(this,e),this.margin={top:50,right:0,bottom:10,left:60},this.width=500,this.height=550,this.data=t.data,this.totalPaths=n,this.node_index=t.node_index,this.x=d3.scaleBand().rangeRound([0,this.width]),this.z=d3.scaleLinear().domain([0,4]).clamp(!0),this.c=d3.scaleLinear().range(["#b3ffff","#006699"]),d3.select("#adjacency_matrix").node().innerHTML="",this.svg=d3.select("#adjacency_matrix").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.legend=d3.select("#adjacency_matrix").append("g").attr("transform","translate("+((this.margin.left+this.width+this.margin.right)/3-30)+","+(this.height+5)+")").attr("class","legendLinear"),this.svg.style({"margin-left":-this.margin.left+"px","margin-top":-this.margin.top+"px"}),this.intermediateTable=d3.select("#intermediate_node_table"),this.intermediateTable.node().innerHTML="",d3.select("#allPaths").node().innerHTML="",d3.select("#adj_totPaths").node().innerHTML="",d3.select("#int_totPaths").node().innerHTML="",$("#nodeDataTable")[0].innerHTML="",$("#nodeDataValidation")[0].innerHTML="",this.tip=d3.tip().attr("class","d3-tip").direction("se").offset(function(){return[0,0]}).html(function(e){return"<strong>Number of Paths: "+e.z+"</strong>"}),this.svg.call(this.tip)}return _createClass(e,[{key:"draw",value:function(){function e(e){d3.select(this).selectAll(".cell").data(e.filter(function(e){return e.z})).enter().append("rect").attr("class","cell").attr("x",function(e){return a.x(e.x)}).attr("value",function(e){return a.c(e.z)}).attr("rx","6px").attr("ry","6px").attr("width",a.x.bandwidth()).attr("height",a.x.bandwidth()).style("fill",function(e){return a.c(e.z)}).on("mouseover",function(e){t(e,a)}).on("mouseout",function(e){n(e,a)}).on("click",function(e){var t=Object.keys(a.node_index).find(function(t){return a.node_index[t]===e.y}),n=Object.keys(a.node_index).find(function(t){return a.node_index[t]===e.x}),r=getIntermediateNodeData(a.data.nestedPaths[t][n]);0!=Object.keys(r).length&&new Intermediate_table(r,a.data.nestedPaths[t][n]).draw()})}function t(e,t){t.tip.show(e),d3.selectAll(".row text").classed("active",function(t,n){return n==e.y}),d3.selectAll(".column text").classed("active",function(t,n){return n==e.x})}function n(e,t){t.tip.hide(e),d3.selectAll("text").classed("active",!1)}var a=this,r=[],d=a.data.nodes,l=d.length;d.forEach(function(e,t){r[t]=d3.range(l).map(function(e){return{x:e,y:t,z:0}})});var o=0;a.data.links.forEach(function(e){r[e.source][e.target].z+=e.value,r[e.source][e.target].z>o&&(o=r[e.source][e.target].z)}),a.c.domain([0,o]),a.x.domain(d3.range(l).sort(function(e,t){return d3.ascending(d[e].name,d[t].name)})),a.svg.append("rect").attr("class","background").attr("width",a.width).attr("height",a.height);var i=a.svg.selectAll(".row").data(r).enter().append("g").attr("class","row").attr("transform",function(e,t){return"translate(0,"+a.x(t)+")"}).each(e);i.append("line").attr("x2",a.width),i.append("text").attr("x",-6).attr("y",a.x.bandwidth()/2).attr("dy",".32em").attr("text-anchor","end").text(function(e,t){return d[t].name});var s=a.svg.selectAll(".column").data(r).enter().append("g").attr("class","column").attr("transform",function(e,t){return"translate("+a.x(t)+")rotate(-90)"});s.append("line").attr("x1",-a.width),s.append("text").attr("x",6).attr("y",a.x.bandwidth()/2).attr("dy",".32em").attr("text-anchor","start").text(function(e,t){return d[t].name}),d3.select("#adj_totPaths").text("The total number of paths = "+a.totalPaths);var c=d3.legendColor().shapeWidth(30).cells(10).orient("horizontal").scale(a.c);this.legend.call(c)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Adj_matrix=function(){function e(t){_classCallCheck(this,e),this.nestedPaths=t.nestedPaths,this.sortedStartTypes=t.sortedStartTypes,this.sortedEndTypes=t.sortedEndTypes,this.maxCount=t.maxCount,this.table=d3.select("#adjacency_matrix_table"),this.intermediateTable=d3.select("#intermediate_node_table")}return _createClass(e,[{key:"draw",value:function(){var e=this;e.table.node().innerHTML="",e.intermediateTable.node().innerHTML="";var t=d3.scaleLinear().domain([0,e.maxCount]).range(["#e6ffff","#00e6e6"]),n=document.createElement("tr");[""].concat(e.sortedEndTypes).forEach(function(e,t){var a=document.createElement("th");a.innerHTML=e,n.appendChild(a)}),e.table.node().appendChild(n),e.sortedStartTypes.forEach(function(n,a){var r=document.createElement("tr"),d=document.createElement("td");d.innerHTML=n,d3.select(d).attr("style","font-weight:bold;-webkit-min-logical-width:70px"),r.appendChild(d),e.sortedEndTypes.forEach(function(a,d){var l=document.createElement("td"),o=d3.select(document.createElementNS("http://www.w3.org/2000/svg","svg")).attr("width",15).attr("height",30),i=document.createElementNS("http://www.w3.org/2000/svg","g");d3.select(i).attr("style","transform:translate(-7px,0px");var s=d3.select(document.createElementNS("http://www.w3.org/2000/svg","rect")).attr("fill",t(a in e.nestedPaths[n]?e.nestedPaths[n][a].count:0)).attr("y",10).attr("x",10).attr("height",a in e.nestedPaths[n]?10:0).attr("width",10);s.append("title").text(a in e.nestedPaths[n]?e.nestedPaths[n][a].count:0),s.datum(a in e.nestedPaths[n]?e.nestedPaths[n][a]:[]),s.on("click",function(e){var t=getIntermediateNodeDataOld(e);if(0!=Object.keys(t).length){new Intermediate_table(t).draw()}}),i.appendChild(s.node()),o.node().appendChild(i),l.append(o.node()),r.append(l)}),e.table.node().appendChild(r)})}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Intermediate_table=function(){function e(t,n){_classCallCheck(this,e),this.data=t,this.paths=n,this.totalPaths=n.count,this.table=d3.select("#intermediate_node_table")}return _createClass(e,[{key:"draw",value:function(){var e=this;e.table.node().innerHTML="",d3.select("#allPaths").node().innerHTML="";for(var t=+$("#hop-count").val(),n=document.createElement("tr"),a=1;a<=t;a++)!function(e){var a=document.createElement("th");if(1!=e){for(var r=d3.select(document.createElementNS("http://www.w3.org/2000/svg","svg")).attr("width",15).attr("height",70),d=10*(t+1),l=1;l<=t+1;l++)!function(t){var n=document.createElementNS("http://www.w3.org/2000/svg","g");d3.select(n).attr("style","transform:translate(7px,"+(d-10*(t-1))+"px)");var l=d3.select(document.createElementNS("http://www.w3.org/2000/svg","circle")).attr("fill",function(){return t==e?"#00ffff":"#ccffff"}).attr("style","stroke:#012c72").attr("y",0).attr("x",0).attr("r",5);n.appendChild(l.node()),r.node().appendChild(n),a.append(r.node())}(l);var o=$("<p/>").text("Node "+e);a.append(o[0])}n.append(a)}(a);e.table.node().appendChild(n);for(var r in e.data){for(var d=document.createElement("tr"),l=(document.createElement("td"),1);l<=t;++l)if(1==l){var o=document.createElement("td");o.innerHTML=r,d3.select(o).attr("style","font-weight:bold; padding: 0px 5px;"),d.appendChild(o)}else{var i=document.createElement("td");d3.select(i).attr("style","padding: 0px 5px;");var s=l-1 in e.data[r]?e.data[r][l-1]:"",c=$("<a/>").text(s).attr("style","cursor: pointer; white-space: nowrap; width: 70px;overflow: hidden; text-overflow: ellipsis; display: block;");d3.select(c[0]).datum(e.data[r]["paths-"+(l-1)]),c.click(function(e){displayAllPaths(d3.select(e.target).datum())}),i.append(c[0]),d.appendChild(i)}e.table.node().appendChild(d)}d3.select("#int_totPaths").text("Total paths = "+e.totalPaths)}}]),e}();