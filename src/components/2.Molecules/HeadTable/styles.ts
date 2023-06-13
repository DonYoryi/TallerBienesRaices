import { Box, BoxProps, styled, TableCell, TableCellProps, TableRow, TableRowProps } from "@mui/material";

export const RowTable = styled(TableRow)<TableRowProps>(({ theme }) => ({
    backgroundColor: '#0fc4d4',
    color: '#fff'
}))

export const CellTable = styled(TableCell)<TableCellProps>(({ theme }) => ({
    color: '#fff',
    fontWeight:700,
    fontSize:'1.2rem'
}))

export const CellTableHeader = styled(TableCell)<TableCellProps>(({ theme }) => ({
    color: '#fff',
    fontWeight:700,
    fontSize:'1.2rem',
    padding: 0,
}))


export const MainRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
    backgroundColor: '#135178',
 
}))

export const ActionContainer = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}))
