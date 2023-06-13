import { useState } from "react"
import { read, utils } from "xlsx"
import {  MatrizSeleccionInmuebleInitialData } from "./initialData"
import { MatrizSeleccionInmuebleHeader } from "./types"

const useHook = () => {

    const [matrizSeleccionInmuebleRows, setMatrizSeleccionInmuebleRows] = useState<MatrizSeleccionInmuebleHeader[]>(MatrizSeleccionInmuebleInitialData)


    const readUploadFile = (e: any) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target?.result;
                const workbook = read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                let json: any[] = utils.sheet_to_json(worksheet, { rawNumbers: false, range: 1 });
                json.pop();
                setValores(json)

            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }



    const setValores = (lista:any[]) => {
        let newData = [...matrizSeleccionInmuebleRows]
        lista.forEach((item:any,index:number) => {
            let itemArrayValue=matrizSeleccionInmuebleRows[index].VALOR.find((x)=>x.key.localeCompare(item.VALOR) == 0) 
            newData[index] = { ...newData[index], PUNTOS: itemArrayValue?.value??'' }
        })

        setMatrizSeleccionInmuebleRows(newData)
    }

    const getCalification = (item : MatrizSeleccionInmuebleHeader):number => {
        return (parseFloat(item.PONDERADO) * parseFloat(item.PUNTOS))
    }

    const getCalificationTotal = () => {
        let total = 0
        matrizSeleccionInmuebleRows.forEach(item => {
            total+= getCalification(item)
        })
        return total.toFixed(0)
    }

    const handleSelect = (index:number,value:string) => {
        let newData = [...matrizSeleccionInmuebleRows]
        newData[index] = { ...newData[index], PUNTOS: value }
        setMatrizSeleccionInmuebleRows(newData)
    }

    return {
        matrizSeleccionInmuebleRows,
        readUploadFile,
        getCalification,
        getCalificationTotal,
        handleSelect
    }
}

export default useHook