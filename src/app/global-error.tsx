'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ExclamationTriangleIcon, ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const GlobalErrorPage: React.FC<GlobalErrorProps> = ({ error, reset }) => {
  const router = useRouter()

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <ExclamationTriangleIcon className="h-24 w-24 text-red-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Application Error
              </h1>
              <p className="text-gray-600 mb-6">
                A critical error occurred in the application. Please try refreshing the page.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Error Details</h2>
              <p className="text-sm text-gray-600 font-mono bg-gray-100 p-2 rounded">
                {error.message || 'An unexpected error occurred'}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Try Again
              </button>
              <button
                onClick={() => router.push('/')}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <HomeIcon className="h-4 w-4 mr-2" />
                Go Home
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>
                If this problem persists, please{' '}
                <a href="/contact" className="text-orange-600 hover:text-orange-700">
                  contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default GlobalErrorPage
