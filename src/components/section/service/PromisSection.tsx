import React from 'react'

export default function PromisSection() {
  return (
    <>
    <section className="p-spacer-b-2">
		<div className="container">
			<div className="row flex-md-row-reverse justify-content-md-end align-items-md-center">
				<div className="col-lg-5 col-xl-4 offset-lg-1">
					<h2 className="p-spacer-b">Service</h2>
					<p className="text  spacer-b-small"><b>Surpasses expectations</b><br/>
						Indulge in unmatched luxury with our well-maintained fleet.
					</p>
					<div className="facts spacer-b-small text d-flex flex-column-reverse">
						<h4>Luxury Redefined</h4>
						<p className="mb-0"> Indulge in unmatched luxury</p>
					</div>
					<div className="facts spacer-b-small text d-flex flex-column-reverse">
						<h4>Scenic Splendors</h4>
						<p className="mb-0">Discover Thailand</p>
					</div>
					<div className="facts spacer-b-small text d-flex flex-column-reverse">
						<h4>Safety Assured</h4>
						<p className="mb-0">Highest safety standards</p>
					</div>
					<div className="facts spacer-b-small text d-flex flex-column-reverse">
						<h4>Expert Crew</h4>
						<p className="mb-0">Trust our seasoned crew</p>
					</div>
				</div>
				<div className="col-lg-5">
					<picture>
						<img alt="Krabi Island Drone shot"  className="img-fluid w-100-percent rounded-5" src="/sys_img/img/service_2.jpg" />
					</picture>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
