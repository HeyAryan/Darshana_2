'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon, HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

const NotFoundPage: React.FC = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-orange-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">What can you do?</h2>
          <ul className="text-sm text-gray-600 space-y-2 text-left">
            <li>• Check the URL for typos</li>
            <li>• Use the search function to find what you need</li>
            <li>• Browse our monuments and stories</li>
            <li>• Return to the homepage</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => router.back()}
            className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Go Back
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <HomeIcon className="h-4 w-4 mr-2" />
            Go Home
          </button>
        </div>

        <div className="mt-8">
          <button
            onClick={() => router.push('/monuments')}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            Explore Monuments
          </button>
          <span className="text-gray-400 mx-2">•</span>
          <button
            onClick={() => router.push('/stories')}
            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
          >
            Read Stories
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
