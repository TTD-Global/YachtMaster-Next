import React from 'react'

export default function TeaserHeaderSection() {
  return (
    <>
    <section className="h-[688px] bg-header-pattern bg-center bg-no-repeat bg-cover rounded-bl-[128px] md:rounded-bl-[142px] lg:rounded-bl-[252px]" id="teaser" >
		<div className="container teaser-center mx-auto">
			<div className="">
				<h1 className="visually-hidden-focusable">Make Memories</h1>
			</div>
		</div>
	</section>

	<div className="p-spacer-b-2"></div>
    </>
  )
}

