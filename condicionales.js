//ejercicio N° 1
/* let numeroUno = prompt (`ingresa el primer numero:`)
let numeroDos = prompt (`Ingrese el segundo numero`)
let numeroMayor = numeroUno > numeroDos
console.log(numeroMayor); */
//ejercicio N°2
/* if (numeroUno === numeroDos) {
    console.log(`El primer numero ingresado es igual al segundo numero ingresado`);
}else if (numeroUno !== numeroDos) {
    console.log(`Ambos numeros son diferentes`);
} */
//ejercicio N° 3
/* if (numeroUno > numeroDos) {
    console.log(`El primer numero es mayor que el segundo numero`);
}else if (numeroUno < numeroDos) {
    console.log(`El segundo numero es mayor que el primer numero`);
}else if (numeroUno === numeroDos) {
    console.log(`Ambos numeros son iguales`);
} */
//ejercicio N° 4
/* let numeroTres = prompt (`Ingrese el tercer numero`)
if (numeroUno < numeroDos && numeroUno < numeroTres) {
    console.log(`El primer numero ingresado es menor al segundo y tercer numero`);
}else if (numeroTres < numeroDos && numeroTres < numeroUno ) {
    console.log(`El tercer numero es menor al primer y segundo numero ingresado`);
}else if (numeroDos < numeroUno && numeroDos < numeroTres) {
    console.log(`El segundo numero es menor al primer y tercer numero`);
} */
//ejercicio N° 5
let personaUno = {
    nombre : "Manuel",
    edad: 28,
    altura : 1.74,
}
let personaDos = {
    nombre : "Tatiana",
    edad: 23,
    altura : 1.63,
}
if (personaUno.edad > personaDos.edad) {
    console.log(`La primera persona es mayor de edad`);
}else if (personaUno.edad < personaDos.edad) {
    console.log(`La segunda persona es mayor de edad `);
}
if (personaUno.altura < personaDos.altura) {
    console.log(`La segunda persona es mas alta que la primer persona`);
}else if (personaUno.altura > personaDos.altura) {
    console.log(`La primer persona es mas alta que la segunda persona`);
}
//ejercicio N° 6
/* const nombre = prompt ( `Ingrese su primer nombre:`)
const edad = prompt (`Ingrese su edad:`)
const altura = prompt (`Ingrese su altura en cm:`)
const vision = prompt (`Ingrese su nivel de vision: (Siendo "1" el mas bajo y "10" vision perfecta)`)
if (edad >= 18 && altura >= 150 && vision >= 8) {
    console.log(`${nombre} esta capacitad@ para conducir`);
}else if (edad < 18 || altura < 150 || vision < 8) {
    console.log(`${nombre} no esta capacitad@ para conducir`);
} */
//ejercicio N° 7
/* const nombrePersona = prompt (`Ingrese su nombre:`)
const miNombre = "Tatiana"
const tipodepase = prompt (`Ingrese su tipo de pase:(En caso de no tener colocar: "No poseo")`)
const entrada = prompt (`Ingrese si tiene entrada: Si/No`)
if (nombrePersona == miNombre || tipodepase == "Vip") {
    alert(`Bienvenid@ ${nombrePersona}`)
}else if (entrada === "Si") {
    alert (`Bienvenid@ ${nombrePersona}`)
}else if (entrada === "No" && tipodepase !== "Vip" && nombrePersona !== miNombre) {
    const deseaComprar = prompt (`¿Desea comprar una entrada? Si/No`)
    if (deseaComprar === "Si") {
        const dineroDisponible = prompt (`Ingrese su dinero disponible`)
        if (dineroDisponible >= 1000) {
            alert (`Bienvenid@ ${nombrePersona}`)
        }else if (dineroDisponible < 1000) {
            alert ( `${nombrePersona} su compra a sido rechazada.`)
        }
    } else if (deseaComprar === "No") {
        alert(`${nombrePersona}: Hasta la proxima!`)
    }
} */
//ejercicio N° 8
/* let numeroIncognita = 8
const numeroIngresado = prompt (`Ingrese un numero del 1 al 10`)
 if (numeroIngresado > numeroIncognita) {
    alert (`El numero ingresado es mayor, vuelve a intentarlo`)
    const numeroIngresado = prompt (`Ingrese un numero del 1 al 10`)
    if (numeroIngresado < numeroIncognita) {
        alert (`“El numero ingresado es menor, vuelve a intentarlo`)
        const numeroIngresado = prompt (`Ingrese un numero del 1 al 10`)
        if (numeroIngresado != numeroIncognita) {
            alert (`Lo siento no pudiste adivinar el numero.`)
        }else if (numeroIngresado == numeroIncognita) {
            alert (`“Ganaste, has adivinado el número.`)
        }
    }else if (numeroIngresado == numeroIncognita) {
        alert (`“Ganaste, has adivinado el número.`)
    }
 }else if (numeroIngresado < numeroIncognita) {
    alert (`“El numero ingresado es menor, vuelve a intentarlo`)
    const numeroIngresado = prompt (`Ingrese un numero del 1 al 10`)
    if (numeroIngresado < numeroIncognita) {
        alert (`“El numero ingresado es menor, vuelve a intentarlo`)
        const numeroIngresado = prompt (`Ingrese un numero del 1 al 10`)
        if (numeroIngresado != numeroIncognita) {
            alert (`Lo siento no pudiste adivinar el numero.`)
        }else if (numeroIngresado == numeroIncognita) {
            alert (`“Ganaste, has adivinado el número.`)
        }
    }else if (numeroIngresado > numeroIncognita) {
        alert (`El numero ingresado es mayor, vuelve a intentarlo`)
        const numeroIngresado = prompt (`Ingrese un numero del 1 al 10`)
        if (numeroIngresado != numeroIncognita ) {
            alert (`Lo siento no pudiste adivinar el numero.`)
        }else if (numeroIngresado == numeroIncognita) {
            alert (`“Ganaste, has adivinado el número.`)
        }
    }else if (numeroIngresado == numeroIncognita) {
        alert (`“Ganaste, has adivinado el número.`) 
    }
}else if (numeroIngresado == numeroIncognita) {
    alert (`“Ganaste, has adivinado el número.`)
 } */
 //ejercicio N° 9
