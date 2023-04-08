import { OdontologoCard } from "../components/OdontologoCard"
import { useFav } from "../hooks/useFav"

export const FavsPage = () => {

  const {favs, favsCount, handleDeleteFav } = useFav()

  return (
    <div className="col">

        <h1>Favs: { favsCount }</h1>
        <ul className="list-group">
        {
            favs.map( fav => (
                <OdontologoCard id={ fav.id } name={ fav.name } username={ fav.username }/>
            ))
        }
    </ul>
        
    </div>
  )
}
