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
            </div>
            <div className=" mt-32 flex items-center justify-center">
              <Image className="b-logo-dl" src="/logo.png" alt="logo for BlockBurst" width={445} height={189} />
            </div>
            <div className="text-center items-center justify-center flex w-full font-Jaro font-semibold text-white mt-8">
                <h1 className="blockburst-text">Nous rejoindres !</h1>
            </div>
            <div className="flex justify-center items-center mt-8">
                <div className="text-white recf-1-supp">
                    <div>
                    <a className="text-3xl font-semibold">block-bust.mine.fun</a>
                    </div>
                </div>
            </div>
            <div className="flex-col items-center justify-center text-center text-white p-1 mt-8">
                <p className="mt-5">Instructions pour Rejoindre l'Aventure :</p>
                <p className="mt-5">1. Télécharge le modpack en cliquant sur Download. 🚀</p>
                <p className="mt-5">2. Lance Minecraft sur la version 1.16.5 de Forge. 🎮</p>
                <p className="mt-5">3. Va dans "Multijoueur" puis clique sur "Ajouter un nouveau serveur". 🌍</p>
                <p className="mt-5">4. Saisis l'adresse IP que tu trouveras juste au-dessus. 💻</p>
                <p className="mt-5">Et voilà ! Prépare-toi pour une aventure incroyable avec notre communauté de joueurs expérimentés. 🎉</p>
            </div>
        </main>
    )
}