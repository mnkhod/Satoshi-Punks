// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract EvmosPunksBadge is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("EvmosPunksBadge", "MomentumBadge") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://moonsharks.mypinata.cloud/ipfs/QmVHHDyT12GEhQY8wtdHR8dDcDqqmLVjrrNq85GEKpyLSN/1";
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? baseURI : "";
    }

    function totalSupply() view external returns(uint){
      return _tokenIdCounter.current();
    }

    function mint(address to) external {
      require(_tokenIdCounter.current() < 1000,"MAX LIMIT");
      require(balanceOf(msg.sender) < 1,"User Already Has NFT");

      uint256 tokenId = _tokenIdCounter.current();
      _tokenIdCounter.increment();
      _safeMint(to, tokenId);
    }
}
