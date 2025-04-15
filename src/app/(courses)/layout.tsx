import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer/dtma";
import PreFooter from "@/components/footer/footer-landingPage";
// import HeaderTwo from "@/components/header/header-two";
import HeaderTwo from "@/components/header/navbar/dtma-navbar";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <MainProvider>

      {/* header area start */}
      <HeaderTwo transparent={true}/>
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      {/* <FooterSeven/> */}
      <PreFooter/>
      <Footer/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
