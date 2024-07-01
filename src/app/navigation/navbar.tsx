import Link from 'next/link';
import NavLinks from './nav-links';
import { Box } from '@mui/material';

export default function Navbar() {
    return (
        <div className="flex w-full flex-row justify-between  " >
            <Link
                className=" flex w-60 h-12 justify-center items-center  p-4 rounded-r-md gap-4 text-white"
                href="/"
            >
                <Box
                    component='img'
                    src='/assets/image/GM.png'
                    height='30px'
                    width='30px'
                    borderRadius={12} />
                <p>Гэр үеийн бичиг</p>
            </Link>


        </div >
    );
}
