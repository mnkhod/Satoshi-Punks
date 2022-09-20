<script>
  import { ethers } from "ethers";
  import NftAbi from '../../abi/contracts/EvmosPunksBadge.sol/EvmosPunksBadge.json'

  import Navbar from '../components/Navbar.svelte'
  import MintCover from '../assets/imgs/mintCover.png'
  import BackgroundImage from '../assets/imgs/bg.png'
  import MintProfile from '../assets/imgs/mintProfile.png'

  import Nft1 from '../assets/imgs/nft1.png'
  import Nft2 from '../assets/imgs/nft2.png'
  import Nft3 from '../assets/imgs/nft3.png'
  import Nft4 from '../assets/imgs/nft4.png'

  let nftContractAddress = "0x128e6614252b70225A65088052A686feF7A4FDD0"

  async function handleMint(){
      try{
        let provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        let signer = provider.getSigner()

        const contract = new ethers.Contract(nftContractAddress, NftAbi, provider);
        await contract.connect(signer).mint(window.ethereum.selectedAddress);
      }catch(e){
        console.log(e)
      }
  }

</script>

<main>
  <Navbar />
  <div class="relative h-[50vh]">
    <img src={MintCover} class="absolute top-0 left-0 z-0 w-full h-full object-right md:object-center object-cover" alt="coverImage" />
  </div>

  <div class="punk-container">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container flex flex-row">
      <div class="w-7/12 flex flex-col gap-4">
        <div class="flex gap-7">
          <div>
            <img src={MintProfile} class="w-48 h-auto" alt="evmosPunkProfilePicture">
          </div>
          <div class="w-full flex flex-col gap-5 justify-center">
            <h1 class="text-7xl">Evmos Punks</h1>
            <ul class="w-4/12 flex text-4xl justify-start relative text-white gap-4">
              <li>
                <svg class="w-auto h-5" viewBox="0 0 512 512"><path fill="currentColor" d="M28 28v456h456V28H28zm378.83 108.04l-24.46 23.45a7.162 7.162 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55l60.35-150.55h84.66v5.16z"></path></svg>
              </li>
              <li>
                <svg class="w-auto h-5" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1280 482q-56 25-121 34q68-40 93-117q-65 38-134 51q-61-66-153-66q-87 0-148.5 61.5T755 594q0 29 5 48q-129-7-242-65T326 422q-29 50-29 106q0 114 91 175q-47-1-100-26v2q0 75 50 133.5T461 885q-29 8-51 8q-13 0-39-4q21 63 74.5 104t121.5 42q-116 90-261 90q-26 0-50-3q148 94 322 94q112 0 210-35.5t168-95t120.5-137t75-162T1176 618q0-18-1-27q63-45 105-109zm256-194v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288z"></path></svg>
              </li>
              <li>
                <svg class="w-auto h-5" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"></path></svg>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-2xl">The Punk Frontier: Evmos Punks are bringing the world of “quality NFTs” to Evmos Blockchain. With over-the-top promises and constant meh deliveries in hopes of WAGMI, we are diving headfirst into the NFT world. We had enough and decided to do it ourselves. Let’s admire our JPEGs together and do cool stuff.</p>
        <h2 class="text-5xl mt-4">Sample Drops</h2>
        <ul class="flex gap-4">
          <li class="p-4 bg-[#5D5068]">
            <img src={Nft1} alt="Nft" class="w-52 h-48">
          </li>
          <li class="p-4 bg-[#5D5068]">
            <img src={Nft2} alt="Nft" class="w-52 h-48">
          </li>
          <li class="p-4 bg-[#5D5068]">
            <img src={Nft3} alt="Nft" class="w-52 h-48">
          </li>
          <li class="p-4 bg-[#5D5068]">
            <img src={Nft4} alt="Nft" class="w-52 h-48">
          </li>
        </ul>
      </div>
      <div class="grow flex justify-center items-center">
        <div class="p-16 w-10/12 flex flex-col gap-2 bg-[#5D5068]">
          <div class="flex items-center justify-between">
            <h1 class="text-4xl">MINT YOUR MOMENTUM BADGE</h1>
          </div>
          <h2 class="text-2xl"><span class="text-gray-400">Price:</span> Free</h2>

          <div class="my-8">
            <div class="flex gap-7 items-center justify-between">
              <h2 class="text-3xl">1 Mint per Wallet</h2>
            </div>

            <div class="my-4 flex bg-[#5D5068] gap-4 w-full">
            </div>
            <button class="punk-btn text-4xl w-full" on:click={() => { handleMint() }}>Mint</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</main>
