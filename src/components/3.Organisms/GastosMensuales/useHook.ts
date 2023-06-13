import { createData, rowsDeudasInitial, rowsHogarInitial, rowsInversionesInitial } from "./initialData"
import { HeadersName, HedersNameEnum } from "./types"
import { read, utils } from "xlsx";
import { useEffect, useState } from "react";
import { get, post } from "../../../config/api/axios";

export const useHook = () => {

  const [rowsPagoHogar, setRowsPagoHogar] = useState<HeadersName[]>(rowsHogarInitial)
  const [rowsInversiones, setRowsInversiones] = useState<HeadersName[]>(rowsInversionesInitial)
  const [rowsDeudas, setRowsDeudas] = useState<HeadersName[]>(rowsDeudasInitial)


  useEffect(()=> {
    getData()
  },[])

  const getData = async() => {
    let responce = await get("?fileName=GastosMensuales")
    if(!!responce){
      setRowsPagoHogar(responce.rowsPagoHogar as HeadersName[])
      setRowsInversiones(responce.rowsInversiones as HeadersName[])
      setRowsDeudas(responce.rowsDeudas as HeadersName[])
    }

  }
  const saveData = async () => {
    let GastosMensuales = mapData()
    await post("?fileName=GastosMensuales",GastosMensuales)
    alert("Datos Gurdados")
   }

    const mapData = () => {
      return {
        rowsPagoHogar:rowsPagoHogar,
        rowsInversiones:rowsInversiones,
        rowsDeudas:rowsDeudas,
      }
    }
  const addRow = (setState: React.Dispatch<React.SetStateAction<any[]>>) => {
    setState((e) => [...e, createData({ "SERVICIO": "otro", "FECHA": " una vez", "PTO": "0", "%PTO": "0", "TARJETA CREDITO": "0", "CASH": "0", "%CASH": "0", "OBSERVACION": "observacion" }),])
  }

  const updateData = (index: number, key: string, value: string, rowList: HeadersName[], setState: React.Dispatch<React.SetStateAction<any[]>>) => {
    let newData = [...rowList]
    newData[index] = { ...newData[index], [key]: value }
    setState(newData)
  }

  const updateDataNumber = (index: number, key: string, value: string, rowList: HeadersName[], setState: React.Dispatch<React.SetStateAction<any[]>>) => {
    if (!/^[0-9.]+$/.test(value)) {
      alert("Por Favor solo insertar numeros y puntos como dicimal")
      value = rowList[index][key as HedersNameEnum]
    }
    updateData(index, key, value, rowList, setState)
  }
  const updateDataString = (index: number, key: string, value: string, rowList: HeadersName[], setState: React.Dispatch<React.SetStateAction<any[]>>) => {
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

  const seleccionarItemsPorLista = (lista: HeadersName[]) => {
    let esElFinal = false;
    let lista1Lista = false;
    let lista2Lista = false;
    let lista3Lista = false;
    let array: HeadersName[] = []
    lista.forEach((item) => {
      esElFinal = item.FECHA.includes("TOTAL PAGOS")
      if (!esElFinal) {
        array.push(item)
      } else {
        if (!lista1Lista) {
          setRowsPagoHogar(array)
          lista1Lista = true
        } else
          if (!lista2Lista) {
            setRowsInversiones(array)
            lista2Lista = true
          } else
            if (!lista3Lista) {
              setRowsDeudas(array)
              lista3Lista = true
            }
        esElFinal = false
        array = []
      }
    })
  }

  const updatePagoHogar = (index: number, hederName: string, value: string, isNumber: boolean) => {
    if (isNumber) {
      updateDataNumber(index, hederName, value, rowsPagoHogar, setRowsPagoHogar)
    } else {
      updateDataString(index, hederName, value, rowsPagoHogar, setRowsPagoHogar)
    }
  }

  const updateInversiones = (index: number, hederName: string, value: string, isNumber: boolean) => {
    if (isNumber) {
      updateDataNumber(index, hederName, value, rowsPagoHogar, setRowsPagoHogar)
    } else {
      updateDataString(index, hederName, value, rowsPagoHogar, setRowsPagoHogar)
    }
  }

  const updateRowsDeudas = (index: number, hederName: string, value: string, isNumber: boolean) => {
    if (isNumber) {
      updateDataNumber(index, hederName, value, rowsPagoHogar, setRowsPagoHogar)
    } else {
      updateDataString(index, hederName, value, rowsPagoHogar, setRowsPagoHogar)
    }
  }

  const addPagoHogar = () => {
    addRow(setRowsPagoHogar)
  }

  const addInversiones = () => {
    addRow(setRowsInversiones)
  }

  const addRowsDeudas = () => {
    addRow(setRowsDeudas)
  }
  
  const handleDeletePagoHogar = (index: number) => {
    if (window.confirm("¿Desea eliminar esta Fila?") === true) {
      let newData = [...rowsPagoHogar]
      newData.splice(index, 1);
      setRowsPagoHogar(newData)
    }
  }
  const handleDeleteInversiones = (index: number) => {
    if (window.confirm("¿Desea eliminar esta Fila?") === true) {
      let newData = [...rowsInversiones]
      newData.splice(index, 1);
      setRowsInversiones(newData)
    }
  }
  const handleDeleteDeudas = (index: number) => {
    if (window.confirm("¿Desea eliminar esta Fila?") === true) {
      let newData = [...rowsDeudas]
      newData.splice(index, 1);
      setRowsDeudas(newData)
    }
  }
  return {
    rowsPagoHogar,
    setRowsPagoHogar,
    rowsInversiones,
    setRowsInversiones,
    rowsDeudas,
    setRowsDeudas,
    addRow,
    saveData,
    updateDataNumber,
    updateDataString,
    readUploadFile,
    updatePagoHogar,
    updateInversiones,
    updateRowsDeudas,
    addPagoHogar,
    addInversiones,
    addRowsDeudas,
    handleDeletePagoHogar,
    handleDeleteInversiones,
    handleDeleteDeudas
  }
}