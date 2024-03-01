
import Catamaran2 from '@/assets/icons/catamaran2'
import SailingCat from '@/assets/icons/sailing_cat'
import SpeedBoatSVG from '@/assets/icons/speed-boat'
import SpeedBoat2 from '@/assets/icons/speed_boat_2'
import SpeedCat from '@/assets/icons/speed_cat'
import SpeedCat2 from '@/assets/icons/speed_cat_2'
import Image from 'next/image'
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
						<Link href="/fleet_speedboat3">
							<SpeedBoatSVG className="img-fluid zoom" alt="Fleet Speedboat" />
						</Link>
					</div>
					<div className="col">
						<Link href="/fleet_power_cat">
							<Catamaran2 className="img-fluid zoom"  alt="Fleet Catamaran 2"  />
						</Link>
					</div>
					<div className="col">
						<Link href="/fleet_speed_cat">
							<SpeedCat2 className="img-fluid zoom" alt="Fleet Speed Cat 2"/>
						</Link>
					</div>
					<div className="col">
						<Link href="/fleet_speedboat2">
							<SpeedBoat2 className="img-fluid zoom" alt="Fleet Speed Boat 2" />
						</Link>
					</div>
					<div className="col">
						<Link href="/fleet_speedboat1">
							<SpeedCat  className="img-fluid zoom"  alt="Fleet Speed Boat"/>
						</Link>
					</div>
					<div className="col">
						<Link href="/fleet_sailing_cat">
							<SailingCat className="img-fluid zoom" alt="Fleet Sailing Cat"/>
						</Link>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}
