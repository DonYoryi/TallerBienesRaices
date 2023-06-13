import { useEffect, useState } from "react"
import { read, utils } from "xlsx"
import { createData, rowsEgresosInitial, rowsIngresosInitial } from "./initialData"
import { FlujoEfectivoAnualEnum, FlujoEfectivoAnualHeader } from "./types"
import { get, post } from "../../../config/api/axios"


export const useHook = () => {

    const [rowsIngresos, setRowsIngresos] = useState<FlujoEfectivoAnualHeader[]>(rowsIngresosInitial)
    const [rowsEgresos, setRowsEgresos] = useState<FlujoEfectivoAnualHeader[]>(rowsEgresosInitial)


    useEffect(()=> {
        getData()
      },[])
    
      const getData = async() => {
        let responce = await get("?fileName=FlujoEfectivoAnual")
        if(!!responce){
            setRowsIngresos(responce.rowsIngresos as FlujoEfectivoAnualHeader[]??[])
            setRowsEgresos(responce.rowsEgresos as FlujoEfectivoAnualHeader[]??[])
        }
    
      }
      const saveData = async () => {
        let flujoEfectivoAnual = mapData()
        await post("?fileName=FlujoEfectivoAnual",flujoEfectivoAnual)
        alert("Datos Gurdados")
       }
    
        const mapData = () => {
          return {
            rowsIngresos:rowsIngresos,
            rowsEgresos:rowsEgresos,
  
          }
        }

    const addRow = (setState: React.Dispatch<React.SetStateAction<any[]>>) => {
        setState((e) => [...e, createData({ "DESCRIPCIÓN": "OTRO", "TOTAL": " 0", "ENERO": "0", "FEBRE": "0", "MARZ": "0", "ABRIL": "0", "MAYO": "0", "JUNIO": "0", "JULIO": "0", "AGOS": "0", "SEPT": "0", "OCT": "0", "NOVI": "0", "DICI": "0" })])
    }

    const updateData = (index: number, key: string, value: string, rowList: FlujoEfectivoAnualHeader[], setState: React.Dispatch<React.SetStateAction<any[]>>) => {
        let newData = [...rowList]
        newData[index] = { ...newData[index], [key]: value }
        setState(newData)
    }

    const updateDataNumber = (index: number, key: string, value: string, rowList: FlujoEfectivoAnualHeader[], setState: React.Dispatch<React.SetStateAction<any[]>>) => {
        if (!/^[0-9.]+$/.test(value)) {
            alert("Por Favor solo insertar numeros y puntos como dicimal")
            value = rowList[index][key as FlujoEfectivoAnualEnum]
        }
        updateData(index, key, value, rowList, setState)
    }

    const updateDataString = (index: number, key: string, value: string, rowList: FlujoEfectivoAnualHeader[], setState: React.Dispatch<React.SetStateAction<any[]>>) => {
        updateData(index, key, value, rowList, setState)
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
                seleccionarItemsPorLista(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const seleccionarItemsPorLista = (lista: FlujoEfectivoAnualHeader[]) => {
        let esElFinal = false;
        let lista1Lista = false;
        let lista2Lista = false;

        let array: FlujoEfectivoAnualHeader[] = []
        lista.forEach((item) => {
            esElFinal = item.DESCRIPCIÓN.includes("TOTAL ")
            if (!esElFinal) {
                array.push(item)
            } else {
                if (!lista1Lista) {
                    setRowsIngresos(array)
                    lista1Lista = true
                } else
                    if (!lista2Lista) {
                        setRowsEgresos(array)
                        lista2Lista = true
                    }
                esElFinal = false
                array = []
            }
        })
    }


    const updateIngresos = (index: number, hederName: string, value: string, isNumber: boolean) => {
        if (isNumber) {
            updateDataNumber(index, hederName, value, rowsIngresos, setRowsIngresos)
        } else {
            updateDataString(index, hederName, value, rowsIngresos, setRowsIngresos)
        }
    }

    const addIngresos = () => {
        addRow(setRowsIngresos)
    }

    const updateEgresos = (index: number, hederName: string, value: string, isNumber: boolean) => {
        if (isNumber) {
            updateDataNumber(index, hederName, value, rowsEgresos, setRowsEgresos)
        } else {
            updateDataString(index, hederName, value, rowsEgresos, setRowsEgresos)
        }
    }

    const addEgresos = () => {
        addRow(setRowsEgresos)
    }

    const handleDeleteIngresos = (index: number) => {
        if (window.confirm("¿Desea eliminar esta Fila?") === true) {
            let newData = [...rowsIngresos]
            newData.splice(index, 1);
            setRowsIngresos(newData)
        }
    }

    const handleDeleteEgresos = (index: number) => {
        if (window.confirm("¿Desea eliminar esta Fila?") === true) {
            let newData = [...rowsEgresos]
            newData.splice(index, 1);
            setRowsEgresos(newData)
        }
    }

    return {
        rowsIngresos,
        rowsEgresos,
        readUploadFile,
        addRow,
        saveData,
        updateData,
        updateIngresos,
        addIngresos,
        updateEgresos,
        addEgresos,
        handleDeleteIngresos,
        handleDeleteEgresos,
    }
}