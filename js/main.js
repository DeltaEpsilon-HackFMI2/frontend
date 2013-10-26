window.onload = initAll;

function initAll(){
	$.getJSON( "js/menu.json", function( data ) {
		alert("yo");
		console.log(data);
	});
}

function parseMenu(map,path){
	if (path !== ""){
		var subpath = "";
		for(var i = 0; i < path.length; i++)
		{
			if(path[i] === "/")
			{
				subpath = path.substring(0,i);
				path = path.substring(i+1);
				break;
			}
		}
		return parseMenu(map[subpath],path);
	}else{
		return map;
	}
}


