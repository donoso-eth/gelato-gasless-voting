//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

enum VotingStatus {
  VOTING,
  APPROVED,
  CANCELLED
}

struct ProposalState {
  uint256 positive;
  uint256 negative;
  uint256 proposalTimestamp;
  uint256 currentProposalId;
  VotingStatus votingStatus;
  bytes payload;
}

contract GaslessVoting  {

  event ProposalVoted();

  address immutable owner;

  // we only allow one proposal every 24 hours
  uint256 proposalValidity = 1 days;

  //prosalId
  uint256 currentProposalId;

  // Proposal init
  address gaslessProposing;

  // mapping
  mapping(uint256 => ProposalState) public proposalState;

  mapping(uint256 => mapping(address => bool)) alredyVotedById;

  constructor(address _gasslessProposing) {
    owner = msg.sender;
    gaslessProposing = _gasslessProposing;
  }


  //  @notice voting proposal
  //  @dev 
  function votingProposal(bool positive) external {
    address voter = msg.sender;

    _votingProposal(positive, voter);

    emit ProposalVoted();
  }

  // @dev internal function with the logic
  function _votingProposal(bool positive, address voter) public {
    require(
      alredyVotedById[currentProposalId][voter] == false,
      "ALREADY_VOTED"
    );

    if (positive) {
      proposalState[currentProposalId].positive++;
    } else {
      proposalState[currentProposalId].negative++;
    }

    alredyVotedById[currentProposalId][voter] = true;
  }

  //
  function getProposalState() public view returns (ProposalState memory) {
    return proposalState[currentProposalId];
  }

 // 
 function getProsalStateById(uint256 _id) public view returns (ProposalState memory) {
    return proposalState[_id];
  }

//
function getCurrentProposalId() public view returns (uint256) {
    return currentProposalId;
  }

  // @notice User external
  function _createProposal(
    uint256 _proposalId,
    bytes memory payload
  ) external onlyGaslessProposing {
    currentProposalId = _proposalId;

    proposalState[currentProposalId] = ProposalState(
      0,
      0,
      block.timestamp,
      _proposalId,
      VotingStatus.VOTING,
      payload
    );
  }

    function _finishProposal(
  ) external onlyGaslessProposing {
  
    ProposalState memory currentProposal = getProposalState();
    uint256  positive = currentProposal.positive;
    uint256 negative = currentProposal.negative;
    proposalState[currentProposalId].votingStatus = positive > negative ? VotingStatus.APPROVED : VotingStatus.CANCELLED;

  }


  receive() external payable {
    console.log("----- receive:", msg.value);
  }

  function withdraw() external onlyOwner returns (bool) {
    (bool result, ) = payable(msg.sender).call{value: address(this).balance}(
      ""
    );
    return result;
  }

  //Modifiers
  modifier onlyOwner() {
    require(msg.sender == owner, "ONLY_OWNER");
    _;
  }

  modifier onlyGaslessProposing() {
    require(gaslessProposing == msg.sender, "ONLY_PROPOSING");
    _;
  }
}
