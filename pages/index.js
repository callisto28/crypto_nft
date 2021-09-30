import Layout from "../components/Layout";
import Link from "next/link";
import Image from 'next/image';


export default function Home({ res }) {

  console.log(res);
  return (<Layout page='Accueil Crypto'>

    <div className="flex justify-evenly m-5 p-6">

      <Link href={`/crypto`}>
        <button>
          <Image src="/img/main.jpg" alt="logo" width="400" height="400" className="rounded-3xl object-cover object-center" quality={50} />
        </button>
      </Link>
      <Link href={`/nft`}>
        <button>
          <Image src="/img/nft.png" alt="logo" width="400" height="400" className="rounded-3xl object-cover object-center" quality={50} />
        </button>

      </Link>
    </div>



  </Layout>);

}


