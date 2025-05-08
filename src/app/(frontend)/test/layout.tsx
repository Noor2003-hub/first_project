import '@payloadcms/next/css'
import React from 'react'
import '@/styles/globals.css'


export default function layout({
    children
}:{
    children:React.ReactNode
}){
    return(
      <html lang="en">
     <body>
      <main>{children}</main>
       </body>
     </html>
        // <div>
        //     <HeaderServer/>
        //     {children}
        //     <FooterServer/>
        // </div>
    )
}

// import React from 'react'
// import './styles.css'

// export const metadata = {
//   description: 'A blank template using Payload in a Next.js app.',
//   title: 'Payload Blank Template',
// }

// export default async function RootLayout(props: { children: React.ReactNode }) {
//   const { children } = props

//   return (
//     <html lang="en">
//       <body>
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }
