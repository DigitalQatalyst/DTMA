import BackToTop from "@/components/back-to-top";
import FooterTwo from "@/components/footer/footer-two";
import CustomHeader from "@/components/header/custom-header/CustomHeader";
// import Footer from "@/components/footer/dtma";
// import PreFooter from "@/components/footer/footer-landingPage";
import HeaderTwo from "@/components/header/header-two";
// import HeaderTwo from "@/components/header/navbar/dtma-navbar";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      {/* <HeaderTwo /> */}
      {/* header area end */}
      <CustomHeader
        className="header-area p-relative"
        style={{
          background:
            "linear-gradient(186deg, rgba(12, 125, 129, 0.50) -3.07%, rgba(12, 125, 129, 0.00) 95.2%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "200px", // Adjust as needed
        }}
      >
        <HeaderTwo />
      </CustomHeader>

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
