export const CapitalizerFirtsLetter = (string: string) =>{
    return(
        string.charAt(0).toLocaleUpperCase() + string.slice(1)
    )
}