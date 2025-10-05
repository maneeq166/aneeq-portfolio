import { Inter } from "next/font/google";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary dark:text-secondary">
          Hello, there!
        </h1>
        <p className="text-primary dark:text-secondary">
          {" "}
          I&apos;m student at Jamia Millia Islamia with a passion for building
          scalable and efficient systems.
        </p>
      </Container>
    </div>
  );
}
