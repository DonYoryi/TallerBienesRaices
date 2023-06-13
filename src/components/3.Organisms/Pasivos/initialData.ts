import { PasivosTable, PasivosTableEnum } from "./types";


export function createData(data: PasivosTable) {
    return {
        [PasivosTableEnum.ENTIDAD]:data.ENTIDAD,
        [PasivosTableEnum.BIEN]:data.BIEN,
        [PasivosTableEnum.VALOR]:data.VALOR,
        [PasivosTableEnum.FECHA]:data.FECHA,
        [PasivosTableEnum.SALDO]:data.SALDO,
        [PasivosTableEnum.MENSUAL]:data.MENSUAL,
        [PasivosTableEnum.CAPITAL]:data.CAPITAL,
        [PasivosTableEnum.INT]:data.INT,
        [PasivosTableEnum["I EM"]]:data["I EM"],
        [PasivosTableEnum["I EA"]]:data["I EA"],
        [PasivosTableEnum["SEGURO MES"]]:data["SEGURO MES"],
        [PasivosTableEnum.xMILLON]:data.xMILLON,
    }
}

export const rowsPasivosInitial: PasivosTable[] = [
    createData({"ENTIDAD":"BANCO 1","BIEN":"VEHICULO","VALOR":"50000","FECHA":"5/2/2020","SALDO":"32234","MENSUAL":"1050","CAPITAL":"794","INT":"256","I EM":"0.79%","I EA":"9.95%","SEGURO MES":"0","xMILLON":"0"}),
    createData({"ENTIDAD":"PERSONAL","BIEN":"BODEGA","VALOR":"20000","FECHA":"10/24/2018","SALDO":"20000","MENSUAL":"200","CAPITAL":"0","INT":"200","I EM":"1.00%","I EA":"12.56%","SEGURO MES":"0","xMILLON":"0"}),    
    createData({"ENTIDAD":"LEASING","BIEN":"BODEGA","VALOR":"90000","FECHA":"6/24/2015","SALDO":"72863","MENSUAL":"1068","CAPITAL":"597","INT":"471","I EM":"0.65%","I EA":"7.76%","SEGURO MES":"0","xMILLON":"0"}),
];