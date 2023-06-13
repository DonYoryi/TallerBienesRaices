import { FlujoEfectivoAnualEnum, FlujoEfectivoAnualHeader} from "./types";

export const rowsIngresosInitial: FlujoEfectivoAnualHeader[] = [
    createData({"DESCRIPCIÓN":"SALARIO 1","TOTAL":"3,600","ENERO":"300","FEBRE":"300","MARZ":"300","ABRIL":"300","MAYO":"300","JUNIO":"300","JULIO":"300","AGOS":"300","SEPT":"300","OCT":"300","NOVI":"300","DICI":"300"}),
    createData({"DESCRIPCIÓN":"SALARIO 2","TOTAL":"3,360","ENERO":"280","FEBRE":"280","MARZ":"280","ABRIL":"280","MAYO":"280","JUNIO":"280","JULIO":"280","AGOS":"280","SEPT":"280","OCT":"280","NOVI":"280","DICI":"280"}),
    createData({"DESCRIPCIÓN":"Arriendos","TOTAL":"2,040","ENERO":"170","FEBRE":"170","MARZ":"170","ABRIL":"170","MAYO":"170","JUNIO":"170","JULIO":"170","AGOS":"170","SEPT":"170","OCT":"170","NOVI":"170","DICI":"170"}),
    createData({"DESCRIPCIÓN":"Comisiones","TOTAL":" 996","ENERO":" 83","FEBRE":" 83","MARZ":" 83","ABRIL":" 83","MAYO":" 83","JUNIO":" 83","JULIO":" 83","AGOS":" 83","SEPT":" 83","OCT":" 83","NOVI":" 83","DICI":" 83"}),
];

export const rowsEgresosInitial: FlujoEfectivoAnualHeader[] = [
    createData({"DESCRIPCIÓN":"AHORRO","TOTAL":" 996","ENERO":" 83","FEBRE":" 83","MARZ":" 83","ABRIL":" 83","MAYO":" 83","JUNIO":" 83","JULIO":" 83","AGOS":" 83","SEPT":" 83","OCT":" 83","NOVI":" 83","DICI":" 83"}),
    createData({"DESCRIPCIÓN":"GASTOS FIJOS","TOTAL":" 2,820","ENERO":" 235","FEBRE":" 235","MARZ":" 235","ABRIL":" 235","MAYO":" 235","JUNIO":" 235","JULIO":" 235","AGOS":" 235","SEPT":" 235","OCT":" 235","NOVI":" 235","DICI":" 235"}),
    createData({"DESCRIPCIÓN":"DONACIONES","TOTAL":" 900","ENERO":" 75","FEBRE":" 75","MARZ":" 75","ABRIL":" 75","MAYO":" 75","JUNIO":" 75","JULIO":" 75","AGOS":" 75","SEPT":" 75","OCT":" 75","NOVI":" 75","DICI":" 75"}),
    createData({"DESCRIPCIÓN":"DEUDA 1","TOTAL":" 9,840","ENERO":" 70","FEBRE":" 70","MARZ":" 70","ABRIL":" 70","MAYO":" 70","JUNIO":" 70","JULIO":" 70","AGOS":" 70","SEPT":" 70","OCT":" 70","NOVI":" 70","DICI":" 70"}),
    createData({"DESCRIPCIÓN":"DEUDA 2","TOTAL":" 1,960","ENERO":" 80","FEBRE":" 80","MARZ":" 80","ABRIL":" 80","MAYO":" 80","JUNIO":" 80","JULIO":" 80","AGOS":" 80","SEPT":" 80","OCT":" 80","NOVI":" 80","DICI":" 80"}),
    createData({"DESCRIPCIÓN":"NO PERIODICO","TOTAL":"550","ENERO":"0","FEBRE":"0","MARZ":"150","ABRIL":"0","MAYO":"0","JUNIO":"400","JULIO":"0","AGOS":"0","SEPT":"0","OCT":"0","NOVI":"0","DICI":"0"}),
];

export function createData(data: FlujoEfectivoAnualHeader) {
    return {
        [FlujoEfectivoAnualEnum.DESCRIPCIÓN]: data.DESCRIPCIÓN,
        [FlujoEfectivoAnualEnum.TOTAL]: data.TOTAL,
        [FlujoEfectivoAnualEnum.ENERO]: data.ENERO,
        [FlujoEfectivoAnualEnum.FEBRE]: data.FEBRE,
        [FlujoEfectivoAnualEnum.MARZ]: data.MARZ,
        [FlujoEfectivoAnualEnum.ABRIL]: data.ABRIL,
        [FlujoEfectivoAnualEnum.MAYO]: data.MAYO,
        [FlujoEfectivoAnualEnum.JUNIO]: data.JUNIO,
        [FlujoEfectivoAnualEnum.JULIO]: data.JULIO,
        [FlujoEfectivoAnualEnum.AGOS]: data.AGOS,
        [FlujoEfectivoAnualEnum.SEPT]: data.SEPT,
        [FlujoEfectivoAnualEnum.OCT]: data.OCT,
        [FlujoEfectivoAnualEnum.NOVI]: data.NOVI,
        [FlujoEfectivoAnualEnum.DICI]: data.DICI,
    }
}

