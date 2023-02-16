<script>
  import { Link } from "svelte-routing";
  import CoverImage from '../assets/imgs/cover.png'
  import FeatureHappyIcon from '../assets/imgs/featureHappyIcon.png'
  import FeatureTimeIcon from '../assets/imgs/featureTimeIcon.png'
  import FeatureDiamondIcon from '../assets/imgs/featureDiamondIcon.png'
  import FeatureNft from '../assets/imgs/featureNft.gif'

  import LogoWhite from '../assets/imgs/logoWhite.png'

  import Nft1 from '../assets/imgs/nft1.png'
  import Nft2 from '../assets/imgs/nft2.png'
  import Nft3 from '../assets/imgs/nft3.png'
  import Nft4 from '../assets/imgs/nft4.png'
  import Nft5 from '../assets/imgs/nft5.png'
  import Nft6 from '../assets/imgs/nft6.png'
  import Nft7 from '../assets/imgs/nft7.png'
  import Nft8 from '../assets/imgs/nft8.png'

  import LightingIcon from '../assets/imgs/featureLightingIcon.png'
  import SpeedIcon from '../assets/imgs/featureSpeedIcon.png'
  import SnowIcon from '../assets/imgs/featureSnowIcon.png'
  import CheckIcon from '../assets/imgs/checkIcon.png'

  import BackgroundImage from '../assets/imgs/bg.png'

  import Navbar from '../components/Navbar.svelte'
</script>

<main>
  <Navbar />
  <div class="relative flex items-center justify-center h-[110vh]">
    <img src={CoverImage} class="absolute top-0 left-0 z-0 w-full h-full object-right md:object-center object-cover" alt="coverImage" />
    <div class="z-10 relative flex flex-col items-center">
      <h1 class="text-white text-5xl md:text-7xl">JUST HODL A PUNK.</h1>
      <h1 class="text-white text-4xl md:text-7xl">WHAT MORE DO U NEED?</h1>
    </div>
  </div>

  <div class="punk-container" id="Manifesto">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container">
      <h1 class="text-5xl md:text-6xl">Manifesto</h1>
      <p class="text-4xl"></p>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-5/12">
          <img src={FeatureNft} class="h-full w-full" alt="">
        </div>
        <div class="md:w-6/12 flex items-center">
          <ul class="flex flex-col gap-16">
            <li class="flex flex-col items-center md:items-start md:flex-row gap-4 p-12 md:p-0">
              <img src={FeatureHappyIcon} class="h-14 w-14 md:w-auto" alt="featureHappyIcon">
              <div class="mt-2">
                <h2 class="text-5xl md:text-4xl">Why Punks?</h2>
                <p class="text-2xl">Punks were taken, already. By 5+ projects. We are Satoshi Punks. Not just another derivative.</p>
              </div>
            </li>
            <li class="flex flex-col items-center md:items-start md:flex-row gap-4 p-12 md:p-0">
              <img src={FeatureTimeIcon} class="h-14 w-14 md:w-auto" alt="featureHappyIcon">
              <div class="mt-2">
                <h2 class="text-5xl md:text-4xl">Degens be degens.</h2>
                <p class="text-2xl">Trust us. We’re the unprofessionals, here. Let’s mint random NFTs, overleverage, and get high on web3 wins, “TOGETHER”.</p>
              </div>
            </li>
            <li class="flex flex-col items-center md:items-start md:flex-row gap-4 p-12 md:p-0">
              <img src={FeatureDiamondIcon} class="h-14 w-14 md:w-auto" alt="featureHappyIcon">
              <div class="mt-2">
                <h2 class="text-5xl md:text-4xl">Join the movement.</h2>
                <p class="text-2xl">We need “YOU”, your frens, and their high school crushes to join us.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>

  <div class="punk-container" id="Gallery">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container">
      <div class="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
        <h1 class="text-4xl md:text-6xl">Gallery - crafted with love</h1>
        <a href="/gallery" class="punk-btn text-xl w-3/12 flex justify-center items-center gap-2">
          <span>View All</span>
        </a>
      </div>

      <ul class="flex gap-9 justify-center flex-wrap">
        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/2.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #2</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/30.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #30</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/32.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #32</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/83.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #83</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/36.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #36</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/17.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #17</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/38.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #38</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src="/nfts/18.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #18</h3>
        </li>
      </ul>
    </div>  
  </div>

  <div class="punk-container" id="Gang">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container gap-7">
      <h1 class="text-4xl md:text-8xl">Meet the gang</h1>
      <p class="md:w-12/12 text-lg md:text-4xl">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work. Yeah, we copied it. </p>

      <ul class="grid grid-cols-4 flex-col md:flex-row mt-16 gap-20">
        <li class="flex items-start flex-col">
          <img src="/nfts/45.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Lord Satoshi</h3>
          <p class="text-2xl">Does 99% of the work</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/41.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Saina</h3>
          <p class="text-2xl">Only awake cuz of coffee</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/8.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Satoshi Punk</h3>
          <p class="text-2xl">Never sells his illiquid bag</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/53.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Mnk</h3>
          <p class="text-2xl">Shows up at the end</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/75.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Chteka</h3>
          <p class="text-2xl">Online 24/7</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/47.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Sieve</h3>
          <p class="text-2xl">Thinks he’s in a sim</p>
        </li>
      </ul>
    </div>
  </div>


  <div class="relative w-full z-0 bg-transparent md:px-32 flex items-center md:h-24">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0 object-cover" alt="bg">

    <div class="punk-inner-container w-full flex flex-col md:flex-row items-center">
      <div class="flex items-center gap-2 relative text-white">
        <img src={LogoWhite} class="w-auto h-12" alt="logoWhite">
        <h1 class="text-4xl leading-none">Satoshi Punks</h1>
      </div>

      <ul class="flex text-4xl justify-center grow items-center relative text-white gap-12">
        <li>
          <a href="https://twitter.com/SatoshiPunksNFT">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-7" viewBox="0 0 16 16"><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
          </a>
        </li>
        <li>
          <a href="https://discord.gg/satoshipunks">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-7" viewBox="0 0 24 24"><path fill="currentColor" d="m22 24l-5.25-5l.63 2H4.5A2.5 2.5 0 0 1 2 18.5v-15A2.5 2.5 0 0 1 4.5 1h15A2.5 2.5 0 0 1 22 3.5V24M12 6.8c-2.68 0-4.56 1.15-4.56 1.15c1.03-.92 2.83-1.45 2.83-1.45l-.17-.17c-1.69.03-3.22 1.2-3.22 1.2c-1.72 3.59-1.61 6.69-1.61 6.69c1.4 1.81 3.48 1.68 3.48 1.68l.71-.9c-1.25-.27-2.04-1.38-2.04-1.38S9.3 14.9 12 14.9s4.58-1.28 4.58-1.28s-.79 1.11-2.04 1.38l.71.9s2.08.13 3.48-1.68c0 0 .11-3.1-1.61-6.69c0 0-1.53-1.17-3.22-1.2l-.17.17s1.8.53 2.83 1.45c0 0-1.88-1.15-4.56-1.15m-2.07 3.79c.65 0 1.18.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27m4.17 0c.65 0 1.17.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27Z"></path></svg>
          </a>
        </li>
      </ul>

      <h2 class="text-xl text-gray-300">© 2069 Satoshi Punks. All rights reserved.</h2>
    </div>
  </div>

</main>
