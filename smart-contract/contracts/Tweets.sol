// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev print logging messages and contract variables by calling console.log()
 * from your Solidity code.
 */

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract Tweets {
    struct Tweet {
        address user;
        string message;
        uint256 timestamp;
    }

    uint32 private _totalTweets;
    uint256 private _userProfileAddress;

    event NewTweet(address indexed from, uint256 timestamp, string message);

    Tweet[] tweets;

    constructor(string memory _shoutout) {
        console.log(_shoutout);
    }

    function getAllTweets() public view returns (Tweet[] memory) {
        return tweets;
    }

    function postTweet(string memory _message) public {
        tweets.push(Tweet(msg.sender, _message, block.timestamp));
        _totalTweets += 1;

        emit NewTweet(msg.sender, block.timestamp, _message);
    }

    function updateProfilePic(uint256 _profilePicAddress)
        public
        view
        returns (uint256)
    {
        _userProfileAddress = _profilePicAddress;

        return _userProfileAddress;
    }

    function getProfilePic() public view returns (uint256) {
        return _userProfileAddress;
    }

    function getTotalTweets() public view returns (uint256) {
        return _totalTweets;
    }
}

contract ProfileImage is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("ProfileImageToken", "PIT") {
        console.log("My Profile Image as a contract");
    }

    function mintImage(address user, string memory metadataURI)
        public
        returns (uint256)
    {
        // console.logString("My metadata URI is: ", metadataURI);

        // console.log("Current token ID: ", _tokenIds);

        _tokenIds.increment();

        // console.logString("Post increment token ID: ", _tokenIds);

        uint256 newItemId = _tokenIds.current();
        _mint(user, newItemId);
        _setTokenURI(newItemId, metadataURI);

        return newItemId;
    }
}
