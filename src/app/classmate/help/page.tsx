import React from 'react';

export default function ClassMateHelpPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          ClassMate Help & Docs
        </h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Main Features</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <li>Timetable management: Track your class schedule</li>
            <li>Course tracking: Manage courses, professors, and attendance</li>
            <li>Deadline management: Stay on top of assignments, exams, and projects</li>
            <li>Attendance analytics: Monitor your attendance percentage</li>
            <li>Dark mode support</li>
            <li>Responsive design for all devices</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <li>Open the app and set up your profile and courses.</li>
            <li>Use the Timetable to view your weekly schedule.</li>
            <li>Add deadlines for assignments, exams, and projects.</li>
            <li>Track your attendance and monitor analytics.</li>
            <li>Switch between light and dark mode as needed.</li>
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <li>Grade tracking and GPA calculator</li>
            <li>Notification system for deadlines</li>
            <li>Cloud sync across devices</li>
            <li>Study timer and productivity tools</li>
            <li>Social features for class collaboration</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow text-gray-700 dark:text-gray-300">
            <p>For more help, feedback, or feature requests, contact the developer or visit the project repository.</p>
          </div>
        </section>
      </div>
    </main>
  );
} 