import { TableCellProps } from '@mui/material';
import {FooterTable} from './style'
interface Props extends TableCellProps {
    children?:string | JSX.Element | number;
}
 
const FooterTableItem = (props:Props) => {
    const hasBackgroud = () => {
        return typeof props.children === 'string' || typeof props.children === 'number';
    }
    return ( 
        <FooterTable hasValue={hasBackgroud()}{...props}></FooterTable>
     );
}
 
export default FooterTableItem;