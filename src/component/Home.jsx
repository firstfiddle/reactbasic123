function Home() {
  return (
    <div>
      {/* carousel start */}
      <div
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        id="z"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#z"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#z"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#z"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-inverval="2000">
            <img className="w-100 h13" src="image/slide1.jpg" alt="" />
          </div>
          <div className="carousel-item " data-bs-inverval="2000">
            <img className="w-100 h13" src="image/slide2.jpg" alt="" />
          </div>
          <div className="carousel-item" data-bs-inverval="2000">
            <img className="w-100 h13" src="image/slide3.jpg" alt="" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          data-bs-target="#z"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#z"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      {/* welcome start*/}

      <div className="container my-3">
        <h2 className="text-center h">
          WELCOME TO <b className="text-warning">YOGA WORLD</b>
        </h2>
        <br />
        <div className="row">
          <div className="col-md-3 mb-3">
            <img
              src="image/h1.jpg"
              alt="img1"
              className="w-100 shadow-lg border border-info rounded box"
            />
          </div>

          <div className="col-md-3 mb-3">
            <img
              src="image/h2.jpg"
              alt="img2"
              className="w-100 shadow-lg border border-info rounded box"
            />
          </div>

          <div className="col-md-3 mb-3">
            <img
              src=" image/h3.jpg"
              alt="img3"
              className="w-100 shadow-lg border border-info rounded box"
            />
          </div>

          <div className="col-md-3 mb-3 box">
            <img
              src="image/h4.jpg"
              alt="img4"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 mb-3 box">
            <img
              src="image/h5.jpg"
              alt="img1"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>

          <div className="col-md-3 mb-3 box">
            <img
              src="image/h6.jpg"
              alt="img2"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>

          <div className="col-md-3 mb-3 box">
            <img
              src="image/h7.jpg"
              alt="img3"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>

          <div className="col-md-3 mb-3 box">
            <img
              src="image/h8.jpg"
              alt="img4"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3 box">
            <img
              src="image/h4.jpg"
              alt="img4"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>
          <div className="col-md-3 mb-3 box">
            <img
              src="image/h10.jpg"
              alt="img1"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>

          <div className="col-md-3 mb-3 box">
            <img
              src="image/h11.jpg"
              alt="img2"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>

          <div className="col-md-3 mb-3 box">
            <img
              src="image/h3.jpg"
              alt="img3"
              className="w-100 shadow-lg border border-info rounded"
            />
          </div>
        </div>
      </div>

      {/* begginer program */}

      <div className="container mt-3">
        <div className="row">
          <h1 className="text-secondary text-center bg-warning py-3  rounded-circle mt-3 mb-5">
            Beginner and Advanced Programs
          </h1>
          <div className="col-md-4 mb-3">
            <div className="card rdxin shadow-lg ">
              <img className="box1" src="image/b1.webp" alt="" />
              <div className="card-body">
                <h6>AMP 4 Days</h6>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-location-dot fa-beat"></i>
                  </span>
                  Siddhivinayak palace, Paratwada Akola highway, Paratwada,
                  Maharashtra, India,
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-globe fa-beat"></i>
                  </span>{" "}
                  Hindi
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-regular fa-clock fa-beat"></i>
                  </span>{" "}
                  02 Nov - 05 Nov 06:00 AM - 09:00 PM
                </p>
                <h5>
                  <del className="text-danger">5000</del>
                  <sup className="text-success me-5">₹3,500*</sup>
                  <span>
                    <button
                      type="button"
                      className="btn btn-warning px-5 rounded-circle"
                    >
                      Register
                    </button>
                  </span>
                </h5>
                <p className="fg">
                  *Your contribution benefits a host of social projects
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card rdxin shadow-lg">
              <img className="box1" src="image/b2.webp" alt="a" />
              <div className="card-body">
                <h6>AMP 4 Days</h6>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-location-dot fa-beat"></i>
                  </span>
                  Siddhivinayak palace, Paratwada Akola highway, Paratwada,
                  Maharashtra, India,
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-globe fa-beat"></i>
                  </span>{" "}
                  Hindi
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-regular fa-clock fa-beat"></i>
                  </span>{" "}
                  02 Nov - 05 Nov 06:00 AM - 09:00 PM
                </p>
                <h5>
                  <del className="text-danger">5000</del>
                  <sup className="text-success me-5">₹3,500*</sup>
                  <span>
                    <button
                      type="button"
                      className="btn btn-warning px-5 rounded-circle"
                    >
                      Register
                    </button>
                  </span>
                </h5>
                <p className="fg">
                  *Your contribution benefits a host of social projects
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rdxin shadow-lg">
              <img className="box1" src="image/b3.webp" alt="" />
              <div className="card-body">
                <h6>AMP 4 Days</h6>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-location-dot fa-beat"></i>
                  </span>
                  Siddhivinayak palace, Paratwada Akola highway, Paratwada,
                  Maharashtra, India,
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-globe fa-beat"></i>
                  </span>{" "}
                  Hindi
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-regular fa-clock fa-beat"></i>
                  </span>{" "}
                  02 Nov - 05 Nov 06:00 AM - 09:00 PM
                </p>
                <h5>
                  <del className="text-danger">5000</del>
                  <sup className="text-success me-5">₹3,500*</sup>
                  <span>
                    <button
                      type="button"
                      className="btn btn-warning px-5 rounded-circle"
                    >
                      Register
                    </button>
                  </span>
                </h5>
                <p className="fg">
                  *Your contribution benefits a host of social projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card rdxin shadow-lg">
              <img className="w-100 box1" src="image/b4.jpg" alt="" />
              <div className="card-body">
                <h6>AMP 4 Days</h6>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-location-dot fa-beat"></i>
                  </span>
                  Siddhivinayak palace, Paratwada Akola highway, Paratwada,
                  Maharashtra, India,
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-globe fa-beat"></i>
                  </span>{" "}
                  Hindi
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-regular fa-clock fa-beat"></i>
                  </span>{" "}
                  02 Nov - 05 Nov 06:00 AM - 09:00 PM
                </p>
                <h5>
                  <del className="text-danger">5000</del>
                  <sup className="text-success me-5">₹3,500*</sup>
                  <span>
                    <button
                      type="button"
                      className="btn btn-warning px-5 rounded-circle"
                    >
                      Register
                    </button>
                  </span>
                </h5>
                <p className="fg">
                  *Your contribution benefits a host of social projects
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card rdxin shadow-lg">
              <img className="w-100 box1" src="image/b5.jpg" alt="" />
              <div className="card-body">
                <h6>AMP 4 Days</h6>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-location-dot fa-beat"></i>
                  </span>
                  Siddhivinayak palace, Paratwada Akola highway, Paratwada,
                  Maharashtra, India,
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-globe fa-beat"></i>
                  </span>{" "}
                  Hindi
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-regular fa-clock fa-beat"></i>
                  </span>{" "}
                  02 Nov - 05 Nov 06:00 AM - 09:00 PM
                </p>
                <h5>
                  <del className="text-danger">5000</del>
                  <sup className="text-success me-5">₹3,500*</sup>
                  <span>
                    <button
                      type="button"
                      className="btn btn-warning px-5 rounded-circle"
                    >
                      Register
                    </button>
                  </span>
                </h5>
                <p className="fg">
                  *Your contribution benefits a host of social projects
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rdxin shadow-lg">
              <img className="w-100 box1" src="image/b6.jpg" alt="" />
              <div className="card-body">
                <h6>AMP 4 Days</h6>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-location-dot fa-beat"></i>
                  </span>
                  Siddhivinayak palace, Paratwada Akola highway, Paratwada,
                  Maharashtra, India,
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-solid fa-globe fa-beat"></i>
                  </span>{" "}
                  Hindi
                </p>
                <p className="text-secondary">
                  <span className="text-warning">
                    <i className="fa-regular fa-clock fa-beat"></i>
                  </span>{" "}
                  02 Nov - 05 Nov 06:00 AM - 09:00 PM
                </p>
                <h5>
                  <del className="text-danger">5000</del>
                  <sup className="text-success me-5">₹3,500*</sup>
                  <span>
                    <button
                      type="button"
                      className="btn btn-warning px-5 rounded-circle"
                    >
                      Register
                    </button>
                  </span>
                </h5>
                <p className="fg">
                  *Your contribution benefits a host of social projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* what is yoga titile */}
      <div className=" container-fluid bg-dark mt-4 ccd">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            <h1 className="text-danger mt-5 mb-3">What is Yoga?</h1>
            <h2 className="text-light text-center add">
              Kirtan is the singing of ancient Vedic mantras, spiritually
              uplifting songs, prayers and the Sacred Names of the Supreme.
              Rather than being a type of performance, Kirtan is a journey of
              self discovery.
            </h2>
            <h4 className="text-dark text-center add">
              a spiritual discipline based on an extremely subtle science, which
              focuses on bringing harmony between mind and body.
            </h4>
            <button className="btn btn-warning mt-3 mb-5">Know More...</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      {/* yoga for daily route */}

      <div className="container-fluid">
        <div className="row mt-1  shadow-lg flex">
          <div className="col-md-5 py-3">
            <div className="carousel slide" data-bs-ride="carousel" id="xx">
              <div className="carousel-inner">
                <div className="carousel-item " data-bs-inverval="2000">
                  <img className="w-100 h7" src="image/11.jpg" alt="" />
                </div>
                <div className="carousel-item active " data-bs-inverval="2000">
                  <img className="w-100 h7" src="image/12.webp" alt="" />
                </div>
                <div className="carousel-item" data-bs-inverval="2000">
                  <img className="w-100 h7" src="image/13.jpg" alt="" />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                data-bs-target="#xx"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                data-bs-target="#xx"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          <div className="col-md-7 py-3">
            <h2>Yoga For Daily Routine</h2>
            <br />
            <p className="ad">
              If you are dealing with lower back pain, yoga may be just what the
              doctor ordered. Yoga is a mind-body therapy that’s often
              recommended to treat not only back pain but the stress that
              accompanies it. Practicing yoga for even a half hour a day can
              help you gain more awareness of your body.
            </p>
            <button
              type="button"
              className="btn btn-outline-danger px-3 rounded-circle"
            >
              Explore
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
