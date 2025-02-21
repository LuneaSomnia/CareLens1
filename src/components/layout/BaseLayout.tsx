import { motion, AnimatePresence } from 'framer-motion';
import { Snowfall } from '../common/Snowfall';

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-frost to-primary-crystal">
      <Snowfall />
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container mx-auto px-4 py-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};
