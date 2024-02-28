AOS.init();
$('.marquee').marquee({
    duration: 18000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
});

$('.marquee2').marquee({
    duration: 18000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
});


function addClassOnScroll() {
    var heroSection = document.querySelector('.hero2');
    var menu = document.querySelector('header');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var heroMidpoint = heroSection.offsetTop + heroSection.offsetHeight / 2;
    if (scrollPosition > heroMidpoint) {
        menu.classList.add('bVLcxx');
    } else {
        menu.classList.remove('bVLcxx');
    }
}

window.addEventListener('scroll', addClassOnScroll);
addClassOnScroll();

document.addEventListener("click", function (e) {
    if ((e.target.closest("button.preguntas")) || (e.target.closest("a.preguntas")) || (e.target.closest("section.popUp.preguntas .btnClose")) || (e.target.closest("section.popUp.preguntas .filtro"))) {
        document.querySelector("section.popUp.preguntas").classList.toggle("open")
        document.querySelector("body").classList.toggle("scrollHidden")
    }
    /*
    if ((e.target.closest(".btnterminos")) || (e.target.closest("section.popUp.terminosCondiciones .btnClose"))) {
        document.querySelector("section.popUp.terminosCondiciones").classList.toggle("open")
        document.querySelector("body").classList.toggle("scrollHidden")
    }
    */
    if ((e.target.closest(".participar")) || (e.target.closest("section.popUp.formularioPop .btnClose")) || (e.target.closest("section.popUp.formularioPop .filtro"))) {
        document.querySelector("section.popUp.formularioPop").classList.toggle("open")
        document.querySelector("body").classList.toggle("scrollHidden")
    }
    if ((e.target.closest("section.popUp.registrarte .btnClose"))) {
        document.querySelector("section.popUp.registrarte").classList.toggle("open")
        document.querySelector("body").classList.toggle("scrollHidden")
    }
    if ((e.target.closest("section.popUp.noregistrarte .btnClose"))) {
        document.querySelector("section.popUp.noregistrarte").classList.toggle("open")
        document.querySelector("body").classList.toggle("scrollHidden")
    }
    if ((e.target.closest("header .container .navigation ul li.btnMenu button")) || e.target.closest("section.menuMovil ul li a")) {
        document.querySelector("section.menuMovil").classList.toggle("open")
        document.querySelector("body").classList.toggle("scrollHidden")
        document.querySelector("header").classList.toggle("open")
    }
})

var itemPregunta = document.querySelectorAll('section.preguntas .contentPreguntas .item .cabecera');

itemPregunta.forEach(function (element) {
    element.addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
        itemPregunta.forEach(function (item) {
            if (item !== element && item.parentElement.classList.contains('open')) {
                item.parentElement.classList.remove('open');
            }
        });
    });
});

/*
const inputArchivo = document.querySelector('#Captura');
inputArchivo.addEventListener('change', function () {
    const nombreArchivo = inputArchivo.files[0].name;
    const spanNombreArchivo = document.querySelector('section.hero .nombreArchivo');
    spanNombreArchivo.textContent = nombreArchivo;
});

const inputArchivo2 = document.querySelector('#Captura2');
inputArchivo2.addEventListener('change', function () {
    const nombreArchivo2 = inputArchivo2.files[0].name;
    const spanNombreArchivo2 = document.querySelector('section.formularioPop .nombreArchivo');
    spanNombreArchivo2.textContent = nombreArchivo2;
});



/* validacion de hero 
const listainputs = document.querySelectorAll("section.hero .formulario .contentInput input")
const listaselect = document.querySelectorAll("section.hero .formulario select")
var inputTerminos = document.querySelector('section.hero input#terminos');
$(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

function valiteInputs(e) {
    for (let y = 0; y < listainputs.length; y++) {
        if (!listainputs[y].value) {
            listainputs[y].classList.add("error");
            e.preventDefault();
        } else {
            listainputs[y].classList.remove("error");
        }
    }
}

function validateNumbreDNI(e) {
    const inputNumero = document.querySelector("section.hero #numDocumento")
    const minimoCaracteres = 8;
    if (inputNumero.value.length < minimoCaracteres) {
        inputNumero.classList.add("error");
        e.preventDefault();
    } else {
        inputNumero.classList.remove("error");
    }
}

function validateSelect(e) {
    listaselect.forEach(function (select) {
        if (select.value === select.options[0].value) {
            select.classList.add('error');
            e.preventDefault();
        } else {
            select.classList.remove('error');
        }
    });
}

function validateNumbreTelefono(e) {
    const inputNumero = document.querySelector("section.hero #celular")
    const minimoCaracteres = 8;
    if (inputNumero.value.length <= minimoCaracteres) {
        inputNumero.classList.add("error");
        e.preventDefault();
    } else {
        inputNumero.classList.remove("error");
    }
}

function validateInputTerminos(e) {
    if (!inputTerminos.ckecked) {
        inputTerminos.parentElement.classList.add("error");
    } else {
        inputTerminos.parentElement.classList.remove("error");
    }
}

function validateInputCorreo(e) {
    var inputCorreo = document.querySelector('section.hero form input[type=email]');
    var valueCorreo = inputCorreo.value;
    if (valueCorreo.includes("@") && (valueCorreo.includes(".com") || valueCorreo.includes(".pe") || valueCorreo.includes(".gob") || valueCorreo.includes(".net") || valueCorreo.includes(".org") || valueCorreo.includes(".edu") || valueCorreo.includes(".gov") || valueCorreo.includes(".mil"))) {
        inputCorreo.classList.remove("error");
    } else {
        inputCorreo.classList.add("error");
        e.preventDefault();
    }
}

document.addEventListener("click", function (e) {
    if (e.target.closest("section.hero form button")) {
        valiteInputs(e)
        validateSelect(e)
        validateNumbreDNI(e)
        validateNumbreTelefono(e)
        validateInputCorreo(e)
        validateInputTerminos(e)
    }
})
*/

