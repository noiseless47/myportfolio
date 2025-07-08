'use client';
import React, { useState } from 'react';

const androidApk = {
  version: '1.0.0',
  size: '20 MB',
  date: '2024-06-01',
};

const TABS = [
  { key: 'customer', label: 'QuikCart Customer', icon: '🛒' },
  { key: 'security', label: 'QuikCart Security', icon: '🛡️' },
];

export default function QuikCartInstallPage() {
  const [tab, setTab] = useState('customer');

  return (
    <main className="min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Install QuikCart
        </h1>
        {/* Tabs */}
        <div className="flex mb-8 border-b border-gray-200 dark:border-gray-700">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`flex items-center gap-2 px-6 py-3 font-semibold text-lg focus:outline-none transition border-b-2 -mb-px ${
                tab === t.key
                  ? 'border-green-500 text-green-600 dark:text-green-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-green-600'
              }`}
              onClick={() => setTab(t.key)}
              type="button"
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        {tab === 'customer' && (
          <section>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-gray-700 dark:text-gray-300 mb-4">
              <p>The QuikCart Customer app lets you shop, scan, and checkout with ease.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Android</h3>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded-lg p-4 shadow mb-2">
                <div>
                  <div className="font-semibold text-lg">QuikCart Customer v{androidApk.version}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Version {androidApk.version} • {androidApk.size} • {androidApk.date}</div>
                </div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition">
                  Install Now
                </button>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="font-semibold mb-1">iOS</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">App releasing on iOS App Store soon.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Windows, Linux & macOS</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Website version coming soon.</p>
            </div>
          </section>
        )}
        {tab === 'security' && (
          <section>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-gray-700 dark:text-gray-300 mb-4">
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>QR Code Scanning: Scan purchase receipts via QR codes</li>
                <li>RFID Verification: Read RFID tags from purchased items</li>
                <li>Real-time Validation: Instantly verify if scanned items match the bill</li>
                <li>Audio Feedback: Distinct sounds for successful and failed scans</li>
                <li>Visual Status Updates: Clear visual indicators for verified items</li>
              </ul>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Requires device with NFC capability for RFID scanning.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Android</h3>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded-lg p-4 shadow mb-2">
                <div>
                  <div className="font-semibold text-lg">QuikCart Security v{androidApk.version}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Version {androidApk.version} • {androidApk.size} • {androidApk.date}</div>
                </div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition">
                  Install Now
                </button>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="font-semibold mb-1">iOS</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">App releasing on iOS App Store soon.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Windows, Linux & macOS</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Website version coming soon.</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
} 