/* eslint-disable @next/next/no-img-element */
"use client"
import Jobs from '../Jobs2';
import React, { useState } from 'react';
import jobsData from '../../data/jobs.json';

function Content() {
  const [jobs] = useState(jobsData);

  const contact = {
    fontWeight: '600',
    color: '#ccd6f6',
    lineHeight: '1.1'
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-12 col-lg-12 col-xl-10">
              <div className="hero-section">
                <div>
                  <p
                    className="text-warning"
                  >
                    Hi, my name is
                  </p>
                  <h1
                    className="font-weight-bold big-heading mb-2"
                  >
                    Kwame Mensah
                  </h1>
                  <h2
                    className="font-weight-bold big-heading"
                  >
                    Let’s bring your ideas to life.
                  </h2>

                  <p
                    className=" h5 my-5 mb-5 my-xl-5"
                    style={{ lineHeight: '1.7', maxWidth: '720px' }}
                  >
                    I bring beautiful designs and smart ideas to life through interactive platforms that work everywhere and make an impact.
                  </p>

                  <a
                    href="/Kwame_Mensah.pdf"
                    download="Kwame_Mensah.pdf"
                    rel="noreferrer"
                    className="btn btn-outline-warning text-warning bg-transparent"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 d-none">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/abstract.png`}
                  className="img-fluid"
                  alt="Kwame Mensah"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section
        id="about"
      >
        <div className="container">
          <h1 className="title mb-4 mb-md-5">About Me</h1>

          <div className="row">
            <div className="col-12 col-md-12 col-lg-7 order-1 order-lg-0">
              <p className="mb-4" style={{ lineHeight: '1.7' }}>
                Throughout my adventures as a developer, I realized I really care about creating useful, top-class and beautiful products that help and make peoples lives easier. I’m also very curious, and I enjoy work that challenges me to learn something new that also stretches in a different direction. I like traveling, watching movies and tv shows and playing pool table.
              </p>
              <p className="mb-4" style={{ lineHeight: '1.7' }}>
                I’m skilled in building websites and portals from a scratch throughout all phases of development using different approaches, libraries, and frameworks (NextJs, NextAuth, Typescript, Node.js, Git) and other technologies to implement seamless and performant products.
              </p>
              <a
                href="mailto:kamensgh@gmail.com"
                className="btn btn-outline-warning text-warning bg-transparent"
              >
                Say Hello
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-5 order-0 order-lg-1">
              <div className="text-center mb-5 mb-lg-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/abstract.png`}
                  className="img-fluid"
                  alt="Kwame Mensah"
                  width="390"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="work">
        <div className="container">
          <h1
            className="title mb-4 mb-md-5"
          >
            Selected Works
          </h1>

          <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              <Jobs jobs={jobs} />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
      >
        <div className="container">
          <div className="text-center">
            <p className="text-warning mb-2">03. What’s Next?</p>
            <h1 className="" style={contact}>
              Contact Me
            </h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <p className=" mb-4 mt-4 text-center">
                Have a project in mind? Here&apos;s how you can reach out.
              </p>

              <div>
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  <img
                    src={`/images/email.png`}
                    className=""
                    alt="icon"
                    width="24"
                  />
                  <p className=" ml-3 mb-0 ms-2">
                    <a href="mailto:kamensgh@gmail.com" className="">
                      kamensgh@gmail.com
                    </a>
                  </p>
                </div>

                <div className="d-flex justify-content-center align-items-start">
                  <img
                    src={`/images/tel.png`}
                    alt="icon"
                    className=""
                    width="24"
                  />
                  <div className="ml-3 ms-2">
                    <p className=" mb-2">
                      <a href="tel:+44 7535 316817" className="">
                        +44 7535 316817
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 d-none">
                <h5 className=" font-weight-bold">Let&apos;s be internet BFFs</h5>

                <div className="mt-3">
                  <img
                    src={`/images/git.png`}
                    className="mr-3"
                    alt="icon"
                    width="24"
                  />
                  <img
                    src={`/images/fb.png`}
                    className="mr-3"
                    alt="icon"
                    width="24"
                  />
                  <img
                    src={`/images/twitter.png`}
                    className="mr-3"
                    alt="icon"
                    width="24"
                  />
                  <img
                    src={`/images/insta.png`}
                    className=""
                    alt="icon"
                    width="24"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <a
                  href="mailto:kamensgh@gmail.com"
                  className="btn btn-outline-warning text-warning bg-transparent"
                >
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
