import Layout from "../components/Layout";
import Link from "next/link";
import Image from 'next/image';


export default function Home({ res }) {


  return (<Layout page='Accueil Crypto'>

    <div className="flex flex-row justify-evenly m-5 p-6 lg:flex-row sm:flex-col">

      <Link href={`/crypto`}>
        <button>
          <Image src="/img/main.jpg" alt="logo" width="300" height="300" className="rounded-3xl object-cover object-center
          transition duration-800 ease-in-out  transform hover:-translate-y-1 hover:scale-90" quality={50} />
        </button>
      </Link>
      <Link href={`/nft`}>
        <button>
          <Image src="/img/nft.png" alt="logo" width="300" height="300" className="rounded-3xl object-cover object-center
          transition duration-800 ease-in-out  transform hover:-translate-y-1 hover:scale-90" quality={50} />
        </button>

      </Link>
    </div>



  </Layout>);

}


