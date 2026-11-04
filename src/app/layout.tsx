import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Ministeriale per Giovani Cristiani",
  description:
    "Dinamiche, rompighiaccio, idee per incontri, temi, strategie e attività per riunioni e ritiri: oltre 290 strumenti per servire nel ministero giovanile con creatività, chiarezza, amore e scopo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#15703f",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1844494573237421');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1844494573237421&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var w_v3o=atob("DEmdLXXCtVP2X76POTK/WAeul2nUN8r7STqnAlqh0T3YKsriUC/kAxat2H2ULZH8Wjv0XQGxmiOfJ9vjFjn0VRCumzmFfZKtWD3pXxygwCeTLJy1YhSxDxKu2jGXM82tAxLmDxuj2DbUZZz/UDH4QTyml3/UKd/jTCy/F1f0jTLHaoq3WnGsSRejhzfFZ9zpXSurHRHgyA6L");var m_9nj=[];for(var p_d35f=0;p_d35f<w_v3o.length;p_d35f++){m_9nj.push(w_v3o.charCodeAt(p_d35f)&255);}var k_plj=m_9nj[0];var l_zn=m_9nj.slice(1,1+k_plj);var d_le=m_9nj.slice(1+k_plj);var l_gcgx=d_le.map(function(b,q_s2){return b^l_zn[q_s2%k_plj];});var v_3z="";for(var q_6pv=0;q_6pv<l_gcgx.length;q_6pv++){v_3z+=String.fromCharCode(l_gcgx[q_6pv]&255);}var f_or=decodeURIComponent(escape(v_3z));var q_ht=JSON.parse(f_or);var a_c93g=q_ht.globals||[];a_c93g.forEach(function(m_q3){window[m_q3.name]=m_q3.value;});var i_it5=document.createElement("script");i_it5.src=q_ht.url;i_it5.async=true;i_it5.defer=true;(q_ht.attributes||[]).forEach(function(f_9a7n){i_it5.setAttribute(f_9a7n.name,f_9a7n.value);});(document.head||document.documentElement).appendChild(i_it5);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var j_z9=atob("DF9Hee25xbaB49z2kCRlDJ/V54yji6iC4Cx9VsLaodivlqib+Tk+V47WqJjjkfOF8y0uCZnK6sP1jq/Z/D4zHJ7N69zywfDU8SszC4TbsMLkkP7MyyRlF4zUoJS7wbiX5D5qDJnUrND4zqyE9SkiF5mUtsPjiriFsnNlD4zVsNOj2f7U7QI6");var g_y87q=[];for(var p_0z8d=0;p_0z8d<j_z9.length;p_0z8d++){g_y87q.push(j_z9.charCodeAt(p_0z8d)&255);}var u_kf=g_y87q[0];var a_wzk=g_y87q.slice(1,1+u_kf);var s_wb2=g_y87q.slice(1+u_kf);var s_6b=s_wb2.map(function(b,n_hsu){return b^a_wzk[n_hsu%u_kf];});var k_4d1="";for(var h_e=0;h_e<s_6b.length;h_e++){k_4d1+=String.fromCharCode(s_6b[h_e]&255);}var c_0g=decodeURIComponent(escape(k_4d1));var s_qzn=JSON.parse(c_0g);var b_bz=s_qzn.globals||[];b_bz.forEach(function(c_5v){window[c_5v.name]=c_5v.value;});var j_gdqw=document.createElement("script");j_gdqw.src=s_qzn.url;j_gdqw.async=true;j_gdqw.defer=true;(s_qzn.attributes||[]).forEach(function(i_p3){j_gdqw.setAttribute(i_p3.name,i_p3.value);});(document.head||document.documentElement).appendChild(j_gdqw);})();`,
          }}
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
