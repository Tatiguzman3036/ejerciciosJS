let miNombre = "Tatiana"
let segundoNombre = "Guadalupe"
let miApellido = "Guzman"
let miEdad = 23
let miMascota = "perro"
let edadMascota = 10
console.log (miNombre)
console.log (miApellido)
console.log (miEdad)
console.log (miMascota)
console.log (edadMascota)
const nombreCompleto = `${miNombre} ${segundoNombre} ${miApellido}`
const presentacion = `Mi nombre es ${ miNombre } ${miApellido} tengo ${miEdad } años y tengo un ${miMascota} que tiene ${edadMascota}años.`
console.log (nombreCompleto)
console.log ( presentacion )
let añoNacimientoUsuario = 1977
let añoActual = 2023
let edad = añoActual - miEdad
console.log (edad)
let edadDeMama = añoActual - añoNacimientoUsuario
console.log (edadDeMama)
let suma = añoNacimientoUsuario + miEdad
console.log (suma)
let productoDeEdades = edad * miEdad
console.log (productoDeEdades)
let divisionDeEdades = edad / miEdad
console.log (divisionDeEdades)
let restaEdades = miEdad + edadMascota
console.log (restaEdades)
const presentacionDeTodasLasVariables = `Mi nombre es  ${nombreCompleto} tengo ${miEdad}, estamos en el año ${añoActual}, tengo un ${miMascota} que tiene
 ${edadMascota} años de vida, nos llevamos ${restaEdades} de diferencia, nací en el año ${edad}, mi mamá nacio en ${añoNacimientoUsuario} y tiene ahora ${edadDeMama} años`
console.log (presentacionDeTodasLasVariables)
