import Image from 'next/image'
import Link from 'next/link'
import LogoImg from "/public/logo.png";

export default function Header() {
    return (
        <>
            <header className='flex items-center justify-between'>
                <Link href={'/'}>
                    <Image
                        src={LogoImg}
                        alt="Spa"
                        quality="100"
                        priority={true}
                        className="max-h-56 max-w-fit object-fill"
                    />
                </Link>
                <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
                    <Link href={''}>Home</Link>
                    <Link href={''}>Services</Link>
                    <Link href={''}>Appointments</Link>
                    <Link href={''} className='bg-primary text-white rounded-full px-8 py-2 '>Login</Link>
                </nav>
            </header>
        </>
    );
}