import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dubaiexpat.co.uk"),
  title: {
    default: "Dubai Expat | Your Complete Guide to Moving to Dubai",
    // No template — pages set their own complete title. Templates push every
    // title over Google's ~60-char SERP truncation budget.
    template: "%s",
  },
  description:
    "Dubai Expat is a relocation guide for UK expats moving to Dubai and the UAE — covering visas, housing, schools, removals, banking, and community life.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Dubai Expat",
    title: "Dubai Expat | Your Complete Guide to Moving to Dubai",
    description:
      "Relocation guide for UK expats moving to Dubai and the UAE — visas, housing, schools, removals, banking, and community life.",
    url: "/",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Dubai Expat — UK expat relocation guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Expat | Your Complete Guide to Moving to Dubai",
    description:
      "Relocation guide for UK expats moving to Dubai and the UAE.",
    images: ["/og-default.png"],
  },
  verification: {
    google: "_GzRZEQg7lLjGNegr_mfBtbKyG3nLfaHNed1_9TsJwg",
  },
  other: {
    "msvalidate.01": "440E4F10AB276DE366BC65DDF98B51EA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="440E4F10AB276DE366BC65DDF98B51EA" />
        <meta name="impact-site-verification" content="adde694d-006b-4488-8e06-6d77e86a02dc" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q93X7TD1X2"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q93X7TD1X2');
          `}
        </Script>
        <Script id="affiliate-click-tracking" strategy="lazyOnload">
          {`
            (function(){
              function detectAffiliateProgramme(href){
                if(!href||typeof href!=='string')return null;
                try{
                  var u=new URL(href);
                  var p=u.searchParams;
                  var host=u.hostname.replace(/^www\\./,'');
                  if(host==='go.nordvpn.net')return{programme:'nordvpn',clickref:p.get('aff_sub')};
                  if(host==='safetywing.com'&&p.has('referenceID'))return{programme:'safetywing',clickref:p.get('utm_campaign')};
                  if(host==='deal.incogni.io')return{programme:'incogni',clickref:p.get('aff_sub')};
                  if(host==='clk.omgt6.com')return{programme:'optimise',clickref:p.get('MID')};
                  if(host==='awin1.com')return{programme:'awin',clickref:p.get('clickref')};
                  return null;
                }catch(e){return null;}
              }
              document.addEventListener('click',function(e){
                var anchor=e.target&&e.target.closest?e.target.closest('a[href]'):null;
                if(!anchor)return;
                var detected=detectAffiliateProgramme(anchor.href);
                if(!detected)return;
                if(typeof window.gtag==='function'){
                  window.gtag('event','affiliate_click',{
                    event_category:'affiliate',
                    event_label:detected.programme,
                    programme:detected.programme,
                    clickref:detected.clickref,
                    destination_host:(function(){try{return new URL(anchor.href).hostname;}catch(e){return null;}})(),
                    page_path:window.location.pathname
                  });
                }
              });
            })();
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Sidebar />
        {/* pt-14 offsets the fixed mobile top bar; md:pl-64 offsets the desktop sidebar */}
        <div className="pt-14 md:pt-0 md:pl-64">
          {children}
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
