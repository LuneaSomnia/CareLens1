import { useState } from 'react';
import { FrostedCard } from '@/components/common/FrostedCard';
import { FrostInput } from '@/components/common/FrostInput';
import { motion } from 'framer-motion';

export const EmergencyInfo = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: '', relationship: '', phone: '', email: '' }
  ]);

  const [medicalInfo, setMedicalInfo] = useState({
    bloodType: '',
    organDonor: false,
    donatedOrgans: [] as string[]
  });

  const addContact = () => {
    setEmergencyContacts([
      ...emergencyContacts,
      { name: '', relationship: '', phone: '', email: '' }
    ]);
  };

  return (
    <div className="space-y-6">
      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Emergency Contacts</h3>
        {emergencyContacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-4 mb-4"
          >
            <FrostInput
              label="Contact Name"
              value={contact.name}
              onChange={(value) => {
                const newContacts = [...emergencyContacts];
                newContacts[index].name = value;
                setEmergencyContacts(newContacts);
              }}
              placeholder="Full Name"
            />
            <FrostInput
              label="Relationship"
              value={contact.relationship}
              onChange={(value) => {
                const newContacts = [...emergencyContacts];
                newContacts[index].relationship = value;
                setEmergencyContacts(newContacts);
              }}
              placeholder="e.g., Spouse, Parent"
            />
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={addContact}
          className="px-4 py-2 bg-frostBlue/20 rounded-lg"
        >
          Add Contact
        </motion.button>
      </FrostedCard>

      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Medical Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <select
            value={medicalInfo.bloodType}
            onChange={(e) => setMedicalInfo({
              ...medicalInfo,
              bloodType: e.target.value
            })}
            className="frost-select"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
      </FrostedCard>
    </div>
  );
};
