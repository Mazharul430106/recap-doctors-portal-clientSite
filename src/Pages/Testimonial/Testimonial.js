import React from 'react';
import quote from '../../assets/icons/quote.svg';
import img1 from '../../assets/images/people1.png';
import img2 from '../../assets/images/people2.png';
import img3 from '../../assets/images/people3.png';
import DisplayTestimonialItems from './DisplayTestimonialItems';

const Testimonial = () => {

    const testiMonialItems = [
        {
            id: 1,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: img1,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            id: 2,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: img2,
            name: 'Winson Herry',
            location: 'New York'
        },
        {
            id: 3,
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: img3,
            name: 'Winson Herry',
            location: 'Washington Dc'
        }
    ]



    return (
        <section>
            <div className='flex justify-between px-5 lg:px-0'>
                <div>
                    <h3 className='text-xl text-secondary font-bold'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className="w-[192px]" alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-14 my-20 px-5 lg:px-0'>
                {
                    testiMonialItems.map(testiMonialItem=> <DisplayTestimonialItems
                            key={testiMonialItem.id} 
                            testiMonialItem={testiMonialItem}>
                         </DisplayTestimonialItems>)
                }
            </div>



        </section>
    );
};

export default Testimonial;