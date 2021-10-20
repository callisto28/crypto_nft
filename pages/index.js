import Layout from "../components/Layout";
import Image from "next/image";










export default function Home() {


  return (
    <>
      <Layout page='Accueil Crypto'>

        <div className="flex flex-row justify-evenly m-5 p-6 lg:flex-row sm:flex-col">

          <Image src="/images/main.jpg" alt="crypto" width={500} height={500} />

        </div>


      </Layout>



    </>
  );


}




