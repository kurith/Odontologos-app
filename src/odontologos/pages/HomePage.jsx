import { OdontologoCard } from "../components/OdontologoCard"
import { OdontologosList } from "../components/OdontologosList"
import { odontologos } from "../data/odontologos"

export const HomePage = () => {



  return (
    <>
      <h1>Home</h1>
      <hr />

      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
          odontologos.map( odonto => (
            <OdontologoCard key={ odonto.id } id={ odonto.id } name={ odonto.name } username={ odonto.username }/>
          ))

        }
      </div>
    
      
    </>
  )
}
