import { AddProductPanel, AllProductsPanel } from "components/panels";
import { Route, Routes } from "react-router-dom";

import { DashBoardPage, PageNotFound, LoginPage } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route element={<LoginPage />} />
                <Route path="dashboard" element={<DashBoardPage />}>
                    <Route
                        index
                        element={<AllProductsPanel title="All Products" />}
                    />
                    <Route
                        path="all"
                        element={<AddProductPanel title="Add New Product" />}
                    />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
