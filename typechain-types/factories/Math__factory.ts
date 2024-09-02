/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Math, MathInterface } from "../Math";

const _abi = [
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
];

const _bytecode =
  "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea26469706673582212200e5c5f8e782acf3a91d0c2e50dd08225fc7d98efe12ce9b6efc9da9c3b81380564736f6c63430008180033";

type MathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Math__factory extends ContractFactory {
  constructor(...args: MathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Math";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Math> {
    return super.deploy(overrides || {}) as Promise<Math>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Math {
    return super.attach(address) as Math;
  }
  connect(signer: Signer): Math__factory {
    return super.connect(signer) as Math__factory;
  }
  static readonly contractName: "Math";
  public readonly contractName: "Math";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MathInterface {
    return new utils.Interface(_abi) as MathInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Math {
    return new Contract(address, _abi, signerOrProvider) as Math;
  }
}