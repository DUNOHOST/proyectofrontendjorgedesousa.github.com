function captura (){

	var NOMBRE=document.getElementById("NOMBRE").value;
	var MAIL=document.getElementById("MAIL").value;
	var MAIL=document.getElementById("MENSAJE").value;

		if (NOMBRE=="") {
		    alert ("EL NOMBRE ES OBLIGATORIO");
		    document.getElementById("NOMBRE").focus();
}else{
	     if (MAIL=="") {
		    alert ("EL MAIL ES OBLIGATORIO");
		    document.getElementById("MAIL").focus();
}else{
        console.log(NOMBRE +" "+MAIL +" "+MENSAJE);
 		document.getElementById("NOMBRE").value="";
		document.getElementById("MAIL").value="";
		document.getElementById("MENSAJE").value="";
		document.getElementById("NOMBRE").focus();
}
}	
}
