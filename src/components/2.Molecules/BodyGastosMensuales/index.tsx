import {  TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import ButtonAdd from "../../1.Atoms/buttonAdd";
import ButtonARemove from "../../1.Atoms/ButtonDelete";
import FooterTableItem from "../../1.Atoms/FooterTableItem";
import { HeadersName, HedersNameEnum } from "../../3.Organisms/GastosMensuales/types";
interface Props {
    totalTitle:string;
    rows:HeadersName[];
    startDowlad:boolean;
    handleUpdate: (index: number, hederName: string, value: string,isNumber:boolean) => void;
    handleAdd:() => void
    deleteItem:(index:number) => void;
}
 
const BodyGastosMensuales = ({startDowlad,totalTitle,rows,handleUpdate,handleAdd,deleteItem}:Props) => {

    const returnSum=(key:HedersNameEnum) => {
        return ((rows??[]).reduce((accumulator, object) => {
            return accumulator +parseFloat(object[key]);
        }, 0)).toFixed(2)
    }

    const getPercents = (value:string,keyTotal:HedersNameEnum) => {
        let number = parseFloat(value)
        return ((number / parseFloat(returnSum(keyTotal)))*100).toFixed(2)
    }

    return ( 
        <TableBody>
        {(rows??[]).map((row, index) => (
            <TableRow
                key={Math.random() * 2}
                style={{ background: ((index + 1) % 2 === 1) ? '#F2F8FC' : '#fff' }}>
               {!startDowlad && <TableCell align="left" ><ButtonARemove onClick={() =>deleteItem(index)}/></TableCell>}
                <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, HedersNameEnum.SERVICIO, event.target.innerText,false) }} component="th" scope="row">{row.SERVICIO}</TableCell>
                <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, HedersNameEnum.FECHA, event.target.innerText,false) }} align="right">{row.FECHA}</TableCell>
                <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, HedersNameEnum.PTO, event.target.innerText,true) }} align="right">{row.PTO}</TableCell>
                <TableCell align="right">{getPercents(row.PTO,HedersNameEnum.PTO)+"%"}</TableCell>
                <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, HedersNameEnum["TARJETA CREDITO"], event.target.innerText,true) }} align="right">{row["TARJETA CREDITO"]}</TableCell>
                <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, HedersNameEnum.CASH, event.target.innerText,true) }} align="right">{row.CASH}</TableCell>
                <TableCell align="right">{getPercents(row.CASH,HedersNameEnum.CASH)+"%"}</TableCell>
                <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, HedersNameEnum.OBSERVACION, event.target.innerText,false) }} align="right">{row.OBSERVACION}</TableCell>
            </TableRow>
        ))}
        <TableRow>
            <FooterTableItem colSpan={startDowlad?1:2}><ButtonAdd color="#0fc4d4"onClick={handleAdd}></ButtonAdd></FooterTableItem>
            <FooterTableItem >{totalTitle}</FooterTableItem>
            <FooterTableItem align="right">{returnSum(HedersNameEnum.PTO)}</FooterTableItem>
            <FooterTableItem align="right">{"100%"}</FooterTableItem>
            <FooterTableItem align="right">{returnSum(HedersNameEnum['TARJETA CREDITO'])}</FooterTableItem>
            <FooterTableItem align="right">{returnSum(HedersNameEnum.CASH)}</FooterTableItem>
            <FooterTableItem align="right">{"100%"}</FooterTableItem>
        </TableRow>
    </TableBody>


     );
}
 
export default BodyGastosMensuales;