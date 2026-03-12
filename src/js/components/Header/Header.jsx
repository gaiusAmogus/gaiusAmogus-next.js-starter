"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [goingUp, setGoingUp] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lastScrollTop = useRef(0);
    const headerRef = useRef(null);
    const spacerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 80 && !mobileMenuOpen) {
                setIsSticky(true);
                setGoingUp(scrollTop < lastScrollTop.current);
            } else {
                setIsSticky(false);
                setGoingUp(false);
            }

            lastScrollTop.current = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileMenuOpen]);

    useEffect(() => {
        document.body.classList.toggle("menu-mobile-opened", mobileMenuOpen);
    }, [mobileMenuOpen]);

    useEffect(() => {
        const updateSpacer = () => {
            if (headerRef.current && spacerRef.current) {
                spacerRef.current.style.height = headerRef.current.offsetHeight + "px";
            }
        };
        updateSpacer();
        window.addEventListener("resize", updateSpacer);
        return () => window.removeEventListener("resize", updateSpacer);
    }, []);

    const headerClass = [
        "main-header bg--white ",
        isSticky ? "main-header--sticky" : "",
        goingUp ? "main-header--going-up" : "",
        mobileMenuOpen ? "main-header--mobile-active" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            <div ref={spacerRef} className="header-spacer" />
            <header ref={headerRef} className={headerClass}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main-header__bar d-flex align-items-center justify-content-between">
                            <Link className="main-header__logo" href="/">
                                <img className="d-block" src="/assets/img/logo.svg" alt="Webpack React Gaius Amogus" />
                            </Link>

                            <div className="main-header__content align-items-center">
                                <div className="main-header__menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/dev-page">Dev page</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className={`main-header__burger d-lg-none ${
                                    mobileMenuOpen
                                        ? "js-main-header__burger--close"
                                        : "js-main-header__burger--open"
                                }`}
                                onClick={() => setMobileMenuOpen((prev) => !prev)}
                                role="button"
                                tabIndex={0}
                                aria-label="Toggle menu"
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        setMobileMenuOpen((prev) => !prev);
                                    }
                                }}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;
