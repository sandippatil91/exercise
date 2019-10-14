var i= 0;

function countnumber(){
	if(i < 100000){
		i = i + 1 ;
		postMessage(i);
	}

	setTimeout("countnumber()",500);
}

countnumber();