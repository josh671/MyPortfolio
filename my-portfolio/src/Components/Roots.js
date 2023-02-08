import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./Navbar";
function RootLayout(){
    return(
        <>
            <p>Here is the routes</p>
            <MainNavigation/>
            <Outlet/>
        </>
    )
}

export default RootLayout;