import { odontologos } from "../data/odontologos"

export const getOdontologosById = ( id ) => {
    
    if( id > 10 ){
        throw new Error(`${ id } no es un id valido`)
    }

    return odontologos.filter( odontologo => odontologo.id === id )

}
