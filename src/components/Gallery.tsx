"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import $ from "jquery";

// Extend the jQuery type to include the 'modal' property
interface JQueryModal extends JQuery<HTMLElement> {
  modal: () => void;
}

const Gallery = () => {
  //   useEffect(() => {
  //     $(document).ready(function () {
  //       $("Image").click(function () {
  //         var t = $(this).attr("src");
  //         $(".modal-body").html(
  //           "<Image src='" + t + "' className='modal-img' />"
  //         );
  //         ($("#myModal") as JQueryModal).modal();
  //       });

  //       $("video").click(function () {
  //         var v = $("video > source");
  //         var t = v.attr("src");
  //         $(".modal-body").html(
  //           "<video className='model-vid' controls><source src='" +
  //             t +
  //             "' type='video/mp4'></source></video>"
  //         );
  //         ($("#myModal") as JQueryModal).modal();
  //       });
  //     });
  //   }, []);

  return (
    <>
      <div>
        <h1>
          Elevate your musical journey with expert guidance in Western classical
          piano, light music, Indian music, and keyboard—a symphony of knowledge
          awaits!
        </h1>
        <div id="gallery" className="container-fluid">
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
            width={1000}
            height={1000}
          />
          <Image
            src="/concerto/2.jpeg"
            className="Image-responsive"
            alt="logoweb"
            width={1000}
            height={1000}
          />
          <Image
            src="/concerto/3.jpeg"
            className="Image-responsive"
            alt="logoweb"
            width={1000}
            height={1000}
          />
          {/* <video className="vid" controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            ></source>
          </video> */}
          <Image
            src="/concerto/4.jpeg"
            className="Image-responsive"
            alt="logoweb"
            width={1000}
            height={1000}
          />
          <Image
            src="/concerto/5.jpeg"
            className="Image-responsive"
            alt="logoweb"
            width={1000}
            height={1000}
          />
          <Image
            src="/concerto/6.jpeg"
            className="Image-responsive"
            alt="logoweb"
            width={1000}
            height={1000}
          />
          <Image
            src="/concerto/7.jpeg"
            className="card Image-responsive"
            alt="logoweb"
            width={1000}
            height={1000}
          />
          {/* <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          />
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          />
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          />
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          />
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          />
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          />
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          />
          <Image
            src="/concerto/1.jpeg"
            className="Image-responsive"
            alt="logoweb"
           width={1000}
            height={1000}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;
