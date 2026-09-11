export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "System Information School",
    description:
      "Backend sistem informasi sekolah berbasis REST API - manajemen data sekolah dengan GoFiber, PostgreSQL, dan arsitektur backend yang terstruktur.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/Si-eRTe",
    tags: ["Golang", "PostgreSQL", "GoFiber", "REST API"],
  },
  {
    id: "project-2",
    title: "Study Java Dasar",
    description:
      "Proyek belajar Java dari dasar - latihan konsep fundamental bahasa Java sebagai langkah awal penguasaan backend development.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/belajar-java-dasar",
    tags: ["Java", "Dasar", "YouTube"],
  },
  {
    id: "project-3",
    title: "Koreksi AI",
    description:
      "Aplikasi penilaian jawaban siswa - foto jawaban dipindai lewat kamera lalu dikoreksi otomatis menggunakan AI Gemini.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/koreksi.ai",
    tags: ["TypeScript", "Golang", "AI", "Gemini"],
  },
  {
    id: "project-4",
    title: "Study Java OOP",
    description:
      "Proyek belajar Object-Oriented Programming di Java - implementasi konsep class, inheritance, polymorphism, dan encapsulation.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/Java-OOP",
    tags: ["Java", "OOP"],
  },
  {
    id: "project-5",
    title: "Study Java SpringBoot Dasar",
    description:
      "Proyek belajar Spring Boot dari dasar - membangun aplikasi web Java dengan framework Spring Boot.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/study-java-springboot-dasar",
    tags: ["Java", "SpringBoot", "Dasar"],
  },
  {
    id: "project-6",
    title: "Java Ecommerce BayShop",
    description:
      "Backend e-commerce BayShop - REST API dengan Spring Boot untuk pengelolaan produk, pesanan, dan transaksi.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/java-ecommerce-bayshop",
    tags: ["Java", "SpringBoot", "REST API"],
  },
  {
    id: "project-7",
    title: "Java Rest API",
    description:
      "Proyek praktik RESTful API dengan Java Spring Boot - implementasi endpoint REST dan struktur backend yang terorganisir.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/java-restful-api",
    tags: ["Java", "REST API", "SpringBoot"],
  },
  {
    id: "project-8",
    title: "Golang Simple Ecommerce",
    description:
      "Backend e-commerce sederhana - REST API dengan GoFiber dan PostgreSQL untuk pengelolaan produk dan transaksi.",
    image: "/images/projects/placeholder.avif",
    link: "https://github.com/mrbayss/golang-simple-ecommerce",
    tags: ["Golang", "PostgreSQL", "GoFiber", "REST API"],
  },
];