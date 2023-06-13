import {  Paper, Table, TableContainer } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HeadTable from "../../2.Molecules/HeadTable";
import IngresosEgresos from "../../2.Molecules/IngresosEgresos";
import { FlujoEfectivoAnualEnum } from "./types";
import { useHook } from "./useHook";

import { utils, writeFileXLSX } from "xlsx";


const FlujoEfectivoAnual = () => {

    const { 
        rowsIngresos,
        rowsEgresos,
        saveData,
        readUploadFile,
        updateIngresos,
        addIngresos,
        updateEgresos,
        addEgresos, 
        handleDeleteIngresos,
        handleDeleteEgresos,
    } = useHook()



    const [hiddenColums, setHiddenColums] = useState<boolean>(true)
    const [startDowlad, setStartDowlad] = useState<boolean>(false)


    useEffect(() => {
        if (startDowlad) {
            const wb = utils.table_to_book(tbl.current);
            writeFileXLSX(wb, "FlujoEfectivoAnual.xlsx");
            setHiddenColums(true)
            setStartDowlad(false)
        }

    }, [hiddenColums])

    const handleExport = () => {
        setStartDowlad(true)
        setHiddenColums(false)
    }

    const tbl = useRef<HTMLTableElement>(null);
    return (
        <>

            <TableContainer component={Paper}>
                <Table ref={tbl} sx={{ minWidth: 650 }} aria-label="simple table">
                    <HeadTable      onSave={saveData}  isDownloadStart={startDowlad} onExport={handleExport} onReadFile={readUploadFile} generalTitles={"FLUJO DE EFECTIVO ANUAL"} headTitle={FlujoEfectivoAnualEnum} />
                    <IngresosEgresos deleteItem={handleDeleteIngresos} startDowlad={startDowlad} title={"TOTAL INGRESOS"} rows={rowsIngresos} handleUpdate={updateIngresos} handleAdd={addIngresos}></IngresosEgresos>
                    <IngresosEgresos deleteItem={handleDeleteEgresos} startDowlad={startDowlad} title={"TOTAL EGRESOS"} rows={rowsEgresos} handleUpdate={updateEgresos} handleAdd={addEgresos}></IngresosEgresos>
                </Table>
            </TableContainer>
        </>
    );
}

export default FlujoEfectivoAnual;