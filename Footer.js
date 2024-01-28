/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot">
          <div className="upper">
            <a href="#">
              <h1>olux</h1>
            </a>
            <a href="https://www.olx.in/en-in">
              <h1>Carwale</h1>
            </a>
            <a href="#">
              <h1>Bikewale</h1>
            </a>
            <a href="#">
              <h1>Mobility outlook</h1>
            </a>
          </div>
          <hr id="horizline" />
          <div className="midde">
            <div className="midleft">
              <a href="#">
                <h1>About Us</h1>
              </a>
              <a href="#">
                <h1>Advertise</h1>
              </a>
            </div>
            <div className="midright">
              <div className="lin">
                <h5>Download Mobile App</h5>
                <a href="#">
                  <img src="./app-store.svg" alt="App Store" />
                </a>
                <a href="#">
                  <img id="pls" src="./play-store.svg" alt="Play Store" />
                </a>
                <h4>Connect with us</h4>
                <div className="socialicon">
                  <img
                    src="./social media icon/icons8-facebook-100.png"
                    alt="facebook"
                  />
                  <img
                    src="./social media icon/icons8-twitter-circled-100.png"
                    alt="Twitter"
                  />
                  <img
                    src="./social media icon/icons8-linkedin-100.png"
                    alt="Linkedin"
                  />
                  <img
                    src="./social media icon/icons8-youtube-100.png"
                    alt="Youtube"
                  />
                  <img
                    src="./social media icon/icons8-instagram-100.png"
                    alt="Instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr id="horizline2" />
      </div>
    </>
  );
}
export default Footer;
