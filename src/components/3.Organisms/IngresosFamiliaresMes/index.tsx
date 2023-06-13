import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import HeadTable from "../../2.Molecules/HeadTable";

import { utils, writeFileXLSX } from "xlsx";
import ButtonAdd from "../../1.Atoms/buttonAdd";
import { IngresosFamiliaresEnum } from "./types";
import { useHook } from "./useHook";
import FooterTableItem from "../../1.Atoms/FooterTableItem";
import ButtonARemove from "../../1.Atoms/ButtonDelete";


const IngresosFamiliaresMes = () => {

    const tbl = useRef<HTMLTableElement>(null);
    const { 
        rowsIngresosFamiliares, 
        readUploadFile, 
        deleteItem,
        updateDataNumber,
        updateDataString, 
        addRow ,
        saveData
    } = useHook()
    const [hiddenColums, setHiddenColums] = useState<boolean>(true)
    const [startDowlad, setStartDowlad] = useState<boolean>(false)

    useEffect(() => {
        if (startDowlad) {
            const wb = utils.table_to_book(tbl.current);
            writeFileXLSX(wb, "IngresosFamiliares.xlsx");
            setHiddenColums(true)
            setStartDowlad(false)
        }
    }, [hiddenColums])

    const handleExport = () => {
        setHiddenColums(false)
        setStartDowlad(true)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <LocalizationProvider dateAdapter={AdapterMoment}> 
                    <Table ref={tbl} sx={{ minWidth: 650 }} aria-label="simple table">
                       
                        <HeadTable 
                            onSave={saveData} 
                            isDownloadStart={startDowlad} 
                            onExport={handleExport} 
                            onReadFile={readUploadFile} 
                            generalTitles={"INGRESOS FAMILIARES"} 
                            headTitle={IngresosFamiliaresEnum} />

                        <TableBody>
                            {rowsIngresosFamiliares.map((row, index) => (
                                <TableRow
                                    key={Math.random() * 2}
                                    style={{ background: ((index + 1) % 2 === 1) ? '#F2F8FC' : '#fff' }}
                                >
                                    {!startDowlad && <TableCell align="left" ><ButtonARemove onClick={() =>deleteItem(index)}/></TableCell>}
                                    <TableCell contentEditable onBlur={(event: any) => { updateDataString(index, IngresosFamiliaresEnum.INGRESOS, event.target.innerText) }} component="th" scope="row">{row.INGRESOS}</TableCell>
                                    <TableCell contentEditable onBlur={(event: any) => { updateDataString(index, IngresosFamiliaresEnum.FUENTE, event.target.innerText) }} align="right">{row.FUENTE}</TableCell>
                                    <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, IngresosFamiliaresEnum["TIEMPO HORAS"], event.target.innerText) }} align="right">{row["TIEMPO HORAS"]}</TableCell>
                                    {!hiddenColums ? <TableCell align="right">{row.FECHA}</TableCell> : (
                                        <TableCell hidden={!hiddenColums} align="right">{
                                            <MobileDatePicker
                                                label="Fecha"
                                                inputFormat="MM/DD/YYYY"
                                                value={moment(row.FECHA, "MM/DD/YYYY")}
                                                onChange={(e: any) => { updateDataString(index, IngresosFamiliaresEnum.FECHA, e.format("MM/DD/YYYY")) }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        }</TableCell>
                                    )}
                                    <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, IngresosFamiliaresEnum.VALOR, event.target.innerText) }} align="right">{row.VALOR}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>

                                <FooterTableItem rowSpan={1} colSpan={startDowlad?2:3} ><ButtonAdd color="#0fc4d4" onClick={addRow}></ButtonAdd></FooterTableItem>
                                <FooterTableItem rowSpan={1} />
                                <FooterTableItem colSpan={1}>Total</FooterTableItem>
                                <FooterTableItem align="right">{(rowsIngresosFamiliares.reduce((accumulator, object) => { return accumulator + parseFloat(object.VALOR); }, 0)).toFixed(2)}</FooterTableItem>
                            </TableRow>
                        </TableBody>
                    </Table>
                </LocalizationProvider>
            </TableContainer>
        </>
    );
}

export default IngresosFamiliaresMes;