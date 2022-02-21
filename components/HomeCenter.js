import {signOut, useSession} from "next-auth/react";
import {ChevronDownIcon} from "@heroicons/react/outline";
import {useEffect, useState} from "react";
import useSpotify from "../hooks/useSpotify";

function HomeCenter () {
    const spotifyApi = useSpotify();
    const {data: session, status} = useSession()
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items)
            });
        }
    }, [session, spotifyApi])


    return (
        <div className="flex-grow text-white h-screen overflow-y-scroll scrollbar-hide">
            <header className="absolute top-5 right-8">
                <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2" onClick={() => signOut()}>
                    <img className="rounded-full w-10 h-10" src={session?.user.image} alt="" />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="w-5 h-5" />
                </div>
            </header>


        </div>
    )
}

export default HomeCenter