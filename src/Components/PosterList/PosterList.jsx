import { useParams } from "react-router-dom"
import { PosterListContainer } from "./PosterList.style"
import { useEffect, useState } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider";
import { PosterItem } from "../../Components/PosterItem/PosterItem";

export const PosterList = () => {
    const { genreSlug } = useParams();
    const [posterData, setPosterData] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('genres')
                .select("*, poster(*)")
                .eq('slug', genreSlug)
            if (error) {
                console.error(error);
            } else {
                console.log(data[0].poster);
                setPosterData(data[0].poster);
            }
        }
    }

    useEffect(() => {
        getData()
    }, [genreSlug, supabase])

    return (
        <PosterListContainer>
      {posterData &&
        posterData.map((item) => (
          <PosterItem
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            slug={item.slug}
          />
        ))}
        </PosterListContainer>
    )
}