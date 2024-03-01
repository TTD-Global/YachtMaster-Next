'use client'
import Image from 'next/image'
import React from 'react'
// import AboutUs from '@/assets/sys_img/img/about_us.png';

export default function AboutSection() {
  return (
    <>
		<section className="p-spacer-t curve-cut-spacing-fixer-b">
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-xxl-4 col-md-5 text">
						<h2 className="spacer-b text-center">About Us</h2>
						<p className="spacer-b mb-md-0"><b>Trips you wont forget</b><br/>
							We are your top pick for luxury yacht experiences in Krabi and Phuket. Our carefully selected fleet and dedication to maritime excellence ensure unforgettable journeys. Yacht Master is committed to providing unmatched luxury, comfort, and personalized service. Join us on a voyage where every moment celebrates the beauty and opulence of the sea.
						</p>
					</div>
					<div className="col-md-6 offset-md-1 align-self-md-center">
						<Image alt="about-us" className="img-fluid" src="/images/about_us.png" width={757} height={599} />
					</div>
				</div>
			</div>
		</section>
    </>
  )
}
