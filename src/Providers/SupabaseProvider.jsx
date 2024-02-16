import { createClient } from "@supabase/supabase-js";
import { createContext, useState, useEffect, useContext } from "react";

const SupabaseContext = createContext()

export const SupabaseProvider = ({children}) => {
    const [supabase, setSupabase] = useState(null)

    const supabaseUrl = 'https://trtjlojvhcilauwpqwgr.supabase.co';
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

    useEffect ( () => {
        setSupabase (createClient (supabaseUrl, supabaseKey))
        console.log(123);
    }, 
    //dependency array: (hvis denne ændrer sig, skal den rendere på ny)
    [supabaseKey]

    )

    return (
        <SupabaseContext.Provider value ={{supabase}}>
            {children}
        </SupabaseContext.Provider>
    )
}

//med dette kan du kalde useSupabase rundt i dine komponenter, så får du ovenstående supabaseobject til rådighed.
export const useSupabase = () => useContext (SupabaseContext)