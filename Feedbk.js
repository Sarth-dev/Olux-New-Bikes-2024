function Feedbk() {
    return(
        <>
            <div className="feedbk">
            <div className="txtfk">
            <h1>Feedback</h1>
            <p>It's Helps us to Provide you Better Service</p>
            </div>
            <div className="fbkcontent">
                <form action="form.php" method="post">
                <input type="text" placeholder="Enter Your name" />
                <input type="number" placeholder="Enter Your Age" />
                <input type="email" placeholder="Enter Your Email" />
                <input type="number" placeholder="Enter Your Mobile No." />
                <textarea name="fbk" id="fbk" cols="30" rows="10" placeholder="Your Opinion"></textarea>
                <input type="button" id="buttonfbk" value="Submit" placeholder="Submit" />
                </form>
                
            </div>
            </div>
        </>
    )
    
}
export default Feedbk;