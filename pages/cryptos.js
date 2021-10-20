import Layout from "../components/Layout";
import Link from "next/link";
import { getTenCrypto } from "../lib/api";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function Home({ res }) {



    return (<Layout page='Accueil Crypto'>
        {/* <ul className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 md:gap-9 sm:grid-cols-1 sm:gap-5"> */}
        <Swiper slidesPerView={4} spaceBetween={30} centeredSlides={true} pagination={{
            "clickable": true
        }} className="mySwiper pt-4">
            {res.map((crypt, index) => (
                <SwiperSlide key={index} >
                    <Link href={`/`}>
                        <a className="rounded-md">
                            <div className="text-center">

                                {/* <img src={crypt.logo_url} alt={crypt.name} className="w-10 h-10 mx-auto m-6" /> */}
                                <Image src={crypt.logo_url} alt={crypt.name} width={50} height={50} layout="responsive" />

                            </div>
                            <h2 className="text-center text-xl uppercase tracking-wider font-bold text-gray-800">{crypt.name}</h2>
                            <p className="text-center text-gray-700">{crypt.symbol}</p>
                            <h3 className="text-center text-black">Price: {parseFloat(crypt.price).toFixed(2).toLocaleString()} EUR</h3>
                            <p className="text-center text-gray-800">Variation 1d: <span>{parseFloat(crypt['1d'].price_change).toFixed(2) + "EUR"}</span>
                                {crypt["1d"].price_change_pct < 0 ?
                                    (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                    (<span className="text-green-600 font-bold">&#x279A; </span>)}
                            </p>
                            <p className="text-center text-gray-800">Variation 30d: <span>{parseFloat(crypt['30d'].price_change).toFixed(2) + "EUR"}</span>
                                {crypt["30d"].price_change_pct < 0 ?
                                    (<span className="text-red-600 font-bold">&#x2798; </span>) :
                                    (<span className="text-green-600 font-bold">&#x279A; </span>)}
                            </p>


                        </a>
                    </Link>
                </SwiperSlide>


            ))}
        </Swiper>
        {/* </ul> */}

    </Layout>);

}

export async function getStaticProps({ params }) {
    const res = await getTenCrypto(params)

    return {
        props: {
            res
        },
        revalidate: 1,
    }

}

