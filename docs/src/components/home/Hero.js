import React from "react";
import { Link } from "gatsby";

export default function Hero() {
  return (
    <>
      <div className="px-3 pt-10 pb-5 mb-5 flex px-5">
        <div className="mt-5 flex max-w-screen-xl mx-auto">
          <div className="mt-0 md:mt-10 mt-md-4 mt-md-5 flex-grow text-center md:text-left">
            <a
              href="https://www.producthunt.com/posts/magnus-ui"
              target="_blank"
              className="flex items-center justify-center md:justify-start"
            >
              <img
                src="/images/ph-cat.png"
                className="mx-3"
                style={{ height: 100 }}
              />
              <div className="ml-3">
                <div
                  className="px-2 py-1 rounded-md text-sm inline-flex items-center"
                  style={{ background: "#DA552F" }}
                >
                  <span className="text-white ml-1 flex-1 flex items-center">
                    We are live on Product Hunt!
                  </span>
                </div>
                <span className="text-gray-600 ml-1 flex-1 flex items-center mt-2">
                  It will be a real help if you could support us 👉
                </span>
              </div>
            </a>
            <h1 className="pt-5 text-3xl md:text-4xl font-bold font-nunito">
              A Utility-First React Native UI Framework
            </h1>
            <p className="mt-5 text-gray-600 font-nunito">
              Magnus UI is the ultimate UI framework that helps you in building
              consistent user interfaces effortlessly in react native.
            </p>
            <div className="block md:flex mt-10">
              <Link
                to="/docs/getting-started/"
                className="bg-primary-500 text-white block py-3 min-w-200 text-center rounded-lg"
              >
                Get started
              </Link>
              <a
                href="https://github.com/jsartisan/react-native-magnus"
                target="_blank"
                className="bg-white rounded-lg hover:bg-gray-100 flex items-center justify-center text-center mx-0 md:mx-3 block py-2 mt-3 md:mt-0 min-w-200"
                style={{
                  color: "black",
                  border: "1px solid #e1e1e1",
                }}
              >
                <i className="icon-github text-xl text-gray-600" />
                <span className="ml-3">Github</span>
              </a>
            </div>
          </div>

          <div className="flex-grow hidden md:block">
            <img
              src="/images/hero.png"
              style={{ maxWidth: 600 }}
              className="w-100"
            />
          </div>
        </div>
      </div>
      {/* <div className="d-block text-center mt-5">
        <img src="/images/hero-demo.png" className="w-100" />
      </div> */}
    </>
  );
}
