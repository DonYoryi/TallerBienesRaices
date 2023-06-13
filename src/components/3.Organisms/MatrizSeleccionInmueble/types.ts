export interface Props {

}

export interface MatrizSeleccionInmuebleHeader {
    "DESCTIPCION": string,
    "VALOR": value[],
    "PONDERADO": string;
    "PUNTOS": string;
    "CALIFICACION": string;
}

interface value{
    key: string
    value: string
}

export enum MatrizSeleccionInmuebleEnum {
    "DESCTIPCION" = "DESCTIPCION",
    "VALOR" = "VALOR",
    "CALIFICACION" = "CALIFICACION",
}