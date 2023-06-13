import { HeadersName, HedersNameEnum } from "./types";

export const rowsHogarInitial: HeadersName[] = [
    createData({"SERVICIO":"Alimentos","FECHA":"10/20/30 cada mes",'PTO':"450","%PTO":"6.74%","TARJETA CREDITO":"270","CASH":"122","%CASH":"5.69%","OBSERVACION":"9 $133 PriceSmart."}),
    createData({"SERVICIO":"Agua","FECHA":"10 cada mes","PTO":"50","%PTO":"0.75%","TARJETA CREDITO":"0","CASH":"47","%CASH":"0.68%","OBSERVACION":"Pagado 8."}),
    createData({"SERVICIO":"Energia","FECHA":"5 de cada mes","PTO":"120","%PTO":"1.80%","TARJETA CREDITO":"0","CASH":"133","%CASH":"1.93%","OBSERVACION":"Pagado 5"}),
    createData({"SERVICIO":"Gas","FECHA":"14 de cada mes","PTO":"25","%PTO":"0.37%","TARJETA CREDITO":"0","CASH":"22","%CASH":"0.32%","OBSERVACION":"Pagado 14"}),
    createData({"SERVICIO":"Vivienda/hipoteca","FECHA":"22 de cada mes","PTO":"1500","%PTO":"22.48%","TARJETA CREDITO":"0","CASH":"1500","%CASH":"21.76%","OBSERVACION":"Pagado 22"}),
    createData({"SERVICIO":"Aseo","FECHA":"Semanal","PTO":"200","%PTO":"3.00%","TARJETA CREDITO":"0","CASH":"200","%CASH":"2.90%","OBSERVACION":"Pagado 7/14/21/28"}),
    createData({"SERVICIO":"Colegio","FECHA":"1 de cada mes","PTO":"600","%PTO":"8.99%","TARJETA CREDITO":"600","CASH":"0","%CASH":"8.70%","OBSERVACION":"Pagado 1."}),
    createData({"SERVICIO":"Otras Clases","FECHA":"10/2030 cada mes","PTO":"200","%PTO":"3.00%","TARJETA CREDITO":"0","CASH":"195","%CASH":"2.83%","OBSERVACION":"Guitarra $30/10, Piano $45/20, Fultbol $120/2"}),
    createData({"SERVICIO":"Salud","FECHA":"15 de cada mes","PTO":"153","%PTO":"2.29%","TARJETA CREDITO":"153","CASH":"0","%CASH":"2.22%","OBSERVACION":"Pagado 15"}),
    createData({"SERVICIO":"DiversiOn","FECHA":"Varios","PTO":"500","%PTO":"7.49%","TARJETA CREDITO":"398","CASH":"275","%CASH":"9.76%","OBSERVACION":"Salidas a Puebla con familia 220."}),
    createData({"SERVICIO":"Administraciones","FECHA":"3 de cada mes","PTO":"300","%PTO":"4.50%","TARJETA CREDITO":"0","CASH":"300","%CASH":"4.35%","OBSERVACION":"Pagado 3."}),
    createData({"SERVICIO":"Gasolina/Transporte","FECHA":"Varios","PTO":"150","%PTO":"2.25%","TARJETA CREDITO":"199","CASH":"0","%CASH":"2.89%","OBSERVACION":"$40/1,$55/11,$65/19,$$39/26"}),
    createData({"SERVICIO":"Cuota Camioneta","FECHA":"13 de cada mes","PTO":"550","%PTO":"8.24%","TARJETA CREDITO":"0","CASH":"550","%CASH":"7.98%","OBSERVACION":"Pagado 13."}),
    createData({"SERVICIO":"DonaciOn","FECHA":"Varios","PTO":"200","%PTO":"3.00%","TARJETA CREDITO":"0","CASH":"200","%CASH":"2.90%","OBSERVACION":"Medellin Prospera."}),
    createData({"SERVICIO":"Presupuesto Varios","FECHA":"Varios","PTO":"300","%PTO":"4.50%","TARJETA CREDITO":"279","CASH":"0","%CASH":"4.05%","OBSERVACION":"Compra Audifonos niños, regalos de la madre"}),
    createData({"SERVICIO":"Impuestos","FECHA":"Varios","PTO":"500","%PTO":"7.49%","TARJETA CREDITO":"500","CASH":"0","%CASH":"7.25%","OBSERVACION":"Se pago impuesto de la oficina."}),
    createData({"SERVICIO":"Seguros","FECHA":"Varios","PTO":"375","%PTO":"5.62%","TARJETA CREDITO":"375","CASH":"0","%CASH":"5.44%","OBSERVACION":"Seguro Salud, Vida, Bienes."}),
    createData({"SERVICIO":"Varios mes","FECHA":"Varios","PTO":"500","%PTO":"7.49%","TARJETA CREDITO":"300","CASH":"275","%CASH":"8.34%","OBSERVACION":"Impuesto Camioneta"}),
];

