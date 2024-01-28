/* eslint-disable jsx-a11y/anchor-is-valid */
function Electslider() {
    return(
        <>
            <div className="electslider">
            
            <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src=".//jou e bike.webp" class="d-block" alt="..."/>
      <div class="carousel-caption ">
        <div className="tbn">
        <a href="#"><h5>Joy e-bike Monster</h5></a>
       <p><img src="./icons8-star.gif" alt="" /> 3.7/5</p>
       <h6>Ratings</h6>
       <h4>25 Kmph|75 Km|93 kg|4.5 Hrs</h4>
       <h3>₹ 1,00,500</h3>
       <button>Check on site</button>
        </div>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src=".//odysse-evoqis.webp" class="d-block" alt="..."/>
      <div class="carousel-caption">
      <div className="tbn">
        <a href="#"><h5>Odysse Evoqis</h5></a>
       <p><img src="./icons8-star.gif" alt="" /> 4/5</p>
       <h6>31 Ratings</h6>
       <h4>80 Kmph|140 Km|150 kg|6 Hrs</h4>
       <h3>₹ 1,71,250</h3>
       <button>Check on site</button>
        </div>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src=".//rv-400 ebike.webp" class="d-block" alt="..."/>
      <div class="carousel-caption">
      <div className="tbn">
        <a href="#"><h5>Revolt RV 400</h5></a>
       <p><img src="./icons8-star.gif" alt="" /> 4.1/5</p>
       <h6>300 Ratings</h6>
       <h4>85 Kmph|150 Km|108 kg|4.5 Hrs</h4>
       <h3>₹ 1,37,950</h3>
       <button>Check on site</button>
        </div>
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </>
    )
    
}
export default Electslider;