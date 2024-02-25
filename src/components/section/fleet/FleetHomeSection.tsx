
import Link from 'next/link'
import React from 'react'

export default function FleetHomeSection() {
  return (
    <>
    <section className="p-spacer-b-2 position-relative">
		<div className="container">
			<h2 className="text-center spacer-b">Our Fleet</h2>
				<div className="row row-cols-3 g-2 g-sm-4 g-lg-5 justify-content-start">
					<div className="col">
						<Link href="/fleet_speedboat3"><img className="img-fluid zoom" src="/sys_img/img/fleet/speed_boat.svg" alt=""/></Link>
					</div>
					<div className="col">
						<Link href="/fleet_power_cat"><img className="img-fluid zoom" src="/sys_img/img/fleet/catamaran_2.svg" alt=""/></Link>
					</div>
					<div className="col">
						<Link href="/fleet_speed_cat"><img className="img-fluid zoom" src="/sys_img/img/fleet/speed_cat_2.svg" alt=""/></Link>
					</div>
					<div className="col">
						<Link href="/fleet_speedboat2"><img className="img-fluid zoom" src="/sys_img/img/fleet/speed_boat_2.svg" alt=""/></Link>
					</div>
					<div className="col">
						<Link href="/fleet_speedboat1"><img className="img-fluid zoom" src="/sys_img/img/fleet/speed_boat.svg" alt=""/></Link>
					</div>
					<div className="col">
						<Link href="/fleet_sailing_cat"><img className="img-fluid zoom" src="/sys_img/img/fleet/sailing_cat.svg" alt=""/></Link>
					</div>

				</div>
		</div>
		
	</section>
    </>
  )
}
