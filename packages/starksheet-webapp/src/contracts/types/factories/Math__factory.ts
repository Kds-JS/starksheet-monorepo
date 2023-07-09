/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Math, MathInterface } from "../Math";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "div",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "arr",
        type: "uint256[]",
      },
    ],
    name: "prod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "sub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "arr",
        type: "uint256[]",
      },
    ],
    name: "sum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102cf806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630194db8e14610051578063072bdcc214610076578063a391c15b14610089578063b67d77c51461009c575b600080fd5b61006461005f366004610160565b6100af565b60405190815260200160405180910390f35b610064610084366004610160565b6100ef565b61006461009736600461021e565b610129565b6100646100aa36600461021e565b61013e565b600080805b83518110156100e8578381815181106100cf576100cf610240565b60200260200101518201915080806001019150506100b4565b5092915050565b60006001815b83518110156100e85783818151811061011057610110610240565b60200260200101518202915080806001019150506100f5565b60006101358284610256565b90505b92915050565b60006101358284610278565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561017357600080fd5b823567ffffffffffffffff8082111561018b57600080fd5b818501915085601f83011261019f57600080fd5b8135818111156101b1576101b161014a565b8060051b604051601f19603f830116810181811085821117156101d6576101d661014a565b6040529182528482019250838101850191888311156101f457600080fd5b938501935b82851015610212578435845293850193928501926101f9565b98975050505050505050565b6000806040838503121561023157600080fd5b50508035926020909101359150565b634e487b7160e01b600052603260045260246000fd5b60008261027357634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561013857634e487b7160e01b600052601160045260246000fdfea2646970667358221220619bb046548e84f58cc18715c39014b75fbe43b049e78aa3f0f31206eed624d164736f6c63430008110033";

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
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Math> {
    return super.deploy(overrides || {}) as Promise<Math>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Math {
    return super.attach(address) as Math;
  }
  override connect(signer: Signer): Math__factory {
    return super.connect(signer) as Math__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MathInterface {
    return new utils.Interface(_abi) as MathInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Math {
    return new Contract(address, _abi, signerOrProvider) as Math;
  }
}