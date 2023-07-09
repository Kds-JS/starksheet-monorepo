/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bytes, BytesInterface } from "../Bytes";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_preBytes",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_postBytes",
        type: "bytes",
      },
    ],
    name: "equal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
    ],
    name: "slice",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toAddress",
    outputs: [
      {
        internalType: "address",
        name: "tmp",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toByes7",
    outputs: [
      {
        internalType: "bytes7",
        name: "tmp",
        type: "bytes7",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toBytes1",
    outputs: [
      {
        internalType: "bytes1",
        name: "tmp",
        type: "bytes1",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toBytes12",
    outputs: [
      {
        internalType: "bytes12",
        name: "tmp",
        type: "bytes12",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toBytes16",
    outputs: [
      {
        internalType: "bytes12",
        name: "tmp",
        type: "bytes12",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "tmp",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toBytes5",
    outputs: [
      {
        internalType: "bytes5",
        name: "tmp",
        type: "bytes5",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toBytes6",
    outputs: [
      {
        internalType: "bytes6",
        name: "tmp",
        type: "bytes6",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toBytes8",
    outputs: [
      {
        internalType: "uint64",
        name: "tmp",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint128",
    outputs: [
      {
        internalType: "uint128",
        name: "tmp",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
    ],
    name: "toUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "tmp",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint16",
    outputs: [
      {
        internalType: "uint16",
        name: "tmp",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint24",
    outputs: [
      {
        internalType: "uint24",
        name: "tmp",
        type: "uint24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint256",
    outputs: [
      {
        internalType: "uint256",
        name: "tmp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint32",
    outputs: [
      {
        internalType: "uint32",
        name: "tmp",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint40",
    outputs: [
      {
        internalType: "uint40",
        name: "tmp",
        type: "uint40",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint48",
    outputs: [
      {
        internalType: "uint48",
        name: "tmp",
        type: "uint48",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint56",
    outputs: [
      {
        internalType: "uint56",
        name: "tmp",
        type: "uint56",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint64",
    outputs: [
      {
        internalType: "uint64",
        name: "tmp",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint8",
    outputs: [
      {
        internalType: "uint8",
        name: "tmp",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "toUint96",
    outputs: [
      {
        internalType: "uint96",
        name: "tmp",
        type: "uint96",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6110d661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101625760003560e01c8063a5eb31ee116100cd578063d1ffb56111610086578063d1ffb561146103fb578063d442584f1461042b578063e004139614610454578063f1142fb314610474578063f647f8fb14610487578063f83b670f146104b257600080fd5b8063a5eb31ee14610344578063a8d8f00f1461036b578063b5cdf92414610396578063b63711df146103a9578063be8b3430146103bc578063c29616bd146103cf57600080fd5b80635ef849301161011f5780635ef8493014610241578063913c97b41461026b57806397e6175c1461029f57806399dd9bd7146102cb5780639ae4c3d1146102ec5780639cee499e1461031857600080fd5b8063042aa0841461016757806305d3bb74146101985780631a7431ef146101c0578063235266d2146101e357806348137709146101f65780634d66a2ae1461021b575b600080fd5b61017a610175366004610ec0565b6104de565b6040516001600160d01b031990911681526020015b60405180910390f35b6101ab6101a6366004610ec0565b610540565b60405163ffffffff909116815260200161018f565b6101d36101ce366004610f05565b61059d565b604051901515815260200161018f565b6101d36101f1366004610f4c565b610652565b610209610204366004610ec0565b6106b5565b60405160ff909116815260200161018f565b61022e610229366004610fa6565b610711565b60405161ffff909116815260200161018f565b61025461024f366004610ec0565b61071e565b60405165ffffffffffff909116815260200161018f565b61027e610279366004610ec0565b610772565b6040516fffffffffffffffffffffffffffffffff909116815260200161018f565b6102b26102ad366004610ec0565b6107d0565b6040516001600160a01b0319909116815260200161018f565b6102de6102d9366004610ec0565b61082e565b60405190815260200161018f565b6102ff6102fa366004610ec0565b61088c565b60405167ffffffffffffffff909116815260200161018f565b61032b610326366004610ec0565b6108e9565b6040516001600160d81b0319909116815260200161018f565b610357610352366004610ec0565b610946565b60405162ffffff909116815260200161018f565b61037e610379366004610ec0565b6109a3565b60405166ffffffffffffff909116815260200161018f565b6102de6103a4366004610ec0565b610a00565b6102ff6103b7366004610ec0565b610a55565b61022e6103ca366004610ec0565b610aa9565b6103e26103dd366004610ec0565b610b06565b6040516001600160c81b0319909116815260200161018f565b61040e610409366004610ec0565b610b5a565b6040516bffffffffffffffffffffffff909116815260200161018f565b61043e610439366004610ec0565b610bae565b60405164ffffffffff909116815260200161018f565b610467610462366004610fe3565b610c02565b60405161018f9190611031565b6102b2610482366004610ec0565b610d0f565b61049a610495366004610ec0565b610d64565b6040516001600160a01b03909116815260200161018f565b6104c56104c0366004610ec0565b610dc9565b6040516001600160f81b0319909116815260200161018f565b60006104eb82600661107f565b835110156105375760405162461bcd60e51b8152602060048201526014602482015273746f4279746573365f6f75744f66426f756e647360601b60448201526064015b60405180910390fd5b50016006015190565b600061054d82600461107f565b835110156105945760405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b604482015260640161052e565b50016004015190565b600080600190508354600260018083161561010002038216048451808214600181146105cc5760009450610644565b821561064457602083106001811461062957600189600052602060002060208a018581015b600284828410010361062057815183541461060f5760009950600093505b6001830192506020820191506105f1565b50505050610642565b6101008086040294506020880151851461064257600095505b505b509293505050505b92915050565b81518151600091600191811480831461066e57600092506106ab565b600160208701838101602088015b60028483851001036106a657805183511461069a5760009650600093505b6020928301920161067c565b505050505b5090949350505050565b60006106c282600161107f565b835110156107085760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b604482015260640161052e565b50016001015190565b600061064c826000610aa9565b600061072b82600661107f565b835110156105375760405162461bcd60e51b8152602060048201526014602482015273746f55696e7434385f6f75744f66426f756e647360601b604482015260640161052e565b600061077f82601061107f565b835110156107c75760405162461bcd60e51b8152602060048201526015602482015274746f55696e743132385f6f75744f66426f756e647360581b604482015260640161052e565b50016010015190565b60006107dd82600c61107f565b835110156108255760405162461bcd60e51b8152602060048201526015602482015274746f427974657331325f6f75744f66426f756e647360581b604482015260640161052e565b5001600c015190565b600061083b82602061107f565b835110156108835760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b604482015260640161052e565b50016020015190565b600061089982600861107f565b835110156108e05760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b604482015260640161052e565b50016008015190565b60006108f682600561107f565b8351101561093d5760405162461bcd60e51b8152602060048201526014602482015273746f4279746573355f6f75744f66426f756e647360601b604482015260640161052e565b50016005015190565b600061095382600361107f565b8351101561099a5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7432345f6f75744f66426f756e647360601b604482015260640161052e565b50016003015190565b60006109b082600761107f565b835110156109f75760405162461bcd60e51b8152602060048201526014602482015273746f55696e7435365f6f75744f66426f756e647360601b604482015260640161052e565b50016007015190565b6000610a0d82602061107f565b835110156108835760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b604482015260640161052e565b6000610a6282600861107f565b835110156108e05760405162461bcd60e51b8152602060048201526014602482015273746f4279746573385f6f75744f66426f756e647360601b604482015260640161052e565b6000610ab682600261107f565b83511015610afd5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b604482015260640161052e565b50016002015190565b6000610b1382600761107f565b835110156109f75760405162461bcd60e51b8152602060048201526014602482015273746f4279746573375f6f75744f66426f756e647360601b604482015260640161052e565b6000610b6782600c61107f565b835110156108255760405162461bcd60e51b8152602060048201526014602482015273746f55696e7439365f6f75744f66426f756e647360601b604482015260640161052e565b6000610bbb82600561107f565b8351101561093d5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7434305f6f75744f66426f756e647360601b604482015260640161052e565b606081610c1081601f61107f565b1015610c4f5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015260640161052e565b610c59828461107f565b84511015610c9d5760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b604482015260640161052e565b606082158015610cbc5760405191506000825260208201604052610d06565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610cf5578051835260209283019201610cdd565b5050858452601f01601f1916604052505b50949350505050565b6000610d1c82601061107f565b835110156107c75760405162461bcd60e51b8152602060048201526015602482015274746f427974657331365f6f75744f66426f756e647360581b604482015260640161052e565b6000610d7182601461107f565b83511015610db95760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b604482015260640161052e565b500160200151600160601b900490565b6000610dd682600161107f565b835110156107085760405162461bcd60e51b8152602060048201526014602482015273746f4279746573315f6f75744f66426f756e647360601b604482015260640161052e565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610e4457600080fd5b813567ffffffffffffffff80821115610e5f57610e5f610e1d565b604051601f8301601f19908116603f01168101908282118183101715610e8757610e87610e1d565b81604052838152866020858801011115610ea057600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610ed357600080fd5b823567ffffffffffffffff811115610eea57600080fd5b610ef685828601610e33565b95602094909401359450505050565b60008060408385031215610f1857600080fd5b82359150602083013567ffffffffffffffff811115610f3657600080fd5b610f4285828601610e33565b9150509250929050565b60008060408385031215610f5f57600080fd5b823567ffffffffffffffff80821115610f7757600080fd5b610f8386838701610e33565b93506020850135915080821115610f9957600080fd5b50610f4285828601610e33565b600060208284031215610fb857600080fd5b813567ffffffffffffffff811115610fcf57600080fd5b610fdb84828501610e33565b949350505050565b600080600060608486031215610ff857600080fd5b833567ffffffffffffffff81111561100f57600080fd5b61101b86828701610e33565b9660208601359650604090950135949350505050565b600060208083528351808285015260005b8181101561105e57858101830151858201604001528201611042565b506000604082860101526040601f19601f8301168501019250505092915050565b8082018082111561064c57634e487b7160e01b600052601160045260246000fdfea264697066735822122057a99911adc171f50edc4a6ac1d2e82893d3d1f8a650ab5da9da1abd3ceafbe964736f6c63430008110033";

type BytesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BytesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bytes__factory extends ContractFactory {
  constructor(...args: BytesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Bytes> {
    return super.deploy(overrides || {}) as Promise<Bytes>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bytes {
    return super.attach(address) as Bytes;
  }
  override connect(signer: Signer): Bytes__factory {
    return super.connect(signer) as Bytes__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BytesInterface {
    return new utils.Interface(_abi) as BytesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bytes {
    return new Contract(address, _abi, signerOrProvider) as Bytes;
  }
}