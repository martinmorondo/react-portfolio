import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.min.css';
import './contact.css';

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

const [disabled, setDisabled] = useState(false);

// Alerta de éxito
  const toastifySuccess = () => {
    toast('¡Mensaje enviado con éxito!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Función de envío con EmailJS
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.error(e);
      // Alerta en caso de error
      toast.error('Hubo un error al enviar el mensaje. Intenta de nuevo.', {
        position: 'bottom-right',
        autoClose: 5000,
      });
    } finally {
      // Se ejecuta siempre, ya sea éxito o error
      setDisabled(false);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <h1>Contacto</h1>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Fila 1 */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Por favor, ingresa tu nombre'
                        },
                        maxLength: {
                          value: 30,
                          message: 'El nombre no puede tener más de 30 caracteres'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Nombre'
                    />
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: 'El correo electrónico es obligatorio',
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Por favor, ingresa un correo válido'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Correo electrónico'
                    />
                    {errors.email && (
                      <span className='errorMessage'>{errors.email.message}</span>
                    )}
                  </div>
                </div>
                
                {/* Fila 2 */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Por favor, ingresa un asunto'
                        },
                        maxLength: {
                          value: 75,
                          message: 'El asunto no puede tener más de 75 caracteres'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Asunto'
                    />
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                
                {/* Fila 3 */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: 'Por favor, escribe un mensaje'
                      })}
                      className='form-control formInput'
                      placeholder='Mensaje'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>{errors.message.message}</span>}
                  </div>
                </div>

                <button className='submit-btn' disabled={disabled} type='submit'>
                  {/* Feedback visual para el usuario mientras se procesa */}
                  {disabled ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
