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
import type { InstaGen, InstaGenInterface } from "../InstaGen";

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
        name: "tradeHubAddress",
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
      {
        internalType: "string",
        name: "_baseUri",
        type: "string",
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
      {
        internalType: "uint256",
        name: "pricePerHour",
        type: "uint256",
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
    inputs: [],
    name: "tradeHub",
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
    name: "version",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
  "0x60e0604052600a805460ff191660011790553480156200001e57600080fd5b50604051620025b5380380620025b58339810160408190526200004191620002c8565b8989600462000051838262000440565b50600562000060828262000440565b5060016002555050600f80546001600160a01b03808a166001600160a01b031992831617909255600c8054928b1692909116919091179055600d8690556080859052620000ae84426200050c565b60a05260c0839052600b620000c4828262000440565b50620000d13383620000e1565b5050505050505050505062000534565b6127106001600160601b0382161115620001555760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646044820152692073616c65507269636560b01b60648201526084015b60405180910390fd5b6001600160a01b038216620001ad5760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c69642072656365697665720000000000000060448201526064016200014c565b604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600055565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200020e57600080fd5b81516001600160401b03808211156200022b576200022b620001e6565b604051601f8301601f19908116603f01168101908282118183101715620002565762000256620001e6565b816040528381526020925086838588010111156200027357600080fd5b600091505b8382101562000297578582018301518183018401529082019062000278565b600093810190920192909252949350505050565b80516001600160a01b0381168114620002c357600080fd5b919050565b6000806000806000806000806000806101408b8d031215620002e957600080fd5b8a516001600160401b03808211156200030157600080fd5b6200030f8e838f01620001fc565b9b5060208d01519150808211156200032657600080fd5b620003348e838f01620001fc565b9a506200034460408e01620002ab565b99506200035460608e01620002ab565b985060808d0151975060a08d0151965060c08d0151955060e08d015194506101008d015193506101208d01519150808211156200039057600080fd5b506200039f8d828e01620001fc565b9150509295989b9194979a5092959850565b600181811c90821680620003c657607f821691505b602082108103620003e757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200043b57600081815260208120601f850160051c81016020861015620004165750805b601f850160051c820191505b81811015620004375782815560010162000422565b5050505b505050565b81516001600160401b038111156200045c576200045c620001e6565b62000474816200046d8454620003b1565b84620003ed565b602080601f831160018114620004ac5760008415620004935750858301515b600019600386901b1c1916600185901b17855562000437565b600085815260208120601f198616915b82811015620004dd57888601518255948401946001909101908401620004bc565b5085821015620004fc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200052e57634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a05160c05161203c6200057960003960008181610614015261104001526000818161033701526110d60152600081816106680152611100015261203c6000f3fe6080604052600436106101e35760003560e01c8063783a112b11610102578063ba91caae11610095578063e030565e11610064578063e030565e14610636578063e757c17d14610656578063e985e9c51461068a578063f51f96dd146106aa57600080fd5b8063ba91caae146105a2578063c2f1f14a146105c2578063c87b56dd146105e2578063d5abeb011461060257600080fd5b8063a0712d68116100d1578063a0712d6814610527578063a22cb4651461054f578063a4b110521461056f578063b88d4fde1461058f57600080fd5b8063783a112b1461042d5780638fc88c481461044057806395d89b411461047e5780639874cd971461049357600080fd5b80633692d1181161017a57806354fd4d501161014957806354fd4d50146103a15780636352211e146103cd578063655bc8db146103ed57806370a082311461040d57600080fd5b80633692d118146103255780633ccfd60b1461035957806342842e0e1461036e57806342966c681461038157600080fd5b806318160ddd116101b657806318160ddd1461028c57806323b872dd146102b35780632890e0d7146102c65780632a55205a146102e657600080fd5b806301ffc9a7146101e857806306fdde031461021d578063081812fc1461023f578063095ea7b314610277575b600080fd5b3480156101f457600080fd5b50610208610203366004611b27565b6106c0565b60405190151581526020015b60405180910390f35b34801561022957600080fd5b50610232610711565b6040516102149190611b94565b34801561024b57600080fd5b5061025f61025a366004611ba7565b6107a3565b6040516001600160a01b039091168152602001610214565b61028a610285366004611bd7565b6107de565b005b34801561029857600080fd5b5060035460025403600019015b604051908152602001610214565b61028a6102c1366004611c01565b6107ee565b3480156102d257600080fd5b5061028a6102e1366004611ba7565b61095d565b3480156102f257600080fd5b50610306610301366004611c3d565b610a3b565b604080516001600160a01b039093168352602083019190915201610214565b34801561033157600080fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b34801561036557600080fd5b5061028a610ae7565b61028a61037c366004611c01565b610c48565b34801561038d57600080fd5b5061028a61039c366004611ba7565b610c68565b3480156103ad57600080fd5b50600a546103bb9060ff1681565b60405160ff9091168152602001610214565b3480156103d957600080fd5b5061025f6103e8366004611ba7565b610c73565b3480156103f957600080fd5b5061028a610408366004611c6d565b610c7e565b34801561041957600080fd5b506102a5610428366004611ca5565b610d2f565b61028a61043b366004611c3d565b610d75565b34801561044c57600080fd5b506102a561045b366004611ba7565b6000908152600e6020526040902054600160a81b900467ffffffffffffffff1690565b34801561048a57600080fd5b5061023261101b565b34801561049f57600080fd5b506104ee6104ae366004611ba7565b600e602052600090815260409020805460019091015460ff82169161010081046001600160a01b031691600160a81b90910467ffffffffffffffff169084565b6040805194151585526001600160a01b03909316602085015267ffffffffffffffff909116918301919091526060820152608001610214565b61053a610535366004611ba7565b61102a565b60408051928352602083019190915201610214565b34801561055b57600080fd5b5061028a61056a366004611cc0565b611242565b34801561057b57600080fd5b50600c5461025f906001600160a01b031681565b61028a61059d366004611d0d565b6112ae565b3480156105ae57600080fd5b506102a56105bd366004611c3d565b6112ef565b3480156105ce57600080fd5b5061025f6105dd366004611ba7565b611313565b3480156105ee57600080fd5b506102326105fd366004611ba7565b611368565b34801561060e57600080fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b34801561064257600080fd5b5061028a610651366004611de9565b6113e2565b34801561066257600080fd5b506102a57f000000000000000000000000000000000000000000000000000000000000000081565b34801561069657600080fd5b506102086106a5366004611e36565b611542565b3480156106b657600080fd5b506102a5600d5481565b6000636ad56fd360e11b6001600160e01b03198316016106e257506001919050565b6314bdb52960e21b6001600160e01b031983160161070257506001919050565b61070b82611570565b92915050565b60606004805461072090611e69565b80601f016020809104026020016040519081016040528092919081815260200182805461074c90611e69565b80156107995780601f1061076e57610100808354040283529160200191610799565b820191906000526020600020905b81548152906001019060200180831161077c57829003601f168201915b5050505050905090565b60006107ae826115be565b6107c2576107c26333d1c03960e21b61160a565b506000908152600860205260409020546001600160a01b031690565b6107ea82826001611614565b5050565b60006107f9826116b7565b6001600160a01b03948516949091508116841461081f5761081f62a1148160e81b61160a565b6000828152600860205260409020805461084b8187335b6001600160a01b039081169116811491141790565b61086d576108598633611542565b61086d5761086d632ce44b5f60e11b61160a565b801561087857600082555b6001600160a01b038681166000908152600760205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260066020526040812091909155600160e11b8416900361090a576001840160008181526006602052604081205490036109085760025481146109085760008181526006602052604090208490555b505b6001600160a01b0385168481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a48060000361095457610954633a954ecd60e21b61160a565b50505050505050565b600061096882610c73565b90503361097483610c73565b6001600160a01b0316148061098e575061098e8133611542565b6109df5760405162461bcd60e51b815260206004820152601f60248201527f496e73746147656e3a204e6f74204f776e6572204f7220417070726f7665640060448201526064015b60405180910390fd5b6109ea826001611758565b600082815260016020526040812055817fc3a3686eed3b315ba4f3b1a0bf88b63a4525e3f27314495ba7dc0a40a6c4cd90336040516001600160a01b03909116815260200160405180910390a25050565b60008281526001602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046001600160601b0316928201929092528291610ab05750604080518082019091526000546001600160a01b0381168252600160a01b90046001600160601b031660208201525b602081015160009061271090610acf906001600160601b031687611eb9565b610ad99190611ed0565b915196919550909350505050565b600f546001600160a01b03166324d7806c336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610b3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b619190611ef2565b610bad5760405162461bcd60e51b815260206004820181905260248201527f496e73746147656e3a2055736572206973206e6f7420617574686f72697a656460448201526064016109d6565b604051600090339047908381818185875af1925050503d8060008114610bef576040519150601f19603f3d011682016040523d82523d6000602084013e610bf4565b606091505b5050905080610c455760405162461bcd60e51b815260206004820152601b60248201527f496e73746147656e3a205769746864726177616c206661696c6564000000000060448201526064016109d6565b50565b610c63838383604051806020016040528060008152506112ae565b505050565b610c45816001611758565b600061070b826116b7565b6000610c8984610c73565b90506001600160a01b038116331480610ca75750610ca78133611542565b610cc35760405162461bcd60e51b81526004016109d690611f0f565b6000848152600e6020908152604091829020805460ff19168615159081178255600190910185905582518781529182015290810183905233907fa9dcc06084f66afbdc1841a28e84400fcbf607131220fdcf404c8502f3c032039060600160405180910390a250505050565b60006001600160a01b038216610d4f57610d4f6323d3ad8160e21b61160a565b506001600160a01b031660009081526007602052604090205467ffffffffffffffff1690565b6000828152600e602052604090205460ff16610dd35760405162461bcd60e51b815260206004820181905260248201527f496e73746147656e3a204e6f7420617661696c61626c6520666f722072656e7460448201526064016109d6565b6000610dde83611313565b6001600160a01b031614610e345760405162461bcd60e51b815260206004820181905260248201527f496e73746147656e3a204e465420416c7265616479205375627363726962656460448201526064016109d6565b60008111610e955760405162461bcd60e51b815260206004820152602860248201527f496e73746147656e3a2054696d652063616e2774206265206c65737320746861604482015267371018903437bab960c11b60648201526084016109d6565b6110e0811115610efa5760405162461bcd60e51b815260206004820152602a60248201527f496e73746147656e3a2054696d652063616e2774206265206d6f7265207468616044820152696e2036206d6f6e74687360b01b60648201526084016109d6565b6000610f0683836112ef565b905080341015610f585760405162461bcd60e51b815260206004820152601c60248201527f496e73746147656e3a20496e73756666696369656e742046756e64730000000060448201526064016109d6565b6000838152600e602052604090208054610100600160a81b0319166101003302178155610f8783610e10611eb9565b610f919042611f53565b815467ffffffffffffffff91909116600160a81b0267ffffffffffffffff60a81b19909116178155610fc03390565b8154604051600160a81b90910467ffffffffffffffff1681526001600160a01b03919091169085907f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe9060200160405180910390a350505050565b60606005805461072090611e69565b600080600061103c6002546000190190565b90507f00000000000000000000000000000000000000000000000000000000000000008461106d6002546000190190565b6110779190611f53565b11156110d35760405162461bcd60e51b815260206004820152602560248201527f496e73746147656e3a20657863656564696e67206d617820746f6b656e20737560448201526470706c792160d81b60648201526084016109d6565b427f00000000000000000000000000000000000000000000000000000000000000001115611179576111257f000000000000000000000000000000000000000000000000000000000000000085611eb9565b3410156111745760405162461bcd60e51b815260206004820152601b60248201527f496e73746147656e3a204e6f7420656e6f7567682066756e647321000000000060448201526064016109d6565b6111d5565b600d546111869085611eb9565b3410156111d55760405162461bcd60e51b815260206004820152601b60248201527f496e73746147656e3a204e6f7420656e6f7567682066756e647321000000000060448201526064016109d6565b6111df338561189a565b600c546111f6906001600160a01b03166001611242565b337fe4dcce960639dbdb2bb468ca46dec284619042032dee01c52a705a713350f4306112256002546000190190565b60408051918252602082018890520160405180910390a293915050565b3360008181526009602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6112b98484846107ee565b6001600160a01b0383163b156112e9576112d5848484846118b4565b6112e9576112e96368d2bf6b60e11b61160a565b50505050565b6000828152600e602052604081206001015461130c908390611eb9565b9392505050565b6000818152600e602052604081205442600160a81b90910467ffffffffffffffff161061135b57506000908152600e602052604090205461010090046001600160a01b031690565b506000919050565b919050565b6060611373826115be565b61138757611387630a14c4b560e41b61160a565b6000611391611996565b905080516000036113b1576040518060200160405280600081525061130c565b806113bb846119a5565b6040516020016113cc929190611f66565b6040516020818303038152906040529392505050565b60006113ed84610c73565b90506001600160a01b03811633148061140b575061140b8133611542565b6114275760405162461bcd60e51b81526004016109d690611f0f565b600061143285611313565b6001600160a01b0316146114945760405162461bcd60e51b8152602060048201526024808201527f496e73746147656e3a204974656d20697320616c7265616479207375627363726044820152631a58995960e21b60648201526084016109d6565b6000848152600e602052604090208054610100600160a81b0319166101006001600160a01b038616021781556114d467ffffffffffffffff841642611f53565b815467ffffffffffffffff60a81b1916600160a81b67ffffffffffffffff9283160217825560405190841681526001600160a01b0385169086907f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe9060200160405180910390a35050505050565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205460ff1690565b60006301ffc9a760e01b6001600160e01b0319831614806115a157506380ac58cd60e01b6001600160e01b03198316145b8061070b5750506001600160e01b031916635b5e139f60e01b1490565b600081600111611363576002548210156113635760005b50600082815260066020526040812054908190036115fd576115f683611f95565b92506115d5565b600160e01b161592915050565b8060005260046000fd5b600061161f83610c73565b90508180156116375750336001600160a01b03821614155b1561165a576116468133611542565b61165a5761165a6367d9dca160e11b61160a565b60008381526008602052604080822080546001600160a01b0319166001600160a01b0388811691821790925591518693918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b6000816001116117485750600081815260066020526040812054908190036117355760025482106116f2576116f2636f96cda160e11b61160a565b5b506000190160008181526006602052604090205480156116f357600160e01b811660000361172057919050565b611730636f96cda160e11b61160a565b6116f3565b600160e01b811660000361174857919050565b611363636f96cda160e11b61160a565b6000611763836116b7565b90508060008061178186600090815260086020526040902080549091565b9150915084156117b857611796818433610836565b6117b8576117a48333611542565b6117b8576117b8632ce44b5f60e11b61160a565b80156117c357600082555b6001600160a01b038316600081815260076020526040902080546fffffffffffffffffffffffffffffffff0190554260a01b17600360e01b17600087815260066020526040812091909155600160e11b851690036118515760018601600081815260066020526040812054900361184f57600254811461184f5760008181526006602052604090208590555b505b60405186906000906001600160a01b038616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505060038054600101905550505050565b6107ea8282604051806020016040528060008152506119e9565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906118e9903390899088908890600401611fac565b6020604051808303816000875af1925050508015611924575060408051601f3d908101601f1916820190925261192191810190611fe9565b60015b611979573d808015611952576040519150601f19603f3d011682016040523d82523d6000602084013e611957565b606091505b508051600003611971576119716368d2bf6b60e11b61160a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b6060600b805461072090611e69565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a9004806119bf5750819003601f19909101908152919050565b6119f38383611a52565b6001600160a01b0383163b15610c63576002548281035b611a1d60008683806001019450866118b4565b611a3157611a316368d2bf6b60e11b61160a565b818110611a0a578160025414611a4b57611a4b600061160a565b5050505050565b6002546000829003611a6e57611a6e63b562e8dd60e01b61160a565b60008181526006602090815260408083206001600160a01b0387164260a01b6001881460e11b17811790915580845260079092528220805468010000000000000001860201905590819003611acc57611acc622e076360e81b61160a565b818301825b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508103611ad1575060025550505050565b6001600160e01b031981168114610c4557600080fd5b600060208284031215611b3957600080fd5b813561130c81611b11565b60005b83811015611b5f578181015183820152602001611b47565b50506000910152565b60008151808452611b80816020860160208601611b44565b601f01601f19169290920160200192915050565b60208152600061130c6020830184611b68565b600060208284031215611bb957600080fd5b5035919050565b80356001600160a01b038116811461136357600080fd5b60008060408385031215611bea57600080fd5b611bf383611bc0565b946020939093013593505050565b600080600060608486031215611c1657600080fd5b611c1f84611bc0565b9250611c2d60208501611bc0565b9150604084013590509250925092565b60008060408385031215611c5057600080fd5b50508035926020909101359150565b8015158114610c4557600080fd5b600080600060608486031215611c8257600080fd5b833592506020840135611c9481611c5f565b929592945050506040919091013590565b600060208284031215611cb757600080fd5b61130c82611bc0565b60008060408385031215611cd357600080fd5b611cdc83611bc0565b91506020830135611cec81611c5f565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611d2357600080fd5b611d2c85611bc0565b9350611d3a60208601611bc0565b925060408501359150606085013567ffffffffffffffff80821115611d5e57600080fd5b818701915087601f830112611d7257600080fd5b813581811115611d8457611d84611cf7565b604051601f8201601f19908116603f01168101908382118183101715611dac57611dac611cf7565b816040528281528a6020848701011115611dc557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080600060608486031215611dfe57600080fd5b83359250611e0e60208501611bc0565b9150604084013567ffffffffffffffff81168114611e2b57600080fd5b809150509250925092565b60008060408385031215611e4957600080fd5b611e5283611bc0565b9150611e6060208401611bc0565b90509250929050565b600181811c90821680611e7d57607f821691505b602082108103611e9d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761070b5761070b611ea3565b600082611eed57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611f0457600080fd5b815161130c81611c5f565b60208082526024908201527f496e73746147656e3a2043616c6c6572206973206e6f7420746f6b656e206f7760408201526303732b9160e51b606082015260800190565b8082018082111561070b5761070b611ea3565b60008351611f78818460208801611b44565b835190830190611f8c818360208801611b44565b01949350505050565b600081611fa457611fa4611ea3565b506000190190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611fdf90830184611b68565b9695505050505050565b600060208284031215611ffb57600080fd5b815161130c81611b1156fea26469706673582212206ecb311fcfaeeb34b8950a887b5fd20000f99fd6599b5d3f80a753c9d11d2dac64736f6c63430008110033";

type InstaGenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InstaGenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InstaGen__factory extends ContractFactory {
  constructor(...args: InstaGenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "InstaGen";
  }

  deploy(
    name: string,
    symbol: string,
    tradeHubAddress: string,
    accessControlAddress: string,
    _salePrice: BigNumberish,
    _preSalePrice: BigNumberish,
    _countDownTime: BigNumberish,
    _maxSupply: BigNumberish,
    _royaltyBPS: BigNumberish,
    _baseUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InstaGen> {
    return super.deploy(
      name,
      symbol,
      tradeHubAddress,
      accessControlAddress,
      _salePrice,
      _preSalePrice,
      _countDownTime,
      _maxSupply,
      _royaltyBPS,
      _baseUri,
      overrides || {}
    ) as Promise<InstaGen>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    tradeHubAddress: string,
    accessControlAddress: string,
    _salePrice: BigNumberish,
    _preSalePrice: BigNumberish,
    _countDownTime: BigNumberish,
    _maxSupply: BigNumberish,
    _royaltyBPS: BigNumberish,
    _baseUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      tradeHubAddress,
      accessControlAddress,
      _salePrice,
      _preSalePrice,
      _countDownTime,
      _maxSupply,
      _royaltyBPS,
      _baseUri,
      overrides || {}
    );
  }
  attach(address: string): InstaGen {
    return super.attach(address) as InstaGen;
  }
  connect(signer: Signer): InstaGen__factory {
    return super.connect(signer) as InstaGen__factory;
  }
  static readonly contractName: "InstaGen";
  public readonly contractName: "InstaGen";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InstaGenInterface {
    return new utils.Interface(_abi) as InstaGenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstaGen {
    return new Contract(address, _abi, signerOrProvider) as InstaGen;
  }
}
