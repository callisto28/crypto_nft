import Head from 'next/head';
import Link from 'next/link';
import Nav from './Nav';





export default function Layout({ children, pages }) {
    return (
        <div className="bg-black pt-5 text-center min-h-screen">

            <Head>
                <title>{pages}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="title" content="FOURNY Sébastien - Développeur Web" />
                <meta name="description" content="Application qui permet de visualiser le top10 des cryptomonnaies ainsi que les NFT en cour d'evenement, 1er réalisation sous NextJS"></meta>
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://crypto-nft.vercel.app/" />
                <meta property="og:title" content="FOURNY Sébastien - Développeur Web" />
                <meta property="og:description" content="Application qui permet de visualiser le top10 des cryptomonnaies ainsi que les NFT en cour d'evenement, 1er réalisation sous NextJS" />
                <meta property="og:image" content="https://crypto-nft.vercel.app/_next/image?url=%2Fimg%2Fmain.jpg&w=384&q=50" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://crypto-nft.vercel.app/" />
                <meta property="twitter:title" content="FOURNY Sébastien - Développeur Web" />
                <meta property="twitter:description" content="Application qui permet de visualiser le top10 des cryptomonnaies ainsi que les NFT en cour d'evenement, 1er réalisation sous NextJS" />
                <meta property="twitter:image" content="https://crypto-nft.vercel.app/_next/image?url=%2Fimg%2Fmain.jpg&w=384&q=50"></meta>
            </Head>
            <header className="container-lg">
                <h1 className="text-3xl mb-2 text-white">Crypto-monnaies and NFT </h1>

                <div className="border-t-4">
                </div>
            </header>
            <Nav pages={pages} />
            <main className="grid-cols-1 p-4 h-full">{children}</main>


        </div>
    )
}