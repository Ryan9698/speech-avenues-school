import {
  quicksand,
  dmSans,
  nunito,
  geistSans,
  geistMono,
} from '@/utils/fontImports';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Speech Avenues Therapy School',
  description:
    "Speech Avenues Therapy School offers an alternative education for children to bring out your child's potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${dmSans.variable} ${nunito.variable} font-quicksand antialiased flex flex-col min-h-screen bg-[#FAFAF9]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
