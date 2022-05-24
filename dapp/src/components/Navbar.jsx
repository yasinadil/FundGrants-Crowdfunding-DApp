import React, {useEffect, useState} from "react"
import Web3 from "web3";
import crowdFunding from "../crowdfunding";

function Navbar() { 
  const [target, settarget] = useState("");
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [contribution, setcontribution] = useState("");
  const [address, setAddress] = useState(null);
  const [cfContract, setCfContract] = useState();
  const [CName, setCName] = useState([]);
  const [CDesc, setCDesc] = useState([]);
  const [CTarget, setCTarget] = useState([]);
  const [Ccurrent, setCcurrent] = useState([]);
  const [currentMilestone, setCurrentMilestone] = useState([]);
  const [approvalVotes, setApprovalVotes] = useState([]);
  const [campaignStatus, setCampaignStatus] = useState([]);
  const [total, setTotal] = useState();
  const [owners, setOwners] = useState([]);
  const [boolOwners, setBoolOwners] = useState([]);
  const [investors, setInvestors] = useState(null);
  const [investorsCount, setInvestorsCount] = useState([]);
  const [boolInvestors, setBoolInvestors] = useState([]);
  
  const stylename = {
    color: "white",
    fontSize: "30px",
    fontFamily: "Red Hat Display"
  };
  const web3 = new Web3(window.ethereum)

  useEffect(() => {
    async function load (){
    const web3 = new Web3(window.ethereum)
    window.ethereum.request({ method: "eth_requestAccounts" })
    const accounts = await web3.eth.getAccounts()
    setAddress(accounts[0])
    var contract = crowdFunding(web3)
    setCfContract(contract)
    const TotalCampaigns = await contract.methods.getListLength().call() 
    setTotal(TotalCampaigns)
    for(var i = 0; i<TotalCampaigns; i++){
    var name = await contract.methods.getCampaignName(i).call()
    var desc = await contract.methods.getCampaignDesc(i).call()
    var Target = await contract.methods.getCampaignTargetAmount(i).call()
    var currentFunds = await contract.methods.getCampaignCurrentFunds(i).call()
    var Owners = await contract.methods.getGrantOwner(i).call()
    var inv = await contract.methods.getInvestors(i).call()
    var currMilestone = await contract.methods.getCampaignMilestones(i).call()
    var votes = await contract.methods.getApprovalCount(i).call()
    var CStatus = await contract.methods.getCampaignStatus(i).call()
    var invCount = await contract.methods.getInvestorsNumber(i).call()

    setCName((CName) => [...CName, name])
    setCDesc((CDesc) => [...CDesc, desc])
    setCTarget((CTarget) => [...CTarget, Target])
    setCcurrent((Ccurrent) => [...Ccurrent, currentFunds])
    setOwners((owners) => [...owners, Owners])
    setCurrentMilestone((currentMilestone) => [...currentMilestone, currMilestone])
    setCampaignStatus((campaignStatus) => [...campaignStatus, CStatus])
    setInvestors(inv)
    setApprovalVotes((approvalVotes) => [...approvalVotes, votes])
    setInvestorsCount((investorsCount) => [...investorsCount, invCount])

    if(Owners.includes(accounts[0])){
      var isOW = "true";
      setBoolOwners((boolOwners) => [...boolOwners, isOW])
    }
    else{
      var isOW = "false";
      setBoolOwners((boolOwners) => [...boolOwners, isOW])
    }
    if(inv.includes(accounts[0])){
      var isInv = "true";
      setBoolInvestors((boolInvestors) => [...boolInvestors, isInv])
    }
    else{
      var isInv = "false";
      setBoolInvestors((boolInvestors) => [...boolInvestors, isInv])
    }
  }
  }
  load()
  },[])
 
  const setContractDetails = async (event) => {
    event.preventDefault();
    let CampaignName = title;
    let description = content;
    let reqFund = web3.utils.toWei(target, 'ether');
    await cfContract.methods.createCampaign(CampaignName, description, reqFund).send({
      from: address
    });
  }

  function setTitle(event){
    settitle(event.target.value);
    }
  function setContent(event){
    setcontent(event.target.value);
    }
  function setTarget(event){
    settarget(event.target.value);
    }
  function setContribution(event){
    setcontribution(event.target.value);
    }

  return (
    
    <div className="container-fluid">

      <section id="head">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <a className="navbar-brand" href="#">
            <img className="brandimg" src="./images/logo.png" alt="fundpk-Logo" />
            <span style={stylename}>FundGrants</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#grants-title">Discover</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Create">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Contact</a>
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section id="mid-start">
        <div className="row">
            <div className="col-lg-6">
                <h1>Discover and Fund <br/> Extraodionary Public Goods</h1>
                <h2 style={{marginTop: "3%"}}>Fund new and exciting Projects <br/> in a secure way!</h2>
        <div className="buttons-discover">
            <a className="btn-discover-1 btn btn-lg btn-primary d-block d-sm-inline" href="#grants-title">View All Projects</a>
            <a className="btn-discover-1 btn btn-lg btn-primary d-block d-sm-inline" href="#Create">Create Project</a>
        </div>  
        </div>
        <div className="col-lg-6">
            <img className="main-img" src="https://s.gitcoin.co/static/v2/images/grants/gr13-banner-half-1.5b491d74b22a.png" alt=""/>
        </div>
        </div>

    </section>
      <div className="container-fluid">
      <div className="discover">
        <h2><strong>Discover Projects</strong></h2>
        <p>Popular and interesting Projects from the FundPK community</p>
        
        <div className="row">
            <div className="col-lg-3"></div>
           <div className="skill1 col-lg-2 col-md-6">
            <i className="discover-icon fa-regular fa-gem fa-4x"></i><br/>
            <a className="discover-link" href="">Undiscovered gems</a>
           </div>
           <div className="skill2 col-lg-2 col-md-6">
            <i className="discover-icon fa-solid fa-champagne-glasses fa-4x"></i><br/>
            <a className="discover-link" href="">Newest Projects</a>
           </div>
           <div className="skill3 col-lg-2 col-md-6">
            <i className="discover-icon fa-solid fa-fire-flame-curved fa-4x"></i><br/>
            <a className="discover-link" href="">Trending</a>
           </div>
           <div className="col-lg-3"></div>
           </div>
           </div>
           </div>


    <section id="Create">
    <div className="container create-container">
    <div className="title">Create Grant</div>
    <div className="content">
      <form>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Title</span>
            <input onChange={setTitle} type="text" name="title"/>
          </div>
          <div className="input-box">
            <span className="details">Content</span>
            <textarea onChange={setContent} name="content" rows="4" cols="75"></textarea>
          </div>
          <div className="input-box">
            <span className="details">Target <i className="fa-brands fa-ethereum"></i></span>
            <input type="text" onChange={setTarget} name="target" required/>
          </div>
        </div>
        <div className="button">
          <input onClick={setContractDetails} type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
  </section>

  <section id="YourContributions">
  <h2 id="yourcontributions-title">Your Contributions</h2>
  <div className="row container-fluid">
  {CName.map((Item, index) => {
        if(boolInvestors[index] == "true")
        return (
          <div style={{display: "inline-block"}} className="col-lg-4 Card">
          <a style={{fontSize:"25px"}}> Project Title</a> <br />
          <a style={{fontSize:"15px"}} id="Value">{Item}</a> <br />
          <a>Project Details</a> <br />
          <a style={{fontSize:"15px"}}>{CDesc[index]}</a> <br />
          <a>Target</a> <br />
          <a style={{fontSize:"15px"}}>{web3.utils.fromWei(CTarget[index], 'ether')} <i className="fa-brands fa-ethereum"></i></a> <br />
          <a>Amount Raised</a> <br/>
          <a style={{fontSize:"15px"}}>{web3.utils.fromWei(Ccurrent[index], 'ether')} <i className="fa-brands fa-ethereum"></i></a> <br />
          <a>Current Milestone</a> <br />
          <a style={{fontSize:"15px"}}>{currentMilestone[index]}/4</a> <br />
          <a>Withdraw Approval Votes</a> <br />
          <a style={{fontSize:"15px"}}>{approvalVotes[index]}/{investorsCount[index]}</a> <br />
          <p>50% votes are required to approve withdrawal by grant manager.</p>
          <button style={{marginBottom: "1rem"}} onClick={async function(){ {await cfContract.methods.giveApproval(index).send({
            from : address
          })}}}><a style={{fontSize: "20px"}}>Approve Withdrwal</a></button><br />
          <input type="text" onChange={setContribution} name="Contribution" required/>
          <button onClick={async function(){ 
            if (Ccurrent[index] !== CTarget[index]){
            {await cfContract.methods.InvestInCampaign(index).send({
            from : address,
            value: web3.utils.toWei(contribution, 'ether')
          })}
            }
            else{
              alert("Target has been met!")
            }
          }}><a style={{fontSize: "20px"}}>Fund Again</a></button> <br />
          <a>{campaignStatus[index]}</a>
          </div>
          );
      })}
      </div>
      
      </section>

  <section id="YourGrants">
<div className="row container-fluid">
<hr />
<h2 id="yourgrants-title">Your Grants</h2>
  {CName.map((Item, index) => {
    if(boolOwners[index] == "true")
        return (
          <div style={{display: "inline-block"}} className="col-lg-4 Card">
          <a style={{fontSize:"25px"}}> Project Title</a> <br />
          <a style={{fontSize:"15px"}} id="Value">{Item}</a> <br />
          <a>Project Details</a> <br />
          <a style={{fontSize:"15px"}}>{CDesc[index]}</a> <br />
          <a>Target</a> <br />
          <a style={{fontSize:"15px"}}>{web3.utils.fromWei(CTarget[index], 'ether')} <i className="fa-brands fa-ethereum"></i></a> <br />
          <a>Amount Raised</a> <br/>
          <a style={{fontSize:"15px"}}>{web3.utils.fromWei(Ccurrent[index], 'ether')} <i className="fa-brands fa-ethereum"></i></a> <br />
          <a>Current Milestone</a> <br />
          <a style={{fontSize:"15px"}}>{currentMilestone[index]}/4</a> <br />
          <a>Withdraw Approval Votes</a> <br />
          <a style={{fontSize:"15px"}}>{approvalVotes[index]}/{investorsCount[index]}</a> <br />
          <button onClick={async function(){ 
            {await cfContract.methods.updateMilestones(index).send({
            from : address
          })}}}>
          <a style={{fontSize: "20px"}}>+ Milestone</a></button>
          <button onClick={async function(){ {
            if(approvalVotes[index] >= investorsCount[index]/2 && approvalVotes !== 0){
            await cfContract.methods.retrieveMoney(index).send({
            from : address
          })}
          else{
            alert("Approval Votes have not met the 50% mark!")
          }
          }}}><a style={{fontSize: "20px"}}>Withdraw</a></button><br />
          <a>{campaignStatus[index]}</a> <br />
          <button onClick={async function(){ 
            {await cfContract.methods.EndCampaign(index).send({
            from : address
          })}}}>
          <a style={{fontSize: "20px"}}>End Campaign</a></button>
          </div>
        );
      })}
      </div>
      </section>

      <section id="Explorer">
      <div className="row container-fluid">
      <hr/> 
      <h2 id="grants-title">Grant Explorer</h2>
  
  {CName.map((Item, index) => {
        return (
          <div style={{display: "inline-block"}} className="col-lg-4 Card">
          <a style={{fontSize:"25px"}}> Project Title</a> <br />
          <a style={{fontSize:"15px"}} id="Value">{Item}</a> <br />
          <a>Project Details</a> <br />
          <a style={{fontSize:"15px"}}>{CDesc[index]}</a> <br />
          <a>Target</a> <br />
          <a style={{fontSize:"15px"}}>{web3.utils.fromWei(CTarget[index], 'ether')} <i className="fa-brands fa-ethereum"></i></a> <br />
          <a>Amount Raised</a> <br/>
          <a style={{fontSize:"15px"}}>{web3.utils.fromWei(Ccurrent[index], 'ether')} <i className="fa-brands fa-ethereum"></i></a> <br />
          <a>Current Milestone</a> <br />
          <a style={{fontSize:"15px"}}>{currentMilestone[index]}/4</a> <br />
          <input type="text" onChange={setContribution} name="Contribution" required/>
          <button onClick={async function(){ {await cfContract.methods.InvestInCampaign(index).send({
            from : address,
            value: web3.utils.toWei(contribution, 'ether')
          })}}}><a style={{fontSize: "20px"}}>Fund</a></button> <br />
          <a>{campaignStatus[index]}</a>
          </div>
        );
      })}
      </div>
      </section>

  </div>
  );
}

export default Navbar;