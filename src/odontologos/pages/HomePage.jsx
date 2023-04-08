import { OdontologosList } from "../components/OdontologosList"
import { odontologos } from "../data/odontologos"

export const HomePage = () => {

  return (
    <>
      <h1>Home</h1>
      <hr />

      <ul>
        {
          odontologos.map( odonto => (
            <li key={ odonto.id }>
              { odonto.name }
            </li>
          ))

        }
      </ul>
    
      
    </>
  )
}
