
const encriptar = document.getElementById("button_encriptar");
const desencriptar = document.getElementById("button_desencriptar");
const copy = document.getElementById("button_copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const textencrip = document.getElementById("textencrip");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")
	
const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Ingrese el texto aquí";
	textencrip.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	textencrip.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textInfo.classList.remove("ocultar")
	copy.classList.add("bn_ocultar");
	textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

encriptar.addEventListener('click', () => {

	const texto = textoInicial.value;
	var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
	if(texto == ""){
		Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'el campo no bebe estar vacio',
			showConfirmButton: false,
			timer: 2000
		});
    }
	else if (texto.match(mayus) != texto.match(mayus)){
		Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'el texto no debe contener mayusculas',
			showConfirmButton: false,
			timer: 2000
		});

		reset();
    }
    else if (texto.match(caracteres) != texto.match(caracteres)){
		Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'el texto no debe contener caracteres especiales',
			showConfirmButton: false,
			timer: 2000
		});

		reset();
}

	else if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} 
});





desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value;
	var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

	if(texto == ""){
		Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'el campo no bebe estar vacio',
			showConfirmButton: false,
			timer: 2000
		});
    }
	else if (texto.match(mayus) != texto.match(mayus)){
		Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'el texto no debe contener mayusculas',
			showConfirmButton: false,
			timer: 2000
		});

		reset();
    }
    else if (texto.match(caracteres) != texto.match(caracteres)){
		Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'el texto no debe contener caracteres especiales',
			showConfirmButton: false,
			timer: 2000
		});

		reset();
}
	else if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} 
});

copy.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'texto copiado',
		showConfirmButton: false,
		timer: 2000
	});
	reset();
});
//auto ajuste de textarea
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});