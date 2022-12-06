//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import {
    GelatoRelayContext
} from "@gelatonetwork/relay-context/contracts/GelatoRelayContext.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

enum ProposalStatus {
  Ready,
  Voting
}

contract GaslessProposing is GelatoRelayContext{

// we only allow one proposal every 24 hours
uint256 proposalValidity = 1 days;

//prosalId
uint256 proposalId = 0;

// Initial Status
ProposalStatus proposalStatus = ProposalStatus.Ready;


// Proposal init
uint256 proposalTimestamp = 0;

constructor() {}


// @notice User external 
function createProposal(bytes calldata title, bytes calldata description) external onlyGelatoRelay {

  require(proposalStatus == ProposalStatus.Ready, 'OLD_PROPOSAL_STILL_ACTIVE');

  _transferRelayFee();

  proposalId++;
  proposalStatus = ProposalStatus.Voting;
  proposalTimestamp = block.timestamp;

}


}