import { useState } from "react"
import { IngresosFamiliares, IngresosFamiliaresEnum } from "./types"
import { createData, rowsIngresosFamiliares as rowsIngresosFamiliaresInitial } from "./initialData";
import { read, utils } from "xlsx";
import { get, post } from "../../../config/api/axios";
import React from "react";

export const useHook = () => {
    const [rowsIngresosFamiliares, setRowsIngresosFamiliares] = useState<IngresosFamiliares[]>(rowsIngresosFamiliaresInitial)

      React.useEffect(()=> {
        getData()
      },[])

      const getData = async() => {
        let responde = await get("?fileName=finanzasFamiliares")
        if(!!responde.length){
            setRowsIngresosFamiliares(responde as IngresosFamiliares[])
        }else{
            setRowsIngresosFamiliares(rowsIngresosFamiliaresInitial)
        }

      }
      const saveData = async () => {
       await post("?fileName=finanzasFamiliares",rowsIngresosFamiliares)
       alert("Datos Gurdados")
      }

    const updateDataNumber = (index: number, key: string, value: string) => {
        if (!/^[0-9.]+$/.test(value)) {
            alert("Por Favor solo insertar numeros y puntos como dicimal")
            value = rowsIngresosFamiliares[index][key as IngresosFamiliaresEnum]
        }
        updateData(index, key, value)
    }

    const updateDataString = (index: number, key: string, value: string) => {
        updateData(index, key, value)
    }

    const updateData = (index: number, key: string, value: string) => {
        let newData = [...rowsIngresosFamiliares]
        newData[index] = { ...newData[index], [key]: value }
        setRowsIngresosFamiliares(newData)
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
                setRowsIngresosFamiliares(json)

            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const addRow = () => {
        setRowsIngresosFamiliares((e) => [...e, createData({ INGRESOS: 'otro', FUENTE: 'ACTIVO', 'TIEMPO HORAS': '0', FECHA: '5/5/2021', VALOR: '0' }),])
    }

    const deleteItem = (index: number) => {
        if (window.confirm("¿Desea eliminar esta Fila?") === true) {
            let newData = [...rowsIngresosFamiliares]
            newData.splice(index, 1);
            setRowsIngresosFamiliares(newData)
        }
    }

    return {
        rowsIngresosFamiliares,
        addRow,
        deleteItem,
        updateDataNumber,
        updateDataString,
        readUploadFile,
        saveData
    }
}