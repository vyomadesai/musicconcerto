import React from "react";
import Image from "next/image";
const AboutMe = () => {
  return (
    <>
      <section className="about-me" id="about-me">
        <div className="container">
          <div className="about-me-container">
            <br />
            <br />
            <div className="about-me-title">
              Abhijit Sonawale
              <br />
              <br />
            </div>

            <div className="about-me-flex-container">
              <div className="about-me-image">
                <div className="back-div"></div>
                <div className="black-image">
                  <Image
                    src="/abhijeet.jpeg"
                    alt="finallogo"
                    width={80}
                    height={40}
                  />
                </div>
                {/* <div className="main-image">
                  <Image
                    src="/abhijeet.jpeg"
                    alt="abhijeet"
                    width={140}
                    height={140}
                  />
                </div> */}
              </div>

              <div className="about-me-content">
                <div className="logo">
                  <Image
                    src="/LOGO.png"
                    alt="logoweb"
                    width={300}
                    height={410}
                  />
                </div>

                <div className="main-content">
                  Concerto Academy of Music is a collective of passionate music
                  enthusiasts with a mission to provide learning opportunities
                  to anyone with a passion for music, irrespective of their
                  income, location, personal, family, and work commitments.
                  <br />
                  <br />
                  Mr. Abhijit Sonawane has over 10 years of experience in the
                  field of music. Students receive invaluable guidance from him
                  in Western classical Piano, light music, Indian Music, and
                  keyboard. This institute is affiliated with Trinity College of
                  London and Gandharva Vidyalaya.
                </div>
              </div>
            </div>
            <div className="mail-button mail-button2">
              <a href="mailto:prajapatismit2906@gmail.com">
                <Image
                  src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg"
                  alt="mail"
                  width={80}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