export const rowsInversionesInitial:HeadersName[] =[
    createData({"SERVICIO":"Admin - APTO 1","FECHA":"3 de cada mes","PTO":"300","%PTO":"4.50%","TARJETA CREDITO":"0","CASH":"300","%CASH":"4.35%","OBSERVACION":"Pagado 3."}),
    createData({"SERVICIO":"Admin - LOCAL","FECHA":"5 cada mes","PTO":"150","%PTO":"2.25%","TARJETA CREDITO":"199","CASH":"0","%CASH":"2.89%","OBSERVACION":"$40/1,$55/11,$65/19,$$39/26"}),
    createData({"SERVICIO":"Admin casa","FECHA":"13 de cada mes","PTO":"550","%PTO":"8.24%","TARJETA CREDITO":"0","CASH":"550","%CASH":"7.98%","OBSERVACION":"Pagado 13."}),
    createData({"SERVICIO":"Impuestos propieda","FECHA":"Varios","PTO":"200","%PTO":"3.00%","TARJETA CREDITO":"0","CASH":"200","%CASH":"2.90%","OBSERVACION":"Medellin Prospera."}),
    createData({"SERVICIO":"Seguros","FECHA":"Varios","PTO":"300","%PTO":"4.50%","TARJETA CREDITO":"279","CASH":"0","%CASH":"4.05%","OBSERVACION":"Compra Audifonos niños, regalos de la madre"}),
]

export const rowsDeudasInitial: HeadersName[] = [
    createData({"SERVICIO":"BANCO 1","FECHA":"10 de cada mes","PTO":"550","%PTO":"8.24%","TARJETA CREDITO":"0","CASH":"550","%CASH":"7.98%","OBSERVACION":"Pagado 13."}),
    createData({"SERVICIO":"PERSONAL","FECHA":"23 de cada mes","PTO":"200","%PTO":"3.00%","TARJETA CREDITO":"0","CASH":"200","%CASH":"2.90%","OBSERVACION":"Medellin Prospera."}),
    createData({"SERVICIO":"LEASING","FECHA":"28 de cada mes","PTO":"300","%PTO":"4.50%","TARJETA CREDITO":"279","CASH":"0","%CASH":"4.05%","OBSERVACION":"Compra Audifonos niños, regalos de la madre"}),
]


export function createData(data: HeadersName) {
    return {
        [HedersNameEnum.SERVICIO]: data.SERVICIO,
        [HedersNameEnum.FECHA]: data.FECHA,
        [HedersNameEnum["PTO"]]: data.PTO,
        [HedersNameEnum["%PTO"]]: data['%PTO'],
        [HedersNameEnum["TARJETA CREDITO"]]: data["TARJETA CREDITO"],
        [HedersNameEnum.CASH]: data.CASH,
        [HedersNameEnum["%CASH"]]: data["%CASH"],
        [HedersNameEnum.OBSERVACION]: data.OBSERVACION,
    }
}

