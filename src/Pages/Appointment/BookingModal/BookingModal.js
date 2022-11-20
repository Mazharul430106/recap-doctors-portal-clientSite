import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({treatement, setSelectedDate}) => {
    const {name:treatementName, slots} = treatement;
    const date = format(setSelectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleModalSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        // console.log(date,slot,name,phone, email)

        const booking = {
            appointmentDate:date,
            treatement:treatementName,
            patient:name,
            slot,
            phone,
            email
        }

        console.log(booking)

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary text-white btn-primary btn-circle absolute right-2 top-2">✕</label>
                    <h3>{treatementName}</h3>           
                    <form onSubmit={handleModalSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="text" name='date' placeholder="date" defaultValue={date} disabled  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                           <select name='slot' className='select select-bordered'>
                                {
                                    slots.map((slot, index)=> <option key={index} >{slot} </option>)
                                }
                           </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            {
                                user?.displayName && <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="name" className="input input-bordered" />
                            }

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name='phone' placeholder="phone" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {
                                user.email && <input type="text" name='email' defaultValue={user?.email} disabled placeholder="email" className="input input-bordered"/>
                            }

                        </div>
                        <div className="form-control my-5">
                            <input type="submit" value='Submit' className="input input-bordered bg-accent text-white"/>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;