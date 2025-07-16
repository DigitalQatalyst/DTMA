import BackToTop from "@/components/back-to-top";
import FooterSix from "@/components/footer/footer-six";
import FooterTwo from '@/components/footer/footer-two';
import HeaderSix from "@/components/header/header-six";
import HeaderTwo from '@/components/header/header-two';
import MainProvider from "@/components/provider/main-provider";
import '@/app/main.css';

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <MainProvider>

      {/* header area start */}
      {/* <HeaderSix sm_mega_title="programs" inner={true}/> */}
      <HeaderTwo />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterTwo />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
