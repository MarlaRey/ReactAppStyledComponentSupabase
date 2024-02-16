import { Routes, Route } from "react-router-dom"; // Importer både Routes og Route fra react-router-dom
import { HomePage } from "../../Pages/HomePage";
import { PosterPage } from "../../Pages/PosterPage";
import { PosterList } from "../PosterList/PosterList";
import { LoginPage } from "../../Pages/LoginPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/posters" element={<PosterPage />}>
                <Route path=":genreSlug" element={<PosterList />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};
