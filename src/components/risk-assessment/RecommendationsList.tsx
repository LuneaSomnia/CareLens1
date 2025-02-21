import { motion } from 'framer-motion';
import { FrostedCard } from '@/components/common/FrostedCard';

interface Recommendation {
  id: string;
  category: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  actionItems: string[];
}

interface RecommendationsListProps {
  recommendations: Recommendation[];
}

export const RecommendationsList: React.FC<RecommendationsListProps> = ({ recommendations }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-400/40';
      case 'medium':
        return 'bg-orange-400/40';
      case 'low':
        return 'bg-green-400/40';
      default:
        return 'bg-blue-400/40';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <FrostedCard>
      <h3 className="text-xl text-deepBlue mb-6">Personalized Recommendations</h3>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {recommendations.map((rec) => (
          <motion.div
            key={rec.id}
            variants={item}
            className="relative overflow-hidden"
          >
            <FrostedCard className="hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4">
                <div
                  className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(
                    rec.priority
                  )}`}
                >
                  {rec.priority.toUpperCase()}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-deepBlue mb-2">
                    {rec.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{rec.description}</p>
                  
                  {rec.actionItems.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-deepBlue">
                        Action Items:
                      </h5>
                      <ul className="list-disc list-inside text-sm">
                        {rec.actionItems.map((action, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {action}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </FrostedCard>
          </motion.div>
        ))}
      </motion.div>
    </FrostedCard>
  );
};
                        
