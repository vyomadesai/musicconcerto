// components/AboutUsPage.js
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <Image
            src="/abhijeet.jpeg" // Replace with the path to your team image
            alt="Team Image"
            width={200} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className="rounded-full"
          />
        </div>

        <h2 className="text-3xl font-bold mb-4">About Our Team</h2>
        <p className="text-gray-600 text-center">
          We are a passionate team dedicated to creating amazing things. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
