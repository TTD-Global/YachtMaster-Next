import React from 'react'

export default function TeaseHomeSection() {
  return (
    <>
        <section className="teaser spacer-borderradius-b" id="teaser" >
            <video className="teaser_video" preload="auto" autoPlay muted loop src="/sys_img/img/Untitled_4.mp4" />
            <div className="container teaser-center mx-auto">
                <div className="teaser-text">
                <h1 className="serif">Yacht Master</h1>
                <h2 >Setting Sail for Beautiful Memories!</h2>
                </div>
            </div>
        </section>
    </>
  )
}
