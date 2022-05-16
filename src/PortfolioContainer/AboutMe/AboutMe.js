import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import Resume_Sneh from '../../../src/Resume_Sneh_Aashish_Gupta_CSE_Undergrad_4_months_SDE.pdf';

import './AboutMe.css';

const AboutMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    } 
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = { 
        description: "A diligent and result oriented Computer Science Engineering major currently attending Malaviya National Institute of Technology, aiming to leverage proven knowledge of complex programming, emerging technologies and development skills to fill internship roles for Software Development Engineering.",
        highlights: {
            bullets: [
                "Solving Grey Matter Guzzling Algorithmic Problems",
                "Frontend Development with React.js",
                "Smart Contract Development with Ethereum",
                "Redux for State Management",
                "Building REST API",         
                "Managing Databases",
           ],
           heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        }
    }, [fadeInSubscription]);

    return (
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                            </div>
                            { renderHighlights() }
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
                            <a href={Resume_Sneh} download='Sneh Aashish Gupta Resume NIT Jaipur 3rd Year SDE Intern'>
                                <button className="btn highlighted-btn"> Get Resume </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;