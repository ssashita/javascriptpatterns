var catClick = function(ct) {
    var count =0;
    var cat=ct;
    return {
        increment: function() {
            ++count;
            var label = 
                document.getElementById("countOfCat"+cat.getAttribute("id"));
            label.innerHTML = ""+count;
        },
        getClickCount: function(){
            return count;
        },
        name: function() {
            return cat.getAttribute("id");
        }
    }
};
var imagePath = "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426";

var ids = ["cat1", "cat2"];

var renderCatImages= function(){
    var i =0;
    var len = ids.length;
    for (;i<len;i++) {
        //alert("hi");
        var cat = document.createElement("IMG");
        cat.src=imagePath;
        var div = document.createElement("DIV");
        div.setAttribute("id",ids[i]);
        var cClick = catClick(div);
        var name =cClick.name();
        var countElement = document.createElement("SPAN");
        countElement.setAttribute("id","countOfCat"+ids[i]);
        countElement.innerHTML = ""+cClick.getClickCount();
	//var countSpan = document.createElement("SPAN");
        div.innerHTML = name;
	//alert (name);
	div.appendChild(document.createElement("BR"));
        div.appendChild(countElement);
        div.appendChild(cat);
        cat.addEventListener("click", cClick.increment);
	//alert(div.innerHTML);
        document.body.appendChild(div);
    }
};
