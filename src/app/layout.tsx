
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Providers from "@/@recusos_da_aplicação/providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React + Next Exemplos Práticos",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-row`}>
        <Providers>
          <aside className="w-1/5 h-screen p-10 bg-blue-700 capitalize">
            <ul className="flex flex-col gap-6 text-white font-semibold">
              <li><Link href="/">home</Link></li>
              <li><Link href="/login">login</Link></li>
              <li><Link href="/private-route">private route(middleware)</Link></li>
              <li><Link href="/private-route-padrao">private route(react)</Link></li>
              <li><Link href="/static">page static</Link></li>
              <li><Link href="/server-side" >page ssr</Link></li>
              <li><Link href="/experimental" >experimental static + ssr</Link></li>
              <li><Link href="/#" ></Link>streaming ssr</li>
            </ul>
          </aside>
          {children}
        </Providers>
      </body>
    </html>


  );
}
{/*    <header className="w-full py-10 px-4 bg-orange-500">
            <h1 className="font-bold text-2xl">layout raiz</h1>
          </header> */}