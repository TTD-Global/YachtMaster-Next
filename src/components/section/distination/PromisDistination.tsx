import Image from 'next/image'
import React from 'react'

export default function PromisDistination() {
  return (
    <>
    <section className="p-spacer-b-2">
		<div className="container">
			<div className="row flex-md-row-reverse justify-content-md-end align-items-md-center">
				<div className="col-lg-5 col-xl-4 offset-lg-1">
					<h2 className="p-spacer-b">Krabi</h2>
					<h3 className="sans spacer-b-small">
						3 Exciting Routes
					</h3>
					<div className="facts spacer-b-small text d-flex flex-column">
						<h4>Phi Phi - Maya - Bamboo</h4>
						<p className="mb-0">Explore the iconic Phi Phi Islands, enchanting Maya Bay, and the picturesque Bamboo Island.</p>
					</div>
					<div className="facts spacer-b-small text d-flex flex-column">
						<h4>Krabi 4 Islands - Thale Waek</h4>
						<p className="mb-0">Discover the beauty of Krabi. Explore the 4 Islands and the mesmerizing Thale Waek.
						</p>
					</div>
					<div className="facts spacer-b-2 mb-lg-0 text d-flex flex-column">
						<h4>Koh Hong</h4>
						<p className="mb-0">Known for its scenic beauty and captivating surroundings.
						</p>
					</div>
				</div>
				<div className="col-lg-5">
					<picture>
						<Image className="img-fluid w-100-percent rounded-5" src={"/images/girl_white.jpg"} alt="Krabi Island Drone shot" width={621} height={903} />
					</picture>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
