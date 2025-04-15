import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SansSerif } from "next/font/google";




export default function Login() {
  return (
    <div className="main">
      <div>
        <h1 className="loginText">Login Below</h1>
      </div>
      <div className="loginBox">
        <section id="profile" className="loginBoxText">
          <h2><span id="displayName"></span></h2>
          <span id="avatar"></span>
          <ul>
              <li>User ID: <span id="id"></span></li>
              <li>Email: <span id="email"></span></li>
              <li>Spotify URI: <a id="uri" href="#"></a></li>
              <li>Link: <a id="url" href="#"></a></li>
              <li>Profile Image: <span id="imgUrl"></span></li>
          </ul>
        </section>

      </div>
    </div>
  );
}

