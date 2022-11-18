import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chare from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <section>
            <div className='py-24' style={{
                background: `url(${bgImg})`
            }} >
                <div className="flex flex-col lg:flex-row-reverse px-5 lg:px-0">
                    <div className='lg:w-1/2 '>
                        <img src={chare} alt='' className="rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 flex justify-center items-center'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        >
                        </DayPicker>
                    </div>
                </div>
            </div>
            <p className='text-center text-xl text-secondary'>Available Appointments on {format(selectedDate, 'PP')} </p>

        </section>
    );
};

export default AppointmentBanner;