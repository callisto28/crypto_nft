import Layout from "../components/Layout";
import { getAllExchange } from "../lib/api";
import Footer from "../components/Footer";
import React, { useRef, useState } from "react";
import Image from "next/image";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    Pagination
} from 'swiper';
import { Container } from "postcss";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function SearchExc({ data }) {


    return (
        <>
            <Layout page='Accueil Crypto'>


                <h2 className="text-red-400 pb-10"> Voici le top 20 des plus gros exchanges disponibles  </h2>

                <div className="grid lg:grid-cols-1 gap-12 md:grid-cols-1 md:gap-9 sm:grid-row-2 sm:gap-2">
                    <Swiper slidesPerView={4} spaceBetween={30} centeredSlides={true} pagination={{
                        "clickable": true
                    }} className="mySwiper">

                        {data && data
                            .map((exch, index) => (

                                <SwiperSlide key={index} className="rounded-md ">
                                    <a className="rounded-md" href={exch.url} target="_blank" rel="noreferrer">



                                        {/* <img src={exch.image} alt={exch.image} className="w-20 h-20 mx-auto m-6" /> */}
                                        <div className="swiper-slide size align-text-top" >
                                            <Image src={exch.image} alt={exch.image} width={20} height={20} layout="responsive" className="swiper-slide size align-top" />
                                        </div>
                                        <h2 className="text-center text-l uppercase tracking-wider font-bold text-gray-800">{exch.name}</h2>
                                        <p className="text-center text-gray-700">Année de création : {exch.year_established}</p>
                                        <h3 className="text-center text-black">Classement exchange : {exch.trust_score_rank} </h3>
                                        <p className="text-center text-gray-800"> Pays : <span>{exch.country}</span></p>


                                    </a>
                                </SwiperSlide>
                            ))}


                    </Swiper>
                </div>

            </Layout>
            <Footer />
        </>
    )

};



export async function getStaticProps() {

    const data = await getAllExchange()


    return {
        props: { data },
        revalidate: 1,
    }

}


