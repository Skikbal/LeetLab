import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft,ChevronRight } from "lucide-react";

const WizardButtons = ({ currentStep, steps, nextStep, prevStep }) => {
  return (
    <div className="flex justify-between">
      <motion.button
        onClick={prevStep}
        disabled={currentStep === 1}
        className="btn btn-outline btn-secondary gap-2"
        whileHover={{ scale: currentStep === 1 ? 1 : 1.05 }}
        whileTap={{ scale: currentStep === 1 ? 1 : 0.95 }}
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </motion.button>

      {currentStep === steps.length ? (
        <motion.button
          type="submit" // Now properly submits the form
          className="btn btn-primary gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Problem
        </motion.button>
      ) : (
        <motion.button
          type="button"
          onClick={nextStep}
          className="btn btn-primary gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

export default WizardButtons;