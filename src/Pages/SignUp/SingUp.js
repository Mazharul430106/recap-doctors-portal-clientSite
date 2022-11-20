import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import { AuthContext } from '../../Contexts/AuthProvider';
import {toast} from 'react-hot-toast';




const SingUp = () => {

    const {createUser} = useContext(AuthContext);
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate();
 
    const handleSignUpForm = (data) => {
        createUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('User SignUp Successfully');
            navigate('/');
        })
        .catch(error=> {
            console.log(error);
            toast.error(error.message);
        })
    }

    return (
        <section className='my-24'>
            <div className="hero">
                <div className="lg:w-[450px] flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleSignUpForm)}>
                                <h3 className='text-center text-4xl font-semibold'>Sign Up</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register('password', { pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}/, required: true })} placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <ButtonComponent>sign up</ButtonComponent>
                                </div>
                            </form>

                            <div className='flex justify-between px-1 mt-3'>
                                <h3>All Ready Hava an Account</h3>
                                <Link className='text-secondary' to='/login' >Please Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingUp;

