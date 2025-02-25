import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center bg-gray-50 py-3">
    <Link href={'/boss'}>©</Link>2025 by LankyJo.
  </footer>
  )
}

export default Footer