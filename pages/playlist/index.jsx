import Sidebar from "../../components/Sidebar";
import {getSession} from "next-auth/react";
import Player from "../../components/Player";
import SongCenter from "../../components/SongCenter";

function Playlist() {
    return (
        <div className="bg-black h-screen overflow-hidden">
            <main className="flex">
                <Sidebar />
                <SongCenter />
            </main>

            <div className="sticky bottom-0">
                <Player />
            </div>
        </div>
    )
}

export default Playlist

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {session}
    }
}