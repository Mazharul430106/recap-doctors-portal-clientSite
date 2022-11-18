import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';

const SingUp = () => {
    return (
        <section className='my-24'>
            <div className="hero">
                <div className="lg:w-[450px] flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h3 className='text-center text-4xl font-semibold'>Sign Up</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <ButtonComponent>sign up</ButtonComponent>
                            </div>

                        <div className='flex justify-between px-1 mt-3'>
                            <h3>All Ready Hava an Account</h3>
                            <Link className='text-secondary' to='/login' >Please Login</Link>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingUp;