import Image from 'next/image'
import React from 'react'

export default function TextSection() {
  return (
    <>
    <section className="curve-cut-spacing-fixer-b">
		<div className="container">
			<div className="row  justify-content-md-end align-items-md-center">
				<div className="col-lg-5 col-xl-5">
					<h2 className="p-spacer-b h2-small">Setting Sail for Beautiful Memories!</h2>
					<p className="text  spacer-b-small"><b>Ich bin ein Test Text</b><br/>
						Immerse yourself in the magic of the open sea with us. Our expertly curated experiences promise not just a journey, but a collection of moments etched in beauty, creating memories that will last a lifetime.
					</p>
					<p className="text  spacer-b-small mb-lg-0">
						Join us as we navigate the waters, turning each wave into a chapter of your own unforgettable story.
					</p>
					
				</div>
				<div className="col-lg-5 offset-lg-1">
					<picture>
						<Image className="img-fluid rounded-5" src={"/images/1.jpg"} alt='Krabi Island Drone shot' width={1045} height={1567} />
					</picture>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
