import React from 'react';

const androidApks = [
  {
    name: 'ClassMate V2.1.0',
    file: '/ClassMate_V2.1.0.apk',
    size: '26 MB',
    version: '2.1.0',
    date: '2024-06-01',
  },
  {
    name: 'ClassMate V2.0.0',
    file: '/ClassMate_V2.0.0.apk',
    size: '24 MB',
    version: '2.0.0',
    date: '2024-04-15',
  },
];

export default function ClassMateInstallPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Install ClassMate
        </h1>
        {/* Android Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="Android">🤖</span> Android
          </h2>
          <ul className="space-y-4">
            {androidApks.map((apk) => (
              <li key={apk.version} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                <div>
                  <div className="font-semibold text-lg">{apk.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Version {apk.version} • {apk.size} • {apk.date}</div>
                </div>
                <a
                  href={apk.file}
                  download
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow mt-6">
            <li>Download the APK file above to your Android device.</li>
            <li>If prompted, allow installation from unknown sources in your device settings.</li>
            <li>Open the APK file and follow the on-screen instructions to install.</li>
            <li>Launch ClassMate and enjoy!</li>
          </ol>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">App releasing on Google Play Store soon.</p>
        </section>
        {/* iOS Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="iOS">🍎</span> iOS
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-gray-700 dark:text-gray-300">
            <p>App releasing on iOS soon.</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">Stay tuned for the App Store release.</p>
        </section>
        {/* Website/Other Platforms Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="Desktop">💻</span> Windows, Linux & macOS
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-gray-700 dark:text-gray-300">
            <p>Website version coming soon.</p>
          </div>
        </section>
      </div>
    </main>
  );
} 