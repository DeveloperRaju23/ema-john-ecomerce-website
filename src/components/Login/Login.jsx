import React, { useContext, useState } from 'react';
import './Login.css'
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [error, setError] = useState('')
    const [success , setSuccess] = useState('')
    const {signIn} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
      
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
            navigate(from,{replace: true})
        })
        .catch(error => {
            console.log(error)
        })

        setError('')
        setSuccess('')
        // if(password || password){
        //     toast.error("Wrong Password");
        //     form.reset()
        //     return;
        // }
        // else if(password.length < 8){
        //     toast.error("Password must be 8 characters");
        //     form.reset()
        //     return;
        // }
        // else{
        //     toast.success("Login SuccessFully")
        //     form.reset()
        //     return;
        // }
        
    }
    return (
        <div className='container'>
          <div className='form-container'>
          <h2 className='login-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" placeholder='Password' required />
                    <div className='show'> 
                        <p onClick={() => setShow(!show)}><small>
                            {
                                show ? <span>Hide</span> : <span>Show</span>
                            }  

                            </small></p>
                    </div>
                </div>
                <input className='submit-btn' type="submit" value="Login" />
                <div className='create-account'>
                    <p >New to Ema-john? <Link to="/sign"><span>Create New Account</span></Link> </p>
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

export default Login;