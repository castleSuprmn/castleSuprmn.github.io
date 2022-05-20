var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;

function load() {

    pregunta1();

}


function pregunta1() {
    var inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                '1': 'a) Dolor abdominal',
                '2': 'b) Gas',
                '3': 'c) Sensación de “hinchazón” abdominal',
                '4': 'd) Diarrea',
                '5': 'e) Dos o más síntomas',
                '6': 'f) No se producen síntomas'
            })
        }, 1000)
    })
    Swal.fire({
        title: '¿Qué síntomas experimentas después de comer alimentos lácteos?',
        input: 'radio',
        allowOutsideClick: false,
        heightAuto: false,
        width: '400px',
        height: '100rem',
        inputOptions: inputOptions,
        confirmButtonText: 'Siguiente',
        inputValidator: (value) => {
            if (!value) {
                return 'Debes elegir una de las opciones!'
            }
        }
    }).then((result) => {
        if (result.value) {
            switch(result.value){
                case '1':
                    p1 = 2;
                    break;
                case '2':
                    p1 = 2;
                    break;
                case '3':
                    p1 = 2;
                    break;
                case '4':
                    p1 = 1;
                    break;
                case '5':
                    p1 = 3;
                    break;
                case '6':
                    p1 = 0;
                    break;
                default:
                    p1=0;
            };
            var opcion = document.getElementsByClassName("p1-" + result.value);
            for (var i = 0; i<opcion.length; i++) {
                opcion[i].classList.add("subrayado");
            }
            pregunta2();
        }
    })
}

function pregunta2() {
    var inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                '1': 'a) Inmediatamente:',
                '2': 'b) De 30 minutos a dos horas después de comer',
                '3': 'c) Dos horas después de comer',
                '4': 'd) No se producen síntomas'
            })
        }, 1000)
    })
    Swal.fire({
        title: 'Cuando consumes productos lácteos los síntomas inician ',
        input: 'radio',
        allowOutsideClick: false,
        heightAuto: false,
        width: '400px',
        height: '100rem',
        inputOptions: inputOptions,
        confirmButtonText: 'Siguiente',
        inputValidator: (value) => {
            if (!value) {
                return 'Debes elegir una de las opciones!'
            }
        }
    }).then((result) => {
        if (result.value) {
            switch(result.value){
                case '1':
                    p2 = 1;
                    break;
                case '2':
                    p2 = 3;
                    break;
                case '3':
                    p2 = 0;
                    break;
                case '4':
                    p2 = 0;
                    break;
                default:
                    p2=0;
            };
            var opcion = document.getElementsByClassName("p2-" + result.value);
            for (var i = 0; i<opcion.length; i++) {
                opcion[i].classList.add("subrayado");
            }
            pregunta3();
        }
    })
}

function pregunta3() {
    var inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                '1': 'a) Todos los días',
                '2': 'b) Varias veces a la semana',
                '3': 'c) Una vez a la semana',
                '4': 'd) No los evito'
            })
        }, 1000)
    })
    Swal.fire({
        title: '¿Con qué frecuencia evita consumir alimentos que contienen lácteos?',
        input: 'radio',
        allowOutsideClick: false,
        heightAuto: false,
        width: '400px',
        height: '100rem',
        inputOptions: inputOptions,
        confirmButtonText: 'Siguiente',
        inputValidator: (value) => {
            if (!value) {
                return 'Debes elegir una de las opciones!'
            }
        }
    }).then((result) => {
        if (result.value) {
            switch(result.value){
                case '1':
                    p3 = 3;
                    break;
                case '2':
                    p3 = 2;
                    break;
                case '3':
                    p3 = 1;
                    break;
                case '4':
                    p3 = 0;
                    break;
                default:
                    p3=0;
            };
            var opcion = document.getElementsByClassName("p3-" + result.value);
            for (var i = 0; i<opcion.length; i++) {
                opcion[i].classList.add("subrayado");
            }
            pregunta4();

        }
    })
}


function pregunta4() {
    var inputOptions = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                '1': 'a) Sí, con frecuencia',
                '2': 'b) Sí, algunas veces:',
                '3': 'c) No solicito leche deslactosada'
            })
        }, 1000)
    })
    Swal.fire({
        title: '¿Solicitas alimentos con leche deslactosada para evitar molestias\ngastrointesinales (hinchazón o dolor abdominal, flatulencia, diarreas o náuseas)?',
        input: 'radio',
        allowOutsideClick: false,
        heightAuto: false,
        width: '400px',
        height: '100rem',
        inputOptions: inputOptions,
        confirmButtonText: 'Terminar',
        inputValidator: (value) => {
            if (!value) {
                return 'Debes elegir una de las opciones!'
            }
        }
    }).then((result) => {
        if (result.value) {
            switch(result.value){
                case '1':
                    p4 = 3;
                    break;
                case '2':
                    p4 = 2;
                    break;
                case '3':
                    p4 = 0;
                    break;
                default:
                    p4=0;
            };
            var opcion = document.getElementsByClassName("p4-" + result.value);
            for (var i = 0; i<opcion.length; i++) {
                opcion[i].classList.add("subrayado");
            }
            calcular();

        }
    })
}

function calcular() {
    var suma = p1 + p2 + p3 + p4;
    if(suma < 6){        
        Swal.fire(
            'PUNTAJE: ' + suma,
            'Poco probable',
            'success'
          )
    }
    else if(suma < 9){
        Swal.fire(
            'PUNTAJE: ' + suma,
            'Probabilidad moderada.',
            'info'
          )
    }
    else{
        Swal.fire(
            'PUNTAJE: ' + suma,
            'Probabilidad alta.',
            'warning'
          )
    }
    
    var fondo1 = document.getElementById("fondo1");
    var fondo2 = document.getElementById("fondo2");
    var tPuntos = document.getElementById("tPuntos");
    //tPuntos.classList.add("hided");
    tPuntos.innerHTML = suma;
    fondo1.classList.add("hided");
    fondo2.classList.remove("hided");

}
