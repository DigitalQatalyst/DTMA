import FooterSeven from "@/components/footer/footer-seven";
import "./playerstyle.css";
import BackToTop from "@/components/back-to-top";
import HeaderTwo from "@/components/header/header-two";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* header area start */}
      <HeaderTwo inner={true} />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterSeven />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </div>
  );
}
