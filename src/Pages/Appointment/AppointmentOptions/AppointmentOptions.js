import React from 'react';


const AppointmentOptions = ({ appointment }) => {
    const { name, slots } = appointment;


    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className=" text-xl text-secondary font-bold text-center">{name}</h2>
                <p className='text-center'>{slots[0]}</p>
                <p className='text-center mb-1'> {slots.length} {slots.length > 0 ? 'spaces' : 'space'} Avaliable </p>
                <div className="card-actions justify-center">
                   <label htmlFor="booking-modal" className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;