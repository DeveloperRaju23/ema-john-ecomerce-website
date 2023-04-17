import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState('')
    const [success , setSuccess] = useState('')
    const {createUser} = useContext(AuthContext)

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        setError('')
        
      
        // Create user set 
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })



        if(password !== confirm){
            toast.error("Wrong Password");
            form.reset()
            return;
        }
        else if(password.length < 8){
            toast.error("Password must be 8 characters");
            form.reset()
            return;
        }
        else{
            toast.success("Submit SuccessFully")
            form.reset()
            return;
        }
    }

       

    return (
        <div className='container'>
          <div className='form-container'>
          <h2 className='login-title'>Sign Up</h2>
            <form onSubmit={handleOnSubmit}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Confirm Password' required />
                </div>
                <input className='submit-btn' type="submit" value="Sign Up" />
                <div className='create-account'>
                    <p >Already have an account? <Link to="/login"><span>Login</span></Link> </p>
                </div>
                <div className='line'>
                    <hr /> Or <hr />
                </div>
                <div className='google-image'>
                    <div className='google-title'>
                    <img src="google.png" alt="" />
                        <h5>Continue with Google</h5>
                    </div>
                </div>
            </form>
          </div>
          <ToastContainer />
        </div>
    );
};

export default SignUp;