

window.onload = function(){
			
	var nomDiv = function(id){
		return document.getElementById(id);
	}
	
	nomDiv("serie").addEventListener("click", function(e){ //Evento para imprimir  el boton de la serie
	
		document.write("<h1>RESULTADO CIFRADO CESAR</h1>");
		CifradoCesar();
		document.write("<br><br><center><a href='CifradoCesar.html'>Inicio</a></center>");

	});


	function CifradoCesar(){
		//Palíndromos...
		//anita lava la tina "ZSOMOS DEFX COLOMBIA PZATRIA EN PAZ Y YZ con ganas de que funcione X"Estamos en colombia un pais de Paz amor mujers x y hombres y
		var cadena = "AbCcDdEeFfGgHh IiJjKkL lMmNnOoPp qRrSsTtUuV vWwXxYyZz hoka CAROLAS"; //cifrar... search, replace
		var mueva = 3;
		var cesar = "";
		//z + 2 = b
		// b - 2 = z
		for(var i = 0; i < cadena.length; i++){
			var caracter = cadena.charAt(i);
			var ascii = caracter.charCodeAt();
			//console.log("Caracter = "+caracter+"  Unicide = "+ ascii + " , Movida = " +mueva+ " , NuevoCaracter = "+letraNueva);
			if(ascii  != 32 ){
				var mayus= 9 - mueva;
				var minus = 55 + mueva;
				// VALIDACION PARA XYZ MAYUSCULA
				if (ascii == 88 || ascii == 89 || ascii == 90){
					var letraNueva = String.fromCharCode(ascii + mueva + mayus);
					cesar += letraNueva;
				}
				// VALIDACION PARA xyz MIUSCULA
				else if(ascii == 120 || ascii == 121 || ascii == 122){
						var letraNueva = String.fromCharCode(ascii + mueva - minus);
					cesar += letraNueva;
				}else{
					var letraNueva = String.fromCharCode(ascii + mueva)
					cesar += letraNueva;
				}

			}else{
				cesar += " ";
			}
			
		}
	
		document.write("<br>Original : " + cadena+ "<br>");
		document.write("Cesar ---: " + cesar.toUpperCase());
		
		//console.log("\nOriginal : " + cadena);
		//console.log("Cesar    : " + cesar.toUpperCase());
	}
	
}