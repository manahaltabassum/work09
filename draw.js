var clear = document.getElementById("clear");
var svg = document.getElementById("board");

var clearIt = function(e){
    while (svg.hasChildNodes()){
	svg.removeChild(svg.firstChild);
    }
};

var drawCircle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var radius = 10;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",radius);
    c.setAttribute("fill","powderblue");
    svg.appendChild(c);
    c.addEventListener("click", changeColor, true);
};

var changeColor = function(e){
    if (this.getAttribute("fill") == "powderblue"){
	this.setAttribute("fill", "#EFA8B8");
	e.stopPropagation();
    }
    else{
	svg.removeChild(this);
	e.stopPropagation();
	var x = Math.floor(Math.random()*500);
	var y = Math.floor(Math.random()*500);
	var radius = 10;
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("r",radius);
	c.setAttribute("fill","powderblue");
	svg.appendChild(c);
	c.addEventListener("click", changeColor, true);
    }
};
    

clear.addEventListener("click", clearIt);
svg.addEventListener("click", drawCircle);
