import React from "react";
import { Route, Routes } from "react-router-dom";

const Pokedex = React.lazy(() => import("../view/Pokedex"))

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/" element={
                    <React.Suspense fallback={<div> Loading...</div>}>
                        <Pokedex />
                    </React.Suspense>
                }
            />
        </Routes>
    )
}

export default AppRoutes;