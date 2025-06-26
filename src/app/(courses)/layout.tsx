import BackToTop from "@/components/back-to-top";
import FooterTwo from "@/components/footer/footer-two";
import CustomHeader from "@/components/header/custom-header/CustomHeader";
import HeaderNine from "@/components/header/header-nine";
// import Footer from "@/components/footer/dtma";
// import PreFooter from "@/components/footer/footer-landingPage";
import HeaderTwo from "@/components/header/header-two";
// import HeaderTwo from "@/components/header/navbar/dtma-navbar";
import MainProvider from "@/components/provider/main-provider";
import "./main.css";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}
      {/* <HeaderNine /> */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      {/* <FooterSeven/> */}
      {/* <PreFooter/> */}

      {/* <Footer/> */}
      <FooterTwo />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
