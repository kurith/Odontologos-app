import { useState } from "react";
import { useForm } from "../hooks/useForm"

export const Form = () => {

    const { name, email, onInputChange, onResetForm } = useForm({
        name: '',
        email: ''
      });
      const [formErrors, setFormErrors] = useState({
        name: '',
        email: ''
      });
      const [formSuccess, setFormSuccess] = useState(false);
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
          setFormSuccess(true);
          console.log('Datos enviados:', name, email);
        } else {
          setFormErrors(errors);
        }
      };
    
      const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ( name.length < 5 ) {
          errors.name = 'El nombre debe tener al menos 5 caracteres';
        }
        if (!emailRegex.test( email )) {
          errors.email = 'El email debe tener un formato válido';
        }
        return errors;
      };
      
      return (
        <>

          {formSuccess ? (
            <p>
              Gracias { name }, te contactaremos cuando antes vía mail.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-2 mr-sm-2">

                    <input
                    type="text"
                    name="name"
                    className="form control mt-2"
                    placeholder="Nombre Completo"
                    value={ name }
                    onChange={ onInputChange }
                    />

                    {formErrors.name && ( <span className="error">{formErrors.name}</span> )}
                </div>
        
                
                <div className="input-group mb-2 mr-sm-2">

                    <input
                    type="email"
                    name="email"
                    className="form control mt-2"
                    placeholder="Email"
                    value={ email }
                    onChange={  onInputChange  }
                    />

                    { formErrors.email && ( <span className="error">{formErrors.email}</span> )}
                </div>
             
              
              <button 
                type="submit"
                className="btn btn-outline-primary mt-3"
              >
              Enviar
              </button>

            </form>
          )}

        </>
      );
}
