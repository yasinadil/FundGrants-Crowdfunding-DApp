import React from "react";

function Footer(){
    const stylename = {
        background: "#77A1D3",
        background: "-webkit-linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)",
        background: "linear-gradient(to right, #0F0C29, #77A1D3, #0F0C29)"
  };
    return (
    <footer className="text-center text-lg-start" style={stylename}>
    <div className="container d-flex justify-content-center py-5">
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" href="https://www.facebook.com/ITzAdil205/" style={{backgroundColor: "#54456b"}}>
      <i className="fab fa-facebook-f"></i>
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" href="https://www.youtube.com/channel/UCB2C13Xa5Xxpcimk0QU2HsQ" style={{backgroundColor: "#54456b"}}>
      <i className="fab fa-youtube"></i>
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" href="https://www.instagram.com/_adilyasin/?hl=en" style={{backgroundColor: "#54456b"}}>
      <i className="fab fa-instagram"></i>
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" href="https://twitter.com/yasinaisha205" style={{backgroundColor: "#54456b"}}>
      <i className="fab fa-twitter"></i>
    </button>
  </div>

  <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a style={{fontSize: "18px"}} className="text-white"> Adil Yasin</a>
  </div>

</footer>
);
}

export default Footer;