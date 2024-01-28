/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
    return(
        <>
           <div className="navbar">
           <h1>olux</h1>
           <div className="navtab">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#"> Mileage Bikes</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Cruisers</a></li>
                <li><a href="#">Electric</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div className="log">
                <button><a href="#">Login</a></button>
                <button id="sold"><a href="#">+SELL</a></button>
            </div>
           </div>

           
           </div>
        </>
    )
    
}
export default Navbar;