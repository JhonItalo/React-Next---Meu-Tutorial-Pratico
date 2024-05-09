import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        {children}
        <Header />
      </body>
    </html>
  );
}
// fonte secundária usada apenas no Header 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Header = () => {
  return <div className={`${lusitana.className} font-bold`}>header</div>
}
