<script>
  import data from "../constants/nfts.json";
  export let nftId,nftNumber,nftLink;
</script>

<main>
  <a href={nftLink}>
    <li class="">
      <div class="p-4 flex flex-col gap-3 bg-[#5D5068]">
        <img src={"/nfts/" + nftId + ".png"} alt="Nft" class="w-72 h-auto">
        <div class="flex flex-col gap-1">
          <h5 class="text-4xl">Satoshi Punk #{nftId}</h5>
          <h2 class="mt-0 pt-0 text-lg">No {nftNumber}</h2>
        </div>
      </div>
    </li>
  </a>
</main>
