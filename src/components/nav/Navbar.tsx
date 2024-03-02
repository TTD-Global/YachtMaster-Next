'use client'
import React, { useEffect, useState } from 'react'
import { FacebookIcon, InstagramIcon, PhoneIcon, WhatsappIcon } from '../svgs';
import Link from 'next/link';
import { useWindowWidth } from '@react-hook/window-size';

export default function Navbar() {
    const [hamburgerOn, setHamburgerOn] = useState(false);
	const onlyWidth = useWindowWidth();
	useEffect(() => {
		if (onlyWidth < 800) {
			setHamburgerOn(false)
		} else if (onlyWidth > 800) {
			setHamburgerOn(false)
		}
	  }, [onlyWidth < 800]);
  return (
    <>
		<header id="page-header">
			<div className="teaser-redcircle"></div>
			<div className="header-bottom clearfix">
				<div className="container ">
					<div className="nav-cont">
					<nav className={`navbar navbar-expand-lg ${hamburgerOn ? "menue-on" : ""}`}>
						<div className="container-fluid">
							<Link className="navbar-brand" href="/" data-titel="Yacht Master">Yachtmaster</Link>
							<div className="offcanvas offcanvas-end position-md-relative"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
								<div className="offcanvas-body justify-content-md-between">
								<ul className="navbar-nav align-items-center justify-content-end flex-grow-1 font-[12px]">
									<li className="nav-item">
									<Link className="nav-link active" aria-current="page" href="/">Home</Link>
									</li>
									<li className="nav-item">
									<Link className="nav-link" href="/about_us">About Us</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href="/destination">Destination</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href="/service">Service</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href="/fleet">Our Fleet</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" href="/contact_us">Contact Us</Link>
									</li>
								</ul> 
								</div>
								<div className="flex justify-center items-center flex-nowrap max-lg:mb-[40px] [&>*]:pl-2 text-[17px]">
									<Link target="_blank" className="text-black hover:text-black" href="https://api.whatsapp.com/send?phone=660623859680"><WhatsappIcon /></Link>
									<Link target="_blank" className="text-black hover:text-black" href="https://www.instagram.com/yachtmaster_th/"><InstagramIcon /></Link>
									<Link target="_blank" className="text-black hover:text-black" href="https://www.facebook.com/yachtmasterkrabi/"><FacebookIcon /></Link>
									<Link target="_blank" className="text-black hover:text-black" href="tel:+660623859680"><PhoneIcon /></Link>
								</div>
							</div>
							<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setHamburgerOn(!hamburgerOn)}>
								<span className="burger-menue"></span>
								<span className="burger-menue"></span>
								<span className="burger-menue"></span>
							</button>
						</div>
						</nav>
					</div>

				</div>
			</div>
		</header>
    </>
  )
}
