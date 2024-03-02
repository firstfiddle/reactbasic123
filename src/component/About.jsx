 

function About() {
  return (
    <div>
    
  <div className="container-fluid about">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6"></div>
      <div className="col-md-3"></div>
    </div>
  </div>

   {/* meet the founder */}
   <div className="container my-5">
    <div className="row ">
      <div className="col-md-6 py-3 bg-warning mb-3">
        <img className="w-100 h-100"
          src="../image/meet.webp"
          alt=""/>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5">
        <h5 className="add"> <span className="fs-1 text-danger fh">Hello,</span>Im David Procyshyn,
          Ravis founder. Yoga came to me when I injured my lower back for the third time, at 18 years old. I
          spent weeks on my back, taking pain killers, enduring boredom, feeling frustrated and contemplating my life. I
          didn’t know it then, but this was the wake up call I needed. If I were to avoid a life of chronic back pain, I
          would need to make some different choices.
          <br/> <br/>Until then, my life was full of activities that were hard on my body - contact sports (mainly hockey
          and football), physically-demanding jobs and paying little attention to posture, diet and well being.
        </h5>
      </div>
    </div>
  </div>
  {/* founder end */}
  {/* details start */}
  <div className="container-fluid">
    <h1 className="text-secondary">Find what moves you</h1>
    <span><i className="fa-solid fa-arrow-right fa-beat fa-lg"></i></span>
    <div className="row mt-3">
      <div className="col-md-4 mb-3">
        <div className="card">
          <img className="w-100"
            src="../image/about.jpg"
            alt=""/>
          <div className="card-body">
            <h3>Fiji McAlpine</h3>
            <hr/>
            <p>Vinyasa, Power, Meditation, YTT</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card">
          <img className="w-100"
            src="../image/s2.jpg"
            alt=""/>
          <div className="card-body">
            <h3>Fiji McAlpine</h3>
            <hr/>
            <p>Vinyasa, Power, Meditation, YTT</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card">
          <img className="w-100"
            src="../image/s3.jpg"
            alt=""/>
          <div className="card-body">
            <h3>Fiji McAlpine</h3>
            <hr/>
            <p>Vinyasa, Power, Meditation, YTT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <h1 className="text-center text-secondary mb-3">Our Instructors</h1>
    <div className="row">
      <div className="col-md-3 mb-3">
        <div className="card">
          <img className="w-100"
            src="../image/1.jpg
            "
            alt=""/>
          <div className="card-body">
            <h3>Fiji McAlpine</h3>
            <hr/>
            <p>Vinyasa, Power, Meditation, YTT</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card">
          <img className="w-100"
            src="../image/2.jpg"
            alt=""/>
          <div className="card-body">
            <h3>Fiji McAlpine</h3>
            <hr/>
            <p>Vinyasa, Power, Meditation, YTT</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card">
          <img className="w-100"
            src="../image/3.jpg"
            alt=""/>
          <div className="card-body">
            <h3>Fiji McAlpine</h3>
            <hr/>
            <p>Vinyasa, Power, Meditation, YTT</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img className="w-100"
            src="../image/4.jpg"
            alt=""/>
          <div className="card-body">
            <h3>Fiji McAlpine</h3>
            <hr/>
            <p>Vinyasa, Power, Meditation, YTT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    </div>
  )
}

export default About