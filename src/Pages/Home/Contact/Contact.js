import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent';


const Contact = () => {
    return (
        <section className='py-10' style={{
            background: `url(${appointment})`
        }}>

            <div className='text-center'>
                <h3 className='text-xl text-secondary font-bold'>Contact Us</h3>
                <h2 className='text-4xl font-semibold text-white'>Stay connected with us</h2>
            </div>

            <div className="hero">
                <div className="w-full lg:w-[600px] flex-col lg:flex-row-reverse">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea style={{ height: '150px' }} className="textarea input input-bordered" placeholder="Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <ButtonComponent>submit</ButtonComponent>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;