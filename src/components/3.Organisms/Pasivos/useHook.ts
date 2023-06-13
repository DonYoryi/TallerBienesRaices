import { useEffect, useState } from "react"
import { PasivosTable, PasivosTableEnum } from "./types"

import { read, utils, writeFileXLSX } from "xlsx";
import { createData, rowsPasivosInitial } from "./initialData";
import { get, post } from "../../../config/api/axios";

export const useHook = () => {
    const [rowsPasivos, setRowsPasivos] = useState<PasivosTable[]>(rowsPasivosInitial)

    useEffect(()=> {
        getData()
      },[])
    
      const getData = async() => {
        let responce = await get("?fileName=Pasivos")
        if(!!responce){
          setRowsPasivos(responce as PasivosTable[]??[])
        }
    
      }
      const saveData = async () => {
        await post("?fileName=Pasivos",rowsPasivos)
        alert("Datos Gurdados")
       }

    const updateData = (index: number, key: string, value: string) => {
        let newData = [...rowsPasivos]
        newData[index] = { ...newData[index], [key]: value }
        setRowsPasivos(newData)
    }

    const updateDataNumber = (index: number, key: string, value: string)=> {
        if (!/^[0-9.]+$/.test(value.replace("%",""))) {
            alert("Por Favor solo insertar numeros y puntos como dicimal")
            value = rowsPasivos[index][key as PasivosTableEnum]
        }
        updateData(index, key, value)
    }
    
    const updateDataString = (index: number, key: string, value: string) => {
        updateData(index, key, value)
    }

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
                setRowsPasivos(json)
            };


            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const addRow = () => {
        setRowsPasivos((e) => [...e, createData({ "ENTIDAD": "otro", "BIEN": "otro", "VALOR": "0", "FECHA": "6/24/2015", "SALDO": "0", "MENSUAL": "0", "CAPITAL": "0", "INT": "0", "I EM": "0", "I EA": "0", "SEGURO MES": "0", "xMILLON": "0" }),])
    }

    const deleteItem = (index: number) => {
        if (window.confirm("¿Desea eliminar esta Fila?") === true) {
            let newData = [...rowsPasivos]
            newData.splice(index, 1);
            setRowsPasivos(newData)
        }
    }

    return {
        rowsPasivos,
        addRow,
        saveData,
        updateDataNumber,
        updateDataString,
        readUploadFile,
        deleteItem
    }
}