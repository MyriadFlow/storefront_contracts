/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FlowGenEdition,
  FlowGenEditionInterface,
} from "../FlowGenEdition";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "marketplaceAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "accessControlAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_preSalePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_countDownTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_royaltyBPS",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "AssetCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "ownerOrApproved",
        type: "address",
      },
    ],
    name: "AssetDestroyed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isRentable",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "renter",
        type: "address",
      },
    ],
    name: "RentalInfo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "UpdateUser",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "amountRequired",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burnNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "countDownTime",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketplace",
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
    inputs: [],
    name: "maxSupply",
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
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "preSalePrice",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeInHours",
        type: "uint256",
      },
    ],
    name: "rent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rentables",
    outputs: [
      {
        internalType: "bool",
        name: "isRentable",
        type: "bool",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "hourlyRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "salePrice",
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
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isRentable",
        type: "bool",
      },
    ],
    name: "setRentInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerHour",
        type: "uint256",
      },
    ],
    name: "setprice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "userExpires",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "userOf",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620027c3380380620027c38339810160408190526200003491620002ab565b88886004620000448382620003fa565b506005620000538282620003fa565b5060016002555050600e80546001600160a01b038089166001600160a01b031992831617909255600b8054928a1692909116919091179055600c8590556080849052620000a18342620004c6565b60a05260c0829052620000b53382620000c4565b505050505050505050620004ee565b6127106001600160601b0382161115620001385760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646044820152692073616c65507269636560b01b60648201526084015b60405180910390fd5b6001600160a01b038216620001905760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c69642072656365697665720000000000000060448201526064016200012f565b604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600055565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001f157600080fd5b81516001600160401b03808211156200020e576200020e620001c9565b604051601f8301601f19908116603f01168101908282118183101715620002395762000239620001c9565b816040528381526020925086838588010111156200025657600080fd5b600091505b838210156200027a57858201830151818301840152908201906200025b565b600093810190920192909252949350505050565b80516001600160a01b0381168114620002a657600080fd5b919050565b60008060008060008060008060006101208a8c031215620002cb57600080fd5b89516001600160401b0380821115620002e357600080fd5b620002f18d838e01620001df565b9a5060208c01519150808211156200030857600080fd5b50620003178c828d01620001df565b9850506200032860408b016200028e565b96506200033860608b016200028e565b955060808a0151945060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b600181811c908216806200038057607f821691505b602082108103620003a157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003f557600081815260208120601f850160051c81016020861015620003d05750805b601f850160051c820191505b81811015620003f157828155600101620003dc565b5050505b505050565b81516001600160401b03811115620004165762000416620001c9565b6200042e816200042784546200036b565b84620003a7565b602080601f8311600181146200046657600084156200044d5750858301515b600019600386901b1c1916600185901b178555620003f1565b600085815260208120601f198616915b82811015620004975788860151825594840194600190910190840162000476565b5085821015620004b65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620004e857634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a05160c051612290620005336000396000818161060d015261113f01526000818161033c01526111df015260008181610661015261120901526122906000f3fe6080604052600436106101e35760003560e01c80638431700811610102578063ba91caae11610095578063e030565e11610064578063e030565e1461062f578063e757c17d1461064f578063e985e9c514610683578063f51f96dd146106a357600080fd5b8063ba91caae1461059b578063c2f1f14a146105bb578063c87b56dd146105db578063d5abeb01146105fb57600080fd5b8063a0712d68116100d1578063a0712d6814610520578063a22cb46514610548578063abc8c7af14610568578063b88d4fde1461058857600080fd5b806384317008146104195780638fc88c481461043957806395d89b41146104775780639874cd971461048c57600080fd5b80633692d1181161017a5780636352211e116101495780636352211e146103a657806370a08231146103c6578063761c0ebb146103e6578063783a112b1461040657600080fd5b80633692d1181461032a5780633ccfd60b1461035e57806342842e0e1461037357806342966c681461038657600080fd5b806318160ddd116101b657806318160ddd1461028c57806323b872dd146102b85780632890e0d7146102cb5780632a55205a146102eb57600080fd5b806301ffc9a7146101e857806306fdde031461021d578063081812fc1461023f578063095ea7b314610277575b600080fd5b3480156101f457600080fd5b50610208610203366004611d2e565b6106b9565b60405190151581526020015b60405180910390f35b34801561022957600080fd5b5061023261070a565b6040516102149190611d9b565b34801561024b57600080fd5b5061025f61025a366004611dae565b61079c565b6040516001600160a01b039091168152602001610214565b61028a610285366004611dde565b6107d7565b005b34801561029857600080fd5b506102aa600354600254036000190190565b604051908152602001610214565b61028a6102c6366004611e08565b6107e7565b3480156102d757600080fd5b5061028a6102e6366004611dae565b610963565b3480156102f757600080fd5b5061030b610306366004611e44565b610a4f565b604080516001600160a01b039093168352602083019190915201610214565b34801561033657600080fd5b506102aa7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036a57600080fd5b5061028a610afb565b61028a610381366004611e08565b610c7d565b34801561039257600080fd5b5061028a6103a1366004611dae565b610c9d565b3480156103b257600080fd5b5061025f6103c1366004611dae565b610ca8565b3480156103d257600080fd5b506102aa6103e1366004611e66565b610cb3565b3480156103f257600080fd5b5061028a610401366004611e8f565b610cf9565b61028a610414366004611e44565b610dac565b34801561042557600080fd5b5061028a610434366004611e44565b611087565b34801561044557600080fd5b506102aa610454366004611dae565b6000908152600d6020526040902054600160a81b900467ffffffffffffffff1690565b34801561048357600080fd5b5061023261112b565b34801561049857600080fd5b506104e76104a7366004611dae565b600d602052600090815260409020805460019091015460ff82169161010081046001600160a01b031691600160a81b90910467ffffffffffffffff169084565b6040805194151585526001600160a01b03909316602085015267ffffffffffffffff909116918301919091526060820152608001610214565b61053361052e366004611dae565b61113a565b60408051928352602083019190915201610214565b34801561055457600080fd5b5061028a610563366004611ebf565b611300565b34801561057457600080fd5b50600b5461025f906001600160a01b031681565b61028a610596366004611f01565b61136c565b3480156105a757600080fd5b506102aa6105b6366004611e44565b6113ad565b3480156105c757600080fd5b5061025f6105d6366004611dae565b6113d1565b3480156105e757600080fd5b506102326105f6366004611dae565b611426565b34801561060757600080fd5b506102aa7f000000000000000000000000000000000000000000000000000000000000000081565b34801561063b57600080fd5b5061028a61064a366004611fdd565b6114ad565b34801561065b57600080fd5b506102aa7f000000000000000000000000000000000000000000000000000000000000000081565b34801561068f57600080fd5b5061020861069e36600461202a565b611614565b3480156106af57600080fd5b506102aa600c5481565b6000636ad56fd360e11b6001600160e01b03198316016106db57506001919050565b6314bdb52960e21b6001600160e01b03198316016106fb57506001919050565b61070482611642565b92915050565b6060600480546107199061205d565b80601f01602080910402602001604051908101604052809291908181526020018280546107459061205d565b80156107925780601f1061076757610100808354040283529160200191610792565b820191906000526020600020905b81548152906001019060200180831161077557829003601f168201915b5050505050905090565b60006107a782611690565b6107bb576107bb6333d1c03960e21b6116dc565b506000908152600860205260409020546001600160a01b031690565b6107e3828260016116e6565b5050565b60006107f282611789565b6001600160a01b0394851694909150811684146108185761081862a1148160e81b6116dc565b600082815260086020526040902080546108448187335b6001600160a01b039081169116811491141790565b610866576108528633611614565b61086657610866632ce44b5f60e11b6116dc565b610873868686600161182a565b801561087e57600082555b6001600160a01b038681166000908152600760205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260066020526040812091909155600160e11b841690036109105760018401600081815260066020526040812054900361090e57600254811461090e5760008181526006602052604090208490555b505b6001600160a01b0385168481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a48060000361095a5761095a633a954ecd60e21b6116dc565b50505050505050565b600061096e82610ca8565b90503361097a83610ca8565b6001600160a01b0316148061099457506109948133611614565b6109f35760405162461bcd60e51b815260206004820152602560248201527f466c6f7747656e45646974696f6e3a204e6f74204f776e6572204f72204170706044820152641c9bdd995960da1b60648201526084015b60405180910390fd5b6109fe82600161195a565b600082815260016020526040812055817fc3a3686eed3b315ba4f3b1a0bf88b63a4525e3f27314495ba7dc0a40a6c4cd90336040516001600160a01b03909116815260200160405180910390a25050565b60008281526001602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046001600160601b0316928201929092528291610ac45750604080518082019091526000546001600160a01b0381168252600160a01b90046001600160601b031660208201525b602081015160009061271090610ae3906001600160601b0316876120ad565b610aed91906120c4565b915196919550909350505050565b600e546001600160a01b03166324d7806c336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610b51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7591906120e6565b610bd85760405162461bcd60e51b815260206004820152602e60248201527f4d7972696164466c6f774f6666657253746174696f6e3a20557365722069732060448201526d1b9bdd08185d5d1a1bdc9a5e995960921b60648201526084016109ea565b604051600090339047908381818185875af1925050503d8060008114610c1a576040519150601f19603f3d011682016040523d82523d6000602084013e610c1f565b606091505b5050905080610c7a5760405162461bcd60e51b815260206004820152602160248201527f466c6f7747656e45646974696f6e3a205769746864726177616c206661696c656044820152601960fa1b60648201526084016109ea565b50565b610c988383836040518060200160405280600081525061136c565b505050565b610c7a81600161195a565b600061070482611789565b60006001600160a01b038216610cd357610cd36323d3ad8160e21b6116dc565b506001600160a01b031660009081526007602052604090205467ffffffffffffffff1690565b6000610d0483610ca8565b90506001600160a01b038116331480610d225750610d228133611614565b610d3e5760405162461bcd60e51b81526004016109ea90612103565b6000838152600d6020908152604091829020805460ff191685151590811782556001909101548351878152928301919091529181019190915233907fa9dcc06084f66afbdc1841a28e84400fcbf607131220fdcf404c8502f3c03203906060015b60405180910390a2505050565b6000828152600d602052604090205460ff16610e195760405162461bcd60e51b815260206004820152602660248201527f466c6f7747656e45646974696f6e3a204e6f7420617661696c61626c6520666f6044820152651c881c995b9d60d21b60648201526084016109ea565b6000610e24836113d1565b6001600160a01b031614610e895760405162461bcd60e51b815260206004820152602660248201527f466c6f7747656e45646974696f6e3a204e465420416c7265616479205375627360448201526518dc9a58995960d21b60648201526084016109ea565b60008111610ef05760405162461bcd60e51b815260206004820152602e60248201527f466c6f7747656e45646974696f6e3a2054696d652063616e2774206265206c6560448201526d39b9903a3430b71018903437bab960911b60648201526084016109ea565b6110e0811115610f5b5760405162461bcd60e51b815260206004820152603060248201527f466c6f7747656e45646974696f6e3a2054696d652063616e2774206265206d6f60448201526f7265207468616e2036206d6f6e74687360801b60648201526084016109ea565b6000610f6783836113ad565b905080341015610fc45760405162461bcd60e51b815260206004820152602260248201527f466c6f7747656e45646974696f6e3a20496e73756666696369656e742046756e604482015261647360f01b60648201526084016109ea565b6000838152600d602052604090208054610100600160a81b0319166101003302178155610ff383610e106120ad565b610ffd904261214d565b815467ffffffffffffffff91909116600160a81b0267ffffffffffffffff60a81b1990911617815561102c3390565b8154604051600160a81b90910467ffffffffffffffff1681526001600160a01b03919091169085907f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe9060200160405180910390a350505050565b600061109283610ca8565b90506001600160a01b0381163314806110b057506110b08133611614565b6110cc5760405162461bcd60e51b81526004016109ea90612103565b6000838152600d60209081526040918290206001810185905554825186815260ff90911615159181019190915290810183905233907fa9dcc06084f66afbdc1841a28e84400fcbf607131220fdcf404c8502f3c0320390606001610d9f565b6060600580546107199061205d565b6000807f000000000000000000000000000000000000000000000000000000000000000083611170600354600254036000190190565b61117a919061214d565b11156111dc5760405162461bcd60e51b815260206004820152602b60248201527f466c6f7747656e45646974696f6e3a20657863656564696e67206d617820746f60448201526a6b656e20737570706c792160a81b60648201526084016109ea565b427f000000000000000000000000000000000000000000000000000000000000000011156112525761122e7f0000000000000000000000000000000000000000000000000000000000000000846120ad565b34101561124d5760405162461bcd60e51b81526004016109ea90612160565b61127e565b600c5461125f90846120ad565b34101561127e5760405162461bcd60e51b81526004016109ea90612160565b6112883384611aaa565b600b5461129f906001600160a01b03166001611300565b337fe4dcce960639dbdb2bb468ca46dec284619042032dee01c52a705a713350f4306112d2600354600254036000190190565b60408051918252602082018790520160405180910390a26112fa600354600254036000190190565b93915050565b3360008181526009602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6113778484846107e7565b6001600160a01b0383163b156113a75761139384848484611ac4565b6113a7576113a76368d2bf6b60e11b6116dc565b50505050565b6000828152600d60205260408120600101546113ca9083906120ad565b9392505050565b6000818152600d602052604081205442600160a81b90910467ffffffffffffffff161061141957506000908152600d602052604090205461010090046001600160a01b031690565b506000919050565b919050565b606061143182611690565b61144557611445630a14c4b560e41b6116dc565b600061145c60408051602081019091526000815290565b9050805160000361147c57604051806020016040528060008152506113ca565b8061148684611ba6565b6040516020016114979291906121a1565b6040516020818303038152906040529392505050565b60006114b884610ca8565b90506001600160a01b0381163314806114d657506114d68133611614565b6114f25760405162461bcd60e51b81526004016109ea90612103565b60006114fd856113d1565b6001600160a01b0316146115665760405162461bcd60e51b815260206004820152602a60248201527f466c6f7747656e45646974696f6e3a204974656d20697320616c7265616479206044820152691cdd589cd8dc9a58995960b21b60648201526084016109ea565b6000848152600d602052604090208054610100600160a81b0319166101006001600160a01b038616021781556115a667ffffffffffffffff84164261214d565b815467ffffffffffffffff60a81b1916600160a81b67ffffffffffffffff9283160217825560405190841681526001600160a01b0385169086907f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe9060200160405180910390a35050505050565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205460ff1690565b60006301ffc9a760e01b6001600160e01b03198316148061167357506380ac58cd60e01b6001600160e01b03198316145b806107045750506001600160e01b031916635b5e139f60e01b1490565b600081600111611421576002548210156114215760005b50600082815260066020526040812054908190036116cf576116c8836121d0565b92506116a7565b600160e01b161592915050565b8060005260046000fd5b60006116f183610ca8565b90508180156117095750336001600160a01b03821614155b1561172c576117188133611614565b61172c5761172c6367d9dca160e11b6116dc565b60008381526008602052604080822080546001600160a01b0319166001600160a01b0388811691821790925591518693918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b60008160011161181a5750600081815260066020526040812054908190036118075760025482106117c4576117c4636f96cda160e11b6116dc565b5b506000190160008181526006602052604090205480156117c557600160e01b81166000036117f257919050565b611802636f96cda160e11b6116dc565b6117c5565b600160e01b811660000361181a57919050565b611421636f96cda160e11b6116dc565b815b81811161195357600061183e826113d1565b6001600160a01b0316146118a85760405162461bcd60e51b815260206004820152602b60248201527f466c6f7747656e45646974696f6e203a204974656d20697320616c726561647960448201526a081cdd589cd8dc9a58995960aa1b60648201526084016109ea565b836001600160a01b0316856001600160a01b0316141580156118e557506000818152600d602052604090205461010090046001600160a01b031615155b15611941576000838152600d6020908152604080832080546001600160e81b03191681556001018390555182815285917f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe910160405180910390a35b8061194b816121e7565b91505061182c565b5050505050565b600061196583611789565b90508060008061198386600090815260086020526040902080549091565b9150915084156119ba5761199881843361082f565b6119ba576119a68333611614565b6119ba576119ba632ce44b5f60e11b6116dc565b6119c883600088600161182a565b80156119d357600082555b6001600160a01b038316600081815260076020526040902080546fffffffffffffffffffffffffffffffff0190554260a01b17600360e01b17600087815260066020526040812091909155600160e11b85169003611a6157600186016000818152600660205260408120549003611a5f576002548114611a5f5760008181526006602052604090208590555b505b60405186906000906001600160a01b038616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505060038054600101905550505050565b6107e3828260405180602001604052806000815250611bea565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290611af9903390899088908890600401612200565b6020604051808303816000875af1925050508015611b34575060408051601f3d908101601f19168201909252611b319181019061223d565b60015b611b89573d808015611b62576040519150601f19603f3d011682016040523d82523d6000602084013e611b67565b606091505b508051600003611b8157611b816368d2bf6b60e11b6116dc565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a900480611bc05750819003601f19909101908152919050565b611bf48383611c4c565b6001600160a01b0383163b15610c98576002548281035b611c1e6000868380600101945086611ac4565b611c3257611c326368d2bf6b60e11b6116dc565b818110611c0b5781600254146119535761195360006116dc565b6002546000829003611c6857611c6863b562e8dd60e01b6116dc565b611c75600084838561182a565b60008181526006602090815260408083206001600160a01b0387164260a01b6001881460e11b17811790915580845260079092528220805468010000000000000001860201905590819003611cd357611cd3622e076360e81b6116dc565b818301825b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508103611cd8575060025550505050565b6001600160e01b031981168114610c7a57600080fd5b600060208284031215611d4057600080fd5b81356113ca81611d18565b60005b83811015611d66578181015183820152602001611d4e565b50506000910152565b60008151808452611d87816020860160208601611d4b565b601f01601f19169290920160200192915050565b6020815260006113ca6020830184611d6f565b600060208284031215611dc057600080fd5b5035919050565b80356001600160a01b038116811461142157600080fd5b60008060408385031215611df157600080fd5b611dfa83611dc7565b946020939093013593505050565b600080600060608486031215611e1d57600080fd5b611e2684611dc7565b9250611e3460208501611dc7565b9150604084013590509250925092565b60008060408385031215611e5757600080fd5b50508035926020909101359150565b600060208284031215611e7857600080fd5b6113ca82611dc7565b8015158114610c7a57600080fd5b60008060408385031215611ea257600080fd5b823591506020830135611eb481611e81565b809150509250929050565b60008060408385031215611ed257600080fd5b611edb83611dc7565b91506020830135611eb481611e81565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611f1757600080fd5b611f2085611dc7565b9350611f2e60208601611dc7565b925060408501359150606085013567ffffffffffffffff80821115611f5257600080fd5b818701915087601f830112611f6657600080fd5b813581811115611f7857611f78611eeb565b604051601f8201601f19908116603f01168101908382118183101715611fa057611fa0611eeb565b816040528281528a6020848701011115611fb957600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080600060608486031215611ff257600080fd5b8335925061200260208501611dc7565b9150604084013567ffffffffffffffff8116811461201f57600080fd5b809150509250925092565b6000806040838503121561203d57600080fd5b61204683611dc7565b915061205460208401611dc7565b90509250929050565b600181811c9082168061207157607f821691505b60208210810361209157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761070457610704612097565b6000826120e157634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156120f857600080fd5b81516113ca81611e81565b6020808252602a908201527f466c6f7747656e45646974696f6e3a2043616c6c6572206973206e6f7420746f604082015269035b2b71037bbb732b9160b51b606082015260800190565b8082018082111561070457610704612097565b60208082526021908201527f466c6f7747656e45646974696f6e3a204e6f7420656e6f7567682066756e64736040820152602160f81b606082015260800190565b600083516121b3818460208801611d4b565b8351908301906121c7818360208801611d4b565b01949350505050565b6000816121df576121df612097565b506000190190565b6000600182016121f9576121f9612097565b5060010190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061223390830184611d6f565b9695505050505050565b60006020828403121561224f57600080fd5b81516113ca81611d1856fea2646970667358221220e790cfcbcf09ccd50235b6f16e7ad47451bebb8b0d91851d5cc5f4c5e4068b7b64736f6c63430008110033";

type FlowGenEditionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlowGenEditionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlowGenEdition__factory extends ContractFactory {
  constructor(...args: FlowGenEditionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FlowGenEdition";
  }

  deploy(
    name: string,
    symbol: string,
    marketplaceAddress: string,
    accessControlAddress: string,
    _salePrice: BigNumberish,
    _preSalePrice: BigNumberish,
    _countDownTime: BigNumberish,
    _maxSupply: BigNumberish,
    _royaltyBPS: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FlowGenEdition> {
    return super.deploy(
      name,
      symbol,
      marketplaceAddress,
      accessControlAddress,
      _salePrice,
      _preSalePrice,
      _countDownTime,
      _maxSupply,
      _royaltyBPS,
      overrides || {}
    ) as Promise<FlowGenEdition>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    marketplaceAddress: string,
    accessControlAddress: string,
    _salePrice: BigNumberish,
    _preSalePrice: BigNumberish,
    _countDownTime: BigNumberish,
    _maxSupply: BigNumberish,
    _royaltyBPS: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      marketplaceAddress,
      accessControlAddress,
      _salePrice,
      _preSalePrice,
      _countDownTime,
      _maxSupply,
      _royaltyBPS,
      overrides || {}
    );
  }
  attach(address: string): FlowGenEdition {
    return super.attach(address) as FlowGenEdition;
  }
  connect(signer: Signer): FlowGenEdition__factory {
    return super.connect(signer) as FlowGenEdition__factory;
  }
  static readonly contractName: "FlowGenEdition";
  public readonly contractName: "FlowGenEdition";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlowGenEditionInterface {
    return new utils.Interface(_abi) as FlowGenEditionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlowGenEdition {
    return new Contract(address, _abi, signerOrProvider) as FlowGenEdition;
  }
}
