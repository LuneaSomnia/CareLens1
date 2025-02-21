import { useState } from 'react';
import { FrostedCard } from '@/components/common/FrostedCard';
import { motion } from 'framer-motion';

export const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    dataSharing: {
      research: false,
      marketing: false,
      thirdParty: false
    },
    authentication: {
      twoFactor: false,
      biometric: false
    },
    notifications: {
      email: true,
      push: true,
      sms: false
    }
  });

  const ToggleSwitch = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <motion.div
      className={`w-14 h-8 rounded-full p-1 cursor-pointer ${
        value ? 'bg-frostBlue' : 'bg-gray-300'
      }`}
      onClick={onChange}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full"
        animate={{ x: value ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Data Sharing Preferences</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Share data for research purposes</span>
            <ToggleSwitch
              value={settings.dataSharing.research}
              onChange={() => setSettings({
                ...settings,
                dataSharing: {
                  ...settings.dataSharing,
                  research: !settings.dataSharing.research
                }
              })}
            />
          </div>
        </div>
      </FrostedCard>

      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Authentication Methods</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Enable Two-Factor Authentication</span>
            <ToggleSwitch
              value={settings.authentication.twoFactor}
              onChange={() => setSettings({
                ...settings,
                authentication: {
                  ...settings.authentication,
                  twoFactor: !settings.authentication.twoFactor
                }
              })}
            />
          </div>
        </div>
      </FrostedCard>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-frostBlue/20 rounded-lg mt-4"
        onClick={() => console.log('Export data')}
      >
        Export My Health Data
      </motion.button>
    </div>
  );
};
