import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointments = ({ selectedDate }) => {
    const [treatement, setTreatement] = useState(null);
    const date = format(selectedDate, 'PP');
    // console.log(date);
    const {data:appointments = [], refetch } = useQuery({
        queryKey: ['appointments', date],
        queryFn: ()=> fetch(`http://localhost:5000/appointments?date=${date}`)
        .then(res => res.json())
    })
    
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
                        selectedDate={selectedDate}
                        setTreatement={setTreatement}
                        refetch={refetch}
                    >
                    </BookingModal>
                }
            </div>

        </section>
    );
};

export default AvailableAppointments;