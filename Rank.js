/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Rank() {
  return (
    <>
      <div className="rank">
        <h1>Featured Bikes</h1>
        <div className="featurednav">
          <h3>Trending</h3>
          <div className="underscale"></div>
          <div className="contenttrend">
            <div className="raider">
              <img src="./tvs raider.webp" alt="Tvs Raider" />
              <div className="raidtext">
                <a href="#">
                  <h5>TVs Raider 125</h5>
                </a>
                <h6>₹ 96,500</h6>
                <p>Onwards</p>
                <h3>Avg.Ex-Showroom price</h3>
                <a href="#"><button>Buy</button></a>
              </div>
            </div>
            <div className="raider2">
              <img src="./hunter350re.webp" alt="Hunter 350 " />
              <div className="raidtext">
                <a href="#">
                  <h5>Royal Enfield Hunter 350</h5>
                </a>
                <h6>₹ 1,49,900</h6>
                <p>Onwards</p>
                <h3>Avg.Ex-Showroom price</h3>
                <a href="#"><button>Buy</button></a>
              </div>
            </div>
            <div className="raider3">
              <img src="./yamaha mt15.webp" alt="Yamaha MT 15 " />
              <div className="raidtext">
                <a href="#">
                  <h5>Yamaha MT 15 V2</h5>
                </a>
                <h6>₹ 1,68,708</h6>
                <p>Onwards</p>
                <h3>Avg.Ex-Showroom price</h3>
                <a href="#"><button>Buy</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rank;
