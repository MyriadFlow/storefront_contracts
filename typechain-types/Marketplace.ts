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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MarketplaceInterface extends utils.Interface {
  contractName: "Marketplace";
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "changeFeeAndPayoutAddress(uint96,address)": FunctionFragment;
    "createMarketItem(address,uint256,uint256)": FunctionFragment;
    "createMarketSale(address,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "idToMarketItem(uint256)": FunctionFragment;
    "payoutAddress()": FunctionFragment;
    "platformFeeBasisPoint()": FunctionFragment;
    "removeFromSale(uint256)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeFeeAndPayoutAddress",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketItem",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketSale",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "idToMarketItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "payoutAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "platformFeeBasisPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeFeeAndPayoutAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarketItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarketSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "idToMarketItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payoutAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformFeeBasisPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "MarketItemCreated(uint256,address,uint256,string,address,address,uint256,bool)": EventFragment;
    "MarketItemRemoved(uint256)": EventFragment;
    "MarketItemSold(uint256,address,uint256,address,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MarketItemCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketItemRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketItemSold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type MarketItemCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, string, BigNumber, boolean],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metaDataURI: string;
    seller: string;
    owner: string;
    price: BigNumber;
    forSale: boolean;
  }
>;

export type MarketItemCreatedEventFilter =
  TypedEventFilter<MarketItemCreatedEvent>;

export type MarketItemRemovedEvent = TypedEvent<
  [BigNumber],
  { itemId: BigNumber }
>;

export type MarketItemRemovedEventFilter =
  TypedEventFilter<MarketItemRemovedEvent>;

export type MarketItemSoldEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, BigNumber],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    buyer: string;
    price: BigNumber;
  }
>;

export type MarketItemSoldEventFilter = TypedEventFilter<MarketItemSoldEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface Marketplace extends BaseContract {
  contractName: "Marketplace";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    changeFeeAndPayoutAddress(
      newPlatformFee: BigNumberish,
      newPayoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMarketItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMarketSale(
      nftContract: string,
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        BigNumber,
        boolean,
        boolean
      ] & {
        itemId: BigNumber;
        nftContract: string;
        tokenId: BigNumber;
        seller: string;
        owner: string;
        price: BigNumber;
        forSale: boolean;
        deleted: boolean;
      }
    >;

    payoutAddress(overrides?: CallOverrides): Promise<[string]>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeFromSale(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  changeFeeAndPayoutAddress(
    newPlatformFee: BigNumberish,
    newPayoutAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMarketItem(
    nftContract: string,
    tokenId: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMarketSale(
    nftContract: string,
    itemId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  idToMarketItem(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      string,
      string,
      BigNumber,
      boolean,
      boolean
    ] & {
      itemId: BigNumber;
      nftContract: string;
      tokenId: BigNumber;
      seller: string;
      owner: string;
      price: BigNumber;
      forSale: boolean;
      deleted: boolean;
    }
  >;

  payoutAddress(overrides?: CallOverrides): Promise<string>;

  platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

  removeFromSale(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    changeFeeAndPayoutAddress(
      newPlatformFee: BigNumberish,
      newPayoutAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createMarketItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createMarketSale(
      nftContract: string,
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        BigNumber,
        boolean,
        boolean
      ] & {
        itemId: BigNumber;
        nftContract: string;
        tokenId: BigNumber;
        seller: string;
        owner: string;
        price: BigNumber;
        forSale: boolean;
        deleted: boolean;
      }
    >;

    payoutAddress(overrides?: CallOverrides): Promise<string>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

    removeFromSale(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "MarketItemCreated(uint256,address,uint256,string,address,address,uint256,bool)"(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null,
      owner?: null,
      price?: null,
      forSale?: null
    ): MarketItemCreatedEventFilter;
    MarketItemCreated(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null,
      owner?: null,
      price?: null,
      forSale?: null
    ): MarketItemCreatedEventFilter;

    "MarketItemRemoved(uint256)"(itemId?: null): MarketItemRemovedEventFilter;
    MarketItemRemoved(itemId?: null): MarketItemRemovedEventFilter;

    "MarketItemSold(uint256,address,uint256,address,uint256)"(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      buyer?: null,
      price?: null
    ): MarketItemSoldEventFilter;
    MarketItemSold(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      buyer?: null,
      price?: null
    ): MarketItemSoldEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    changeFeeAndPayoutAddress(
      newPlatformFee: BigNumberish,
      newPayoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMarketItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMarketSale(
      nftContract: string,
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payoutAddress(overrides?: CallOverrides): Promise<BigNumber>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

    removeFromSale(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeFeeAndPayoutAddress(
      newPlatformFee: BigNumberish,
      newPayoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMarketItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMarketSale(
      nftContract: string,
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payoutAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    platformFeeBasisPoint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeFromSale(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}