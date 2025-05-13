import {
  quicksand,
  dmSans,
  nunito,
  geistSans,
  geistMono,
} from '@/utils/fontImports';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

export const metadata = {
  title: 'Speech Avenues Therapy School',
  description:
    "Speech Avenues Therapy School offers an alternative education for children to bring out your child's potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${dmSans.variable} ${nunito.variable} font-quicksand antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
