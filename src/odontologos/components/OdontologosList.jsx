import React from 'react'
import { getOdontologosById } from '../helpers/getOdontologosById'

export const OdontologosList = ( { id } ) => {

    const [ odontologo ] = getOdontologosById( id )
    return (
        <>
            <h1>{ odontologo.name }</h1>
        </>
            
    )
}
