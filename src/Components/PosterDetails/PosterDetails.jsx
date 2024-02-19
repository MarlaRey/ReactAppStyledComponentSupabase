import {useState, useEffect} from "react"
import {useSupabase} from "../../Providers/SupabaseProvider"
import { PosterDetailsContainer } from "./PosterDetails.style"
import { useParams } from "react-router-dom"

export const PosterDetails = () => {
    const {posterSlug} = useParams()
    const [posterData, setPosterData] = useState ([])
    const { supabase} = useSupabase()

    const getData = async () => {
        let data, error;
        
        if (supabase) {
          const { data: postData, error: postError } = await supabase
            .from('poster')
            .select('*')
            .eq('slug', posterSlug)
            .limit(1)
            .single();
            
          data = postData;
          error = postError;
        }
      
        if (error) {
          console.error(error);
        } else {
          console.log(data);
          setPosterData(data);
        }
      };
//vi vil gerne lave et kontrolleret kald, altså selv bestemme hvornår funktionen skal kaldes, derfor bruger vi useEffect
    useEffect (() => {
    getData()
    }, [posterSlug, supabase] //hvis vores url ændrer sig eller vi bliver logget af supabase, så skal den re-render
    )

    return (
        <PosterDetailsContainer>
            <>
                <h1>{posterData.name}</h1>
                <p dangerouslySetInnerHTML={{__html:posterData.description}}></p>
            </>
        </PosterDetailsContainer>
    )
}