import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ClassMateLanding() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 pt-20 md:pt-28 pb-16">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center mb-8">
          <Image src="/classmate-logo.png" alt="ClassMate Logo" width={120} height={120} className="rounded-2xl shadow-lg mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            ClassMate
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Version 2.1.0</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">Flutter Powered</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-semibold">iOS | Android | Web | Windows | macOS</span>
          </div>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          A modern student productivity app to manage your academic life efficiently. Built with Flutter, for students, by students.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-left">
            <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">✨ Features</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Timetable & class schedule management</li>
              <li>Course & attendance tracking</li>
              <li>Deadline & assignment management</li>
              <li>Attendance analytics</li>
              <li>Dark mode support</li>
              <li>Responsive across devices</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-left">
            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">🛠️ Tech Stack</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Flutter, Provider, Shared Preferences</li>
              <li>Table Calendar, Flutter Animations</li>
              <li>Modern UI/UX</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          <Link href="/classmate/install" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition mb-4 md:mb-0">Install Now</Link>
          <Link href="/classmate/help" className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg font-bold text-lg shadow hover:bg-gray-300 transition">Help & Docs</Link>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">Developed with ❤️ for students, by students.</p>
      </div>
    </main>
  );
} 