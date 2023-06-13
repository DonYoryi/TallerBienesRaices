import { Button, TableHead } from "@mui/material";
import ExportButton from "../../1.Atoms/ExportButton";
import UploadFile from "../../1.Atoms/UploadFile";
import { ActionContainer, CellTable, CellTableHeader, MainRow, RowTable } from "./styles";

interface Props {
    generalTitles: string
    headTitle: any;
    isDownloadStart:boolean;
    onExport: () => void
    onReadFile: (event: any) => void
    onSave: () => void
}

const HeadTable = ({ isDownloadStart,generalTitles, headTitle, onExport, onReadFile, onSave }: Props) => {
    return (
        <TableHead>
                <Button onClick={onSave} variant="contained" disableElevation>Guardar</Button>
            <MainRow >
                <CellTableHeader colSpan={1} align="left">{<><ExportButton onClick={onExport} /><UploadFile readUploadFile={onReadFile} /></>}</CellTableHeader>
                <CellTableHeader colSpan={20} align="left">{generalTitles}</CellTableHeader>
            </MainRow>
            <RowTable>
                {!isDownloadStart &&<CellTable align="left">Actions</CellTable>}
                {Object.keys(headTitle).map((key: string) => {
                    return (<CellTable align="left">{key}</CellTable>)
                })}
            </RowTable>
        </TableHead>
    );
}

export default HeadTable;