
import { ReactNode, useState } from "react";
import { useRouter } from 'next/router';
import Header from "./header";
import Footer from "./footer";




interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
