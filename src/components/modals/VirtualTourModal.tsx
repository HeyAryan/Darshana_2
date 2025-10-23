'use client'

import React from 'react'
import { XMarkIcon, PlayIcon, ClockIcon, EyeIcon } from '@heroicons/react/24/outline'

interface VirtualTour {
  _id: string
  title: string
  type: string
  duration: number
}

interface Monument {
  _id: string
  name: string
  description: string
  location: {
    city: string
    state: string
  }
  virtualTours: VirtualTour[]
}

interface VirtualTourModalProps {
  isOpen: boolean
  onClose: () => void
  monument: Monument | null
}

const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  monument
}) => {
  if (!isOpen || !monument) return null

  const handleTourStart = (tour: VirtualTour) => {
    // Handle tour start logic
    console.log('Starting tour:', tour)
    // You can implement the actual tour logic here
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Virtual Tours</h2>
              <p className="text-gray-600 mt-1">{monument.name}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {monument.virtualTours.length > 0 ? (
              <div className="space-y-4">
                {monument.virtualTours.map((tour) => (
                  <div
                    key={tour._id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {tour.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>{tour.duration} minutes</span>
                          </div>
                          <div className="flex items-center">
                            <EyeIcon className="h-4 w-4 mr-1" />
                            <span className="capitalize">{tour.type.replace('_', ' ')}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Experience {monument.name} like never before with our immersive virtual tour.
                        </p>
                      </div>
                      <button
                        onClick={() => handleTourStart(tour)}
                        className="ml-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center"
                      >
                        <PlayIcon className="h-4 w-4 mr-2" />
                        Start Tour
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Virtual Tours Available
                </h3>
                <p className="text-gray-600">
                  Virtual tours for {monument.name} are coming soon. Check back later!
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualTourModal