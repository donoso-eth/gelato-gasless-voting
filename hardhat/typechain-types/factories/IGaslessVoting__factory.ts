/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IGaslessVoting,
  IGaslessVotingInterface,
} from "../IGaslessVoting";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "_createProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_finishProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGaslessVoting__factory {
  static readonly abi = _abi;
  static createInterface(): IGaslessVotingInterface {
    return new utils.Interface(_abi) as IGaslessVotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGaslessVoting {
    return new Contract(address, _abi, signerOrProvider) as IGaslessVoting;
  }
}
