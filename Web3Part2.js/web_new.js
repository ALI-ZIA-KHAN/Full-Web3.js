//how to generate ABI nad Bytecode by web3.js

//solidity compiler
const solc=require("solc")


//fs to read demo.sol
const fs=require('fs')

let Web3=require("web3")
let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))

let fileContent=fs.readFileSync("demo.sol").toString();
console.log(fileContent)

//now we can't give file content in ths format to solidity to compile

//so we will have to give in proper format like below

var input = {
    language : "Solidity" ,
    sources : {
      "demo.sol" : {
          content:fileContent
              },
    },
    settings : {
        outputSelection:{
              "*":{
                  "*":["*"]
              }
        },
  },
        
}
        
//we have to convert output into JSON
var output=JSON.parse(solc.compile(JSON.stringify(input)))

console.log("Output",output)


const ABI=output.contracts["demo.sol"]["demo"].abi;
const bytecode=output.contracts["demo.sol"]["demo"].evm.bytecode.object;

console.log("ABI",ABI)
console.log("bytecode",bytecode)




//new deploying this contract on our local blockchain

contract=new web3.eth.Contract(ABI);

//checking accounts
web3.eth.getAccounts().then((accounts)=>{
    console.log("Accountcs:",accounts)

    //need to select one account to deploy
    var defaultAccount=accounts[0]
    console.log("Default Account",defaultAccount)
  
    //deploying on it
    contract.deploy({data:bytecode}).send({from:defaultAccount,gas:500000})
   
    //in return Blockchain wl give some events,log etc so for this we use on
    .on("receipt",(receipt)=>{
        console.log("Contract Address",receipt.contractAddress)
    }) 
    //just getting x value after deploying
    .then((demoContract)=>{
        demoContract.methods.x().call((err,data)=>{
            console.log("Initial Value: ",data)
        })
    })

})