
// Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Avatar is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  mapping(uint=>address) bodyIndexToOwner; // @TODO: it's not an index, it's an ID ??

  constructor() ERC721("Avatar", "Avatar") {}

  // can be called mintToken()
  // testing...
  function awardToken(address player, string memory tokenURI) public returns (uint256) {
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _safeMint(player, newItemId);
    _setTokenURI(newItemId, tokenURI);

    bodyIndexToOwner[newItemId] = player;

    return newItemId;
  }

  // function balanceOf(address _owner) external view returns (uint256) {};

  // part of spec, already implemented?
  // function ownerOf(uint256 _tokenId) external view returns (address);

  // function tokenByIndex(uint256 _idx) external view returns (uint256) {}

  function tokenOfOwnerByIndex(address _owner, uint256 _idx) external view returns (uint256) {

  }

  /// @notice Returns a list of all Kitty IDs assigned to an address.
  /// @param _owner The owner whose Kitties we are interested in.
  /// @dev This method MUST NEVER be called by smart contract code. First, it's fairly
  ///  expensive (it walks the entire Kitty array looking for cats belonging to owner),
  ///  but it also returns a dynamic array, which is only supported for web3 calls, and
  ///  not contract-to-contract calls.

  // testing...
  function tokensOfOwner(address _owner) external view returns(uint256[] memory ownerTokens) {
    uint256 tokenCount = balanceOf(_owner);

    if (tokenCount == 0) {
      // Return an empty array
      return new uint256[](0);
    } else {
      uint256[] memory result = new uint256[](tokenCount);
      uint256 totalBodies = totalSupply();
      uint256 resultIndex = 0;
      uint256 bodyId;

      for (bodyId = 1; bodyId <= totalBodies; bodyId++) {
        if (bodyIndexToOwner[bodyId] == _owner) {
          result[resultIndex] = bodyId;
          resultIndex++;
        }
      }

      return result;
    }
  }


  // testing
  function totalSupply() public view returns (uint256) {
    return _tokenIds.current();
  }

}

