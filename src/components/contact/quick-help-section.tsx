import React from "react";

const QuickHelpSection: React.FC = () => (
    <section className="quick-help-section" style={{ padding: '3rem 0', background: '#fff' }}>
        <div className="container">
            <h2 className="quick-help-title">Quick Help</h2>
            <p className="quick-help-subtitle">
                Everything to succeed with your Digital Transformation & Technology Initiative
            </p>
            <div className="quick-help-cards">

                <div className="quick-help-card">
                    <div className="quick-help-icon">
                        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_10312_15327" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="48">
                                <rect x="0.335938" width="48" height="48" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_10312_15327)">
                                <path d="M24.0284 36.5H26.0284V34.5H29.0284C29.3128 34.5 29.5506 34.4045 29.7419 34.2135C29.9329 34.0225 30.0284 33.7847 30.0284 33.5V27.5C30.0284 27.2153 29.9329 26.9775 29.7419 26.7865C29.5506 26.5955 29.3128 26.5 29.0284 26.5H22.0284V22.5H30.0284V20.5H26.0284V18.5H24.0284V20.5H21.0284C20.7438 20.5 20.5059 20.5955 20.3149 20.7865C20.1239 20.9775 20.0284 21.2153 20.0284 21.5V27.5C20.0284 27.7847 20.1239 28.0225 20.3149 28.2135C20.5059 28.4045 20.7438 28.5 21.0284 28.5H28.0284V32.5H20.0284V34.5H24.0284V36.5ZM13.5669 42C12.6463 42 11.8776 41.6917 11.2609 41.075C10.6443 40.4583 10.3359 39.6897 10.3359 38.769V9.231C10.3359 8.31033 10.6443 7.54167 11.2609 6.925C11.8776 6.30833 12.6463 6 13.5669 6H29.3359L38.3359 15V38.769C38.3359 39.6897 38.0276 40.4583 37.4109 41.075C36.7943 41.6917 36.0256 42 35.1049 42H13.5669ZM28.3359 15.5385V8H13.5669C13.2589 8 12.9768 8.12817 12.7204 8.3845C12.4641 8.64083 12.3359 8.923 12.3359 9.231V38.769C12.3359 39.077 12.4641 39.3592 12.7204 39.6155C12.9768 39.8718 13.2589 40 13.5669 40H35.1049C35.4129 40 35.6951 39.8718 35.9514 39.6155C36.2078 39.3592 36.3359 39.077 36.3359 38.769V15.5385H28.3359Z" fill="url(#paint0_linear_10312_15327)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_10312_15327" x1="32.238" y1="3.9454" x2="26.9962" y2="42.363" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0C7D81" />
                                    <stop offset="1" stop-color="#0C7D81" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="quick-help-card-title">Account & Billing</div>
                    <div className="quick-help-card-desc">
                        Whether you're new or you're a power user, this article will…
                    </div>
                    <a className="quick-help-link" href="#">Read More</a>
                </div>


                <div className="quick-help-card">
                    <div className="quick-help-icon">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_10312_15337" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                                <rect width="48" height="48" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_10312_15337)">
                                <path d="M23 34.6385V15.0155C21.5563 13.9845 19.9653 13.2113 18.227 12.696C16.4883 12.1807 14.746 11.923 13 11.923C11.8 11.923 10.7493 11.9948 9.848 12.1385C8.94667 12.2822 7.946 12.5488 6.846 12.9385C6.53833 13.0412 6.3205 13.1887 6.1925 13.381C6.06417 13.573 6 13.7845 6 14.0155V32.046C6 32.405 6.12817 32.6678 6.3845 32.8345C6.64083 33.0012 6.923 33.0205 7.231 32.8925C7.96167 32.6462 8.80583 32.4487 9.7635 32.3C10.7212 32.1513 11.8 32.077 13 32.077C14.746 32.077 16.444 32.2777 18.094 32.679C19.744 33.0803 21.3793 33.7335 23 34.6385ZM24 37.5385C22.3743 36.4255 20.6282 35.5703 18.7615 34.973C16.8948 34.3757 14.9743 34.077 13 34.077C11.959 34.077 10.9365 34.1642 9.9325 34.3385C8.92883 34.5128 7.95133 34.7923 7 35.177C6.27433 35.4667 5.593 35.3795 4.956 34.9155C4.31867 34.4515 4 33.8105 4 32.9925V13.6615C4 13.1665 4.13017 12.7075 4.3905 12.2845C4.65083 11.8615 5.0155 11.5667 5.4845 11.4C6.65883 10.882 7.88067 10.5063 9.15 10.273C10.4193 10.0397 11.7027 9.923 13 9.923C15.1847 9.923 17.1243 10.2 18.819 10.754C20.514 11.3077 22.2462 12.1293 24.0155 13.219C24.3308 13.3937 24.5737 13.627 24.744 13.919C24.9147 14.2113 25 14.5487 25 14.931V34.6385C26.6207 33.7335 28.256 33.0803 29.906 32.679C31.556 32.2777 33.254 32.077 35 32.077C36.2 32.077 37.2788 32.1513 38.2365 32.3C39.1942 32.4487 40.0383 32.6462 40.769 32.8925C41.077 33.0205 41.3592 33.0012 41.6155 32.8345C41.8718 32.6678 42 32.405 42 32.046V11.1885C42.1153 11.2268 42.2288 11.2692 42.3405 11.3155C42.4518 11.3615 42.5613 11.4153 42.669 11.477C43.1127 11.6693 43.4455 11.9642 43.6675 12.3615C43.8892 12.7588 44 13.1922 44 13.6615V32.9925C44 33.8105 43.6558 34.4387 42.9675 34.877C42.2788 35.3153 41.546 35.3897 40.769 35.1C39.8437 34.741 38.8982 34.4807 37.9325 34.319C36.9672 34.1577 35.9897 34.077 35 34.077C33.0257 34.077 31.1052 34.3757 29.2385 34.973C27.3718 35.5703 25.6257 36.4255 24 37.5385ZM30.3845 28V8L36.6155 6V26L30.3845 28Z" fill="url(#paint0_linear_10312_15337)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_10312_15337" x1="35.2887" y1="4.20002" x2="32.44" y2="38.2447" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0C7D81" />
                                    <stop offset="1" stop-color="#0C7D81" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <div className="quick-help-card-title">Course Access</div>
                    <div className="quick-help-card-desc">
                        Are you a new customer wondering how to get started?                    </div>
                    <a className="quick-help-link" href="#">Read More</a>
                </div>


                <div className="quick-help-card">
                    <div className="quick-help-icon">
                        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_10312_15346" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="48">
                                <rect x="0.671875" width="48" height="48" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_10312_15346)">
                                <path d="M6.67188 40.154V9.231C6.67188 8.31033 6.98021 7.54167 7.59688 6.925C8.21354 6.30833 8.98221 6 9.90287 6H39.4409C40.3615 6 41.1302 6.30833 41.7469 6.925C42.3635 7.54167 42.6719 8.31033 42.6719 9.231V30.769C42.6719 31.6897 42.3635 32.4583 41.7469 33.075C41.1302 33.6917 40.3615 34 39.4409 34H12.8259L6.67188 40.154ZM11.9719 32H39.4409C39.7489 32 40.031 31.8718 40.2874 31.6155C40.5437 31.3592 40.6719 31.077 40.6719 30.769V9.231C40.6719 8.923 40.5437 8.64083 40.2874 8.3845C40.031 8.12817 39.7489 8 39.4409 8H9.90287C9.59487 8 9.31271 8.12817 9.05638 8.3845C8.80004 8.64083 8.67188 8.923 8.67188 9.231V35.2885L11.9719 32Z" fill="url(#paint0_linear_10312_15346)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_10312_15346" x1="34.8317" y1="4.05075" x2="31.1313" y2="40.8043" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0C7D81" />
                                    <stop offset="1" stop-color="#0C7D81" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <div className="quick-help-card-title">Technical Support</div>
                    <div className="quick-help-card-desc">
                        This article will show you how to expand the functionality of...                    </div>
                    <a className="quick-help-link" href="#">Read More</a>
                </div>
            </div>
        </div>
    </section>
);

export default QuickHelpSection;
