import React from 'react'

export default function AboutUsSection() {
  return (
    <>
    <section className="p-spacer-b-2">
		<div className="container">
			<div className="row justify-content-end align-items-center">
				<div className="col-xxl-4 col-md-5 text">
					<h2 className="spacer-b ">Our Staff</h2>
					<p className="spacer-b mb-md-0"><b>Trips you wont forget</b><br/>
						Dedicated professionals ensure your needs are met with warmth, creating a seamless, enjoyable journey infused with genuine hospitality.
					</p>
				</div>
				<div className="col-md-6 offset-md-1">
					<img className="img-fluid" src="/sys_img/img/our_staff_2.jpg"/>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
