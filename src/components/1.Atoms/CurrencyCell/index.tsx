import { TableCell } from "@mui/material";

var CurrencyFormat = require('react-currency-format');



interface Props {
    value: string;
    index: number;
    keyObject: string;
    handleUpdate: (index: number, hederName: string, value: string,isNumber: boolean) => void
}
 
const CurrencyCell = ({index,keyObject,value,handleUpdate}:Props) => {
    return ( 
         <TableCell contentEditable onBlur={(event: any) => { handleUpdate(index, keyObject, event.target.innerText,true) }} align="right">{<CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value:string) => <div>{value}</div>} />}</TableCell>    
     );
}
 
export default CurrencyCell;