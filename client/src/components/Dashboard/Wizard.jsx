import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  CheckCircle,
  Circle,
  ChevronRight,
  ChevronLeft,
  Check,
  BookOpen,
  Code,
  FileText,
  Lightbulb,
  ClipboardCheck,
  SquarePen,
} from "lucide-react";

const Wizard = ({ steps, children, currentStep, setCurrentStep }) => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [direction, setDirection] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
      setCompletedSteps(
        completedSteps.filter((step) => step !== currentStep - 1)
      );
    }
  };

  const getStepStatus = (stepIndex) => {
    if (stepIndex + 1 === currentStep) return "in-progress";
    if (completedSteps.includes(stepIndex + 1)) return "completed";
    return "pending";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-5rem)] p-6 gap-6">
      {/* Progress Bar */}
      <motion.div
        className="flex items-center w-full  rounded-lg p-5 px-10 shadow-sm bg-base-100/80 backdrop-blur-sm border border-base-300/50 relative h-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Progress line */}
        <div className="absolute left-10 right-10 top-1/3 -translate-y-1/2 h-1 bg-base-300 z-0">
          <motion.div
            className="h-full bg-primary"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{
              scaleX: (currentStep - 1) / (steps.length - 1),
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          />
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between w-full relative z-10">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            const isActive = status === "in-progress";
            const isCompleted = status === "completed";

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={stepVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative transition-colors duration-300
                    ${
                      isCompleted
                        ? "bg-primary text-primary-content"
                        : isActive
                        ? "bg-secondary text-secondary-content"
                        : "bg-base-300 text-base-content"
                    }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="font-medium">{index + 1}</span>
                  )}
                </motion.div>

                {/* Tag label with animation */}
                <motion.div
                  className={`mt-2 px-2 py-1 rounded-md text-xs font-medium ${
                    isActive
                      ? "bg-secondary/20 text-secondary"
                      : isCompleted
                      ? "bg-primary/20 text-primary"
                      : "bg-base-300/50 text-base-content/70"
                  }`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  {step.tag}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="flex flex-1 gap-6">
        {/* Sidebar with step info */}
        <motion.div
          className="hidden md:flex flex-col w-1/3 rounded-lg shadow-sm bg-base-100/80 backdrop-blur-sm border border-base-300/50 p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            {steps[currentStep - 1].icon}
            <h2 className="text-2xl font-bold">
              {steps[currentStep - 1].title}
            </h2>
          </div>
          <p className="text-base-content/80 mb-6">
            {steps[currentStep - 1].description}
          </p>

          <div className="mt-auto space-y-6">
            {/* Completed Steps */}
            {completedSteps.length > 0 && (
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-medium text-primary flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Completed Steps
                </h3>
                <ul className="space-y-2 pl-6">
                  {completedSteps.map((step) => (
                    <motion.li
                      key={step}
                      className="text-sm text-primary flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Check className="w-3 h-3" />
                      {steps[step - 1].title}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Current Step */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-medium text-secondary flex items-center gap-2">
                <Circle className="w-4 h-4" />
                Current Step
              </h3>
              <p className="text-sm text-secondary pl-6 flex items-center gap-2">
                <span className="animate-pulse">●</span>
                {steps[currentStep - 1].title}
              </p>
            </motion.div>

            {/* Pending Steps */}
            {currentStep < steps.length && (
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="font-medium text-base-content/70 flex items-center gap-2">
                  <Circle className="w-4 h-4" />
                  Pending Steps
                </h3>
                <ul className="space-y-2 pl-6">
                  {steps.slice(currentStep).map((step, index) => (
                    <motion.li
                      key={index}
                      className="text-sm text-base-content/70 flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        delay: index * 0.1 + 0.6,
                      }}
                    >
                      <span className="text-xs">○</span>
                      {step.title}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 rounded-lg shadow-sm bg-base-100/80 backdrop-blur-sm border border-base-300/50 overflow-auto relative">
          <div className="p-6 mb-6">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentStep}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className=""
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {/* Fixed Navigation Buttons */}
          <div className="border-t border border-base-300/50 sticky bottom-0 left-0  w-full p-4">
            <div className="flex justify-between">
              <motion.button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="btn btn-ghost gap-2"
                whileHover={{ scale: currentStep === 1 ? 1 : 1.05 }}
                whileTap={{ scale: currentStep === 1 ? 1 : 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </motion.button>

              <motion.button
                onClick={nextStep}
                disabled={currentStep === steps.length}
                className="btn btn-primary gap-2"
                whileHover={{ scale: currentStep === steps.length ? 1 : 1.05 }}
                whileTap={{ scale: currentStep === steps.length ? 1 : 0.95 }}
              >
                {currentStep === steps.length ? "Submit" : "Next"}
                {currentStep < steps.length && (
                  <ChevronRight className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
