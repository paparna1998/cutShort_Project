

const Footer = () => {
    return (
        <> {/* Remove the container if you want to extend the Footer to full width. */}
            <div className="my-5">
                <footer className="text-center text-lg-start text-dark"
                    style={
                        {backgroundColor: "#FAFAFB"}
                }>
                    {/* Grid container */}
                    <div className="container p-4">
                        {/*Grid row*/}
                        <div className="row my-4">
                            {/*Grid column*/}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <div className="d-flex align-items-center justify-content-center mb-4 mx-auto"
                                    style={
                                        {
                                            width: 80,
                                            height: 80,
                                        }
                                }>
                                    <p style={{fontFamily: 'cursive'}}>Dribble</p>
                                </div>
                                <p className="text-center">
                                Dribbble is the world’s leading community for creatives to share, grow, and get hired.
                                </p>
                                <ul className="list-unstyled d-flex flex-row justify-content-around">
                                    <li>
                                        <a className="text-white px-2" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white px-2" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white ps-2" href="#!">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase mb-4">For designers</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Go Pro!
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Explore design work
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Design blog
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Overtime podcast
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Playoffs
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Weekly Warm-Up
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Code of conduct
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase mb-4">Hire designers</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Post a job opening
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Post a freelance project
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Search for designers
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Brands
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Advertise with us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase mb-4">Company</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            About
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Careers
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Support
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Media kit
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Testimonials
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            API
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Terms of service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase mb-4">Directories</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Design jobs
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Freelance designers for hire
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Tags
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Places
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <h6 className="text-uppercase mb-4">Design Resources</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Freelancing
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Design Hiring
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Design Portfolio
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!" className="text-dark" style={{textDecoration: "none"}}>
                                            Design Education
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            
                            {/*Grid column*/} </div>
                        {/*Grid row*/} </div>
                    {/* Grid container */}
                    {/* Copyright */}

                    <hr/>

                    <div class="d-flex justify-content-between" style={{backgroundColor: "#FAFAFB"}}>
                        <div class="p-3 mx-5 flex-grow-1 bd-highlight">© 2022 Dribbble. All rights reserved.</div>
                        <div class="p-3 mx-5 bd-highlight"><b>19,697,083</b> shots dribbbled</div>
                    </div>

                    {/* Copyright */} </footer>
            </div>
            {/* End of .container */} 
            </>

    )
}

export default Footer;
