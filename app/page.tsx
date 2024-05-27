import Image from "next/image";
import Link from 'next/link';

export default function page() {
  return (
    <> 
      <main className="bg-hero bg-cover bg-no-repeat">
        <div className=" p-10 text-white flex items-center justify-center text-3xl font-semibold">
          <Link href="./Download">
            <button className="relative group p-2 rounded-lg mr-16"> Download 
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
        <div className="block-burst text-white flex">
          <Image className="b-logo" src="/logo.png" alt="logo for BlockBurst" width={1440} height={2700} />
          <div className=" text-center items-center justify-center flex w-2/3 font-Jaro font-semibold">
            <h1 className="blockburst-text">BlockBurst</h1>
          </div>
        </div>
        <div className="flex items-center justify-center text-center text-white p-1">
         <p className="flex p-join">Rejoignez notre serveur communautaire pour une expérience Minecraft<br/> unique avec des mods fun et défiants, conçus pour les joueurs les plus<br/>  audacieux et expérimentés. Préparez-vous à repousser vos limites et à <br/> créer des souvenirs inoubliables !</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white recf-1">
            <div>
              <p className="text-3xl font-semibold">JOUEUR.SERV.FR</p>
            </div>
          </div>
        </div>
        <div className="news-patch">
          <Image src="/news.png" alt="Patch 1.01" width={953} height={848} />
        </div>
      </main>
    </>
  )
}