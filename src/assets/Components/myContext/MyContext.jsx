import React, { createContext, useState } from 'react'
export let exportables = createContext()
import abigail from '../../../assets/images/abigail.jpg'
import argylle from '../../../assets/images/argylle.jpg'
import argylleRight from "../../../assets/images/argylleRight.jpg"
import despicable from "../../../assets/images/despicable.jpg"
import fallGuyTrailer from "../../../assets/images/fallGuyTrailer.jpg"
import kungfuPanda4 from "../../../assets/images/kungfuPanda4.jpg"
import kungfuPanda4Trailer from "../../../assets/images/kungfuPanda4Trailer.jpg"
import migrationRight from "../../../assets/images/migrationRight.jpg"
import nightSwimRight from "../../../assets/images/nightSwimRight.jpg"
import nightSwimTrailer from "../../../assets/images/nightSwimTrailer.jpg"
import oppenheimerImg from "../../../assets/images/oppenheimerImg.jpg"
import abigail2 from "../../../assets/images/abgail2.jpg"
import oppenheimerRight from "../../../assets/images/oppenheimerRight.jpg"
import ted from "../../../assets/images/ted.jpg"
import Trolls from "../../../assets/images/Trolls.jpg"
import Apples from "../../../assets/images/Apples.jpg"

import theFallGuy from "../../../assets/images/theFallGuy.jpg"
import twisters from "../../../assets/images/twisters.jpg"
import voice from "../../../assets/images/voice.jpg"
import wicked2 from "../../../assets/images/wicked (2).jpg"
import wicked from "../../../assets/images/wicked.jpg"
import wickedRight from "../../../assets/images/wickedRight.jpg"
import monkeyManRight from "../../../assets/images/monkeyMan'.jpg"
import theFallGuyRight from "../../../assets/images/theFallGuy.jpg"
import rotatingEarth from "../../images/Rotating_earth_animated_transparent.gif"
import universal from "../../images/deqt17f-e7a573d5-3430-44c4-8f3b-62c1064f0d7d.png"
import mainImg from "../../../../src/assets/images/mainImg.jpg"
import fb from "../../images/facebookMain.jpg"
import twitter1 from "../../images/twitterMain.jpg"
import insta from "../../images/instagramMain.jpg"
import youtube from "../../images/youtubeMain.jpg"
import snapchat from "../../images/snapchatMain.jpg"
import whatsp from "../../images/whatsp.jpg"
import yt from "../../images/youtubeLogo.jpg"
import universalBlack from "../../images/universalpictureslogo_817071.jpg"
const MyContext = ({ children }) => {
  let [images, setImages] = useState(
    {
      abigail,abigail2, argylle, Trolls,Apples,argylleRight, despicable, fallGuyTrailer, theFallGuyRight, kungfuPanda4, kungfuPanda4Trailer, migrationRight, monkeyManRight, nightSwimRight, nightSwimTrailer, oppenheimerImg, oppenheimerRight, ted, theFallGuy, twisters, voice, wicked2, wicked, wickedRight, rotatingEarth, universal, mainImg, twitter1, fb, insta, youtube, snapchat, whatsp, yt, universalBlack
    }
  )
  return (
    <exportables.Provider value={images}>{children}</exportables.Provider>
  )
}

export default MyContext