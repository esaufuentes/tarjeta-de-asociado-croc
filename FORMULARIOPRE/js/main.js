



// * Input numero Edad
form.edad.dEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	form.edad.value = valorInput
		// Eliminamos espacios en blanco
		.replace(/\s/g, '')
		// Eliminar las letras
		.replace(/\D/g, '')
		// Ponemos espacio cada cuatro numeros
		.replace(/([0-3]{3})/g, '$1 ')
		// Elimina el ultimo espaciado
		.trim();

		EdadTarjeta.textContent = valorInput;

	if (valorInput == '') {
		EdadTarjeta.textContent = '###';

		logoMarca.innerHTML = '';
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();


});

// * Input Grado de estudios
formulario.inputGradoe.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputGradoe.value = valorInput.replace();
	GradoTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		GradoTarjeta.textContent = 'LIC. EN GASTRONIMIA';
	}

	mostrarFrente();



});




// * Select edad
formulario.selectEdad.addEventListener('change', (e) => {
	EdadTarjeta.textContent = e.target.value;
	mostrarFrente();
});


// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

