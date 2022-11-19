import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({treatement, setSelectedDate}) => {
    const {name, slots} = treatement;
    const date = format(setSelectedDate, 'PP');


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-secondary text-white btn-primary btn-circle absolute right-2 top-2">✕</label>
                    <h3>{name}</h3>           
                    <form action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="text" placeholder="date" defaultValue={date} disabled  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                           <select name='slot' className='select select-bordered'>
                                {
                                    slots.map(slot=> <option value="">{slot} </option>)
                                }
                           </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="phone" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"/>
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