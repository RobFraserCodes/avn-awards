import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-8">
        <div className="container mx-auto flex justify-between">
        <div className='flex-col'>
            <a href="/privacy" className="mr-6">
            Privacy Policy
            </a>
            <a href="/usc">
              18 U.S.C. 2257
            </a>
            <a href="/contact" className="">
            Contact
            </a>
        </div>
        <div>
            <p className="">
              © 2023 AVN Media Network. All rights reserved. Reproduction in whole or in part is prohibited. Please send us any technical comments or questions by using the Contact Us form.
            </p>
        </div>
        </div>
    </footer>
  )
}
