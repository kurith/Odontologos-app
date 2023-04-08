import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getOdontologosById } from "../helpers/getOdontologosById"


export const DetailsPage = () => {

  const { id } = useParams()
  const navigate = useNavigate();
  const odontologo = getOdontologosById( parseInt(id) ) 

  console.log( odontologo )

  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    <div className="row mt-5"> 

        <div className="col-4">

          <img 
            src="/images/doctor.jpg" 
            alt={ odontologo.name } 
            className="img-thumbnail"
          />

        </div>

        <div className="col-8">

          <h2>{ odontologo.name }</h2>
          <h4>{ odontologo.username }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>E-mail :</b> { odontologo.email } </li>
            <li className="list-group-item"> <b>Phone :</b> { odontologo.phone } </li>
            <li className="list-group-item"> <b>Company :</b> { odontologo.company.name } </li>
            <li className="list-group-item"> <b>WebSite :</b> { odontologo.website } </li>
          </ul>

          <button
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }
          >
          Regresar
          </button>

        </div>

       
    </div>
  )
}
