
var ids = ["cat1", "cat2", "cat3", "cat4", "cat5"];

if (!Object.createWith) {
  Object.createWith = function(ids, filler) {
	var obj = {};
	for (id in ids) {
		//alert(id);
		obj[ids[id]] = filler;
        }
	//alert(JSON.stringify(obj));
	return obj;
  };
} 

var clicks = Object.createWith(ids,0);
var catClick = function(ct) {

    var cat=ct;
    var id = cat.getAttribute("id");
    //var count =clicks[id];
    //alert(id +" "+clicks[id]);
    return {
        increment: function() {
            ++(clicks[id]);
            var label = 
                document.getElementById("countOfCat"+id);
            label.innerHTML = ""+clicks[id];
        },
        getClickCount: function(){
            return clicks[id];
        },
        name: function() {
            return id;
        }
    }
};
var imagePath = "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426";



var createCatList = function() {
	len = ids.length;
	var ul = document.createElement("UL");	
	for(var i=0; i<len; i++) {
		var li = document.createElement("LI");
		li.textContent = ids[i];
		li.addEventListener("click",(function() {
	            var id = ids[i];
                    return function() {
                      renderCatImage(id);
                    }
                 })());
		ul.appendChild(li);
	}
	var catListArea = document.getElementById("catListArea");
	catListArea.appendChild(ul);
}
var renderCatImage= function(id){
        //alert(id);
        var cat = document.createElement("IMG");
        cat.src=imagePath;
        var div = document.createElement("DIV");
        div.setAttribute("id",id);
        var cClick = catClick(div);
        var name =cClick.name();
        var countElement = document.createElement("SPAN");
        countElement.setAttribute("id","countOfCat"+id);
        countElement.innerHTML = ""+cClick.getClickCount();

        div.innerHTML = name;
	//alert (name);
	div.appendChild(document.createElement("BR"));
        div.appendChild(countElement);
        div.appendChild(cat);
        cat.addEventListener("click", cClick.increment);
	//alert(div.innerHTML);
	var catArea = document.getElementById("catArea");
	catArea.innerHTML="";
        catArea.appendChild(div);

};
