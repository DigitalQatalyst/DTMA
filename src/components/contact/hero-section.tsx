import React from 'react';
import './styles.scss';
import { SearchSvg } from '../svg';
// import { SearchSvg } from '../svg';

const HeroSection = () => {
    return (
        <section className="help-support-section">
            <div className="help-support-container">
                <h1 >Hello, how can we help?</h1>
                <p>
                    Get the Support you need, when you need it. We're here to help you succeed
                </p>
                <div className="search p-relative">
                    <input type="text" className="search-input" placeholder="What are you looking for?" />
                    {/* <button className="tp-search-icon">
                        <SearchSvg />
                    </button> */}
                </div>
                {/* <div className="help-breadcrumb">
                    <span role="img" aria-label="home">🏠</span>
                    <span> &gt; </span>
                    <span>Help &amp; Support</span>
                </div> */}
            </div>
        </section>
    );
};

export default HeroSection;