/* validacion de popup 


const listainputs2 = document.querySelectorAll("section.formularioPop .formulario .contentInput input")
const listaselect2 = document.querySelectorAll("section.formularioPop .formulario select")
var inputTerminos2 = document.querySelector('section.formularioPop input#terminos');
$(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

function valiteInputs2(e) {
    for (let y = 0; y < listainputs2.length; y++) {
        if (!listainputs2[y].value) {
            listainputs2[y].classList.add("error");
            e.preventDefault();
        } else {
            listainputs2[y].classList.remove("error");
        }
    }
}

function validateNumbreDNI2(e) {
    const inputNumero = document.querySelector("section.formularioPop #numDocumento")
    const minimoCaracteres = 8;
    if (inputNumero.value.length < minimoCaracteres) {
        inputNumero.classList.add("error");
        e.preventDefault();
    } else {
        inputNumero.classList.remove("error");
    }
}

function validateSelect2(e) {
    listaselect2.forEach(function (select) {
        if (select.value === select.options[0].value) {
            select.classList.add('error');
            e.preventDefault();
        } else {
            select.classList.remove('error');
        }
    });
}

function validateNumbreTelefono2(e) {
    const inputNumero = document.querySelector("section.formularioPop #celular")
    const minimoCaracteres = 8;
    if (inputNumero.value.length <= minimoCaracteres) {
        inputNumero.classList.add("error");
        e.preventDefault();
    } else {
        inputNumero.classList.remove("error");
    }
}

function validateInputTerminos2(e) {
    if (!inputTerminos2.ckecked) {
        inputTerminos2.parentElement.classList.add("error");
    } else {
        inputTerminos2.parentElement.classList.remove("error");
    }
}


function validateInputCorreo2(e) {
    var inputCorreo2 = document.querySelector('section.formularioPop form input[type=email]');
    var valueCorreo2 = inputCorreo2.value;
    if (valueCorreo2.includes("@") && (valueCorreo2.includes(".com") || valueCorreo2.includes(".pe") || valueCorreo2.includes(".gob") || valueCorreo2.includes(".net") || valueCorreo2.includes(".org") || valueCorreo2.includes(".edu") || valueCorreo2.includes(".gov") || valueCorreo2.includes(".mil"))) {
        inputCorreo2.classList.remove("error");
    } else {
        inputCorreo2.classList.add("error");
        e.preventDefault();
    }
}

document.addEventListener("click", function (e) {
    if (e.target.closest("section.formularioPop form button")) {
        valiteInputs2(e)
        validateSelect2(e)
        validateNumbreDNI2(e)
        validateNumbreTelefono2(e)
        validateInputCorreo2(e)
        validateInputTerminos2(e)
    }
})
*/

var botones = document.querySelectorAll('.botones button');

botones.forEach(function (boton) {
    boton.addEventListener('click', function () {

        // Agregar la clase 'select' al botón clicado y quitarla del otro
        botones.forEach(function (b) {
            b.classList.remove('select');
        });
        boton.classList.add('select');

        // Obtener el valor del data-category del botón clicado
        var categoriaSeleccionada = boton.getAttribute('data-category');

        // Seleccionar los elementos .cuerpo y actualizar las clases
        var cuerpos = document.querySelectorAll('.listaContent .cuerpo');
        cuerpos.forEach(function (cuerpo) {
            var categoriaCuerpo = cuerpo.getAttribute('data-category');
            if (categoriaCuerpo === categoriaSeleccionada) {
                cuerpo.classList.add('select');
            } else {
                cuerpo.classList.remove('select');
            }
        });

    });
});



var fixedProducto = document.querySelectorAll(".billetesIzquierda");
var tl = gsap.timeline({
    scrollTrigger: {
        //markers: true,
        trigger: '.scroll',
        start: '0% 0%',
        end: '30% 0%',
        scrub: 1,
    },
});
tl.to(fixedProducto, { y: 300, duration: 1, linear: "none" })


var fixedProducto2 = document.querySelectorAll(".billetesDerecha");
var tl = gsap.timeline({
    scrollTrigger: {
        //markers: true,
        trigger: '.scroll',
        start: '0% 0%',
        end: '30% 0%',
        scrub: 1,
    },
});
tl.to(fixedProducto2, { y: 300, duration: 1, linear: "none" })



/* toogle  */

var itemTabla = document.querySelectorAll('section.gandoresmovil .tab .cabecera');

itemTabla.forEach(function (element) {
    element.addEventListener('click', function () {
        this.parentElement.classList.toggle('select');
        itemTabla.forEach(function (item) {
            if (item !== element && item.parentElement.classList.contains('select')) {
                item.parentElement.classList.remove('select');
            }
        });
    });
});


