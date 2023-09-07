import React from "react";
import {Fragment} from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <nav className="site-nav">
                <div className="container">
                    <div className="menu-bg-wrap">
                        <div className="site-navigation">
                            <div className="row g-0 align-items-center">
                                <div className="col-2">
                                    <a href="/" className="logo m-0 float-start">Hidden Space<span className="text-primary">.</span></a>
                                </div>
                                <div className="col-8 text-center">
                                    <form action="#" className="search-form d-inline-block d-lg-none">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <span className="bi-search"></span>
                                    </form>

                                    <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                        <li className="active"><a href="/">Home</a></li>
                                        <li><NavLink to={"/space/all_list"}>Space</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-2 text-end">
                                    <a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
                                        <span></span>
                                    </a>
{/*                                    <form action="#" className="search-form d-none d-lg-inline-block">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <span className="bi-search"></span>
                                    </form>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;
