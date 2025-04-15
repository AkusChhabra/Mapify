import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SansSerif } from "next/font/google";

const links = [
  {href: "/", label: "Home"},
  {href: "/login", label: "Login"},
  {href: "/search", label: "Search"},
]

export default function Home() {
  return (
    <div>
      <div className="main">
        <div className="navbar">
          <div className="icon">
            <h2 className="logoText">Mapify</h2>
            <Image src="/images/MapifyLogoNoAlt.jpg"
              width={30}
              height={30}
              alt="search"
              className="logo"
            />
          </div>
          <div>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#">
                <Image src="/images/searchIcon.png"
                  width={30}
                  height={30}
                  alt="search"
                  className="searchHome"
                />
              </a></li>
              <li><Link href="/login"><b>Spotify Login</b></Link></li>
            </ul>
          </div>
        </div>
        <div id="earthMoveDown"><div id="earth"></div></div>
        <div className="headerContainer">
          <h1 className="headerText">Discover Top Spotify Songs Worldwide</h1>
        </div>
        <div className="preTableContainer">
          <h1 className="preTableText">Select any country and check out music in the region</h1>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

/*

            <div>
                <Image src="/images/Spotify_Primary_Logo_RGB_Green.png"
                width={300}
                height={300}
                alt="Spotify Image"
                className="logo"/>
            </div>
*/


/*
//"rounded-full bg-radial-[at_25%_80%] from-sky-200 via-blue-400 to-indigo-900 to-90%"
//"rounded-full bg-radial from-black-400 from-20% to-green-700"
//"rounded-full bg-indigo-1000 shadow-lg shadow-indigo-500/100"
*/
