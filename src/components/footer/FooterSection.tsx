'use client'
import LogoTextWhite from '@/assets/icons/logo_text_white';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FooterSection() {
  return (
    <>
    <footer id="Kontakt" className="footer p-spacer-t">
    <div className="container">
			<div className="row p-spacer-b">
				<div className="col-6 col-md-2">
					<div className="d-flex align-items-center flex-column justify-content-center flex-wrap">
						<a className="logo-footer" href="#">
							<LogoTextWhite />
						</a>
						<div className="container-social-logos d-flex justify-content-between flex-nowrap">
							<Link className="social-logos logo-whatsapp icon-white hide-text" href="https://api.whatsapp.com/send?phone=660623859680" target="_blank">Yachtmaster WhatsApp</Link>
							<Link className="social-logos logo-instagram icon-white hide-text" href="https://www.instagram.com/yachtmaster_th/" target="_blank">Yachtmaster Instagram Account</Link>
							<Link className="social-logos logo-facebook icon-white hide-text" href="https://www.facebook.com/yachtmasterkrabi/" target="_blank">Yachtmaster Facebook Site</Link>
							<Link className="social-logos logo-phone icon-white hide-text" href="tel:+660623859680" target="_blank">Yachtmaster Phone Contact</Link>
						</div>
					</div>
				</div>
				<div className="accordion footer-menue col-6 col-md-10 col-xl-9" id="accordionPanelsStayOpenExample">
				<div className="row">
					<div className="accordion-item col-md-3 offset-md-1">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
						Contact Info
						</button>
					</h2>
					<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
						<div className="accordion-body">
						<ul className="list-group contact-info">
							<li><p>9/2 Sringkhan <br/>Phatthana R. Krabiyai </p></li>
							<li><p>Muangkrabi Karbi 81000</p></li>
							<li><Link href="tel:+0623859680">062 3859 680</Link></li>
							<li><Link href="mailto:daily.phiphitour@gmail.com">daily.phiphitour@gmail.com</Link></li>

						</ul>
						</div>
					</div>
					</div>
					<div className="accordion-item col-md-3 offset-md-1">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
						Sitemap
						</button>
					</h2>
					<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
						<div className="accordion-body">
							<ul className="list-group">
								<li><Link href="/">Home</Link></li>
								<li><Link href="/about_us">About Us</Link></li>
								<li><Link href="/destination">Destination</Link></li>
								<li><Link href="/service">Service</Link></li>
								<li><Link href="/fleet">Our Fleet</Link></li>
								<li><Link href="/contact_us">Contact us</Link></li>
							</ul>
						</div>
					</div>
					</div>
					<div className="accordion-item col-md-3 offset-md-1">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
						The Fleet
						</button>
					</h2>
					<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
						<div className="accordion-body">
							<ul className="list-group">
								<li><Link href="/fleet_speedboat3">Speed Boat 3 Engins</Link></li>
								<li><Link href="/fleet_power_cat">Power Catamaran</Link></li>
								<li><Link href="/fleet_speed_cat">Speed Catamaran</Link></li>
								<li><Link href="/fleet_speedboat2">Speed Boat 2 Engins</Link></li>
								<li><Link href="/fleet_speedboat1">Speed Boat 1 Engins</Link></li>
								<li><Link href="/fleet_sailing_cat">Sailing Catamaran</Link></li>
							</ul>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 footer-legal">
					<ul className="list-group d-flex flex-row">
						<li><Link href="/privacy_policy">Privacy Policy</Link></li>
						<li><Link href="/cookie">Cookies</Link></li>
						<li><Link href="/legal_notice">Legal</Link></li>
						<li><Link href="/contact_us">Contact Us</Link></li>
					</ul>
				</div>
			</div>
		</div>
    </footer>
    
    </>
  )
}
