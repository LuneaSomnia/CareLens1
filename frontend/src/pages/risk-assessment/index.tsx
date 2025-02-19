import { useState } from 'react';
import { FrostedCard } from '@/components/common/FrostedCard';
import { RiskMetrics } from '@/components/risk-assessment/RiskMetrics';
import { AssessmentForm } from '@/components/risk-assessment/AssessmentForm';
import { RecommendationsList } from '@/components/risk-assessment/RecommendationsList';

export default function RiskAssessmentPage() {
  const [assessmentResults, setAssessmentResults] = useState({
    diabetesRisk: 0,
    heartDiseaseRisk: 0,
    mentalHealthRisk: 0,
    recommendations: []
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-deepBlue mb-8">Health Risk Assessment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AssessmentForm onSubmit={setAssessmentResults} />
        
        <div className="space-y-6">
          <RiskMetrics results={assessmentResults} />
          <RecommendationsList recommendations={assessmentResults.recommendations} />
        </div>
      </div>
    </div>
  );
}
