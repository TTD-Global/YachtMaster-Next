import Image from 'next/image'
import React from 'react'

export default function DiscoverSection() {
  return (
    <>
    <section className="curve-cut-spacing-fixer-b">
		<div className="container">
			<div className="row justify-content-start align-items-center">
				<div className="col-xxl-4 col-md-5 text order-md-1 offset-md-1">
					<h2 className="spacer-b">Discover</h2>
					<p className="spacer-b mb-md-0"><b>Find hidden gems</b><br/>
						Uncover extraordinary experiences with our services, where every moment is an exploration of beauty and joy.
					</p>
				</div>
				<div className="col-md-6 order-md-0">
					<Image className="img-fluid" src={"/images/discover_2.png"} alt='Find services' height={819} width={733} />
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
