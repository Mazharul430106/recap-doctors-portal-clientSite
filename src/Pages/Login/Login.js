import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const {register, handleSubmit } = useForm();
    const handleLoginForm = data =>{
        console.log(data);
        loginUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            alert('User Login Successfully');
        })
        .catch(error=> {
            console.log(error);
        })
    }

    return (
        <section className='my-20'>
            <div className="hero">
                <div className="lg:w-[450px] flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body"> 
                            <h3 className='text-center text-4xl font-semibold'>Login Now</h3>
                            <form onSubmit={handleSubmit(handleLoginForm)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register('email', {required: true})} name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register('password', {required: true})} name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="LOGIN" className='input input-bordered bg-accent text-white' />
                                </div>
                                <div className='text-center mt-4'>
                                    <p className='font-semibold'>New to Doctors Portal?  <Link className='text-secondary mx-1' to='/signup'>Create a new account</Link></p>
                                </div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                </div>
                            </form>

                            <div className="form-control">
                               <ButtonComponent>Continue With Google</ButtonComponent>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;