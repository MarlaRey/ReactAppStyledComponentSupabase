import {useState} from "react"
import {useSupabase} from "../../Providers/SupabaseProvider"
import { PosterDetailsContainer } from "./PosterDetails.style"

export const PosterDetails = () => {
    const {posterSlug} = useParams()
    const [posterData, setPosterData] = useState ([])
    const { supabase} = useSupabase()

    return (
        <PosterDetailsContainer>
            Plakat detaljer
        </PosterDetailsContainer>
    )
}