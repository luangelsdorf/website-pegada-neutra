import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-99JE4JJX38"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-99JE4JJX38');
        `}
      </Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H193JHT7Y3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-2" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H193JHT7Y3');
        `}
      </Script>
    </>
  )
}
