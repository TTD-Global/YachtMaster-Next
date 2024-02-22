import React from 'react'

export default function TextSection() {
  return (
    <>
        <section className="p-spacer-b-2">
            <div className="container">
                <div className="row  justify-content-md-end align-items-md-center">
                    <div className="col-lg-5 col-xl-5">
                        <h2 className="p-spacer-b">Beautiful Memories!</h2>
                        <h3 className="sans">Setting Sail for Beautiful Memories!</h3>
                        <p className="text spacer-b-small"><br/>
                            Crafting Unforgettable Moments: Beyond beautiful memories, we specialize in creating timeless and enchanting experiences for every customer who chooses our services. 
                        </p>
                        <p className="text  spacer-b-small mb-lg-0">
                            Each engagement with us is a unique chapter, where the beauty of the sea meets excellence in service, leaving an indelible mark on your personal journey.
                        </p>
                        
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <picture>
                            <img alt="Krabi Island Drone shot"  className="img-fluid rounded-5" src="/sys_img/img/Rectangle_88_2.jpg" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
