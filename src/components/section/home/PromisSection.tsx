import React from 'react'

export default function PromisSection() {
  return (
    <>
    <section className="p-spacer-b-2 curve-cut-spacing-fixer-t">
		<div className="container">
			<div className="row flex-md-row-reverse justify-content-md-end align-items-md-center">
				<div className="col-lg-5 col-xl-4 offset-lg-1">
					<h2 className="p-spacer-b">Make Memories</h2>
					<p className="text  spacer-b-small"><b>Choose Yacht Master</b><br/>
						Embark on extraordinary journeys with Yacht Master, your premier choice for luxury yacht experiences in Krabi and Phuket. Unforgettable voyages, seamlessly blending luxury with the sea's beauty.
					</p>
					<div className="facts spacer-b-small text d-flex flex-column-reverse">
						<h4>Luxury Redefined</h4>
						<p className="mb-0">Indulge in unmatched luxury</p>
					</div>
					<div className="facts spacer-b-small text d-flex flex-column-reverse">
						<h4>Tailor-Made Memories</h4>
						<p className="mb-0">Adventurous island-hopping journey,</p>
					</div>
					<a href="about_us.html" className="button spacer-b-2 mb-lg-0">About us</a>
				</div>
				<div className="col-lg-6">
					<picture>
                        <img src="/sys_img/img/S__52838573.jpg" alt="Krabi Island Drone shot" title='Krabi Island Drone shot' />
					</picture>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
