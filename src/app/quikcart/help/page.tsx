import React from 'react';

export default function QuikCartHelpPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          QuikCart Help & Docs
        </h1>
        {/* Customer App Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="Customer">🛒</span> QuikCart Customer
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-gray-700 dark:text-gray-300">
            <p>Coming soon! The QuikCart Customer app will let you shop, scan, and checkout with ease.</p>
          </div>
        </section>
        {/* Security App Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="Security">🛡️</span> QuikCart Security
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-gray-700 dark:text-gray-300 mb-6">
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>QR Code Scanning: Scan purchase receipts via QR codes</li>
              <li>RFID Verification: Read RFID tags from purchased items</li>
              <li>Real-time Validation: Instantly verify if scanned items match the bill</li>
              <li>Audio Feedback: Distinct sounds for successful and failed scans</li>
              <li>Visual Status Updates: Clear visual indicators for verified items</li>
            </ul>
            <h3 className="font-semibold mb-2">How to Use</h3>
            <ol className="list-decimal list-inside space-y-1 mb-4">
              <li>Start the app and select QR scanner option.</li>
              <li>Scan the QR code on the purchase receipt.</li>
              <li>Begin RFID scanning and verify each item by tapping it to the device&apos;s NFC reader.</li>
              <li>Check visual and audio feedback for verification status.</li>
            </ol>
            <h3 className="font-semibold mb-2">Troubleshooting</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>NFC Not Detected:</strong> Ensure NFC is enabled and device supports it.</li>
              <li><strong>QR Scanner Issues:</strong> Ensure good lighting and camera permissions.</li>
              <li><strong>Build Errors:</strong> Try restarting the app or device, and check permissions.</li>
            </ul>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">For more help, contact the developer or visit the project repository.</p>
          </div>
        </section>
      </div>
    </main>
  );
} 