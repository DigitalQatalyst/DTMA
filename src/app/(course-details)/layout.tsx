import BackToTop from "@/components/back-to-top";
import FooterSeven from "@/components/footer/footer-seven";
// import HeaderTwo from "@/components/header/header-two";
import MainProvider from "@/components/provider/main-provider";
import Navbar from "@/components/header/navbar/dtma-navbar";
import PostFooter from "@/components/footer/footer-landingPage";
import Footer from "@/components/footer/dtma";

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <MainProvider>

      <Navbar />
      
      {/* <HeaderTwo inner={true}/> */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <PostFooter/>
      <Footer/>

      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
