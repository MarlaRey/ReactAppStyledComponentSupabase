
//dette er bare et Javascript object, som er struktureret med nogle ting. Den kan du tage med dig og tilpasse dit projekt.    
export const theme = {
    
    //property:
colors: {
    primary: "#5c1F06",
    secondary: "#D97852",
    tertiary: "#524641",
    light: "#fff",
    dark: "#000"
},
fonts: [
    "'Titillium Web', sans serif"

],
grid:{
    breakpoints: {
        xs: "320px",
        s: "480px",
        m: "768px",
        l: "992px",
        xl: "1200px"
    },
    mobile: {
        rows: "1fr 10fr 1fr",
        columns: "5fr 1fr",
        areas: `
        "header header header header header navbar"
        "main main main main main main"
        "footer footer footer footer footer footer"
        ` 
    },
    tablet:{
        rows: "1fr 10fr 1fr",
        columns: "5fr 1fr",
        areas: `
        "header navbar navbar navbar navbar navbar"
        "main main main main main main"
        "footer footer footer footer footer footer"
        ` 
    },
    desktop:{
        rows: "1fr 10fr 1fr",
        columns: "1fr 5fr",
        areas: `
        "header navbar navbar navbar navbar navbar"
        "main main main main main main"
        "footer footer footer footer footer footer"
        ` 
    }
}
}

