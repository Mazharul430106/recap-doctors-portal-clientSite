import React, { useEffect, useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointments = ({ setSelectedDate }) => {
    const [appointments, setAppointments] = useState([]);
    const [treatement, setTreatement] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <section>
            <div className='grid lg:grid-cols-3 gap-5 px-5 lg:px-0 my-24'>
                {
                    appointments.map(appointment => <AppointmentOptions
                        key={appointment._id}
                        appointment={appointment}
                        setTreatement={setTreatement}
                    >
                    </AppointmentOptions>)
                }
            </div>

            <div>
                {
                    treatement && <BookingModal
                        treatement={treatement}
                        setSelectedDate={setSelectedDate}
                    >

                    </BookingModal>
                }
            </div>

        </section>
    );
};

export default AvailableAppointments;