import Image from "next/image";
import Link from 'next/link';

export default function page() {
    return (
        <main className="bg-hero2 bg-cover bg-no-repeat">
            <div className=" p-10 text-white flex items-center justify-center text-3xl font-semibold">
                <Link href="./">
                  <button className="relative group p-2 rounded-lg mr-16"> Accueil
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></span>
                  </button>
                </Link>
                <Link href="./Download">
                <button className="relative group p-2 rounded-lg mr-16"> Download
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></span>
                  </button>
                </Link>
                <Link href="./Docs">
                <button className="relative group p-2 rounded-lg mr-16"> Docs 
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></span>
                  </button>
                </Link>
                <Link href="./Serveur">
                <button className="relative group p-2 rounded-lg mr-16"> Serveur
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></span>
                  </button>
                </Link>
            </div>
            <div className=" mt-32 flex items-center justify-center">
              <Image className="b-logo-dl" src="/logo.png" alt="logo for BlockBurst" width={445} height={189} />
            </div>
            <div className="text-center items-center justify-center flex w-full font-Jaro font-semibold text-white mt-8">
                <h1 className="blockburst-text">Nous soutenir ! </h1>
            </div>
            <div className="flex items-center justify-center text-center text-white p-1 mt-8">
                <p className="">Votre soutien garde notre serveur en vie et<br/> plein de surprises !</p>
            </div>
            <div className="flex justify-center items-center mt-16">
                <div className="text-white recf-1-supp">
                    <div>
                    <a href="https://paypal.me/blockburstmods?country.x=FR&locale.x=fr_FR" className="text-3xl font-semibold">CAGNOTTE</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
