import {HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon} from "@heroicons/react/outline";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import useSpotify from "../hooks/useSpotify";
import {useRecoilState} from "recoil";
import {playlistIdState} from "../atoms/playlistAtom";
import Link from 'next/link'
import Hamburger from "./Hamburger";

function Sidebar() {
    const spotifyApi = useSpotify();
    const {data: session, status} = useSession()
    const [playlists, setPlaylists] = useState([]);
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items)
            });
        }
    }, [session, spotifyApi])

    const toggleHamburgerOpen = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div>
            <div className="md:hidden" onClick={toggleHamburgerOpen}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            <div>
                <div
                    className={`top-5 absolute bg-black z-10 text-gray-500 overflow-y-scroll overflow-x-hidden p-5 text-xs border-r border-gray-900 h-screen w-screen ${hamburgerOpen ? 'inline' : 'hidden'}`}>
                    <div className="space-y-4 ">
                        <Link href={"/"}>
                            <button className="flex items-center space-x-2 hover:text-white">
                                <HomeIcon className="h-5 w-5"/>
                                <p>Home</p>
                            </button>
                        </Link>
                        <button className="top-2 flex items-center space-x-2 hover:text-white">
                            <SearchIcon className="h-5 w-5"/>
                            <p>Search</p>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-white">
                            <LibraryIcon className="h-5 w-5"/>
                            <p>Your Library</p>
                        </button>
                        <hr className="border-t-[0.1px] border-gray-900"/>

                        <button className="flex items-center space-x-2 hover:text-white">
                            <PlusCircleIcon className="h-5 w-5"/>
                            <p>Create Playlist</p>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-white">
                            <HeartIcon className="h-5 w-5"/>
                            <p>Liked Songs</p>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-white">
                            <RssIcon className="h-5 w-5"/>
                            <p>Your episodes</p>
                        </button>
                        <hr className="border-t-[0.1px] border-gray-900"/>
                        {playlists.map((playlist) =>
                            <p className="cursor-pointer hover:text-white" onClick={() => {
                                toggleHamburgerOpen()
                                setPlaylistId(playlist.id);
                            }}>
                                <Link href="/playlist" key={playlist.id}>
                                    {playlist.name}
                                </Link>
                            </p>
                        )}

                    </div>
                </div>
            </div>

            <div>
                <div
                    className="
            text-gray-500 p-5 text-xs border-r border-gray-900 h-[88vh] overflow-y-scroll scrollbar-hide
            sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex
            ">

                    <div className="space-y-4">
                        <Link href={"/"}>
                            <button className="flex items-center space-x-2 hover:text-white">
                                <HomeIcon className="h-5 w-5"/>
                                <p>Home</p>
                            </button>
                        </Link>
                        <button className="flex items-center space-x-2 hover:text-white">
                            <SearchIcon className="h-5 w-5"/>
                            <p>Search</p>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-white">
                            <LibraryIcon className="h-5 w-5"/>
                            <p>Your Library</p>
                        </button>
                        <hr className="border-t-[0.1px] border-gray-900"/>

                        <button className="flex items-center space-x-2 hover:text-white">
                            <PlusCircleIcon className="h-5 w-5"/>
                            <p>Create Playlist</p>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-white">
                            <HeartIcon className="h-5 w-5"/>
                            <p>Liked Songs</p>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-white">
                            <RssIcon className="h-5 w-5"/>
                            <p>Your episodes</p>
                        </button>
                        <hr className="border-t-[0.1px] border-gray-900"/>
                        {playlists.map((playlist) =>
                            <p className="cursor-pointer hover:text-white" onClick={() => {
                                setPlaylistId(playlist.id);
                            }}>
                                <Link href="/playlist" key={playlist.id}>
                                    {playlist.name}
                                </Link>
                            </p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar