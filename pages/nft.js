import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { getNft } from "../lib/api";
import Head from "next/head";





export default function Home({ res1 }) {

    return (
        <>

            <Layout page='Accueil Nft'>
                <Head><title>NFT on Opensea</title></Head>
                <div className="text-white text-center">

                    <p className="text-center py-2">Voici un aperçu d&apos;actifs sur OpenSea. <br /> listant quelques NFT mis recement en vente .</p>
                </div>
                <ul className="grid lg:grid-cols-4 gap-2 sm:grid-cols-1 py-2">
                    {res1 && res1.assets.map((nft, index1) => (

                        <li key={index1} className="relative hover:shadow-md p-5 border border-blue-100 rounded-2xl bg-gradient-to-t from-black to-gray-500 mx-2">

                            <a className="rounded-md h-10" href={nft.collection.external_url} target="_blank" rel="noreferrer">
                                <div className="text-center" >

                                    <img className="w-20 h-20 mx-auto m-6" src={(nft.image_url != "https//:") ? (nft.image_url) : (null)} />
                                    {/* <Image src={(nft.asset.asset_contract.image_url === null) 
                                    ? 
                                    (nft.asset.asset_contract.image_url)
                                     : 
                                    (<Image src="/images/main.jpg" alt="crypto" width={20} height={20} />)} alt="crypto" width={20} height={20} /> */}

                                </div>
                                <h2 className="text-center text-l tracking-wider font-bold text-white"> Name NFT : <span className=" text-2xl uppercase"> {nft.asset_contract.name} </span></h2>
                                <p className="text-center text-sm tracking-wider font-medium text-gray-300">Symbol : <span className="text-l uppercase">{nft.asset_contract.symbol}</span> </p>
                                <p className="text-center overflow-auto h-32 text-red-200 font-small">Description : <span className="text-indigo-200">{nft.collection.description}</span></p>

                                <br />
                                <p className="text-center text-gray-100">URL Poject : {(nft.collection.external_url === null) ?
                                    (<span className="text-red-600"> Aucune URL  </span>) :
                                    (<span className="text-blue-600">{nft.collection.external_url} </span>)}</p>

                                <p className="text-center text-red-300">Dernière vente :{' '}

                                    {(nft.last_sale == null) ? (<span className="text-red-600 ">Non vendu</span>) : (<span className="text-blue-600 ">{parseFloat(nft.last_sale.total_price / 1000000000000000000).toFixed(2)} ETH </span>)}
                                </p>
                                <p className="text-center text-gray-100">Lien direct sur Opensea : <a href={nft.permalink}>Link</a> </p>



                            </a>

                        </li>
                    ))}



                </ul>



            </Layout>
            <Footer />
        </>

    );
}

export async function getStaticProps(params) {

    const res1 = await getNft(params)


    return {
        props: {
            res1: res1
        },
        revalidate: 10,
    }

}

