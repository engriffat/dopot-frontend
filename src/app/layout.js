"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';
const inter = Inter({ subsets: ["latin"] });
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";

/*export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
    <html lang="en-US">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Dopot"
        />    
        <title>Dopot.fi</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <RecoilRoot><div id="root"><RecoilNexus />{children}</div></RecoilRoot>
      </body>
    </html>
    </Provider>
  );
}
