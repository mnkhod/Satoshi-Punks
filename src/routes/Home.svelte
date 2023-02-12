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
      <h1 class="text-white text-5xl md:text-7xl">JUST MINT A PUNK.</h1>
      <h1 class="text-white text-4xl md:text-7xl">WHAT MORE DO U NEED?</h1>

      
    </div>
  </div>

  <div class="punk-container" id="WhatDe">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container">
      <h1 class="text-5xl md:text-6xl">TLDR - some info about us</h1>
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

  <div class="punk-container" id="Beauties">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container">
      <div class="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
        <h1 class="text-4xl md:text-6xl">Beauties - crafted with love</h1>
        <button class="punk-btn text-xl flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15C15 15 13.5 13 11 13C8.5 13 7 15 7 15M16 8.24C15.605 8.725 15.065 9 14.5 9C13.935 9 13.41 8.725 13 8.24M9 8.24C8.605 8.725 8.065 9 7.5 9C6.935 9 6.41 8.725 6 8.24M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>NO YOU CAN’T SEE EM ALL</span>
        </button>
      </div>

      <ul class="flex gap-9 justify-center flex-wrap">
        <li class="p-4 bg-secondary w-auto">
          <img src={Nft1} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #101</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src={Nft2} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #102</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src={Nft3} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #103</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src={Nft4} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #104</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src={Nft5} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #105</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src={Nft6} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #106</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src={Nft7} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #107</h3>
        </li>

        <li class="p-4 bg-secondary w-auto">
          <img src={Nft8} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #108</h3>
        </li>
      </ul>
    </div>  
  </div>

  <div class="punk-container" id="Map">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container">
      <h1 class="text-3xl md:text-6xl">Punkmap: Simple, yet profound. So philosophical. </h1>
     

      <ul class="pt-12 flex flex-col md:flex-row justify-around gap-32">
        <li class="md:w-4/12 bg-secondary flex flex-col gap-5 items-center py-6 px-9">
          <img src={LightingIcon} class="h-13 w-auto" alt="featureHappyIcon">
          <h1 class="text-3xl md:text-5xl text-center">Phase 1. The Great Beginning</h1>
          <ul class="flex w-full py-8 justify-start flex-col gap-4">
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">Launch Punks</p>
            </li>
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">We do DAO, I guess</p>
            </li>
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">Magic BTC Money </p>
            </li>
          </ul>
          <button class="punk-btn w-full">Are we WAGMI yet?</button>
        </li>

        <li class="md:w-4/12 bg-secondary flex flex-col gap-5 items-center py-6 px-9">
          <img src={SpeedIcon} class="h-13 w-auto" alt="featureHappyIcon">
          <h1 class="text-3xl md:text-5xl text-center">Phase 2. We need some time to code</h1>
          <ul class="flex w-full py-8 justify-start flex-col gap-4">
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">1 word, "Robots".</p>
            </li>
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">Big fat illiquid bag</p>
            </li>
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">What else do you want?</p>
            </li>
            
          </ul>
          <button class="punk-btn w-full">Are we WAGMI yet?</button>
        </li>

        <li class="md:w-4/12 bg-secondary flex flex-col gap-5 items-center py-6 px-9">
          <img src={SnowIcon} class="h-13 w-auto" alt="featureHappyIcon">
          <h1 class="text-3xl md:text-5xl text-center">Phase 3. Must think big. Expansion.</h1>
          <ul class="flex w-full py-8 justify-start flex-col gap-4">
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">We give you more JPEGs</p>
            </li>
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">You like cool jackets?</p>
            </li>
            <li class="flex items-center gap-2">
              <img src={CheckIcon} class="h-5 w-auto" alt="checkIcon">
              <p class="text-md md:text-2xl">I’m hungry</p>
            </li>
          </ul>
          <button class="punk-btn w-full">Are we WAGMI yet?</button>
        </li>

      </ul>
    </div>
  </div>

  <div class="punk-container" id="WhoWe">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container gap-7">
      <h1 class="text-4xl md:text-6xl">Meet the gang</h1>
      <p class="md:w-7/12 text-lg md:text-3xl">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work. Yeah, we copied it. </p>

      <ul class="flex flex-col md:flex-row mt-16 gap-20">
        <li class="flex items-start flex-col">
          <img src={Nft8} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Lord Satoshi</h3>
          <p class="text-2xl">Does 99% of the work</p>
        </li>
        <li class="flex items-start flex-col">
          <img src={Nft5} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Saina</h3>
          <p class="text-2xl">Has no idea what’s going on</p>
        </li>
        <li class="flex items-start flex-col">
          <img src={Nft2} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Satoshi Punk</h3>
          <p class="text-2xl">Says he’ll help but doesn’t</p>
        </li>
        <li class="flex items-start flex-col">
          <img src={Nft7} class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Chteka</h3>
          <p class="text-2xl">Shows up at the end</p>
        </li>
      </ul>
    </div>
  </div>

  <div class="punk-container" id="faq">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container flex-col md:flex-row text-center">
      <div class="md:w-6/12 text-center flex flex-col justify-start md:text-left">
     
        <h1 class="text-7xl md:text-8xl mb-4">FAQS</h1>
        <p class="text-2xl"></p>
      </div>
      <div class="flex flex-col items-start md:w-6/12">
        <div tabindex="0" class="collapse w-full collapse-plus">
          <input type="checkbox" /> 
          <div class="collapse-title text-lg md:text-2xl text-left">When Mint?</div>
          <div class="collapse-content"> 
            <p class="text-left text-3xl">In february. When it’s ready.</p>
          </div>
        </div>

        <div tabindex="0" class="collapse collapse-plus w-full">
          <input type="checkbox" /> 
          <div class="collapse-title text-lg md:text-2xl text-left">How much?</div>
          <div class="collapse-content"> 
            <p class="text-left text-3xl">0.02 BTC. Might change. Price is volatile.</p>
          </div>
        </div>

        <div tabindex="0" class="collapse collapse-plus w-full">
          <input type="checkbox" /> 
          <div class="collapse-title text-lg md:text-2xl text-left">How many?</div>
          <div class="collapse-content"> 
            <p class="text-left text-3xl">111</p>
          </div>
        </div>

        <div tabindex="0" class="collapse collapse-plus w-full">
          <input type="checkbox" /> 
          <div class="collapse-title text-lg md:text-2xl text-left">WL me Senpai?</div>
          <div class="collapse-content"> 
            <p class="text-left text-3xl">Check Discord, Twitter, Be ready.</p>
          </div>
        </div>

        <div tabindex="0" class="collapse collapse-plus w-full">
          <input type="checkbox" /> 
          <div class="collapse-title text-lg md:text-2xl text-left">Anything else?</div>
          <div class="collapse-content"> 
            <p class="text-left text-3xl">DM us on Twitter.</p>
          </div>
        </div>

      </div>
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
          <svg class="w-auto h-7" viewBox="0 0 512 512"><path fill="currentColor" d="M28 28v456h456V28H28zm378.83 108.04l-24.46 23.45a7.162 7.162 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55l60.35-150.55h84.66v5.16z"></path></svg>
        </li>
        <li>
          <svg class="w-auto h-7" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1280 482q-56 25-121 34q68-40 93-117q-65 38-134 51q-61-66-153-66q-87 0-148.5 61.5T755 594q0 29 5 48q-129-7-242-65T326 422q-29 50-29 106q0 114 91 175q-47-1-100-26v2q0 75 50 133.5T461 885q-29 8-51 8q-13 0-39-4q21 63 74.5 104t121.5 42q-116 90-261 90q-26 0-50-3q148 94 322 94q112 0 210-35.5t168-95t120.5-137t75-162T1176 618q0-18-1-27q63-45 105-109zm256-194v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288z"></path></svg>
        </li>
        <li>
          <svg class="w-auto h-7" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"></path></svg>
        </li>
      </ul>

      <h2 class="text-xl text-gray-300">© 2069 Satoshi Punks. All rights reserved.</h2>
    </div>
  </div>

</main>
