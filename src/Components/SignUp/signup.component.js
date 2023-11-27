import './signup.component.css'
import { saveData } from '../../Services/user-context'

export function SinupFormComponent(){

 const SignupData = (event) => {
   event.preventDefault()
   
   let deta = {
      id: 0,
      firstName: document.getElementById('firstname').value,
      lastName: document.getElementById('lastname').value,
      surName: document.getElementById('surname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
   }
   console.log(deta)
   saveData(deta)
   .then((res) => {
      alert('data saved success fully')
   })
   .catch(() => {
      alert(' data not  saved')
   })
 }

  return(
    <div className='main-card'>
      <form className='form-card' onSubmit={SignupData}>
       <h2 className='headimg'>Sign Up</h2>
       <hr/>
       <div>
          <label className='label-el'>FirstName</label>
          <input type='text' className='form form-control input-El' id='firstname'/>
       </div>
       <div>
          <label className='label-el'>LastName</label>
          <input type='text' className='form form-control input-El' id='lastname'/>
       </div>
       <div>
          <label className='label-el'>SurName</label>
          <input type='text' className='form form-control input-El' id='surname'/>
       </div>
       <div>
          <label className='label-el'>Email</label>
          <input type='email' className='form form-control input-El' id='email'/>
       </div>
       <div>
          <label className='label-el'>Password</label>
          <input type='password' className='form form-control input-El' id='password'/>
       </div>
       <div className='btn-card'>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <button type='reset' className='btn btn-danger'>Calcel</button>
       </div>
      </form>
    </div>
  )
}