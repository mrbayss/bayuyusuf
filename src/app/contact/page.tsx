import type { Metadata } from "next";
import ContactMethods from "@/components/ContactMethods";

export const metadata: Metadata = {
  title: "Contact | Muhamad Bayu Yusuf",
  description: "[PLACEHOLDER: Contact page description, reach out for collaborations or inquiries.]",
  openGraph: {
    title: "Contact | Muhamad Bayu Yusuf",
    description: "[PLACEHOLDER: Contact page description, reach out for collaborations or inquiries.]",
    images: ["/images/og-image.png"],
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactMethods />;
}
