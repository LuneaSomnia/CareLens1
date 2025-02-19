import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChipInputProps {
  label: string;
  chips: string[];
  onChipAdd: (chip: string) => void;
  onChipRemove: (index: number) => void;
  placeholder?: string;
}

export const ChipInput: React.FC<ChipInputProps> = ({
  label,
  chips,
  onChipAdd,
  onChipRemove,
  placeholder
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onChipAdd(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-deepBlue">{label}</label>
      <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/30">
        <div className="flex flex-wrap gap-2 mb-2">
          <AnimatePresence>
            {chips.map((chip, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="
                  px-3 py-1 rounded-full
                  bg-frostBlue/20 backdrop-blur-sm
                  border border-white/30
                  flex items-center gap-2
                "
              >
                {chip}
                <button
                  onClick={() => onChipRemove(index)}
                  className="text-deepBlue hover:text-red-500"
                >
                  ×
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="
            w-full px-3 py-2
            bg-transparent
            focus:outline-none
          "
        />
      </div>
    </div>
  );
};
