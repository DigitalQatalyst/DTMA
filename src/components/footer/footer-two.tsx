import Image from 'next/image';
import Link from 'next/link';
// import { DownArrowTwo, Email, RightArrowFour } from '../svg';
// import FooterSocial from './footer-social';
// import socials from "@/assets/img/footer/Social-icons.svg";
import { footerLinks } from '@/data/footer-links';
import logo from '@/assets/img/logo/dtma.svg';
// import google_play from '@/assets/img/footer/google-play.jpg';
// import apple_store from '@/assets/img/footer/apple-store.jpg';

export default function FooterTwo() {
   return (
      <footer>
         <div className="tp-footer-2">
            <div className="tp-footer-main pt-70 pb-55">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="tp-footer-widget tp-footer-2-col-1 mb-30">
                           <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                              <Link href="/">
                                 <Image src={logo} alt="logo" style={{ height: "auto" }} />
                              </Link>
                           </div>
                           <div className="tp-footer-widget-content" style={{ width: "368px" }}>
                              <p>Stay ahead with the latest insights, courses, and opportunities in digital transformation.</p>
                           </div>
                           <div className="tp-footer-contact">
                              <div className="tp-footer-btn">
                                 <input type="email" placeholder="Enter your email" className="tp-footer-sub-input" />
                                 <button type="submit" className="footer-btn">Subscribe</button>
                                 {/* <Link className="tp-btn-round" href="/contact">Contact Us */}
                                 {/* <span>
                                       <RightArrowFour />
                                    </span> */}
                                 {/* </Link> */}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="row">
                           <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="tp-footer-widget tp-footer-2-col-3">
                                 <h4 className="tp-footer-widget-title mb-15">Quick Links</h4>
                                 <div className="tp-footer-widget-link">
                                    <ul>
                                       {footerLinks.link_one.map((link) => (
                                          <li key={link.id}>
                                             <Link href={link.link}>{link.title}</Link>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>

                           <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="tp-footer-widget tp-footer-2-col-3">
                                 <h4 className="tp-footer-widget-title mb-15">Get to Know Us</h4>
                                 <div className="tp-footer-widget-link">
                                    <ul>
                                       {footerLinks.link_two.map((link) => (
                                          <li key={link.id}>
                                             <Link href={link.link}>{link.title}</Link>
                                             {link.isNew && (
                                                <span className="new-badge">New</span>
                                             )}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="tp-footer-widget tp-footer-2-col-3">
                                 <h4 className="tp-footer-widget-title mb-15">Legal</h4>
                                 <div className="tp-footer-widget-link">
                                    <ul>
                                       {footerLinks.link_three.map((link) => (
                                          <li key={link.id}>
                                             <Link href={link.link}>{link.title}</Link>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           {/* <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="p-footer-widget tp-footer-2-col-4 mb-30">
                           <h4 className="tp-footer-widget-title mb-20">Our Newsletter</h4>
                           <div className="tp-footer-contact">
                              <span>Got Questions? Call us</span>
                              <a href="tel:012345678">+670 413 90 762</a>
                           </div>
                           <div className="tp-footer-contact-mail mb-20">
                              <a href="mailto:acadia@gmail.com">
                                 <span>
                                    <Email />
                                 </span>
                                 acadia@gmail.com</a>
                           </div>
                           <div className="tp-footer-app">
                              <a href="#">
                                 <Image src={google_play} alt="google-play" />
                              </a>
                              <a href="#">
                                 <Image src={apple_store} alt="apple-store" />
                              </a>
                           </div>
                        </div>
                     </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className="tp-footer-bottom">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-3 col-md-4">
                        <div className="tp-footer-bottom-social">
                           <FooterSocial />
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-5">
                        <div className="tp-footer-copyright text-start text-md-center">
                           <span>© {new Date().getFullYear()} <a href="#">Acadia</a>. All rights reserved.</span>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3">
                        <div className="header-bottom__lang-2 text-start text-md-end">
                           <ul>
                              <li>
                                 <a id="header-bottom__lang-toggle" href="#">
                                    <span>EN</span>
                                    <span>
                                       <DownArrowTwo />
                                    </span>
                                 </a>
                                 <ul className="header-bottom__lang-submenu-2">
                                    <li><a href="#">Arabic</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">Mandarin</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
            <div className="tp-footer-bottom-wrapper">
               <div className="container">
                  <div className="row align-items-center justify-content-between">
                     <div className="col-md-6 col-sm-12">
                        <div className="tp-footer-copyright text-center text-md-start">
                           <Link href="/privacy-policy">Privacy Policy</Link>
                           <Link href="/terms-of-service">Terms of Service</Link>
                           <span>© {new Date().getFullYear()} DTMA</span> {/* Current year from JS */}
                        </div>
                     </div>
                     <div className="col-md-6 col-sm-12">
                        <div className="tp-footer-social-icons text-center text-md-end">
                           <svg xmlns="http://www.w3.org/2000/svg" width="145" height="16" viewBox="0 0 145 16" fill="none">
                              <rect width="16" height="16" rx="2" fill="#008080" />
                              <path d="M4 7V12" stroke="#F8F7FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M4 3.995V4.005" stroke="#F8F7FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8 12V7" stroke="#F8F7FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12 12V9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9" stroke="#F8F7FA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M59.6885 1.89399C58.9647 2.21572 58.1857 2.43273 57.3684 2.52985C58.2029 2.03027 58.8428 1.23895 59.1445 0.294949C58.364 0.758156 57.4999 1.09427 56.5795 1.27572C55.8429 0.490783 54.793 0 53.6312 0C51.4007 0 49.5922 1.80846 49.5922 4.03937C49.5922 4.3555 49.6278 4.66364 49.697 4.95978C46.3398 4.79113 43.3631 3.18329 41.3708 0.739371C41.0231 1.33566 40.8241 2.02947 40.8241 2.77044C40.8241 4.17165 41.5371 5.4082 42.621 6.13239C41.9591 6.11121 41.3361 5.92936 40.7913 5.62682C40.7909 5.6436 40.7909 5.66079 40.7909 5.67797C40.7909 7.63471 42.1833 9.26692 44.0314 9.63861C43.6925 9.73053 43.3356 9.78009 42.9671 9.78009C42.7065 9.78009 42.4535 9.75491 42.2069 9.70735C42.7213 11.312 44.2128 12.4802 45.9801 12.5126C44.5977 13.596 42.8564 14.2419 40.9636 14.2419C40.6379 14.2419 40.3161 14.2227 40 14.1851C41.7881 15.3318 43.9111 16 46.1919 16C53.622 16 57.6846 9.84523 57.6846 4.50737C57.6846 4.33232 57.681 4.15767 57.6734 3.98421C58.4623 3.4159 59.1473 2.7041 59.6885 1.89399Z" fill="#008080" />
                              <rect x="83.6875" width="20.5714" height="16" rx="4" fill="#008080" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M91.6875 4.57031L97.4018 7.99888L91.6875 11.4275V4.57031Z" fill="#F8F7FA" />
                              <path d="M136.243 0C138.409 0 138.68 0.0106995 139.533 0.0488281C140.196 0.0624355 140.852 0.187949 141.473 0.420898C142.003 0.626376 142.485 0.940629 142.887 1.34277C143.289 1.74487 143.602 2.22662 143.808 2.75684C144.045 3.38553 144.171 4.05085 144.18 4.72266C144.229 5.57139 144.23 5.84675 144.231 8.0127C144.231 10.1794 144.22 10.4504 144.182 11.3037C144.168 11.9679 144.043 12.6224 143.81 13.2432C143.604 13.7733 143.29 14.2551 142.888 14.6572C142.486 15.0591 142.005 15.3734 141.475 15.5791C140.854 15.812 140.198 15.9371 139.535 15.9502C138.688 15.9999 138.41 16 136.244 16C134.079 16 133.808 15.9883 132.954 15.9502C132.29 15.9284 131.634 15.7931 131.016 15.5508C130.485 15.3455 130.004 15.0318 129.602 14.6299C129.199 14.2279 128.884 13.747 128.679 13.2168C128.445 12.595 128.321 11.9399 128.308 11.2764C128.258 10.4286 128.258 10.1512 128.258 7.98535C128.258 5.81995 128.269 5.54919 128.308 4.69531C128.32 4.03286 128.445 3.37694 128.679 2.75684C128.884 2.22645 129.198 1.74494 129.601 1.34277C130.003 0.940611 130.484 0.626233 131.015 0.420898C131.635 0.18806 132.291 0.0625351 132.953 0.0488281C133.8 6.47118e-05 134.078 2.50121e-10 136.243 0ZM136.238 3.88086C133.973 3.88087 132.138 5.71601 132.138 7.98145C132.138 10.2468 133.973 12.082 136.238 12.082C137.326 12.082 138.369 11.6499 139.138 10.8809C139.907 10.1118 140.339 9.06899 140.339 7.98145C140.339 6.89389 139.907 5.85105 139.138 5.08203C138.369 4.313 137.326 3.88086 136.238 3.88086ZM136.242 5.3125C137.713 5.31269 138.905 6.50555 138.905 7.97656C138.905 9.44741 137.713 10.6395 136.242 10.6396C134.771 10.6396 133.578 9.44753 133.578 7.97656C133.578 6.50544 134.771 5.3125 136.242 5.3125ZM140.502 2.77344C140.376 2.77344 140.252 2.79767 140.136 2.8457C140.02 2.89367 139.915 2.96418 139.826 3.05273C139.737 3.14145 139.667 3.24737 139.619 3.36328C139.571 3.47924 139.546 3.60398 139.546 3.72949C139.546 3.85478 139.57 3.97893 139.618 4.09473C139.666 4.21079 139.737 4.31646 139.826 4.40527C139.915 4.49392 140.02 4.56432 140.136 4.6123C140.252 4.66029 140.376 4.68563 140.502 4.68555C141.03 4.68555 141.457 4.25794 141.457 3.72949C141.457 3.60399 141.433 3.47923 141.385 3.36328C141.337 3.24732 141.266 3.14148 141.178 3.05273C141.089 2.96405 140.983 2.89371 140.867 2.8457C140.751 2.7978 140.627 2.77346 140.502 2.77344Z" fill="#008080" />
                           </svg>
                           {/* Using
//                            
                           {/* <Image src={socials} alt="socials" width={120} height={20} /> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
