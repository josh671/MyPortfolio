import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./Navigation/Navbar";
function RootLayout(){
    const [active, setActive] = React.useState('home');
    return(
        <>
            <MainNavigation active={active} onSelect={setActive}/>
            <Outlet/>
        </>
    )
}

export default RootLayout;