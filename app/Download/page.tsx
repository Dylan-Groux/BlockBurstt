import Image from "next/image";
import Link from 'next/link';

export default function page() {
    return (
        <main className="bg-hero1 bg-cover bg-no-repeat">
              <div className=" p-10 text-white flex items-center justify-center text-3xl font-semibold">
                <Link href="./">
                  <button className="relative group p-2 rounded-lg mr-16"> Accueil
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></span>
                  </button>
                </Link>
                <Link href="./Support">
                <button className="relative group p-2 rounded-lg mr-16"> Support 
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
              <div className="text-center items-center justify-center flex w-full font-Jaro font-semibold text-white mt-16">
                <h1 className="blockburst-text">Téléchargement</h1>
              </div>
              <div className=" text-center items-center justify-center flex w-full font-Jaro font-semibold text-white mt-32">
                <a href="https://www.dropbox.com/scl/fo/06e87nes6y2hitt1gmn2q/APYbxCvvyPnxiwc84vHpdR8?rlkey=kv4k4tibe89zo9grfad6qrcsf&st=h9xexfme&dl=0" className="text-5xl">Clique ici !</a>
              </div>
        </main>
    )
}