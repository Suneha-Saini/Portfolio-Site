// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
// import { cn } from "@/lib/utils"
// import Image from "next/image"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Projects", href: "/projects" },
//     { name: "Service", href: "/service" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20"> {/* Increased height from h-16 to h-20 */}
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <Image
//               src="/images/logo.png"
//               alt="Logo"
//               width={120} // Adjust width as needed
//               height={40} // Adjust height as needed
//               className="object-contain"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={cn(
//                     "px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400",
//                     pathname === item.href ? "text-cyan-400" : "text-gray-300",
//                   )}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Desktop Social Links */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//               <Github className="h-5 w-5" />
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//               <Linkedin className="h-5 w-5" />
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//               <Mail className="h-5 w-5" />
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-400 hover:text-white"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 rounded-lg mt-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={cn(
//                     "block px-3 py-2 text-base font-medium transition-colors hover:text-cyan-400",
//                     pathname === item.href ? "text-cyan-400" : "text-gray-300",
//                   )}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="flex items-center space-x-4 px-3 py-2">
//                 <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <Github className="h-5 w-5" />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                   <Mail className="h-5 w-5" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }








"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Service", href: "/service" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400",
                    pathname === item.href ? "text-cyan-400" : "text-gray-300",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Suneha-Saini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/suneha-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:er.sunehasaini@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors hover:text-cyan-400",
                    pathname === item.href ? "text-cyan-400" : "text-gray-300",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://github.com/Suneha-Saini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/suneha-saini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:er.sunehasaini@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}