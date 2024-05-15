
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-transparent via-transparent/5 to-transparent/10 text-gray-400 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <MountainIcon className="h-8 w-8 text-gray-400 mr-2" />
            <span className="text-lg font-semibold text-gray-200 font-heading3 md:text-2xl">SHADOW.</span>
          </div>
          <p className="text-sm leading-relaxed">
            SHADOW Inc. is a leading provider of innovative solutions for businesses of all sizes.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-gray-200 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-gray-200 font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300 transition-colors" href="#">
                Tutorials
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-gray-200 font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-300 transition-colors" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300 transition-colors" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300 transition-colors" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300 transition-colors" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <p className="text-sm">© 2024 Acme Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
