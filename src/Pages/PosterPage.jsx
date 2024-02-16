import { GenreList } from "../Components/GenreList/GenreList"
import { PosterPageContainer } from "./PosterPage.style"

export const PosterPage = () => {
    return (
        <PosterPageContainer>
            <GenreList></GenreList>
        </PosterPageContainer>
    )
}