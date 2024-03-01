import Image from 'next/image'
import React from 'react'

export default function AboutUsSection() {
  return (
    <>
    <section className="p-spacer-b-2">
		<div className="container">
			<div className="row justify-content-end align-items-center">
				<div className="col-xxl-4 col-md-5 text">
					<h2 className="spacer-b ">Make<br/>Memories</h2>
					<p className="spacer-b mb-md-0"><b>Trips you wont forget</b><br/>
						Choose our services for moments that linger, creating lasting memories that transcend the ordinary. 
					</p>
				</div>
				<div className="col-md-6 offset-md-1">
					<Image  className="img-fluid" src={"/images/about_us_3.jpg"} alt='About us Trips' width={757} height={599} />
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
