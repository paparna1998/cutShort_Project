import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" style={{fontFamily: 'cursive'}}>
                Dribbble
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <div class="dropdown">
                            <button class="dropbtn">Inspiration</button>
                            <div class="dropdown-content">
                                <a href="#">Browse Categories</a>
                                <a href="#">Animation</a>
                                <a href="#">Branding</a>
                                <a href="#">Illustration</a>
                                <a href="#">Mobile</a>
                                <a href="#">Print</a>
                                <a href="#">Product Design</a>
                                <a href="#">Typography</a>
                                <a href="#">Web Design</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Find Work</button>
                            <div class="dropdown-content">
                                <a href="#">Job Board</a>
                                <a href="#">Freelance Projects</a>
                                <a href="#">Want freelance design projects?</a>
                                <a href="#">Personalize your profile with video</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Learn Design</button>
                            <div class="dropdown-content">
                                <a href="#">Certified Product Design Course</a>
                                <a href="#">Introduction to UI Design</a>
                                <a href="#">Browse our courses & workshops</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Go Pro</button>
                            <div class="dropdown-content">
                                <a href="#">For Designers</a>
                                <a href="#">For Freelancers</a>
                                <a href="#">For Teams</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Design Files</button>
                            <div class="dropdown-content">
                                <a href="#">Discover</a>
                                <a href="#">Graphics</a>
                                <a href="#">Fonts</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Hire Designers</button>
                            <div class="dropdown-content">
                                <a href="#">Designer Search</a>
                                <a href="#">List my Job Opening</a>
                                <a href="#">Post a Freelance Project</a>
                            </div>
                        </div>
                    </ul>
                </div>
                <form className="form-inline my-5 my-lg-0">
                        <button className="btn my-2 my-sm-0" type="submit" style={{background:"#ea4c89"}}>
                            Share My Work
                        </button>
                    </form>
            </nav>
        </>
    )
}
export default Navbar;
