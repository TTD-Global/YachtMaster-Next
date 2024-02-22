import React from 'react'

export default function TextSection() {
  return (
    <>
    <section className="curve-cut-spacing-fixer-b">
		<div className="container">
			<div className="row justify-content-md-end ">
				<div className="col-lg-6 col-xxl-5">
					<h2 className="spacer-b-small h2-small">Your Speed Boat Journy</h2>
					<p className="text spacer-b-small"><b>Fast  and Exciting</b><br/>
						Swift and agile, perfect for intimate journeys and coastal explorations.
					</p>
					
				</div>
				<div className="col-lg-5 offset-lg-1">
					<picture>
						<img alt="Krabi Island Drone shot" className="img-fluid rounded-5" src="/sys_img/img/Power CatamaranArtboard 9.jpg" />
					</picture>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
