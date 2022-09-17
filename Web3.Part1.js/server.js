//making class named as Web3
let Web3=require("web3")
// console.log(Web3)

//now making object from it
let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
// console.log(web3)

//getting balance of any address of ganache in Wei
//method returns promise

// web3.eth.getBalance("0x736C9655B037AAA2F9cD28ED613E6e5fCffA1FC9").then((result)=>{console.log(result)})


//now getting balance in ether

// web3.eth.getBalance("0x736C9655B037AAA2F9cD28ED613E6e5fCffA1FC9")
// .then((result)=> {console.log(web3.utils.fromWei(result))})


//transferring ethers from one account to another
// web3.eth.sendTransaction({from:"0xb25d0149785220874466895cD4471Eb34a03a691",
// to:"0x928929726E1F60cd267e66E21bF53B2203060aE4",value:web3.utils.toWei("5","ether")})
// .then((res)=>{console.log("done",res)})



//interacting with smart contarct that is being written on remix but connected to our
//ganache RPC endpoint
//copy ABI of deployed contract from Remix
//copy address of yoyr deployed contact from remix from Deployed Contracts section there

let contract=new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "x",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],"0xc0a16904ea0a438B87c4718137a5c7E2b6eB5635")




//connected contract
// SPDX-License-Identifier: GPL-3.0

// pragma solidity >=0.7.0 <0.9.0;

// contract demo {
//     uint public x = 10 ;

//     function set( uint _x ) public {
//         x = _x ;
//     }

//     }


//after connecting we are calling x (not to make get function as it is already public)
// contract.methods.x().call().then((res)=>{console.log(res)})


//now setting value
// contract.methods.set(90).send({from:"0x340Bf0063B89E85747771312EEB6Ac2EE12969be"})


//again checking
// contract.methods.x().call().then((res)=>{console.log(res)})


//after this step index.html file was made to start next chapter of video 
//brwser interaction with Smart Contracts

//in browseer, AFTER OPENING INDEX FILE 
//IN ITS CONSOLE
//WRITE Web3 to check if its connected

//
// let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))

// now getting all account of local blockchain(Ganache) 
//means browser gets connected with our local blockcha
// web3.eth.getAccounts().then((res)=>{console.log(res)})