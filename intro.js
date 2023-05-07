//Ejercio N° 1
let miNombre = "Tatiana"
//ejercicio N° 2
let miApellido = "Guzman"
//ejercicio N° 3
let miEdad = 23
//ejercicio N° 4
let miMascota = "perro"
//ejercicio N° 5
let edadMascota = 10
//ejercicio N° 6
console.log (miNombre)
console.log (miApellido)
console.log (miEdad)
console.log (miMascota)
console.log (edadMascota)
//ejercicio N° 7
const nombreCompleto = `${miNombre} ${miApellido}`
console.log (nombreCompleto)
//ejercicio N° 8
const textoPresentacion = `Mi nombre es ${ miNombre } ${miApellido} tengo ${miEdad } años y tengo un ${miMascota} que tiene ${edadMascota}años.`
console.log ( textoPresentacion )
//ejercicio N°9
let sumaEdades = 5 + 8
console.log(sumaEdades);
let restaEdades = 8 - 3
console.log(restaEdades);
let productoEdades = 5 * 2
console.log(productoEdades);
let divisionEdades = 80 /  10
console.log(divisionEdades);
//ejercicio N° 10
const textoPresentacion2 = `La edad que tiene mi hermano es de ${productoEdades} con el nos llevamos un poco mas de ${sumaEdades} años, él con mi hermana se llevan ${restaEdades} entonces el tiene ${divisionEdades} años de edad. `
console.log(textoPresentacion2);
//ejercicio N° 11
const alumno = {
    "nombre": "Tatiana",
    "segundoNombre": "Guadalupe",
    "apellido": "Guzman",
    "edad": 23,
    "altura": 1.63,
}
console.table (alumno)
console.log(alumno.nombre);
console.log(alumno.segundoNombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.altura);
//ejercicio N° 12
const mascota = {
    "nombre": "Moro",
    "edad": 12,
    "peso": 15,
    "colorDePelo": "negro",
    "raza" : "labrador",
}
console.table (mascota)
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.peso);
console.log(mascota.colorDePelo);
console.log(mascota.raza);
//ejercicio N° 13
 let frutas = [ "sandias", "manzanas", "naranjas", "frutillas", "bananas",]
 console.log(frutas);
 console.log(frutas [1]);
 console.log(frutas [2]);
 console.log(frutas [3]);
 console.log(frutas [4]);
 console.log(frutas [0]);
 //ejercicio N° 14
 const numeros = [1,2,3,4,5]
 console.log(numeros);
 console.log(numeros [0]);
 console.log(numeros [1]);
 console.log(numeros [2]);
 console.log(numeros [3]);
 console.log(numeros [4]);
 //ejercicio N° 15
 const familia = ["mama", "papa", "hijaMayor", "hijoDelMedio", "hijoMenor"]
 console.log(familia);
 console.log(familia [0]);
 console.log(familia [1]);
 console.log(familia [2]);
 console.log(familia [3]);
 console.log(familia [4]);
 //ejercicio N° 16
 const textoaleatorio = `El ${familia[4]} de una familia numerosa hoy se comió ${numeros[4]} ${frutas[2]}`
console.log(textoaleatorio);
//ejercicio N ° 17
let edadIngresada = prompt ("Ingrese su edad")
console.log(edadIngresada);
let edadIngresada2 = prompt ("Ingrese la edad de su amig@")
console.log(edadIngresada2);
let edadesIguales = edadIngresada === edadIngresada2
let edadMayor = edadIngresada > edadIngresada2
let edadMenor = edadIngresada < edadIngresada2
console.log( `Mi edad es igual a la de mi compañero: ${edadesIguales}`);
console.log(`Mi edad es mayor a la de mi compañero: ${edadMayor}`);
console.log(`Mi edad es menor a la de mi compañero: ${edadMenor}`);
//ejercicio N° 18
let soyMayorDeEdad = edadIngresada
if (soyMayorDeEdad > 18) {
    console.log(`Soy mayor de edad y tengo ${edadIngresada}`);
}else if (soyMayorDeEdad < 18) {
    console.log(`No soy mayor de edad y tengo ${edadIngresada}`);
}
//ejercicio N° 19
let altura = prompt ("Ingrese su altura en cm")
if (altura >= 120 && edadIngresada >= 6) {
    console.log(`Puede subir a la atraccion, tiene ${altura} cm y ${edadIngresada} años`);
}else if (altura < 120 && edadIngresada < 6) {
    console.log(`No puede subir a la atraccion, tiene ${altura} cm y ${edadIngresada} años`);
} else if (altura >= 120 && edadIngresada < 6 ) {
    console.log(`No puede subir a la atraccion debido a que tiene ${edadIngresada} años.`);
}else if (altura < 120 && edadIngresada >= 6) {
    console.log(`No puede subir a la atraccion debido a que mide ${altura} cm`);
}
//ejercicio N° 20
let pase = prompt (`Ingrese su tipo de pase : "vip", "normal" o "limitado"`)
let saldo = prompt (`Ingrese el saldo que posee:`)
const puedePasar = (pase) + ":" + (saldo)
switch (puedePasar) {
    case "vip" :
        console.log(`La persona puede pasar tiene un pase "Vip" y un saldo de ${saldo}`);
        break;
        case "normal":
        console.log(`La persona puede pasar tiene un pase "Normal" y un saldo de ${saldo}`);
        break;
        case "limitado":
        console.log(`La persona puede pasar tiene un pase "Limitado" y un saldo de ${saldo}`);
        break;

    default:
        console.log(`Pase no identificado`);
        break;
}