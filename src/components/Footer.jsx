import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#23272A] py-20 px-16">
        <div className="todo">
          <div className="infobox">
            <div className="routeSection">
              <h5>Product</h5>
              <a href="">Downlaod</a>
              <a href="">Nitro</a>
              <a href="">Status</a>
            </div>
            <div className="routeSection">
              <h5></h5>
              <a href="">About</a>
              <a href="">Jobs</a>
              <a href="">Branding</a>
              <a href="">Newsroom</a>
            </div>
            <div className="routeSection">
              <h5></h5>
              <a href="">College</a>
              <a href="">Support</a>
              <a href="">Safety</a>
              <a href="">Blog</a>
              <a href="">Feedback</a>
              <a href="">Developers</a>
              <a href="">StreamKit</a>
              <a href="">Creators</a>
              <a href="">Community</a>
            </div>
            <div className="routeSection">
              <h5>Polices</h5>
              <a href="">Terms</a>
              <a href="">Privacy</a>
              <a href="">Cookie Settings</a>
              <a href="">Guidelines</a>
              <a href="">Acknowledgements</a>
              <a href="">License</a>
              <a href="">Moderation</a>
            </div>
          </div>
        </div>
        <hr className="border-blue-700 w-8 mx-auto" />
      </footer>
    </>
  );
}

export default Footer;
