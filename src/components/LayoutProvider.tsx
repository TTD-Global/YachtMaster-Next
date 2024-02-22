import Link from 'next/link';
import Script from 'next/script';
import React from 'react'

export default function LayoutProvider({   children, }: Readonly<{   children: React.ReactNode;}>) {
  return (
    <html lang="en">
        <head>
            <link 
                rel="stylesheet" 
                href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
            />
            <link 
                rel="stylesheet" 
                href="/sys_css/bootstrap.css" 
            />
            <link 
                rel="stylesheet" 
                href="/sys_css/lightbox.min.css" 
            />
            <link 
                rel="stylesheet" 
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" 
            />
            <link 
                rel="stylesheet" 
                href="/sys_css/standard.css" 
            />
            <link 
                rel="stylesheet" 
                href="/sys_css/style.css" 
            />

        </head>
        <body >
            {children}
            {/* <script src="/sys_js/jquery-3.7.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" ></script>
            <script src="/sys_js/lightbox.min.js"></script>
            <script src=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js "></script>
            <script src="/sys_js/script.js"></script> */}
        </body>
    </html>
  )
}
