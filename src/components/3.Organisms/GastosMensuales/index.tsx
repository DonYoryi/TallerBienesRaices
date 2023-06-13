import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import HeadTable from "../../2.Molecules/HeadTable";
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import UploadFile from "../../1.Atoms/UploadFile";
import { read, utils, writeFileXLSX } from "xlsx";

import { HeadersName, HedersNameEnum } from "./types";
import { rowsDeudasInitial, rowsHogarInitial, rowsInversionesInitial } from "./initialData";
import { useHook } from "./useHook";
import BodyGastosMensuales from "../../2.Molecules/BodyGastosMensuales";


const GastosMensuales = () => {

  const tbl = useRef<HTMLTableElement>(null);
  const [hiddenColums, setHiddenColums] = useState<boolean>(true)
  const [startDowlad, setStartDowlad] = useState<boolean>(false)
  const {
    rowsPagoHogar,
    rowsInversiones,
    rowsDeudas,
    readUploadFile,
    updatePagoHogar,
    updateInversiones,
    updateRowsDeudas,
    addPagoHogar,
    addInversiones,
    addRowsDeudas,
    handleDeletePagoHogar,
    handleDeleteInversiones,
    handleDeleteDeudas,
    saveData,
  } = useHook()

  useEffect(() => {
    if (startDowlad) {
      const wb = utils.table_to_book(tbl.current);
      writeFileXLSX(wb, "GastosMensuales.xlsx");
      setHiddenColums(true)
      setStartDowlad(false)
    }

  }, [hiddenColums])

  const handleExport = () => {
    setStartDowlad(true)
    setHiddenColums(false)
  }
  return (
    <>
      <TableContainer component={Paper}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Table ref={tbl} sx={{ minWidth: 650 }} aria-label="simple table">
            <HeadTable  onSave={saveData}  isDownloadStart={startDowlad} onExport={handleExport} onReadFile={readUploadFile} generalTitles={"GASTOS MENSUALES"} headTitle={HedersNameEnum} />
            <BodyGastosMensuales 
            deleteItem={handleDeletePagoHogar}
            startDowlad={startDowlad}
            totalTitle={"TOTAL PAGOS FIJOS HOGAR"} 
            rows={rowsPagoHogar} 
            handleUpdate={updatePagoHogar} 
            handleAdd={addPagoHogar}/>

            <BodyGastosMensuales 
            deleteItem={handleDeleteInversiones}
            startDowlad={startDowlad}
            totalTitle={"TOTAL PAGOS FIJOS INVERSIONES MES"} 
            rows={rowsInversiones} handleUpdate={updateInversiones} 
            handleAdd={addInversiones}/>
            
            <BodyGastosMensuales 
            deleteItem={handleDeleteDeudas}
            startDowlad={startDowlad}
            totalTitle={"TOTAL PAGOS FIJOS DEUDAS"} 
            rows={rowsDeudas} 
            handleUpdate={updateRowsDeudas} 
            handleAdd={addRowsDeudas}/>
          </Table>
        </LocalizationProvider>
      </TableContainer>
    </>
  );
}

export default GastosMensuales;

