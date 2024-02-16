import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"

export const GenreList = () => {
    const [genreData, setGenreData] = useState([])
    const { supabase } = useSupabase()
    console.log(supabase);

    const getData = async () => {
        if (supabase) {

            const { data, error } = await supabase

                .from('genres')
                .select('*')
                .order('title')
                console.log(data);
            if (error) {
                console.error("fejl i kald af genre", error);
            } else {
                console.log(data);
                setGenreData(data)
            }
        }
    }
    useEffect(() => {
        getData()
    }, [setGenreData, supabase])

    return (
        <div>generelist</div>
    )
}