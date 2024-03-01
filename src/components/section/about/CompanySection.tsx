import Image from 'next/image'
import React from 'react'

export default function CompanySection() {
  return (
    <>
    <section className="companys curve-cut-reverse">
		<div className="companys-wraper curve-cut-reverse-ramps">
			<div className="container p-spacer ps-5 pe-5 ps-md-0 pe-md-0">
				<div className="row justify-content-between flex-row flex-nowrap">
					<Image className="companys-img" src={"/images/company/company_02.png"} alt="pls fill out" height={234} width={242} />
					<Image className="companys-img" src={"/images/company/company_01.png"} alt="pls fill out" height={234} width={242} />
					<Image className="companys-img" src={"/images/company/company_03.png"} alt="pls fill out" height={234} width={242}  />
					<Image className="companys-img" src={"/images/company/company_04.png"} alt="pls fill out" height={234} width={242}  />
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
