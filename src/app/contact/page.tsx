import type { Metadata } from "next";
import ContactMethods from "@/components/ContactMethods";

export const metadata: Metadata = {
  title: "Contact | Muhamad Bayu Yusuf",
  description: "Get in touch with Muhamad Bayu Yusuf for collaborations, freelance work, or just to say hi.",
  openGraph: {
    title: "Contact | Muhamad Bayu Yusuf",
    description: "Get in touch with Muhamad Bayu Yusuf for collaborations, freelance work, or just to say hi.",
    images: ["/images/og-image.jpeg"],
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactMethods />;
}
