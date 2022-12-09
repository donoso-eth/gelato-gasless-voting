/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GaslessProposing,
  GaslessProposingInterface,
} from "../GaslessProposing";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IOps",
        name: "_ops",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "taskId",
        type: "bytes32",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "ETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "createProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finishVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finishingVotingTask",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gelato",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposalBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposalTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStatus",
    outputs: [
      {
        components: [
          {
            internalType: "enum ProposalStatus",
            name: "proposalStatus",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "taskId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
        ],
        internalType: "struct Proposal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ops",
    outputs: [
      {
        internalType: "contract IOps",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gaslessVoting",
        type: "address",
      },
    ],
    name: "setVotingContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040526107086001556000600255600060065534801561002057600080fd5b5060405161170238038061170283398101604081905261003f91610072565b600880546001600160a01b0319166001600160a01b0392909216919091179055336080526003805460ff191690556100a2565b60006020828403121561008457600080fd5b81516001600160a01b038116811461009b57600080fd5b9392505050565b60805161163e6100c46000396000818161038c01526104b6015261163e6000f3fe6080604052600436106100c05760003560e01c8063573ea57511610074578063e70abe921161004e578063e70abe9214610236578063f0867a8414610256578063f90943031461027657600080fd5b8063573ea575146101b65780638322fff2146101ee578063a069c1ac1461021657600080fd5b80633ccfd60b116100a55780633ccfd60b1461015a5780634e69d5601461017f57806350928198146101a157600080fd5b806304ba7f381461010b5780630ea4cc791461013657600080fd5b36610106576101046040518060400160405280600e81526020017f2d2d2d2d2d20726563656976653a0000000000000000000000000000000000008152503461028b565b005b600080fd5b34801561011757600080fd5b506101206102ed565b60405161012d919061111c565b60405180910390f35b34801561014257600080fd5b5061014c600a5481565b60405190815260200161012d565b34801561016657600080fd5b5061016f61037f565b604051901515815260200161012d565b34801561018b57600080fd5b5061019461043b565b60405161012d919061114c565b3480156101ad57600080fd5b5060065461014c565b3480156101c257600080fd5b506009546101d6906001600160a01b031681565b6040516001600160a01b03909116815260200161012d565b3480156101fa57600080fd5b506101d673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561022257600080fd5b50610104610231366004611199565b6104ab565b34801561024257600080fd5b506008546101d6906001600160a01b031681565b34801561026257600080fd5b506101046102713660046111b6565b61054a565b34801561028257600080fd5b50610104610744565b6102e982826040516024016102a1929190611228565b60408051601f198184030181529190526020810180516001600160e01b03167fb60e72cc000000000000000000000000000000000000000000000000000000001790526108b3565b5050565b6060600780546102fc9061124a565b80601f01602080910402602001604051908101604052809291908181526020018280546103289061124a565b80156103755780601f1061034a57610100808354040283529160200191610375565b820191906000526020600020905b81548152906001019060200180831161035857829003601f168201915b5050505050905090565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103eb5760405162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b60448201526064015b60405180910390fd5b604051600090339047908381818185875af1925050503d806000811461042d576040519150601f19603f3d011682016040523d82523d6000602084013e610432565b606091505b50909250505090565b6040805160608101825260008082526020820181905291810191909152604080516060810190915260038054829060ff16600181111561047d5761047d611136565b600181111561048e5761048e611136565b815260200160018201548152602001600282015481525050905090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105105760405162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b60448201526064016103e2565b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b73abcc9b596420a9e9172fd5938620e265a0f9df9233146105d35760405162461bcd60e51b815260206004820152602260248201527f47656c61746f52656c6179436f6e746578742e6f6e6c7947656c61746f52656c60448201527f617900000000000000000000000000000000000000000000000000000000000060648201526084016103e2565b600060035460ff1660018111156105ec576105ec611136565b146106395760405162461bcd60e51b815260206004820152601960248201527f4f4c445f50524f504f53414c5f5354494c4c5f4143544956450000000000000060448201526064016103e2565b6106416108d4565b600280549060006106518361129a565b90915550506003805460ff1916600117905560025460055542600655600761067a82848361130f565b506000546002546040517f8a52e7320000000000000000000000000000000000000000000000000000000081526001600160a01b0390921691638a52e732916106c991869086906004016113d0565b600060405180830381600087803b1580156106e357600080fd5b505af11580156106f7573d6000803e3d6000fd5b50505050610703610901565b600a81905560048190556040519081527f288a29bca04edb18fcdb2c76d6e3b03b8a137c85c70d1a4cb8aacfa868d605109060200160405180910390a15050565b6008546001600160a01b0316331461079e5760405162461bcd60e51b815260206004820152601160248201527f4f707352656164793a206f6e6c794f707300000000000000000000000000000060448201526064016103e2565b600854604080517fb810c636000000000000000000000000000000000000000000000000000000008152815160009384936001600160a01b039091169263b810c63692600480830193928290030181865afa158015610801573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108259190611406565b915091506108338282610b45565b6003805460ff1916905560008054604080517f0e44e63600000000000000000000000000000000000000000000000000000000815290516001600160a01b0390921692630e44e6369260048084019382900301818387803b15801561089757600080fd5b505af11580156108ab573d6000803e3d6000fd5b505050505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6108ff6108df610bed565b6108e7610bfc565b6108ef610c06565b6001600160a01b03169190610c10565b565b600080600154426109129190611436565b600154604080516fffffffffffffffffffffffffffffffff909316602084015282015260600160408051808303601f19018152600483526024830182526020830180517ff9094303000000000000000000000000000000000000000000000000000000006001600160e01b0390911617905281516002808252606082019093529093506000918160200160208202803683370190505090506001816000815181106109bf576109bf61144f565b602002602001019060048111156109d8576109d8611136565b908160048111156109eb576109eb611136565b81525050600381600181518110610a0457610a0461144f565b60200260200101906004811115610a1d57610a1d611136565b90816004811115610a3057610a30611136565b905250604080516001808252818301909252600091816020015b6060815260200190600190039081610a4a5790505090508381600081518110610a7557610a7561144f565b60209081029190910181019190915260408051808201825284815291820183905260085490517f3323b4670000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690633323b46790610af89030908890869073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90600401611465565b6020604051808303816000875af1158015610b17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3b919061155b565b9550505050505090565b6009546040516000916001600160a01b03169084908381818185875af1925050503d8060008114610b92576040519150601f19603f3d011682016040523d82523d6000602084013e610b97565b606091505b5050905080610be85760405162461bcd60e51b815260206004820152601e60248201527f5f7472616e736665723a20455448207472616e73666572206661696c6564000060448201526064016103e2565b505050565b6000610bf7610c5f565b905090565b6000610bf7610c86565b6000610bf7610cad565b80600003610c1d57505050565b6001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610c5557610be86001600160a01b0384168383610cbc565b610be88282610d27565b60008036610c6e606082611574565b610c79928290611587565b810190610bf79190611199565b60008036610c95602082611574565b610ca0928290611587565b810190610bf791906115b1565b60008036610c6e604082611574565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b03167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610be8908490610e40565b80471015610d775760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016103e2565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610dc4576040519150601f19603f3d011682016040523d82523d6000602084013e610dc9565b606091505b5050905080610be85760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016103e2565b6000610e95826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f259092919063ffffffff16565b805190915015610be85780806020019051810190610eb391906115ca565b610be85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103e2565b6060610f348484600085610f3c565b949350505050565b606082471015610fb45760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016103e2565b600080866001600160a01b03168587604051610fd091906115ec565b60006040518083038185875af1925050503d806000811461100d576040519150601f19603f3d011682016040523d82523d6000602084013e611012565b606091505b50915091506110238783838761102e565b979650505050505050565b6060831561109d578251600003611096576001600160a01b0385163b6110965760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103e2565b5081610f34565b610f3483838151156110b25781518083602001fd5b8060405162461bcd60e51b81526004016103e2919061111c565b60005b838110156110e75781810151838201526020016110cf565b50506000910152565b600081518084526111088160208601602086016110cc565b601f01601f19169290920160200192915050565b60208152600061112f60208301846110f0565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061116357611163611136565b80835250602083015160208301526040830151604083015292915050565b6001600160a01b038116811461119657600080fd5b50565b6000602082840312156111ab57600080fd5b813561112f81611181565b600080602083850312156111c957600080fd5b823567ffffffffffffffff808211156111e157600080fd5b818501915085601f8301126111f557600080fd5b81358181111561120457600080fd5b86602082850101111561121657600080fd5b60209290920196919550909350505050565b60408152600061123b60408301856110f0565b90508260208301529392505050565b600181811c9082168061125e57607f821691505b60208210810361127e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000600182016112ac576112ac611284565b5060010190565b634e487b7160e01b600052604160045260246000fd5b601f821115610be857600081815260208120601f850160051c810160208610156112f05750805b601f850160051c820191505b818110156108ab578281556001016112fc565b67ffffffffffffffff831115611327576113276112b3565b61133b83611335835461124a565b836112c9565b6000601f84116001811461136f57600085156113575750838201355b600019600387901b1c1916600186901b1783556113c9565b600083815260209020601f19861690835b828110156113a05786850135825560209485019460019092019101611380565b50868210156113bd5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b6000806040838503121561141957600080fd5b82519150602083015161142b81611181565b809150509250929050565b8082018082111561144957611449611284565b92915050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03851681526000602060808184015261148860808401876110f0565b8381036040808601919091528651818352805191830182905283019060009060608401905b808310156114dd578351600581106114c7576114c7611136565b82529285019260019290920191908501906114ad565b508885015184820394860194909452835180825281860194860193509150600582901b8101850160005b8381101561153557601f198383030186526115238286516110f0565b95870195948701949150600101611507565b506001600160a01b03891660608901529550611552945050505050565b95945050505050565b60006020828403121561156d57600080fd5b5051919050565b8181038181111561144957611449611284565b6000808585111561159757600080fd5b838611156115a457600080fd5b5050820193919092039150565b6000602082840312156115c357600080fd5b5035919050565b6000602082840312156115dc57600080fd5b8151801515811461112f57600080fd5b600082516115fe8184602087016110cc565b919091019291505056fea2646970667358221220cfdb5f34270608888f7908c26fb964a5ac253d3167f55bf73a79bf4c55148aef64736f6c63430008110033";

type GaslessProposingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GaslessProposingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GaslessProposing__factory extends ContractFactory {
  constructor(...args: GaslessProposingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _ops: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GaslessProposing> {
    return super.deploy(_ops, overrides || {}) as Promise<GaslessProposing>;
  }
  getDeployTransaction(
    _ops: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ops, overrides || {});
  }
  attach(address: string): GaslessProposing {
    return super.attach(address) as GaslessProposing;
  }
  connect(signer: Signer): GaslessProposing__factory {
    return super.connect(signer) as GaslessProposing__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GaslessProposingInterface {
    return new utils.Interface(_abi) as GaslessProposingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GaslessProposing {
    return new Contract(address, _abi, signerOrProvider) as GaslessProposing;
  }
}
