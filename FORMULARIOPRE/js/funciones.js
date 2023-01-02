

function agregardatos(nombre,caja,modalidad,documentos,fechaEnt,fechaSal,calificacion){

		cadena="nombre=" + nombre + 
		"&caja="+ caja + 
		"&modalidad="+ modalidad + 
		"&documentos="+ documentos + 
		"&fechaEnt=" + fechaEnt   +
		"&fechaSal="+ fechaSal  +
		"&calificacion="+ calificacion;

	$.ajax({
		type:"POST",
		url:"php/agregarDatos.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tabla.php');
				alertify.success("Registro Exitoso");
			}else{
				alertify.error("fatal error");
			}
		}
	});

}


function agregaform(datos){

	d=datos.split('||');

	$('#id').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#cajau').val(d[2]);
	$('#documentosu').val(d[3]);
	$('#modalidadu').val(d[4]);
	$('#fechaEntu').val(d[5]);
	$('#fechaSalu').val(d[6]);
	$('#calificacionu').val(d[7]);

}

function actualizaDatos(){


	id=$('#id').val();
	nombre=$('#nombreu').val();
	caja=$('#cajau').val();
	documentos=$('#documentosu').val();
	modalidad=$('#modalidadu').val();
	fechaEnt=$('#fechaEntu').val();
	fechaSal=$('#fechaSalu').val();
	calificacion=$('#calificacionu').val();

	cadena= "id=" + id +
			"&nombre=" + nombre + 
			"&caja=" + caja +
			"&modalidad=" + modalidad +
			"&documentos=" + documentos +
			"&fechaSal=" + fechaSal +
			"&fechaEnt=" + fechaEnt +
			"&calificacion=" + calificacion;
			
	$.ajax({
		type:"POST",
		url:"php/actualizaDatos.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tabla.php');
				alertify.success("Actualizado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});


}

function preguntarSiNo(id){
	alertify.confirm('Eliminar Datos', '¿Esta seguro de eliminar este registro?', 
					function(){ eliminarDatos(id) }
                , function(){ alertify.error('Se cancelo')});
}

function eliminarDatos(id){

	cadena="id=" + id;

		$.ajax({
			type:"POST",
			url:"php/eliminarDatos.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tabla.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}

