 

function Meditation() {
  return (
    <div>
           {/* img medi start */}
           <div className="container-fluid medi ">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-9"></div>
    </div>
  </div>

  {/* meditaiton stat */}
     
  <div className="container mt-3">
  <marquee direction=""
      className="bg-warning py-1 px-5 fs-1 text-success rounded-circle mb-3">GOOD MORNING EVERYONE !</marquee>
    <div className="row">
      <div className="col-md-3 mb-3">
        <div className="rdx">
          <img className="w-100 h15"
            src="image/m1.jfif"
            alt=""/>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <img className="w-100 mb-3 rdxx box1"
         src="image/m2.jfif"
          alt=""/>
        <img className="w-100 rdxx box1 h8"
          src="image/m3.jfif"
          alt=""/>
      </div>
      <div className="col-md-3 mb-3">
        <img className="w-100 mb-1 rdxx box1"
           src="image/m4.jfif"
          alt=""/>
        <img className="w-100 rdxx box1"
          src="image/m5.jfif"
          alt=""/>
      </div>
      <div className="col-md-3 mb-3">
        <img className="w-100 h-100 rdx"
           src="image/m6.jpg" alt=""/>
      </div>
    </div>
  </div>

  {/* guide */}  
  <div className="container-fluid bg-secondary">
    <div className="row">
      <div className="col-md-5 py-3">
        <div className="carousel slide boxsh" data-bs-ride="carousel" id="z">
          <div className="carousel-inner">
            <div className="carousel-item " data-bs-inverval="2000">
              <img className="w-100 h7"
                src="image/11.jpg" alt=""/>
            </div>
            <div className="carousel-item active " data-bs-inverval="2000">
              <img className="w-100 h7"
                src="image/12.webp"
                alt=""/>
            </div>
            <div className="carousel-item" data-bs-inverval="2000">
              <img className="w-100 h7"
                src="image/13.jpg" alt=""/>
            </div>

          </div>

          <button className="carousel-control-prev" data-bs-target="#z" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" data-bs-target="#z" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 py-5">
        <h1 className="text-light">Guided Meditation</h1>
        <p className="text-light jk">It can be hard to get started with a
          meditation on your own if you have not learned any type of meditation technique or having someone to guide you.
          Gurudev Sri Sri Ravi Shankar, the founder of the Art of Living, is an expert at leading people into meditation
          in an effortless manner and has done so for millions of people worldwide.</p>
        <h2 className="text-warning">Experience Meditation</h2>
      </div>
      <div className="col-md-1"></div>

    </div>
  </div>

    </div>
  )
}

export default Meditation