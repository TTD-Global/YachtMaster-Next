import Image from 'next/image'
import React from 'react'

export default function AboutDistination() {
  return (
    <>
    <section className="p-spacer-t p-spacer-b-2">
		<div className="container">
			<div className="row justify-content-end align-items-center">
				<div className="col-xxl-4 col-md-5 text">
					<h2 className="spacer-b ">Your<br />Journey</h2>
					<p className="spacer-b mb-md-0"><b>Elevate your experiences</b><br/>
						where every moment at sea becomes a personalized celebration of luxury, comfort, and the breathtaking beauty of our carefully curated destinations.
					</p>
				</div>
				<div className="col-md-6 offset-md-1">
					<Image className="img-fluid" src={"/images/memories.png"} width={757} height={599} alt=''/>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
