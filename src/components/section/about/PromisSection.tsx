import Link from 'next/link'
import React from 'react'

export default function PromisSection() {
  return (
    <>
    <section className="p-spacer-b-2">
		<div className="container">
			<div className="row flex-md-row-reverse justify-content-md-end align-items-md-center">
				<div className="col-lg-5 col-xl-5 offset-lg-1">
					<h2 className="p-spacer-b h2-small">Our Service</h2>
					
					<div className="facts spacer-b-small text d-flex flex-column">
						<h4>Luxury Redefined</h4>
						<p className="mb-0"> Indulge in unmatched luxury with our well-maintained fleet.</p>
					</div>
					<div className="facts spacer-b-small text d-flex flex-column">
						<h4>Scenic Splendors</h4>
						<p className="mb-0">Discover the beauty of Krabi and Phuket as we guide you to hidden gems accessible only by sea.</p>
					</div>
					<div className="facts spacer-b-small text d-flex flex-column">
						<h4>Tailor-Made Memories</h4>
						<p className="mb-0">Craft enduring memories with our customized yacht experiences.</p>
					</div>
					

					<Link href="/service" className="button spacer-b-2 mb-lg-0">Learn More</Link>
				</div>
				<div className="col-lg-6">
					<picture>
						<img alt="Krabi Island Drone shot"  className="img-fluid rounded-5" src="/sys_img/img/service_3.jpg"  />
					</picture>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
