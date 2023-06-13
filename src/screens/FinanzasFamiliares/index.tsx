
import BasicLayout from "../../components/4.Templates/BasicLayout";
import * as React from 'react';
import IngresosFamiliaresMes from "../../components/3.Organisms/IngresosFamiliaresMes";
import GastosMensuales from "../../components/3.Organisms/GastosMensuales";
import Pasivos from "../../components/3.Organisms/Pasivos";
import FlujoEfectivoAnual from "../../components/3.Organisms/FlujoEfectivoAnual";
import { get } from "../../config/api/axios";



const FinanzasFamiliares = () => {


  return (
    <BasicLayout >
      <IngresosFamiliaresMes></IngresosFamiliaresMes>
      <br />
      <br />
      <GastosMensuales></GastosMensuales>
      <br />
      <br />
      <Pasivos></Pasivos>
      <br />
      <br />
      <FlujoEfectivoAnual></FlujoEfectivoAnual>
      <br />
      <br />
    </BasicLayout>

  );
}


export default FinanzasFamiliares;

