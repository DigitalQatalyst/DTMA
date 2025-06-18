import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";
import HeaderTwo from '@/components/header/navbar/dtma-navbar';
import Footer from '@/components/footer/dtma';

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <Footer />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
