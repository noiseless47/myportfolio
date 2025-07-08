import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function QuikCartLanding() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 pt-20 md:pt-28 pb-16">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center mb-8">
          <Image src="/quikcart-logo.png" alt="QuikCart Logo" width={120} height={120} className="rounded-2xl shadow-lg mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
            QuikCart
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Customer & Security Apps</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">Flutter Powered</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-semibold">Android | iOS | Web</span>
          </div>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          The next-gen retail experience: Fast, secure, and smart shopping for customers and stores.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-left">
            <h2 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">🛒 QuikCart Customer</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Scan & shop with ease</li>
              <li>Track your purchases</li>
              <li>Fast checkout experience</li>
              <li>Secure payments</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-left">
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">🛡️ QuikCart Security</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>QR code scanning for receipts</li>
              <li>RFID verification of purchased items</li>
              <li>Real-time validation & audio feedback</li>
              <li>Visual status updates for security</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          <Link href="/quikcart/install" className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold text-lg shadow hover:bg-green-700 transition mb-4 md:mb-0">Install Now</Link>
          <Link href="/quikcart/help" className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg font-bold text-lg shadow hover:bg-gray-300 transition">Help & Docs</Link>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">QuikCart: Smart shopping, secure checkout.</p>
      </div>
    </main>
  );
} 