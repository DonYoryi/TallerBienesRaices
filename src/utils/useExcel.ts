import { useState } from 'react'
import{read, utils, writeFileXLSX}from 'xlsx'
const file = 'https://miembros.carlosdevis.com/wp-content/uploads/2022/08/Finanzas-familiares-2022.xlsx'

const useExcel = () => {
    const [data , setData] = useState('')
    const readExcelFile = async () => {


    const f = await (await fetch(file,{
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    })).arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_html(ws); // generate objects
    setData(data)
    return data
    }
    return {
        data,
        readExcelFile
    }
}

export default useExcel