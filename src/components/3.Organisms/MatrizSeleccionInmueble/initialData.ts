import { MatrizSeleccionInmuebleHeader, MatrizSeleccionInmuebleEnum } from "./types";

export function createData(data: MatrizSeleccionInmuebleHeader) {
    return {
        [MatrizSeleccionInmuebleEnum.DESCTIPCION]: data.DESCTIPCION,
        [MatrizSeleccionInmuebleEnum.VALOR]: data.VALOR,
        "PONDERADO": data.PONDERADO,
        "PUNTOS": data.PUNTOS,
        [MatrizSeleccionInmuebleEnum.CALIFICACION]: data.CALIFICACION,
    }
}

let arrayCuadras =[
    {key:"2 CUADRAS", value:"1.0"},
    {key:"1 O 3 CUADRAS", value:"0.7"},
    {key:"4 CUADRAS", value:"0.4"},
    {key:"5 CUADRAS", value:"0.1"},
]

let viasAcceso = [
    {key:"UNA", value:"0.5"},
    {key:"DOS", value:"0.75"},
    {key:"TRES O MAS", value:"1.0"},
]

let ascensor = [
    {key:"2° O 3° PISO SIN ASCENSOR", value:"1.0"},
    {key:"ASCENSOR EN BUEN ESTADO", value:"0.8"},
    {key:"ASCENSOR EN MAL ESTADO", value:"0.6"},
    {key:"1° O >3° SIN ASCENSOR", value:"0.2"},
]

let estado = [
    {key:"BUENA", value:"1.0"},
    {key:"REGULAR", value:"0.5"},
    {key:"MALA", value:"0.1"},
]

let parquedoros = [
    {key:"CUBIERTO Y AMPLIO", value:"1.0"},
    {key:"DESCUBIERTO Y AMPLIO", value:"0.8"},
    {key:"CUBIERTO Y JUSTO", value:"0.6"},
    {key:"DESCUBIERTO Y JUSTO", value:"0.4"},
    {key:"NO TIENE", value:"0.0"},
]

let atiguedad = [
    {key:"MAYOR A 15 AÑOS", value:"0.5"},
    {key:"MENOS A 15 AÑOS", value:"1.0"},
]

let acabados = [
    {key:"MAL GUSTO Y EN BUEN ESTADO", value:"0.5"},
    {key:"BUEN GUSTO Y EN BUEN ESTADO", value:"1.0"},
    {key:"CUALQUIERA Y EN MAL ESTADO", value:"0.8"},
]

let cantidadUnidades = [
    {key:"100 A 150", value:"0.7"},
    {key:"150 A 200", value:"1.0"},
    {key:">200", value:"0.3"},
]

let carteraMorosa = [
    {key:"HASTA 10%", value:"1.0"},
    {key:"DE 10% A 20%", value:"0.5"},
    {key:"MAS DE 20%", value:"0.1"},
]

let cuotrasExtraordinarias = [
    {key:"SI", value:"0.0"},
    {key:"NO", value:"1.0"},
]

export const MatrizSeleccionInmuebleInitialData: MatrizSeleccionInmuebleHeader[] = [
    createData({ DESCTIPCION: 'CERCANIA A TRANSPORTE PUBLICO', VALOR: arrayCuadras, PONDERADO: '12', PUNTOS: '0.7', CALIFICACION:'8'}),
    createData({ DESCTIPCION: 'CERCANIA A COMERCIO', VALOR: arrayCuadras, PONDERADO: '12', PUNTOS: '1.0', CALIFICACION:'12'}),
    createData({ DESCTIPCION: 'CERCANIA A PARQUES', VALOR: arrayCuadras, PONDERADO: '4', PUNTOS: '0.7', CALIFICACION:'3'}),
    createData({ DESCTIPCION: 'VIAS PRINCIPALES DE ACCESO', VALOR: viasAcceso, PONDERADO: '5', PUNTOS: '0.75', CALIFICACION:'4'}),
    createData({ DESCTIPCION: 'CERCANIA A IGLESIA', VALOR: arrayCuadras, PONDERADO: '2', PUNTOS: '0.7', CALIFICACION:'1'}),
    createData({ DESCTIPCION: 'CERCANIA A POLICIA', VALOR: arrayCuadras, PONDERADO: '3', PUNTOS: '0.1', CALIFICACION:'0'}),
    createData({ DESCTIPCION: 'ASCENSOR', VALOR: ascensor, PONDERADO: '10', PUNTOS: '1.0', CALIFICACION:'10'}),
    createData({ DESCTIPCION: 'DISTRIBUCION', VALOR: estado, PONDERADO: '8', PUNTOS: '1.0', CALIFICACION:'8'}),
    createData({ DESCTIPCION: 'PARQUEADERO', VALOR: parquedoros, PONDERADO: '6', PUNTOS: '0.0', CALIFICACION:'0'}),
    createData({ DESCTIPCION: 'ANTIGÜEDAD', VALOR: atiguedad, PONDERADO: '2', PUNTOS: '0.5', CALIFICACION:'1.0'}),
    createData({ DESCTIPCION: 'ACABADOS', VALOR: acabados, PONDERADO: '12', PUNTOS: '0.5', CALIFICACION:'6'}),
    createData({ DESCTIPCION: 'SERVICIOS COMUNALES', VALOR: estado, PONDERADO: '8', PUNTOS: '1.0', CALIFICACION:'8'}),
    createData({ DESCTIPCION: 'CANTIDAD DE UNIDADES', VALOR: cantidadUnidades, PONDERADO: '6', PUNTOS: '0.7', CALIFICACION:'4'}),
    createData({ DESCTIPCION: 'CARTERA MOROSA', VALOR: carteraMorosa, PONDERADO: '8', PUNTOS: '1.0', CALIFICACION:'8'}),
    createData({ DESCTIPCION: 'CUOTAS EXTRAORDINARIAS PENDIENTES', VALOR: cuotrasExtraordinarias, PONDERADO: '2', PUNTOS: '1.0', CALIFICACION:'2'}),
];


