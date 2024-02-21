'use client'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function Navbar() {
    const ref = useRef();
  return (
    <>
    <header id="page-header">
        <div className="teaser-redcircle"></div>
        <div className="header-bottom clearfix">
            <div className="container ">
                <div className="nav-cont">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className='navbar-brand' data-titel="Yacht Master" href="/">Yachtmaster</Link>
                            {/* tabindex = "-1" */}

                            <div className="offcanvas offcanvas-end position-md-relative" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-body justify-content-md-between">
                                    <ul className="navbar-nav align-items-center justify-content-end flex-grow-1">
                                            <li className="nav-item">
                                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href="/about_us">About Us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href="/destination">Destination</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href="/service">Service</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href="/fleet">Our Fleet</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href="/contact_us">Contact Us</Link>
                                            </li>

                                    </ul> 
                                </div>
                                <div className="container-social-logos d-flex justify-content-between flex-nowrap">
                                    <Link target='_blank' className="social-logos logo-whatsapp hide-text" aria-current="page" href="https://api.whatsapp.com/send?phone=660623859680">Yachtmaster WhatsApp</Link>
                                    <Link target='_blank' className="social-logos logo-instagram hide-text" aria-current="page" href="https://www.instagram.com/yachtmaster_th/">Yachtmaster Instagram Account</Link>
                                    <Link target='_blank' className="social-logos logo-facebook hide-text" aria-current="page" href="https://www.facebook.com/yachtmasterkrabi/">Yachtmaster Facebook Site</Link>
                                    <Link target='_blank' className="social-logos logo-phone hide-text" aria-current="page" href="tel:+660623859680">Yachtmaster Phone Contact</Link>
                                </div>

                            </div>
                        </div>
                        
                    </nav>
                </div>

            </div>
        </div>
    </header>
    </>
  )
}
