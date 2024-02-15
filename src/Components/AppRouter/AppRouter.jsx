import { Routes, Route } from "react-router-dom"; // Importer både Routes og Route fra react-router-dom
import { HomePage } from "../../Pages/HomePage";
import { PosterPage } from "../../Pages/PosterPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/posters" element={<PosterPage />} /> {/* Tilføjet det manglende < før PosterPage */}
        </Routes>
    );
};
