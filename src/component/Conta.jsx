function Conta() {
  return (
    <div>
<div className="container-fluid cont">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6"></div>
        <div className="col-md-3"></div>
      </div>
    </div>
 {/* contact div start */}
 <div className="container-fluid">
 <div className="row new">
      <div className="col-md-1"></div>
      <div className="col-md-3">
        <h5 className="con mb-3 py-3">CONTACT</h5>
        <hr/>
        <p>500 Terry Francine Street,<br/>San Francisco, CA 94158</p>
        <br/>
        <p>Tel: 123-456-7890 <br/>Fax: 123-456-7890</p>
        <p>info@mysite.com</p>
        <div className="mb-5">
          <a href="#" className="me-2 btn btn-outline-dark rounded-circle">
            <i className="fa-brands fa-twitter fa-fade fa-sm "></i>
          </a>
          <a href="#" className="me-2 btn btn-outline-dark rounded-circle">
            <i className="fa-brands fa-facebook-f fa-fade fa-sm"></i>
          </a>
          <a href="#" className="me-2 btn btn-outline-dark rounded-circle">
            <i className="fa-brands fa-instagram fa-fade fa-sm"></i>
          </a>
          <a href="#" className="me-2 btn btn-outline-dark rounded-circle">
            <i className="fa-brands fa-youtube fa-fade fa-sm"></i>
          </a>
        </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-6">
        <form action="" className="mt-3">
          <div>
            <label >Enter Your Name :</label>
            <input type="text" className="m-control  mt-1 mb-3 form-control" required/>
            <label >Enter Your Email* :</label>
            <input type="email" className="m-control mt-1 mb-3 form-control" required/>
            <label >Enter Your DOB* :</label>
            <input type="date" className="m-control  mt-1 mb-3 form-control" required/>
            <label >Enter Your Message* :</label>
            <input type="text" className="m-control  mt-1 mb-2 form-control" required/>
            <div className="text-end mb-3 cus">
              <button type="button" className="btn btn-outline-warning text-dark px-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-1"></div>
      </div>
 </div>
 {/* contact div end */}

    </div>
    
    
  )
}

export default Conta
