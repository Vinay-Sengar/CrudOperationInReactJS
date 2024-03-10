import React from 'react'

function Home() {
  return (
    <div>
      
  <div className="hero_area">
    {/* <!-- header section strats --> */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand" href="index.html">
            <span>
              Esigned
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="do.html"> What we do </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html"> Portfolio </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact us</a>
                </li>
              </ul>
              <div className="user_option">
                <a href="">
                  <img src="images/user.png" alt=""/>
                </a>
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* <!-- end header section -->
    <!-- slider section --> */}
    <section className=" slider_section position-relative">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>
                        welcome to

                      </h2>
                      <h1>
                        web agency
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                      </p>
                      <div className="">
                        <a href="">
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>
                        welcome to

                      </h2>
                      <h1>
                        web agency
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                      </p>
                      <div className="">
                        <a href="">
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col">
                  <div className="detail-box">
                    <div>
                      <h2>
                        welcome to

                      </h2>
                      <h1>
                        web agency
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                      </p>
                      <div className="">
                        <a href="">
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- end slider section --> */}
  </div>
{/* 
  <!-- do section --> */}

  <section className="do_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          What we do
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna
        </p>
      </div>
      <div className="do_container">
        <div className="box arrow-start arrow_bg">
          <div className="img-box">
            <img src="images/d-1.png" alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              Marketing
            </h6>
          </div>
        </div>
        <div className="box arrow-middle arrow_bg">
          <div className="img-box">
            <img src="images/d-2.png" alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              Development
            </h6>
          </div>
        </div>
        <div className="box arrow-middle arrow_bg">
          <div className="img-box">
            <img src="images/d-3.png" alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              Html5
            </h6>
          </div>
        </div>
        <div className="box arrow-end arrow_bg">
          <div className="img-box">
            <img src="images/d-4.png" alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              Css
            </h6>
          </div>
        </div>
        <div className="box ">
          <div className="img-box">
            <img src="images/d-5.png" alt=""/>
          </div>
          <div className="detail-box">
            <h6>
              Wordpress
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
{/* 
  <!-- end do section -->

  <!-- who section --> */}

  <section className="who_section ">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/who-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-7">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                WHO WE ARE?
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud
            </p>
            <div>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{/* 
  <!-- end who section -->


  <!-- work section --> */}
  <section className="work_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          CREATIVE WORKS
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>
      <div className="work_container layout_padding2">
        <div className="box b-1">
          <img src="images/w-1.png" alt=""/>
        </div>
        <div className="box b-2">
          <img src="images/w-2.png" alt=""/>

        </div>
        <div className="box b-3">
          <img src="images/w-3.png" alt=""/>

        </div>
        <div className="box b-4">
          <img src="images/w-4.png" alt=""/>

        </div>
      </div>
    </div>
  </section>
{/* 
  <!-- end work section -->

  <!-- client section --> */}
  <section className="client_section">
    <div className="container">
      <div className="heading_container">
        <h2>
          WHAT CUSTOMERS SAY
        </h2>
      </div>
      <div className="carousel-wrap ">
        <div className="owl-carousel">
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="images/c-1.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Tempor incididunt <br/>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
                <img src="images/quote.png" alt=""/>
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="images/c-2.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Tempor incididunt <br/>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
                <img src="images/quote.png" alt=""/>
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="img-box">
                <img src="images/c-3.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                  Tempor incididunt <br/>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
                <img src="images/quote.png" alt=""/>
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end client section -->

  <!-- target section --> */}
  <section className="target_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>
              1000+
            </h2>
            <h5>
              Years of Business
            </h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>
              20000+
            </h2>
            <h5>
              Projects Delivered
            </h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>
              10000+
            </h2>
            <h5>
              Satisfied Customers
            </h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="detail-box">
            <h2>
              1500+
            </h2>
            <h5>
              Cups of Coffee
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end target section -->


  <!-- contact section --> */}

  <section className="contact_section layout_padding">
    <div className="container">

      <div className="heading_container">
        <h2>
          Request A Call Back
        </h2>
      </div>
      <div className="">
        <div className="">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="contact-form">
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name "/>
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number"/>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address"/>
                  </div>
                  <div>
                    <input type="text" placeholder="Message" className="input_message"/>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn_on-hover">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map_img-box">
        <img src="images/map-img.png" alt=""/>
      </div>
    </div>
  </section>

{/* 
  <!-- end contact section -->


  <!-- info section --> */}
  <section className="info_section ">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div className="img-box">
                <img src="images/location-white.png" width="18px" alt=""/>
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/telephone-white.png" width="12px" alt=""/>
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/envelope-white.png" width="18px" alt=""/>
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="info_insta">
            <h5>
              Instagram
            </h5>
            <div className="insta_container">
              <div>
                <a href="">
                  <div className="insta-box b-1">
                    <img src="images/insta.png" alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-2">
                    <img src="images/insta.png" alt=""/>
                  </div>
                </a>
              </div>

              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src="images/insta.png" alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src="images/insta.png" alt=""/>
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div className="insta-box b-3">
                    <img src="images/insta.png" alt=""/>
                  </div>
                </a>
                <a href="">
                  <div className="insta-box b-4">
                    <img src="images/insta.png" alt=""/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href="">
                <img src="images/fb.png" alt=""/>
              </a>
              <a href="">
                <img src="images/twitter.png" alt=""/>
              </a>
              <a href="">
                <img src="images/linkedin.png" alt=""/>
              </a>
              <a href="">
                <img src="images/youtube.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end info_section --> */}

    </div>
  )
}

export default Home
