import styled  from 'styled-components'
import {useContext ,Fragment} from 'react' 
import AppContext from '../../context/app-context'
import useSingupForm from '../../hooks/useSingupForm'
import {ButtonPrimary} from '../Buttons'
import burgerIcon from '../../img/burger-icon.png'
import {TextInput,ErrorMessage} from '../contact/ContactForm';
import {LoaderSpinner} from './../LoaderSpinner'

export const FormCard =  styled.article`
  box-shadow: 0 0 4px rgba(0,0,0,0.5);

margin: 30px auto;
border-radius:10px;
width: 100%;
    max-width: 400px;
display:flex;
flex-flow:column;
align-items:center;
text-align:center;
min-heght:600px;
background: rgb(252,175,1);
    background: linear-gradient(
218deg
, rgb(252 175 1 / 60%) 0%, rgb(255 165 0 / 58%) 100%);
box-box-shadow: 2px 2px 6px #000;

@media screen and  (max-width:400px){
 width: 100%;

}
`;
export const Logo = styled.img`
width:120px;
margin-bottom:20px;
height:auto;
`;
export const Form = styled.form`
width:90%;
margin-left: -10px;
padding-bottom:25px;
display:flex;
margin:0 auto;
flex-flow:column;
align-items:center;
& > input {
      width: 90%;
     margin-bottom:15px;
      border:none;
    box-shadow: ${props => props.theme.inputShadow};
}

& >${LoaderSpinner}{
  margin-bottom: 10px;
}
& > input:focus, & > textarea:focus{
  outline: 2px solid ${props => props.theme.darckYellow};
    outline-style: auto;
}
& > input[type="submit"] {
    box-shadow: none;
      outline: none;
}
@media screen and  (max-width:500px){
width: 90%;
& > input {
      width: 95%;
  
}
}
`;
export const ErrorServerMessage = styled(ErrorMessage)`
text-align:center;
font-size:20px;
margin: 5px 0 15px;
`
export const FormLink = styled.a`
margin-bottom: 20px;
cursor:pointer;
transition:all 0.5s esea;
&:hover{
  color:#fff;
}
`;
export function UserNameInput({register,errors}){

  return(
    <Fragment>
       {errors.userName && <ErrorMessage>{errors.userName.message }</ErrorMessage>}
    <  TextInput 
        placeholder='Tu nombre...'
          name="userName"
          type='text'
          ref={register({
               required: '*El campo es requrido',
              pattern:{
                        value: /^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/
,
                         message:"*Nombre no valido"
                      }
            
          })}
                 style={{ borderColor: errors.userName&& "#bf0000" }}
          />
    </Fragment>
  );
}
export function UserLastNameInput({register,errors}){

  return(
    <Fragment>
       {errors.userLastName && <ErrorMessage>{errors.userLastName.message }</ErrorMessage>}
    <  TextInput 
    type='text'
        placeholder='Tu apellido ...'
          name="userLastName"
          ref={register({
               required: '*El campo es requrido',
              pattern:{
                        value: /^[A-Za-zñÑáÁéÉíÍóÓúÚÜü]+$/
,
                         message:"*Nombre no valido"
                      }
            
          })}
                 style={{ borderColor: errors.userLastName && "#bf0000" }}
          />
    </Fragment>
  );
}
export function UserEmailInput({register,errors}){

  return(
    <Fragment>
                    {errors.userEmail && <ErrorMessage>{errors.userEmail.message}</ErrorMessage>}
          <TextInput 
          type='email'
          placeholder='Tu email...'
          name="userEmail"
          ref={register({
                     required: '*El campo es requrido',
                
                      pattern:{
                        value:/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
                             message:"*Email no valido"
                      }
          })}
           style={{ borderColor: errors.userEmail && "#bf0000" }  }
          />
    </Fragment>
  );
}
 export function UserPasswordInput({register,errors,placeholder,name = 'userPassword'}){

  return(
    <Fragment>
       {errors[name] && <ErrorMessage  role="alert">{errors[name].message}</ErrorMessage>}

<TextInput
placeholder={placeholder}
type='password'
name ={name}
          ref={register({
                  required: '*El campo es requrido' ,
                     minLength: {
            value: 5,
            message: "*El largo mínimo es de 5 carácteres"
          } 
          })}
           style={{ borderColor: errors[name] && "#bf0000" }}/>
    </Fragment>
  );
}
export function UserNewPasswordInput({register,errors,placeholder,}){
 

  return(
    <Fragment>
       {errors.userNewPassword && <ErrorMessage  role="alert">{errors.userNewPassword.message}</ErrorMessage>}

<TextInput
placeholder={placeholder}
type='password'
 name='userNewPassword'
          ref={register({
             required:  '*El campo es requrido' ,
                     minLength: {
            value: 5,
            message: "*El largo mínimo es de 5 carácteres"
          } 
          })}
           style={{ borderColor: errors.userNewPassword && "#bf0000" }}/>

    </Fragment>
  );
}
export default function SingupForm(){

    const {setIsSingUp} = useContext(AppContext);

   const {register,handleSubmit,errors,onSubmit,redirectToLogin,isFormLoading,serverError} = useSingupForm(setIsSingUp)
  return(
    <FormCard>
             <Logo src={burgerIcon} alt="LogoBrand"></Logo>
      <Form onSubmit={handleSubmit(onSubmit)}>
     
     <UserNameInput  errors={errors} register={register}/>
          <UserLastNameInput  errors={errors} register={register}/>
     <UserEmailInput  errors={errors} register={register}/>
     <UserPasswordInput  errors={errors} register={register} placeholder="Tu contraseña..."  />
      
   {isFormLoading ?  <LoaderSpinner small /> :

         <ErrorServerMessage>{serverError}</ErrorServerMessage>
          }    
 
           <FormLink onClick={redirectToLogin}>¿Ya tienes una cuenta? <b>Login</b> </FormLink>
 <ButtonPrimary as="input" type="submit" value="Sing Up"/>
      </Form>
    </FormCard>
  );
}
