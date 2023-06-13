import { Paper, Table, TableContainer, TableRow } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HeadTable from "../../2.Molecules/HeadTable";
import IngresosEgresos from "../../2.Molecules/IngresosEgresos";
import {  IngresosPropiedadEnum, IngresosPropiedadHeader } from "./types";
import { useHook } from "./useHook";

import { utils, writeFileXLSX } from "xlsx";
import FooterTableItem from "../../1.Atoms/FooterTableItem";


const IngresosPropiedad = () => {

    const {
        rowsIngresos,
        rowsEgresos,
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

    const returnSum = (key: any) => {
        let totaLista1 = rowsIngresos.reduce((accumulator, object: IngresosPropiedadHeader) => { return accumulator + parseFloat(object[key as IngresosPropiedadEnum]); }, 0)
        let totaLista2 = rowsEgresos.reduce((accumulator, object: IngresosPropiedadHeader) => { return accumulator + parseFloat(object[key as IngresosPropiedadEnum]); }, 0)
        let abonoCapital = parseFloat(rowsIngresos[rowsIngresos.length - 1][key as IngresosPropiedadEnum])
        return ((totaLista2 + abonoCapital) - totaLista1).toFixed(2)
    }

    const tbl = useRef<HTMLTableElement>(null);
    return (
        <>

            <TableContainer component={Paper}>
                <Table ref={tbl} sx={{ minWidth: 650 }} aria-label="simple table">
                    <HeadTable      onSave={()=>{}}  isDownloadStart={startDowlad} onExport={handleExport} onReadFile={readUploadFile} generalTitles={"DETALLES DE INGRESO Y EGRESOS"} headTitle={IngresosPropiedadEnum} />
                    <IngresosEgresos showTotal={false} deleteItem={handleDeleteIngresos} startDowlad={startDowlad} title={"TOTAL DÉBITOS"} rows={rowsIngresos} handleUpdate={updateIngresos} handleAdd={addIngresos}></IngresosEgresos>
                    <IngresosEgresos showTotal={false} deleteItem={handleDeleteEgresos} startDowlad={startDowlad} title={"TOTAL CRÉDITOS"} rows={rowsEgresos} handleUpdate={updateEgresos} handleAdd={addEgresos}></IngresosEgresos>
                    <TableRow>
                        <FooterTableItem colSpan={startDowlad ? 1 : 2} align="center">GANANCIA NETA</FooterTableItem>

                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.ENERO)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.FEBRE)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.MARZ)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.ABRIL)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.MAYO)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.JUNIO)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.JULIO)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.AGOS)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.SEPT)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.OCT)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.NOVI)}</FooterTableItem>
                        <FooterTableItem align="right">{returnSum(IngresosPropiedadEnum.DICI)}</FooterTableItem>
                    </TableRow>
                </Table>
            </TableContainer>
        </>
    );
}

export default IngresosPropiedad;