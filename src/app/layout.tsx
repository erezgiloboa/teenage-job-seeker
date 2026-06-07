import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Teenage Job Seeker - Find Your Perfect Job',
  description: 'AI-powered job search platform for teenagers in Israel. Find jobs that match your skills and preferences.',
  keywords: ['job search', 'teenagers', 'Israel', 'employment', 'ChatGPT'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <body className="bg-gray-50">
        <header className="bg-white shadow sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-blue-600">🚀 Teenage Job Seeker</h1>
            <p className="text-gray-600 mt-1 text-sm">Find your perfect job in Israel with AI-powered recommendations</p>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-6 mt-12">
          <p>© 2024 Teenage Job Seeker. Built for teenagers in Israel 🇮🇱</p>
        </footer>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
