import { Inter } from "next/font/google";
import "./globals.css";

import config from './config';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        {props.children}
        {props.about}
        {/* Другие элементы вашего макета */}
      </body>
    </html>
  );
}
