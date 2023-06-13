import { IngresosPropiedadEnum, IngresosPropiedadHeader} from "./types";

export const rowsIngresosInitial: IngresosPropiedadHeader[] = [
    createData({"DESCRIPCIÓN":"PAGO DE IMPUESTOS (1/2)","ENERO":" 11000","FEBRE":"300","MARZ":"300","ABRIL":"300","MAYO":"300","JUNIO":"300","JULIO":"300","AGOS":"300","SEPT":"300","OCT":"300","NOVI":"300","DICI":"300"}),
    createData({"DESCRIPCIÓN":"ADMINISTRACIÓN","ENERO":" 85000","FEBRE":"280","MARZ":"280","ABRIL":"280","MAYO":"280","JUNIO":"280","JULIO":"280","AGOS":"280","SEPT":"280","OCT":"280","NOVI":"280","DICI":"280"}),
    createData({"DESCRIPCIÓN":"ARREGLOS LOCATIVOS (1/24)","ENERO":" 35000","FEBRE":"170","MARZ":"170","ABRIL":"170","MAYO":"170","JUNIO":"170","JULIO":"170","AGOS":"170","SEPT":"170","OCT":"170","NOVI":"170","DICI":"170"}),
    createData({"DESCRIPCIÓN":"VACANCIA (1/24)","ENERO":" 25000","FEBRE":" 83","MARZ":" 83","ABRIL":" 83","MAYO":" 83","JUNIO":" 83","JULIO":" 83","AGOS":" 83","SEPT":" 83","OCT":" 83","NOVI":" 83","DICI":" 83"}),
    createData({"DESCRIPCIÓN":"PUBLICIDAD (1/24)","ENERO":" 4000","FEBRE":"300","MARZ":"300","ABRIL":"300","MAYO":"300","JUNIO":"300","JULIO":"300","AGOS":"300","SEPT":"300","OCT":"300","NOVI":"300","DICI":"300"}),
    createData({"DESCRIPCIÓN":"SEGURO ALQUILER (1/12)","ENERO":" 40000","FEBRE":"280","MARZ":"280","ABRIL":"280","MAYO":"280","JUNIO":"280","JULIO":"280","AGOS":"280","SEPT":"280","OCT":"280","NOVI":"280","DICI":"280"}),
    createData({"DESCRIPCIÓN":"INTERESES BANCARIOS","ENERO":" 450000","FEBRE":"170","MARZ":"170","ABRIL":"170","MAYO":"170","JUNIO":"170","JULIO":"170","AGOS":"170","SEPT":"170","OCT":"170","NOVI":"170","DICI":"170"}),
    createData({"DESCRIPCIÓN":"ABONO A CAPITAL (1/1)","ENERO":" 150000","FEBRE":" 83","MARZ":" 83","ABRIL":" 83","MAYO":" 83","JUNIO":" 83","JULIO":" 83","AGOS":" 83","SEPT":" 83","OCT":" 83","NOVI":" 83","DICI":" 83"}),
];

export const rowsEgresosInitial: IngresosPropiedadHeader[] = [
    createData({"DESCRIPCIÓN":"ALQUILER (1/1)","ENERO":"900000","FEBRE":" 83","MARZ":" 83","ABRIL":" 83","MAYO":" 83","JUNIO":" 83","JULIO":" 83","AGOS":" 83","SEPT":" 83","OCT":" 83","NOVI":" 83","DICI":" 83"}),
    createData({"DESCRIPCIÓN":"UTILIDADES","ENERO":"0","FEBRE":" 235","MARZ":" 235","ABRIL":" 235","MAYO":" 235","JUNIO":" 235","JULIO":" 235","AGOS":" 235","SEPT":" 235","OCT":" 235","NOVI":" 235","DICI":" 235"}),
];

export function createData(data: IngresosPropiedadHeader) {
    return {
        [IngresosPropiedadEnum.DESCRIPCIÓN]: data.DESCRIPCIÓN,
        [IngresosPropiedadEnum.ENERO]: data.ENERO,
        [IngresosPropiedadEnum.FEBRE]: data.FEBRE,
        [IngresosPropiedadEnum.MARZ]: data.MARZ,
        [IngresosPropiedadEnum.ABRIL]: data.ABRIL,
        [IngresosPropiedadEnum.MAYO]: data.MAYO,
        [IngresosPropiedadEnum.JUNIO]: data.JUNIO,
        [IngresosPropiedadEnum.JULIO]: data.JULIO,
        [IngresosPropiedadEnum.AGOS]: data.AGOS,
        [IngresosPropiedadEnum.SEPT]: data.SEPT,
        [IngresosPropiedadEnum.OCT]: data.OCT,
        [IngresosPropiedadEnum.NOVI]: data.NOVI,
        [IngresosPropiedadEnum.DICI]: data.DICI,
    }
}

