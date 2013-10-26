window.onload = initAll;

function initAll(){
	$.getJSON( "js/menu.json", function( data ) {
		alert("success!");
	});
}

function parseMenu(map,path){
	if (path !== ""){
		var subpath = "";
		for(var i = 0; i < path.length; i++)
		{
			if(path[i] === "/")
			{
				path = path.substring(i+1);
				break;
			}else{
				subpath = path.substring(0,i);
			}
		}
		return parseMenu(map[subpath],path);
	}else{
		return map;
	}
}


