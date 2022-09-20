<script>
  import LogoWhite from '../assets/imgs/logoWhite.png'
</script>

<main>
  <div class="absolute top-0 left-0 w-full flex flex-row px-0 md:px-40 items-center h-28">
    <div class="absolute opacity-50 blur-md bg-black top-0 left-0 w-full h-full z-10"></div>

    <div class="flex items-center gap-2 justify-center md:justify-start grow relative z-20 text-white">
      <img src={LogoWhite} class="w-auto h-12" alt="logoWhite">
      <h1 class="text-4xl leading-none">Evmos Punks</h1>
    </div>

    <ul class="hidden md:flex text-4xl items-center relative z-20 text-white gap-8">
      <li>What de?</li>
      <li>Beauties</li>
      <li>Map</li>
      <li>Who We</li>
      <li>
        <button class="punk-btn">Connect Wallet</button>
      </li>
    </ul>
  </div>
</main>
