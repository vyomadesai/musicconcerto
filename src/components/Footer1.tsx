"use client";
import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
                  {/* First CTA */}
                  <div className="col-span-1 lg:col-span-2 mb-4">
                    <div className="p-4 rounded-lg shadow single-cta">
                      <i className="fas fa-map-marker-alt text-4xl mb-4"></i>
                      <div className="cta-text">
                        <h4 className="text-lg font-semibold">Find us</h4>
                        <span>
                          Shop no 101, Mhatre Complex A, Gate no 3, Near RK
                          Bazar, Casa rio Gold, Palava City, Dombivali (E),
                          421204
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Repeat the structure for other CTAs */}

                  {/* Second CTA */}
                  <div className="col-span-1 lg:col-span-2 mb-4">
                    <div className="p-4 rounded-lg shadow single-cta">
                      <i className="fas fa-phone text-4xl mb-4"></i>
                      <div className="cta-text">
                        <h4 className="text-lg font-semibold">Call us</h4>
                        <span>+91-8691814279</span>
                        {/* <br /> */}
                        <span>+91-8691814279</span>
                        {/* <br /> */}
                        <span>+91-7304690989</span>
                      </div>
                    </div>
                  </div>

                  {/* Third CTA */}
                  <div className="col-span-1 lg:col-span-2 mb-4">
                    <div className="p-4 rounded-lg shadow single-cta">
                      <i className="far fa-envelope-open text-4xl mb-4"></i>
                      <div className="cta-text">
                        <h4 className="text-lg font-semibold">Mail us</h4>
                        <span>abhijit.sonawane790@gmail.com</span>
                        {/* <br /> */}
                        <span>concertoacademy07@gmail.com</span>
                        {/* <br /> */}
                        {/* <span>Insta id: concerto_academy_of_music_</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>1010 Avenue, sw 54321, chandigarh</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone"></i>
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>9876543210 0</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open"></i>
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>mail@info.com</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html">
                        <Image
                          src="/LOGO.png"
                          className="img-fluid"
                          alt="logo"
                          width={1000}
                          height={1000}
                        />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                        We are privileged to have some of the gifted,
                        experienced and dedicated music teachers willing to be a
                        part of Team Concerto.
                      </p>
                    </div>
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <a href="#">
                        <i className="fab fa-facebook-f facebook-bg"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter twitter-bg"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-google-plus-g google-bg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Expert Team</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button>
                          <i className="fab fa-telegram-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>
                      Copyright &copy; 2024, All Right Reserved{" "}
                      <a href="https://codepen.io/anupkumar92/">CONCERTO</a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