/*  let edadIngresada = prompt (`Ingresar tu edad:`)
 if (edadIngresada <= 12) {
    alert (`Eres un infante.`)
 }else if (edadIngresada >= 13 && edadIngresada <= 18) {
    alert(`Eres adolescente.`)
 }else if (edadIngresada >= 19 && edadIngresada <= 45) {
    alert(`Eres un joven mayor.`)
 }else if (edadIngresada > 45 && edadIngresada <=100) {
    alert (`Eres un anciano`)
 }else if (edadIngresada > 100) {
    let mayorDeCien = prompt (`¿En realidad tienes mas de 100 años?`)
    if (mayorDeCien === "Si") {
    alert (`Eres un anciano`)
    }
 } */
 //ejercicio N° 10
/*  alert (`JUEGO DE PIEDRA, PAPEL O TIJERA...`)
 let jugadorUno = prompt (`Primer Jugador: ingrese su eleccion`)
 let jugadorDos = prompt (`Segundo jugador: ingrese su eleccion`)
 if (jugadorUno == "Piedra" && jugadorDos == "Piedra") {
    alert (`Fue un empate`)
 }else if (jugadorUno == "Papel" && jugadorDos == "Papel") {
    alert (`Fue un empate`)
 }else if (jugadorUno == "Tijera" && jugadorDos == "Tijera") {
    alert (`Fue un empate`)
 }else if (jugadorUno == "Piedra" && jugadorDos == "Tijera") {
    alert (`El primer jugador ganó`)
 }else if (jugadorUno == "Papel" && jugadorDos == "Piedra") {
    alert (`El primer jugador ganó`)
 }else if (jugadorUno == "Tijera" && jugadorDos == "Papel") {
    alert (`El primer jugador ganó`)
 }else if (jugadorUno == "Piedra" && jugadorDos == "Papel") {
    alert (`El segundo jugador ganó`)
 }else if (jugadorUno == "Tijera" && jugadorDos == "Piedra") {
    alert (`El segundo jugador ganó`)
 }else if (jugadorUno == "Papel" && jugadorDos == "Tijera") {
    alert (`El segundo jugador ganó`)
 } */
 //ejercicio N° 11
/*  let colores = prompt (`Ingrese el color que desee:`)
 switch (colores) {
    case "Negro":
        alert(`Falta de color`);
        break;
    case "Blanco":
        alert(`Falta de color`);
        break;
    case "Verde":
        alert(`El color de la naturaleza`);
        break;
        case "Azul":
        alert(`El color del agua`);
        break;
        case "Amarillo":
        alert(`El color del sol`);
        break;
        case "Rojo":
        alert (`El color del fuego`)
        break;
        case "Marron":
        alert (`El color de la tierra`)
        break;
    default:
        alert ("Excelente eleccion, no la teniamos pensado");
        break;
 } */
 //Ejercicio N° 12
/*  const operacion = prompt (`Indica el tipo de operacion a utilizar : Suma/Resta/Multiplicacion/Division`)
 let primerNumero = prompt (`Ingrese el primer numero`)
 let segundoNumero = prompt (`Ingrese el segundo numero`)
 switch (operacion) {
    case "Suma":
        alert (`El resultado de sumar ${primerNumero} y ${segundoNumero} es ${primerNumero + segundoNumero}`)
        break;
    case "Resta":
        alert (`El resultado de restar ${primerNumero} y ${segundoNumero} es ${primerNumero - segundoNumero}`)
        break;
    case "Multiplicacion":
        alert(`El resultado de multiplicar ${primerNumero} y ${segundoNumero} es ${primerNumero * segundoNumero}`)
        break;
    case "Division":
          alert (`El resultado de dividir ${primerNumero} y ${segundoNumero} es ${primerNumero / segundoNumero}`)   
        break;
    default :
        alert (`Error.`)
        break;
 } */
 //Ejercicio N°  13
let documento = prompt (`Ingrese su D.N.I. :`)
let rectificacionDocumento = prompt (`Tus datos son ${documento}. Rsponde Si/No`)
if (rectificacionDocumento === "Si") {
    let registro = {
       "Documento": documento,
        "Registro": "Exitoso",
    }
    console.table (registro)
}else if (rectificacionDocumento === "No") {
    alert (`Vuelva a intentarlo en un mes`)
}
