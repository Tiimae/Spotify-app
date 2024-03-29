import Sidebar from "../components/Sidebar";
import SongCenter from "../components/SongCenter";
import {getSession, useSession} from "next-auth/react";
import Player from "../components/Player";
import HomeCenter from "../components/HomeCenter";

export default function Home() {

    return (
        <div className="bg-black h-screen overflow-hidden">
            <main className="flex">
                <Sidebar />
                 <HomeCenter />
            </main>

            <div className="sticky bottom-0">
                <Player />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {session}
    }
}
