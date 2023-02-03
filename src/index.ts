let saludo: string | number  = ""

let observacion: string | undefined

let despedida: any = "" 
despedida = 12125
despedida = true
despedida = new Date()

//let gatoConBotas: Pelicula

//type
//interface
interface IJuego {
    id: number
    titulo: string,
    salida: number,
    genero: "Accion y aventuras" | "Plataforma" | "Peleas" | "Deportes" | "Simulacion" | "Carreras",
    clasificacion: "+18" | "E" | "K-A" | "T",
    desarrollador: string,
    dificultad: string,
    distribuidor: IDistribuidor,
    duracion_horas?: number
    estreno: IEnlace
    creadores: IEnlace[]
    describirClasificacion(): string
}

interface IDistribuidor{
    nombre: string
    direccion: string
    cantidadEmpleados: number
    fechaFundacion: Date
    continenteOrigen: "Asia" | "America" | "Europa" | "Oceania"
}

interface IEnlace{
    texto: string,
    enlace: string
}

const juego: IJuego = {
    id: 1,
    titulo: 'ELDEN RING',
    salida: 2022,
    genero: "Plataforma",
    clasificacion: "E",
    desarrollador: "FromSoftware",
    dificultad: "extremadamente yuca",
    distribuidor: {
        nombre: "Namco Bandai",
        direccion: "Japon",
        cantidadEmpleados: 1000,
        fechaFundacion: new Date(),
        continenteOrigen: "Asia"
    },
    duracion_horas: 12,
    estreno: {
        texto: "2023",
        enlace: "https://www.eldenring.com"
    },
    creadores: [
        {
            texto: "Creador",
            enlace: "https://www.google.com/creadorbamco"
        },
    ],
    describirClasificacion() {
        return "no definido"
    },
}

interface IError{
    titulo: string
    codigo: number
    mensaje: string
}

juego.creadores.push({
    texto: "",
    enlace: ""
})

///Funciones
function buscarJuego() : IJuego{
    return juego2
}

function saludar(): string{
    console.log("Hola")
    return ""
}

function obtenerGeneros(): "Accion y aventuras" | "Plataforma" | "Peleas" | "Deportes" | "Simulacion" | "Carreras"{
    return "Plataforma"
}


const distribuidor1: IDistribuidor = {
nombre: "",
direccion: "",
cantidadEmpleados: 0,
fechaFundacion: new Date(),
continenteOrigen: "Asia"
}


const juego2: IJuego = {
    id: 2,
    titulo: 'Elden ring modificado',
    salida: 2022,
    genero: "Plataforma",
    clasificacion: "E",
    desarrollador: "FromSoftware",
    dificultad: "extremadamente yuca",
    distribuidor: distribuidor1,
    estreno: {
        texto: "2022",
        enlace: "www.google.com"
    },
    creadores: [],
    describirClasificacion() {
        return "no definido"
    },
}

let juego3: IJuego = {
    id: 3,
    titulo: "",
    salida: 0,
    genero: "Accion y aventuras",
    clasificacion: "+18",
    desarrollador: "",
    dificultad: "",
    distribuidor: distribuidor1,
    estreno: {
        texto: "2022",
        enlace: "www.google.com"
    },
    creadores: [],
    describirClasificacion() {
        return "no definido"
    },
}


const creador1: IEnlace = {
    texto: "Creador 1",
    enlace: "https://www.google.com/creadorbamco"
}


//Arreglo de juegos

const coleccionJuegos: IJuego[] = []

coleccionJuegos.push(juego)
coleccionJuegos.push(juego2)
coleccionJuegos.push(juego3)

//v1
function buscarJuegoPorIDv1(id : number): IJuego | undefined {
    return coleccionJuegos.find((juego) => juego.id === id)
}


//v2
function buscarJuegoPorIDv2(id : number): IJuego | IError {
    const resultado = coleccionJuegos.find((juego) => juego.id === id)

    if(resultado){
        return resultado
    }else{
        const errorNoEncontrado: IError = {
            mensaje: "No se encontró un juego con ese id",
            titulo: "No encontrado",
            codigo: 404
        }
        return errorNoEncontrado
    } 
}



console.log(buscarJuegoPorIDv1(2))
console.log(buscarJuegoPorIDv2(4))

console


class Juego implements IJuego{
    id: number
    titulo: string = ""
    salida: number = 0
    genero: "Accion y aventuras"|"Plataforma"|"Peleas"|"Deportes"|"Simulacion"|"Carreras" = "Accion y aventuras"
    clasificacion: "+18"|"E"|"K-A"|"T" = "E"
    desarrollador: string = ""
    dificultad: string = ""
    distribuidor: IDistribuidor = {
        nombre: "",
        direccion: "",
        cantidadEmpleados: 0,
        fechaFundacion: new Date(),
        continenteOrigen: "Asia"
    }
    duracion_horas?: number|undefined
    estreno: IEnlace = {
        texto: "",
        enlace: ""
    }
    creadores: IEnlace[] = []

    constructor(id: number){
        this.id = id
    }

    describirClasificacion(): string{
        switch (this.clasificacion){
            case "E":
            return "Este juego es para todas las edades" 

            case "K-A":
            return "De niños a adultos"

            case "T":
            return "Adolescentes"

            case "+18":
            return "Mayores de edad"

            default:
            return "no se encontró esta clasificacion"
        }
        

    }

}

const juegoImplementadoDesdeClase: IJuego = new Juego(1)

juegoImplementadoDesdeClase.describirClasificacion()


//juego.creadores.push(creador1)
//juego.creadores.push(distribuidor1)



/*
observacion = "hola"

saludo = 10241532512

saludo = true

saludo = new Date()


if(saludo === "Hola mundo"){
    console.log("si es un saludo")
}  else{
    console.error("es otra cosa")
}

console.log(saludo)

*/