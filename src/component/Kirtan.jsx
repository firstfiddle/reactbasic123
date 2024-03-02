 

function Kirtan() {
  return (
    <div>
         {/* img kirtan */}
         <div className="container-fluid kr">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6"></div>
            <div className="col-md-3"></div>
        </div>
    </div>  
    {/* kirtan class */}

    <div className="container mt-5 mb-5">
        <h2 className="text-center">Kirtan<b className="text-warning"> Meditation</b></h2>
        <br/>
        <div className="row">
            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr1.jfif"
                    alt="img1" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>

            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr2.jfif"
                    alt="img2" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>

            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr3.jfif"
                    alt="img3" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>

            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr4.jfif"
                    alt="img4" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr1.jfif"
                    alt="img1" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>

            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr2.jfif"
                    alt="img2" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>

            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr3.jfif"
                    alt="img3" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>

            <div className="col-md-3 mb-3">
                <img 
                    src="/image/kr4.jfif"
                    alt="img4" className="w-100 shadow-lg border border-info rounded box1 h3"/>
            </div>
        </div>
        
    </div>
{/*  means f kirtan */}

<div className=" container-fluid bg-dark mt-4 cc">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
                <h1 className="text-light mt-5 mb-3">What is Kirtan?</h1>
                <p className="text-light text-center add">
                    Kirtan is the singing of ancient Vedic mantras, spiritually uplifting songs, prayers and the Sacred
                    Names of the Supreme. Rather than being a type of performance, Kirtan is a journey of self
                    discovery.
                </p>
                <p className="text-light text-center add">
                    Kirtan is the singing of ancient Vedic mantras, spiritually uplifting songs, prayers and the Sacred
                    Names of the Supreme. Rather than being a type of performance, Kirtan is a journey of self
                    discovery.
                </p>

                <button className="btn btn-warning mt-3 mb-5">Know More...</button>
            </div>
            <div className="col-md-2"></div>

        </div>
    </div>
        
        {/* join div start */}
        <div className="container-fluid ">
        <div className="row">
            <div className="col-md-6 krimg">

            </div>
            <div className="col-md-6 kir">
                <h1 className="mx-2 mb-5 mg">
                    <span className="add text-light">Join Us At The Mantra Room</span>
                </h1>
                <button className="btn btn-warning border-0">Find A Center Nearyou </button>
            </div>
        </div>

    </div>
        
     </div>
  )
}

export default Kirtan