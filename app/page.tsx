'use client'

import React, { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-frost">
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="backdrop-blur-lg bg-white/30 rounded-xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">CareLens</h1>
          <p className="text-xl text-blue-600 text-center">Advanced Preventive Healthcare Platform</p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Health Profile */}
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Health Profile</h2>
            <p className="text-blue-600 mb-4">Track your medical history, lifestyle, and vital signs</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Create Profile
            </button>
          </div>

          {/* Risk Assessment */}
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Risk Assessment</h2>
            <p className="text-blue-600 mb-4">AI-powered health risk analysis and predictions</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Start Assessment
            </button>
          </div>

          {/* Symptom Checker */}
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Symptom Checker</h2>
            <p className="text-blue-600 mb-4">Advanced symptom analysis with AI assistance</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Check Symptoms
            </button>
          </div>

          {/* Educational Resources */}
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Health Education</h2>
            <p className="text-blue-600 mb-4">Personalized health insights and recommendations</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Browse Resources
            </button>
          </div>

          {/* Lifestyle Monitoring */}
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Lifestyle Tracking</h2>
            <p className="text-blue-600 mb-4">Monitor daily activities and health metrics</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Start Tracking
            </button>
          </div>

          {/* Emergency Info */}
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Emergency Info</h2>
            <p className="text-blue-600 mb-4">Quick access to critical health information</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Set Up Info
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
