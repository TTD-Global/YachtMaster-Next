import Image from 'next/image'
import React from 'react'

export default function DiscoverSection() {
  return (
    <>
    <section className="curve-cut-spacing-fixer-b">
		<div className="container">
			<div className="row justify-content-start align-items-center">
				<div className="col-xxl-4 col-md-5 text order-md-1 offset-md-1">
					<h2 className="spacer-b">High<br />Quality</h2>
					<p className="spacer-b mb-md-0"><b>High Quality Products only for you</b><br/>
						Ensuring excellence and top-tier standards in every aspect of our service to deliver an unparalleled experience.
					</p>
				</div>
				<div className="col-md-6 order-md-0">
					<Image  className="img-fluid" src={"/images/food.jpg"} alt='' width={820} height={733}  />
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
