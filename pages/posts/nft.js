import Layout from "../../components/Layout";
import { getNft } from "../../lib/api";



export default function Home({ res1 }) {




    return (<Layout page='Accueil Nft'>
        <div className="text-white text-center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-center py-2">Voici une liste d'événements qui se produisent sur les actifs suivis par OpenSea. Le champ "event_type" indique de quel type d'événement il s'agit (transfert, enchère réussie, etc.).</p>
        </div>
        <ul className="grid lg:grid-cols-3 gap-2 sm:grid-cols-1 py-2">
            {res1.asset_events.map((nft, index1) => (

                <li key={index1} className="relative hover:shadow-md p-5 border border-blue-500 rounded-3xl bg-gradient-to-r from-green-100 to-blue-100 mx-2">

                    <a className="rounded-md h-10" href={nft.asset.collection.external_url} target="_blank" rel="noreferrer">
                        <div className="text-center" >
                            {/*  eslint-disable-next-line @next/next/no-img-element */}
                            <img src={nft.asset.asset_contract.image_url} alt={nft.asset.asset_contract.image_url} className="w-20 h-20 mx-auto m-6" />

                        </div>
                        <h2 className="text-center text-2xl uppercase tracking-wider font-bold text-gray-800"> Name NFT : {nft.asset.asset_contract.name}</h2>
                        <p className="text-center text-xl uppercase tracking-wider font-bold text-gray-800">Symbol : {nft.asset.asset_contract.symbol}</p>
                        <p className="text-center text-red-900 font-bold">Description : {nft.asset.collection.description}</p>


                        <p className="text-center text-gray-900">URL Poject : {(nft.asset.collection.external_url === null) ?
                            (<span className="text-red-600"> Aucune URL  </span>) :
                            (<span className="text-blue-600">{nft.asset.collection.external_url} </span>)}</p>
                        <h3 className="text-center">Event : {nft.event_type}</h3>
                        <p className="text-center text-red-300">Eth Price :

                            {(nft.payment_token === null) ? (<span className="text-red-600 ">Aucune valeur</span>) : (<span className="text-blue-600 ">{parseFloat(nft.payment_token.eth_price).toFixed(2)} ETH </span>)}


                        </p>
                        <p className="text-center text-red-300">USD Price :

                            {(nft.payment_token === null) ? (<span className="text-red-600 ">Aucune valeur</span>) : (<span className="text-green-600 ">{parseFloat(nft.payment_token.usd_price).toFixed(2)} USD </span>)}


                        </p>


                    </a>

                </li>
            ))}



        </ul>



    </Layout>);
}

export async function getStaticProps(params) {

    const res1 = await getNft(params)
    return {
        props: {
            res1
        }
    }

}

