import { Link } from "react-router-dom"

export const OdontologoCard = ( { id, name, username } ) => {

  return (
    <div className="col">
        <div className="card"> 

            <div className="row no-gutters">

                <div className="col-4">
                    <img src="/images/doctor.jpg" className="card-img" alt={ username } />
                </div>

                <div className="col-8">

                    <div className="card-body">

                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ username }</p>
                        <Link to={`/details/${ id }`}>
                            Details...
                        </Link>

                    </div>

                </div>


            </div>

        </div>
    </div>
  )
}
