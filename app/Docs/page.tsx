import Image from "next/image";
import Link from 'next/link';

export default function page() {
  return (
    <> 
      <main className="bg-hero bg-cover bg-no-repeat">
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
          <Link href="./Support">
          <button className="relative group p-2 rounded-lg mr-16"> Support 
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></span>
            </button>
          </Link>
          <Link href="./Serveur">
          <button className="relative group p-2 rounded-lg mr-16"> Serveur
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></span>
            </button>
          </Link>
        </div>
        <div className="bg-white-1 container mt-10 flex items-center justify-center">
          <p>Coming Soon!</p>

{/*             <a href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/5358789" className="mt-2 text-2xl flex items-center justify-center">One piece mods</a>
            <a href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/5358789" className="mt-2 text-2xl flex items-center justify-center">One piece mods</a>
            <a href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat/files/5358789" className="mt-2 text-2xl flex items-center justify-center">One piece mods</a>
 */}

        </div>
      </main>
    </>
  )
}