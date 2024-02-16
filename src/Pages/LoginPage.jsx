import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSupabase } from '../Providers/SupabaseProvider'
import { useEffect, useState } from 'react'

export const LoginPage = () => {
    const { supabase } = useSupabase()
    const [session, setSession] = useState(null)
    const [userFirstName, setUserFirstName] = useState(null);

    useEffect(() => {
        if (supabase && supabase.auth) {
            const { data: session } = supabase.auth.getSession().then(({ data: session }) => {
                setSession(session);
                // Get user's first name from session object
                if (session?.user) {
                    setUserFirstName(session.user.user_metadata.first_name);
                }
            })
            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session);
                // Get user's first name from session object
                if (session?.user) {
                    setUserFirstName(session.user.user_metadata.first_name);
                }
            })
            return () => subscription.unsubscribe()
        }
    }, [supabase])

    const handleSignUp = async (email, password) => {
        try {
            const { user, session, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error('Fejl ved oprettelse af bruger:', error.message);
                return;
            }

            console.log('Bruger oprettet:', user);
            console.log('Session:', session);

            // Du kan tilføje yderligere logik her, f.eks. opdatering af brugergrænsefladen for at vise en bekræftelsesmeddelelse
        } catch (error) {
            console.error('Der opstod en fejl:', error.message);
        }
    };

    if (!session) {
        return (
            <>
                <h2>LoginPage</h2>
                {supabase && (
                    <Auth 
                        supabaseClient={supabase} 
                        appearance={{ theme: ThemeSupa }} 
                        signUp={handleSignUp} // Tilføj denne prop for at tilpasse sign up-funktionen
                    />
                )}
            </>
        )
    } else {
        return (
            <>
                <h2>Hey, {userFirstName || 'du'} er logget ind</h2>
                <button onClick={() => supabase.auth.signOut()}>Log ud</button>
            </>
        )
    }
}
