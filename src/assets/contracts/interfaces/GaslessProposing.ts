/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type ProposalStruct = {
  proposalStatus: BigNumberish;
  taskId: BytesLike;
  proposalId: BigNumberish;
};

export type ProposalStructOutput = [number, string, BigNumber] & {
  proposalStatus: number;
  taskId: string;
  proposalId: BigNumber;
};

export interface GaslessProposingInterface extends utils.Interface {
  functions: {
    "ETH()": FunctionFragment;
    "createProposal(bytes)": FunctionFragment;
    "finishVoting()": FunctionFragment;
    "finishingVotingTask()": FunctionFragment;
    "gelato()": FunctionFragment;
    "getProposalBytes()": FunctionFragment;
    "getProposalTimestamp()": FunctionFragment;
    "getStatus()": FunctionFragment;
    "ops()": FunctionFragment;
    "setVotingContract(address)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createProposal",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "finishVoting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finishingVotingTask",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gelato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getProposalBytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getStatus", values?: undefined): string;
  encodeFunctionData(functionFragment: "ops", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setVotingContract",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finishVoting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finishingVotingTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gelato", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposalBytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ops", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVotingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ProposalCreated(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
}

export type ProposalCreatedEvent = TypedEvent<[string], { taskId: string }>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface GaslessProposing extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GaslessProposingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETH(overrides?: CallOverrides): Promise<[string]>;

    createProposal(
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishVoting(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishingVotingTask(overrides?: CallOverrides): Promise<[string]>;

    gelato(overrides?: CallOverrides): Promise<[string]>;

    getProposalBytes(overrides?: CallOverrides): Promise<[string]>;

    getProposalTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStatus(overrides?: CallOverrides): Promise<[ProposalStructOutput]>;

    ops(overrides?: CallOverrides): Promise<[string]>;

    setVotingContract(
      _gaslessVoting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ETH(overrides?: CallOverrides): Promise<string>;

  createProposal(
    payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishVoting(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishingVotingTask(overrides?: CallOverrides): Promise<string>;

  gelato(overrides?: CallOverrides): Promise<string>;

  getProposalBytes(overrides?: CallOverrides): Promise<string>;

  getProposalTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getStatus(overrides?: CallOverrides): Promise<ProposalStructOutput>;

  ops(overrides?: CallOverrides): Promise<string>;

  setVotingContract(
    _gaslessVoting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETH(overrides?: CallOverrides): Promise<string>;

    createProposal(
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    finishVoting(overrides?: CallOverrides): Promise<void>;

    finishingVotingTask(overrides?: CallOverrides): Promise<string>;

    gelato(overrides?: CallOverrides): Promise<string>;

    getProposalBytes(overrides?: CallOverrides): Promise<string>;

    getProposalTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getStatus(overrides?: CallOverrides): Promise<ProposalStructOutput>;

    ops(overrides?: CallOverrides): Promise<string>;

    setVotingContract(
      _gaslessVoting: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "ProposalCreated(bytes32)"(taskId?: null): ProposalCreatedEventFilter;
    ProposalCreated(taskId?: null): ProposalCreatedEventFilter;
  };

  estimateGas: {
    ETH(overrides?: CallOverrides): Promise<BigNumber>;

    createProposal(
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishVoting(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishingVotingTask(overrides?: CallOverrides): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalBytes(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getStatus(overrides?: CallOverrides): Promise<BigNumber>;

    ops(overrides?: CallOverrides): Promise<BigNumber>;

    setVotingContract(
      _gaslessVoting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createProposal(
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishVoting(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishingVotingTask(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gelato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProposalBytes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProposalTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ops(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setVotingContract(
      _gaslessVoting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
