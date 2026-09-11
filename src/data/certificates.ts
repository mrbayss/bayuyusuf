export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "[PLACEHOLDER: Certificate Title]",
    organization: "[PLACEHOLDER: Issuing Organization]",
    date: "[PLACEHOLDER: Date]",
    image: "/images/certificates/placeholder.avif",
  },
];
