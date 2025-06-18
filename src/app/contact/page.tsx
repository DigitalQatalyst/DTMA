import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import ContactInfoArea from "@/components/contact/contact-info-area";
import HeroSection from '@/components/contact/hero-section';
import QuickHelpSection from '@/components/contact/quick-help-section';
import ContactUsSection from '@/components/contact/contact-us-section';
import FaqArea from '@/components/faq/faq-area';

export const metadata: Metadata = {
    title: "Contact - Acadia",
};

export default function ContactPage() {
    return (
        <main>

            <HeroSection />
            <QuickHelpSection />
            <ContactUsSection />
            <FaqArea />

        </main>
    );
}
