// import Image from 'next/image'
// import Link from 'next/link'
// import HeroImg from "/public/herovideo.gif";

// export default function Hero() {
//     return (
//         <section className='grid grid-cols-2'>
//             <div>
//                 <h1 className='text-4xl font-semibold'>Book Your Session Now!!!</h1>
//                 <p className='my-4 text-grey-500'>
//                     Relax and rejuvenate at Stacey's luxurious spa. Stacey is an experienced therapist that will help you to de-stress and leave feeling refreshed and rejuvenated. She offers a variety of services, including massages, facials, and body treatments. Book your session today and experience the difference!
//                 </p>
//                 <div>
//                     <button>Book Appointments Now</button>
//                 </div>
//             </div>
//             <div className='relative'>
//                 <Link href={'/'}>
//                     <Image
//                         src={HeroImg}
//                         alt="Spa"
//                         quality="100"
//                         priority={true}
//                         className="max-h-56 max-w-fit object-fill"
//                         column={1}
//                     />
//                 </Link>
//             </div>
//         </section>
//     );
// }

import Image from 'next/image';
import Link from 'next/link';
import HeroImg from '/public/herovideo.gif';

export default function Hero() {
    return (
        <section className='grid grid-cols-2 border'>
            <div className='border col-span-1'>
                <h1 className='text-4xl font-semibold'>Book Now</h1>
            </div>
            <div className='col-span-1'>
                <h1>vep</h1>
            </div>
        </section>
    );
}

