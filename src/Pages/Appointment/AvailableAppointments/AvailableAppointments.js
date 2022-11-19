import React, { useEffect, useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointments = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        fetch('appointmentsData.json')
        .then(res=> res.json())
        .then(data=> setAppointments(data))
        .catch(error=> {
            console.log(error)
        })
    },[])

    return (
        <section>
            <div className='grid lg:grid-cols-3 gap-5 px-5 lg:px-0 my-24'>
                {
                    appointments.map(appointment=> <AppointmentOptions key={appointment._id} appointment={appointment}></AppointmentOptions>)
                }
            </div>

            <BookingModal></BookingModal>

        </section>
    );
};

export default AvailableAppointments;