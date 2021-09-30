import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children, pages }) {
    return (
        <div className="bg-black pt-5 text-center min-h-screen">

            <Head>
                <title>{pages}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className="container-lg">
                <h1 className="text-3xl mb-2 text-white">Crypto and NFT </h1>
                <div className="inline-grid grid-cols-1 gap-x-10 p-4">
                    {/*  eslint-disable-next-line @next/next/link-passhref */}
                    <Link href="/">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">Accueil</button>
                    </Link>
                    {/* <Link href="/crypto">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">Cryptomonnaies</button>
                    </Link>
                    <Link href="/nft">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">Nft</button>
                    </Link> */}
                </div>
                <div>
                    <Image src="/img/main.jpg" alt="logo" width="400" height="35" className="rounded-3xl object-cover object-center" quality={50} />
                </div>
            </header>
            <main className="grid-cols-1 p-4">{children}</main>

            <footer className="p-10">

                <Image src="/img/main.jpg" alt="logo" width="400" height="35" className="rounded-3xl object-cover object-center" quality={50} />
                <ul className=" pt-10 pb-4 flex justify-around">
                    <li className="text-white">A propos</li>
                    <li className="text-white"><a href="https://seb4dev.works/" target="_blank" rel="noreferrer">Seb4Dev</a></li>
                    <li className="text-white">Mentions légales</li>
                </ul>

            </footer>
        </div>
    )
}