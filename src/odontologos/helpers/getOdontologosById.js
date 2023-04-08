import { odontologos } from "../data/odontologos"

export const getOdontologosById = ( id ) => {

    return odontologos.find( odontologo => odontologo.id === id )

}
