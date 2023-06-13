import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { utils, writeFileXLSX } from "xlsx";
import FooterTableItem from "../../1.Atoms/FooterTableItem";
import ListSelect from "../../1.Atoms/ListSelect";
import HeadTable from "../../2.Molecules/HeadTable";
import { MatrizSeleccionInmuebleEnum } from "./types";
import useHook from "./useHook"


const MatrizSeleccionInmueble = () => {
    const tbl = useRef<HTMLTableElement>(null);
    const [hiddenColums, setHiddenColums] = useState<boolean>(true)
    const [startDowlad, setStartDowlad] = useState<boolean>(false)
    const { matrizSeleccionInmuebleRows, readUploadFile, getCalification, getCalificationTotal,handleSelect } = useHook()
    useEffect(() => {
        if (startDowlad) {
            const wb = utils.table_to_book(tbl.current);
            writeFileXLSX(wb, "MatrizSeleccionInmueble.xlsx");
            setHiddenColums(true)
            setStartDowlad(false)
        }
    }, [hiddenColums])

    const handleExport = () => {
        setHiddenColums(false)
        setStartDowlad(true)
    }

    

    return (
        <TableContainer component={Paper}>
            <Table ref={tbl} sx={{ minWidth: 650 }} aria-label="simple table">
                <HeadTable      onSave={()=>{}}  isDownloadStart={true} onExport={handleExport} onReadFile={readUploadFile} generalTitles={"MATRIS DE SELECCION DE INMUEBLE"} headTitle={MatrizSeleccionInmuebleEnum} />
                <TableBody>
                    {matrizSeleccionInmuebleRows.map((row, index) => (
                        <TableRow
                            key={Math.random() * 2}
                            style={{ background: ((index + 1) % 2 === 1) ? '#F2F8FC' : '#fff' }}
                        >
                            <TableCell align="left">{row.DESCTIPCION}</TableCell>
                            <TableCell align="center"><ListSelect initialValue={row.PUNTOS} list={row.VALOR} onSelect={(value:string)=>{handleSelect(index,value)}}/></TableCell>
                            <TableCell align="right">{getCalification(row).toFixed(0) + "%"}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <FooterTableItem colSpan={2}>{"BUSCAR INMUEBLES CON CALIFICACION SUPERIOR A 80% >>>"}</FooterTableItem>
                        <FooterTableItem align="right">{getCalificationTotal()}</FooterTableItem>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MatrizSeleccionInmueble;