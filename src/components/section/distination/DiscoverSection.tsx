import Image from 'next/image'
import React from 'react'

export default function DiscoverSection() {
  return (
    <>
    <section className="curve-cut-spacing-fixer-b">
		<div className="container">
			<div className="row flex-wrap-reverse flex-md-wrap justify-content-start align-items-center">
				<div className="col-xxl-4 col-md-5 text order-1 offset-md-1">
					<h2 className="spacer-b">Explore</h2>
					<p className="spacer-b mb-md-0"><b>Explore Thailands Ocean</b><br/>
						Venture into extraordinary experiences with us, discovering the wonders of the sea and creating memories that will linger for a lifetime.
					</p>
				</div>
				<div className="col-md-6 order-0">
					<Image className="img-fluid" src={"/images/discover_3.png"} alt='' width={819} height={733} />
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
