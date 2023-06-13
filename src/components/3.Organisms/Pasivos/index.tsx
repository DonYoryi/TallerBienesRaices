import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { utils, writeFileXLSX } from "xlsx";
import ButtonAdd from "../../1.Atoms/buttonAdd";

import HeadTable from "../../2.Molecules/HeadTable";
import { PasivosTable, PasivosTableEnum } from "./types";
import { useHook } from "./useHook";
import FooterTableItem from "../../1.Atoms/FooterTableItem";
import ButtonARemove from "../../1.Atoms/ButtonDelete";


const Pasivos = () => {

    const tbl = useRef<HTMLTableElement>(null);
    const { 
        rowsPasivos, 
        readUploadFile,
        updateDataNumber,
        updateDataString, 
        addRow,
        saveData,
        deleteItem 
    } = useHook()
    const [hiddenColums, setHiddenColums] = useState<boolean>(true)
    const [startDowlad, setStartDowlad] = useState<boolean>(false)


    useEffect(() => {
        if (startDowlad) {
            const wb = utils.table_to_book(tbl.current);
            writeFileXLSX(wb, "SheetJSMaterialUI.xlsx");
            setHiddenColums(true)
            setStartDowlad(false)
        }

    }, [hiddenColums])

    const handleExport = () => {
        setStartDowlad(true)
        setHiddenColums(false)
    }

    const calculateINT = (item:PasivosTable) => {
        return (parseFloat(item.SALDO)* parseFloat(item["I EM"].replace("%",""))/100)
    }

    const calculateCAPITAL = (item:PasivosTable) => {
        return (parseFloat(item.MENSUAL) - calculateINT(item))
    }

    return (<>
        <TableContainer component={Paper}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Table ref={tbl} sx={{ minWidth: 650 }} aria-label="simple table">
                    <HeadTable
                     onSave={saveData} 
                    isDownloadStart={startDowlad} onExport={handleExport} onReadFile={readUploadFile} generalTitles={"PASIVOS"} headTitle={PasivosTableEnum} />
                    <TableBody>
                        {rowsPasivos.map((row, index) => (
                            <TableRow
                                key={Math.random() * 2}
                                style={{ background: ((index + 1) % 2 === 1) ? '#F2F8FC' : '#fff' }}
                            >
                                {!startDowlad && <TableCell align="left" ><ButtonARemove onClick={() =>deleteItem(index)}/></TableCell>}
                                <TableCell contentEditable onBlur={(event: any) => { updateDataString(index, PasivosTableEnum.ENTIDAD, event.target.innerText) }} component="th" scope="row">{row.ENTIDAD}</TableCell>
                                <TableCell contentEditable onBlur={(event: any) => { updateDataString(index, PasivosTableEnum.BIEN, event.target.innerText) }} align="right">{row.BIEN}</TableCell>
                                <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, PasivosTableEnum.VALOR, event.target.innerText) }} align="right">{row.VALOR}</TableCell>
                                {!hiddenColums ? <TableCell align="right">{row.FECHA}</TableCell> : (
                                    <TableCell hidden={!hiddenColums} align="right">{
                                        <MobileDatePicker
                                            label="Date mobile"
                                            inputFormat="MM/DD/YYYY"
                                            value={moment(row.FECHA, "MM/DD/YYYY")}
                                            onChange={(e: any) => { updateDataString(index, PasivosTableEnum.FECHA, e.format("MM/DD/YYYY")) }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    }</TableCell>
                                )}
                                <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, PasivosTableEnum.SALDO, event.target.innerText) }} align="right">{row.SALDO}</TableCell>
                                <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, PasivosTableEnum.MENSUAL, event.target.innerText) }} align="right">{row.MENSUAL}</TableCell>
                                <TableCell align="right">{calculateCAPITAL(row).toFixed(2)}</TableCell>
                                <TableCell align="right">{calculateINT(row).toFixed(2)}</TableCell>
                                <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, PasivosTableEnum["I EM"], event.target.innerText) }} align="right">{row["I EM"]}</TableCell>
                                <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, PasivosTableEnum["I EA"], event.target.innerText) }} align="right">{row["I EA"]}</TableCell>
                                <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, PasivosTableEnum["SEGURO MES"], event.target.innerText) }} align="right">{row["SEGURO MES"]}</TableCell>
                                <TableCell contentEditable onBlur={(event: any) => { updateDataNumber(index, PasivosTableEnum.xMILLON, event.target.innerText) }} align="right">{row.xMILLON}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>

                            <FooterTableItem rowSpan={1} colSpan={startDowlad?1:2} ><ButtonAdd color="#0fc4d4" onClick={addRow}></ButtonAdd></FooterTableItem>
                            <FooterTableItem align="right" colSpan={1}>Total</FooterTableItem>
                            <FooterTableItem align="right">{rowsPasivos.reduce((accumulator, object) => { return accumulator + parseFloat(object.VALOR); }, 0)}</FooterTableItem>
                            <FooterTableItem colSpan={1}></FooterTableItem>
                            <FooterTableItem align="right" colSpan={1}>{rowsPasivos.reduce((accumulator, object) => { return accumulator + parseFloat(object.SALDO); }, 0)}</FooterTableItem>
                            <FooterTableItem align="right" colSpan={1}>{rowsPasivos.reduce((accumulator, object) => { return accumulator + parseFloat(object.MENSUAL); }, 0)}</FooterTableItem>
                            <FooterTableItem align="right" colSpan={1}>{rowsPasivos.reduce((accumulator, object) => { return accumulator + parseFloat(object.CAPITAL); }, 0)}</FooterTableItem>
                            <FooterTableItem align="right" colSpan={1}>{rowsPasivos.reduce((accumulator, object) => { return accumulator + parseFloat(object.INT); }, 0)}</FooterTableItem>
                            <FooterTableItem colSpan={2}></FooterTableItem>
                            <FooterTableItem align="right" colSpan={1}>{rowsPasivos.reduce((accumulator, object) => { return accumulator + parseFloat(object["SEGURO MES"]); }, 0)}</FooterTableItem>
                        </TableRow>
                    </TableBody>
                </Table>
            </LocalizationProvider>
        </TableContainer>
    </>
    );
}

export default Pasivos;