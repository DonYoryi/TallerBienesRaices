import { IngresosFamiliares, IngresosFamiliaresEnum } from "./types";

export function createData(data: IngresosFamiliares) {
    return {
        [IngresosFamiliaresEnum.INGRESOS]: data.INGRESOS,
        [IngresosFamiliaresEnum.FUENTE]: data.FUENTE,
        [IngresosFamiliaresEnum["TIEMPO HORAS"]]: data['TIEMPO HORAS'],
        [IngresosFamiliaresEnum.FECHA]: data.FECHA,
        [IngresosFamiliaresEnum.VALOR]: data.VALOR,
    }
}

export const rowsIngresosFamiliares: IngresosFamiliares[] = [
    createData({ INGRESOS: 'SALARIO MES', FUENTE: 'ACTIVO', 'TIEMPO HORAS': '0', FECHA: '05/05/2021', VALOR: '0' }),
    createData({ INGRESOS: 'BONIFICACIONES', FUENTE: 'ACTIVO', 'TIEMPO HORAS': '0', FECHA: '05/05/2021', VALOR: '0' }),
    createData({ INGRESOS: 'REGALIAS', FUENTE: 'PASIVO', 'TIEMPO HORAS': '0', FECHA: '05/05/2021', VALOR: '0' }),
    createData({ INGRESOS: 'DIVIDENDOS', FUENTE: 'PASIVO', 'TIEMPO HORAS': '0', FECHA: '05/05/2021', VALOR: '0' }),
    createData({ INGRESOS: 'APARTAMENTO', FUENTE: 'PASIVO', 'TIEMPO HORAS': '0', FECHA: '05/05/2021', VALOR: '0' }),
    createData({ INGRESOS: 'BODEGA', FUENTE: 'PASIVO', 'TIEMPO HORAS': '0', FECHA: '05/05/2021', VALOR: '0' }),
    createData({ INGRESOS: 'LOCAL', FUENTE: 'PASIVO', 'TIEMPO HORAS': '0', FECHA: '05/05/2021', VALOR: '0' }),
];