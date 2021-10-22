import Link from "next/link";
import MyDropdown from "./Dropdown";
import { useState } from "react";


export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const handkeClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-gradient-to-r from-black to-gray-500 p-1 '>
                <Link href="/" scroll>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-xl text-white font-bold uppercase tracking-wide'>
                            Crypto
                        </span>
                    </a>
                </Link>
                <button className=' inline-flex p-3 hover:bg-black rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handkeClick}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className={`${isOpen ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <Link href="/" scroll>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white '>
                                Accueil
                            </a>
                        </Link>
                        <button className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white '>
                            <MyDropdown />
                        </button>
                        <Link href="../cryptos">
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white '>
                                Top 15 Cryptos
                            </a>

                        </Link>


                        <Link href="../nft">
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white '>
                                View NFT
                            </a>
                        </Link>
                    </div>
                </div>

            </nav>
            <div className="border-t-4">
            </div>
        </>
    );
};


