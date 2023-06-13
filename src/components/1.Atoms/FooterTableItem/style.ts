import { styled, TableCell, TableCellProps } from "@mui/material";

interface FooterTableProps extends TableCellProps {
    hasValue: boolean;
}

export const FooterTable = styled(TableCell)<FooterTableProps>(({ theme,hasValue }) => ({
    backgroundColor:  hasValue?'#33cccc':"#ffff" ,
}))
