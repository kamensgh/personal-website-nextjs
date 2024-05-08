/* eslint-disable @next/next/no-img-element */
"use client"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React, { useState,useEffect} from 'react';
import Image from 'next/image';

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <Navbar fixed="top" className={ `main ${scroll ? "normal" : "top"}`} expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={`/images/logos/black.png`}
              alt="logo"
              className="img-fluid"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.278"
                height="19.41"
                viewBox="0 0 40.278 19.41"
              >
                <g id="ham" transform="translate(0 -1.871)">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M.626,1.92a8.882,8.882,0,0,1,.95-.049c.111,0,.22,0,.327.006H39.021a3.237,3.237,0,0,1,1.048.152h0c.129.063.208.14.208.223a.139.139,0,0,1-.016.065v1.12a.136.136,0,0,1,.015.063c0,.078-.068.151-.187.213l0,0a3.228,3.228,0,0,1-1.051.153H1.889c-.095,0-.2,0-.315,0-.332,0-.654-.016-.955-.046l.022,0A1.044,1.044,0,0,1,0,3.591V2.163a.96.96,0,0,1,.618-.242H.626Z"
                    fill="#ffc107"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M.506,13.975a5.587,5.587,0,0,1,.951-.041H29.982c.556-.011,1.029.148,1.011.317v1.276a.127.127,0,0,1,.014.058c0,.083-.085.163-.238.236l.009,0a2.273,2.273,0,0,1-.869.116H.964c-.492,0-.913-.125-.97-.274V14.223c.011-.095.2-.181.512-.25h0Z"
                    transform="translate(9.272 -3.359)"
                    fill="#ffc107"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M0,26.266a.66.66,0,0,1,.611-.289h20a1.022,1.022,0,0,1,.531.136h0a.253.253,0,0,1,.125.2c0,.008,0,.016,0,.023h0v1.331c.009.168-.328.316-.7.3H.705c-.026,0-.055,0-.084,0A.709.709,0,0,1,0,27.7V26.266Z"
                    transform="translate(19.013 -6.696)"
                    fill="#ffc107"
                  />
                </g>
              </svg>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <ul className="navbar-nav ml-auto">
              <li
                className="nav-item"
              >
                <Nav.Link href="#about">About Me</Nav.Link>
              </li>
              <li
                className="nav-item "
              >
                <Nav.Link href="#work">Work</Nav.Link>
              </li>
              <li
                className="nav-item "
              >
                <Nav.Link href="#contact">Contact</Nav.Link>
              </li>
            </ul>
           
          </Navbar.Collapse>

         
        </Container>
      </Navbar>

    
    </>
  );
}

export default Header;
