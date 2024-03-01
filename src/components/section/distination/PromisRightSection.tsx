import Image from 'next/image'
import React from 'react'

export default function PromisRightSection() {
  return (
    <>
		<section className="p-spacer-b-2">
			<div className="container">
				<div className="row flex-md-row justify-content-md-end align-items-md-center">
					<div className="col-lg-5 col-xl-4">
						<h2 className="p-spacer-b">Phuket</h2>
						<h3 className="sans spacer-b-small">Discover Phuket's 3 Distinct Routes</h3>
						<div className="facts spacer-b-small text d-flex flex-column">
							<h4>Phi Phi - Maya - Koh Khai</h4>
							<p className="mb-0">Immerse yourself in the allure of Phi Phi Islands, Maya Bay, and snorkle at Koh Khai.
							</p>
						</div>
						<div className="facts spacer-b-small  text d-flex flex-column">
							<h4>Phi Phi - Maya - Bamboo</h4>
							<p className="mb-0">Embark on a journey to the Phi Phi Islands,  Maya Bay, and experience the tranquility of Koh Bamboo.</p>
						</div>
						<div className="facts spacer-b-2 mb-lg-0 text d-flex flex-column">
							<h4>James Bond Island Sunset</h4>
							<p className="mb-0">Experience the allure of our sunset excursion inspired by James Bond.</p>
						</div>
					</div>
					<div className="col-lg-5 offset-lg-2">
						<picture>
							<Image className="img-fluid w-100-percent rounded-5" src={"/images/island_boat.jpg"} alt='Krabi Island Drone shot' width={621} height={903} />
						</picture>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}
