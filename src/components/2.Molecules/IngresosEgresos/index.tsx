import { TableBody, TableCell, TableRow } from "@mui/material";
import ButtonAdd from "../../1.Atoms/buttonAdd";
import ButtonARemove from "../../1.Atoms/ButtonDelete";
import CurrencyCell from "../../1.Atoms/CurrencyCell";
import FooterTableItem from "../../1.Atoms/FooterTableItem";
import { FlujoEfectivoAnualEnum } from "../../3.Organisms/FlujoEfectivoAnual/types";
const CurrencyFormat = require('react-currency-format');


interface Props {
    title: string;
    rows: any[];
    startDowlad: boolean;
    handleUpdate: (index: number, hederName: string, value: string, isNumber: boolean) => void
    handleAdd: () => void
    deleteItem: (index: number) => void
    showTotal?: boolean;
}

const IngresosEgresos = ({ startDowlad, title, rows, handleUpdate, handleAdd, deleteItem, showTotal = true }: Props) => {

    const returnSum = (key: any) => {
        return (rows.reduce((accumulator, object) => { return accumulator + parseFloat(object[key]); }, 0)).toFixed(2)
    }

    const getTotal = (item: any) => {
        let total = parseFloat(item.ENERO) +
            parseFloat(item.FEBRE) +
            parseFloat(item.MARZ) +
            parseFloat(item.ABRIL) +
            parseFloat(item.MAYO) +
            parseFloat(item.JUNIO) +
            parseFloat(item.JULIO) +
            parseFloat(item.AGOS) +
            parseFloat(item.SEPT) +
            parseFloat(item.OCT) +
            parseFloat(item.NOVI) +
            parseFloat(item.DICI)
        return total;

    }

    const getTotalTotal = () => {
        let count = 0;
        rows.forEach((row, i) => {
            count += getTotal(row)
        })
        return count.toFixed(2)
    }

    return (
        <TableBody>
            {rows.map((row, index) => (
                <TableRow
                    key={Math.random() * 2}
                    style={{ background: ((index + 1) % 2 === 1) ? '#F2F8FC' : '#fff' }}
                >
                    {!startDowlad && <TableCell align="left" ><ButtonARemove onClick={() => deleteItem(index)} /></TableCell>}
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.DESCRIPCIÓN, event.target.innerText, false) }} component="th" scope="row">{row.DESCRIPCIÓN}</TableCell>
                    {showTotal && <TableCell align="right">{getTotal(row).toFixed(2)}</TableCell>}
                    {/* <CurrencyCell
                        index={index}
                        keyObject={FlujoEfectivoAnualEnum.ENERO}
                        value={row.ENERO}
                        handleUpdate={handleUpdate}
                    /> */}

                   
                     <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.ENERO, event.target.innerText,true) }} align="right">{row.ENERO}</TableCell> 
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.FEBRE, event.target.innerText, true) }} align="right">{row.FEBRE}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.MARZ, event.target.innerText, true) }} align="right">{row.MARZ}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.ABRIL, event.target.innerText, true) }} align="right">{row.ABRIL}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.MAYO, event.target.innerText, true) }} align="right">{row.MAYO}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.JUNIO, event.target.innerText, true) }} align="right">{row.JUNIO}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.JULIO, event.target.innerText, true) }} align="right">{row.JULIO}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.AGOS, event.target.innerText, true) }} align="right">{row.AGOS}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.SEPT, event.target.innerText, true) }} align="right">{row.SEPT}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.OCT, event.target.innerText, true) }} align="right">{row.OCT}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.NOVI, event.target.innerText, true) }} align="right">{row.NOVI}</TableCell>
                    <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, FlujoEfectivoAnualEnum.DICI, event.target.innerText, true) }} align="right">{row.DICI}</TableCell>
                </TableRow>
            ))}
            <TableRow>
                <FooterTableItem colSpan={startDowlad ? 1 : 2} align="center"><ButtonAdd color="#0fc4d4" onClick={handleAdd} text={title}></ButtonAdd></FooterTableItem>
                {showTotal && <FooterTableItem align="right">{getTotalTotal()}</FooterTableItem>}
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.ENERO)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.FEBRE)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.MARZ)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.ABRIL)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.MAYO)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.JUNIO)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.JULIO)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.AGOS)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.SEPT)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.OCT)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.NOVI)}</FooterTableItem>
                <FooterTableItem align="right">{returnSum(FlujoEfectivoAnualEnum.DICI)}</FooterTableItem>
            </TableRow>
        </TableBody>
    );
}

export default IngresosEgresos;