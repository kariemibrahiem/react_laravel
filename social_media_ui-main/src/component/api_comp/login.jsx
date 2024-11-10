import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginApi = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const HandleLogin = async(e)=>{
        e.preventDefault();
        // setloginData({email, password});
        const $formData = new FormData();
        $formData.append('email', email);
        $formData.append('password', password);
        // return alert( password);
          await axios.post(`http://127.0.0.1:8000/api/user/login` , $formData).then((response)=>{alert(response)}).catch(()=>alert("error"));
    };
  return (
    <div className='row p-5 m-5'>
        <div className="left col-6 d-flex flex-column gap-5">
            <h1 className='text-primary'>the login to our socail</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4> 
            <h4>Est explicabo iure natus tempora placeat ducimus dolor quia rem in, </h4> 
            <h4> eos culpa similique saepe quae qui nihil perferendis dolorum odit porro.</h4>
        </div>
        <div className="right col-6 shadow-lg p-5 rounded ">
                <form onSubmit={()=>{HandleLogin()}}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={(e)=>{setpassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    {/* <Link to="/" class="btn form-control btn-primary">login</Link> */}
                    <button type='submit'  className='btn btn-primary form-control'>login</button>
                    <p className='text-danger'>forgot password ? </p>
                    <br />
                    <hr />
                    <Link to="/regist" class="btn btn-outline-success">create new account</Link>
                </form>
        </div>
    </div>
  )
}

export default LoginApi;