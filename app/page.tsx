'use client'

import React, { useState } from 'react'

export default function Home() {
  const [healthMetrics, setHealthMetrics] = useState({
    riskLevel: 'low',
    recommendations: ['Stay hydrated', 'Exercise regularly', 'Get enough sleep'],
    vitalSigns: {
      heartRate: '72 bpm',
      bloodPressure: '120/80',
      temperature: '98.6°F'
    }
  })

  return (
    <div className="min-h-screen bg-gradient-frost">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="backdrop-blur-lg bg-white/30 rounded-xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">Welcome to CareLens</h1>
          <p className="text-xl text-blue-600 text-center">Your personal preventive healthcare companion</p>
        </div>

        {/* Health Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Health Risk Assessment</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Current Risk Level:</span>
                <span className="text-green-600 font-bold">{healthMetrics.riskLevel}</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Vital Signs:</h3>
                <ul className="space-y-2">
                  <li>Heart Rate: {healthMetrics.vitalSigns.heartRate}</li>
                  <li>Blood Pressure: {healthMetrics.vitalSigns.bloodPressure}</li>
                  <li>Temperature: {healthMetrics.vitalSigns.temperature}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Health Recommendations</h2>
            <ul className="space-y-3">
              {healthMetrics.recommendations.map((rec, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
