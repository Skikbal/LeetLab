import React, { useState } from "react";
import AdditionalDetail from "../../components/AddProblem/AdditionalDetail.jsx";
import CodeSetup from "../../components/AddProblem/CodeSetup.jsx";
import Examples from "../../components/AddProblem/Examples.jsx";
import Info from "../../components/AddProblem/Info.jsx";
import Tags from "../../components/AddProblem/Tags.jsx";
import TestCases from "../../components/AddProblem/TestCases.jsx";
import Wizard from "../../components/Dashboard/Wizard.jsx";
import {
  SquarePen,
  BookOpen,
  ClipboardCheck,
  Code,
  FileText,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

import { useForm, FormProvider } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { ProblemSchema } from "../../validators/ValidationSchema.js";
const steps = [
  {
    title: "Basic Information",
    tag: "info",
    description: "Provide the core details of the problem",
    component: <Info />,
    icon: <SquarePen className="w-5 h-5" />,
  },
  {
    title: "Topics & Tags",
    tag: "tags",
    description: "Add relevant topics and tags",
    component: <Tags />, // ✅ Fixed
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Test Cases",
    tag: "testcases",
    description: "Define sample and edge test cases",
    component: <TestCases />, // ✅ Fixed
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
  {
    title: "Code Setup",
    tag: "code-setup",
    description: "Provide starter code and reference solutions",
    component: <CodeSetup />, // ✅ Fixed
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Examples",
    tag: "examples",
    description: "Add example input/output with explanations",
    component: <Examples />, // ✅ Fixed
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Additional Details",
    tag: "additional-details",
    description: "Include extra details like constraints",
    component: <AdditionalDetail />, // ✅ Fixed
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: "Review & Submit",
    tag: "final",
    description: "Verify all entered information",
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

const Problem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(ProblemSchema),
    mode: "onChange",
    defaultValues: {
      testcases: [{ input: "", output: "" }],
      tags: [],
      companyTags: [],
      constraints: [],
      examples: {
        JAVASCRIPT: { input: "", output: "", explanation: "" },
        PYTHON: { input: "", output: "", explanation: "" },
        JAVA: { input: "", output: "", explanation: "" },
      },
      codesnippets: {
        JAVASCRIPT: "function solution() {\n  // Write your code here\n}",
        PYTHON: "def solution():\n    # Write your code here\n    pass",
        JAVA: "public class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}",
      },
      referencesolutions: {
        JAVASCRIPT: "// Add your reference solution here",
        PYTHON: "# Add your reference solution here",
        JAVA: "// Add your reference solution here",
      },
    },
  });
  return (
    <Wizard
      steps={steps}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    >
      <FormProvider {...methods}>
        <form>
          {steps[currentStep - 1].component ? (
            steps[currentStep - 1].component
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">Review & Submit</h2>
              <p className="text-base-content/80 mb-8">
                Verify all information before submitting
              </p>
              <button className="btn btn-primary">Submit Problem</button>
            </div>
          )}
        </form>
      </FormProvider>
    </Wizard>
  );
};

export default Problem;
