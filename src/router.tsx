import React, { useEffect, useState } from "react";
import { routesNames } from "./constants/routes";
import DetallesPropiedad from "./screens/DetallesPropiedad";
import FinanzasFamiliares from "./screens/FinanzasFamiliares";
import SeleccionarInmueble from "./screens/SeleccionarInmueble";

const params: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop: string) => searchParams.get(prop),
});


const Router = () => {
    const [route, setRoute] = useState<Routes>(routeList[0]);

    useEffect(() => {
        validateSessionsUsers()
        let currentRoute = routeList.find((route) => route.key === params?.routeName)
        if (currentRoute) {
            setRoute(currentRoute)
        }
    }, [])

    const validateSessionsUsers = async () => {
        let userEmail = await window.localStorage.getItem("userEmail")
        if(userEmail === "" 
        || userEmail === undefined
        || userEmail === 'undefined'
        || userEmail === null) {
            //window.location.href = window.location.origin;
        }
    }
    return (
        <route.Element />
    );
}

export default Router;

type Routes = {
    key: string;
    Element: () => JSX.Element
}
const routeList: Routes[] = [
    {
        key: "",
        Element:()=> <div>NO SE ENCONTRO HERRAMIENTA</div>
    },
    {
        key: routesNames.finanzasFamiliares,
        Element: FinanzasFamiliares
    },
    {
        key: routesNames.seleccionarInmueble,
        Element: SeleccionarInmueble
    },
    {
        key: routesNames.detallesPropiedad,
        Element: DetallesPropiedad
    }
];