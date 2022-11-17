import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent';
import appointment from '../../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section className='my-28 px-5 lg:px-0 py-10 lg:py-0' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <div className='lg:w-1/2 hidden lg:block'>
                        <img src={doctor} alt='' className=" -mt-36 rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='text-secondary text-xl font-bold'>Appointment</h3>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                       <ButtonComponent>get started</ButtonComponent>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;