import Web3 from 'web3';
import constants from './constants';

const contractConstant = {
  rpcUrl: constants.network_address,
  chainId: 56, // Smart Chain - Testnet chain id
  api: 'V3X7VF8MVXS2P3XE457J5A5W5FEX8Z1FQK',
  contractAddress: '0xa8945252ac4604c8B4d93765Ecccf68c809422D2',
  abi: [
    {
      inputs: [{ internalType: 'contract PolkaBridgeMemeToken', name: '_tokenAddress', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_beginDate', type: 'uint256' },
        { internalType: 'uint256', name: '_endDate', type: 'uint256' },
        { internalType: 'uint256', name: '_lockDuration', type: 'uint256' },
      ],
      name: 'addMatch',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_mid', type: 'uint256' },
        { internalType: 'uint256', name: '_betResult', type: 'uint256' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'bet',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_mid', type: 'uint256' }],
      name: 'claimReward',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'devPercent',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_mid', type: 'uint256' }],
      name: 'getMatchInfo',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_mid', type: 'uint256' }],
      name: 'getTotalBetAmount',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_mid', type: 'uint256' },
        { internalType: 'uint256', name: '_betResult', type: 'uint256' },
      ],
      name: 'getTotalBetAmountByResult',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_mid', type: 'uint256' }],
      name: 'getTotalParticipants',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isOwner',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxAmount',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minAmount',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_mid', type: 'uint256' },
        { internalType: 'address', name: 'user', type: 'address' },
      ],
      name: 'pendingReward',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'players',
      outputs: [
        { internalType: 'uint256', name: 'amountBet', type: 'uint256' },
        { internalType: 'uint256', name: 'whichBet', type: 'uint256' },
        { internalType: 'bool', name: 'isClaim', type: 'bool' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_minAmount', type: 'uint256' },
        { internalType: 'uint256', name: '_maxAmount', type: 'uint256' },
        { internalType: 'uint256', name: '_devPercent', type: 'uint256' },
      ],
      name: 'updateConst',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_mid', type: 'uint256' },
        { internalType: 'uint256', name: '_beginDate', type: 'uint256' },
        { internalType: 'uint256', name: '_endDate', type: 'uint256' },
        { internalType: 'uint256', name: '_lockDuration', type: 'uint256' },
      ],
      name: 'updateMatch',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_mid', type: 'uint256' },
        { internalType: 'uint256', name: '_result', type: 'uint256' },
      ],
      name: 'updateMatchResult',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
  ],
};

//var web3 = new Web3(new Web3.providers.HttpProvider(characterConstant.rpcUrl));
var web3 = new Web3(window.ethereum);

var contractConnection = new web3.eth.Contract(contractConstant.abi, contractConstant.contractAddress);

export default contractConnection;
