import React from 'react'
import { Link } from 'react-router-dom';

const Regist = () => {
  return (
    <div className='row p-5 m-5'>
        <div className="left col-6 d-flex flex-column gap-5">
            <h1 className='text-primary'>the Regist to our socail</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4> 
            <h4>Est explicabo iure natus tempora placeat ducimus dolor quia rem in, </h4> 
            <h4> eos culpa similique saepe quae qui nihil perferendis dolorum odit porro.</h4>
        </div>
        <div className="right col-6 shadow-lg p-5 rounded ">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">RePassword</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <Link to="/" class="btn form-control btn-primary">Regist</Link>
                    <br />
                    <hr />
                    <Link to="/login" class="btn btn-outline-success">have an account ?</Link>
                </form>
        </div>
    </div>
  )
}

export default Regist;