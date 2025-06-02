import React, { useEffect, useState } from "react";
import AdditionalDetail from "../../components/AddProblem/AdditionalDetail.jsx";
import CodeSetup from "../../components/AddProblem/CodeSetup.jsx";
import Examples from "../../components/AddProblem/Examples.jsx";
import Info from "../../components/AddProblem/Info.jsx";
import Tags from "../../components/AddProblem/Tags.jsx";
import TestCases from "../../components/AddProblem/TestCases.jsx";
import Wizard from "../../components/Dashboard/Wizard.jsx";
import Preview from "../../components/AddProblem/Preview.jsx";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { ProblemSchema } from "../../validators/ValidationSchema.js";
import { useNavigate, useParams } from "react-router-dom";
import { useProblemStore } from "../../store/useProblemStore.js";
import Loader from "../../components/Loader.jsx";
const steps = [
  {
    title: "Basic Information",
    tag: "info",
    description: "Provide the core details of the problem",
    component: <Info />,
    icon: <SquarePen className="w-5 h-5" />,
    fields: ["title", "topic", "description", "difficulty"],
  },
  {
    title: "Topics & Tags",
    tag: "tags",
    description: "Add relevant topics and tags",
    component: <Tags />, // ✅ Fixed
    icon: <BookOpen className="w-5 h-5" />,
    fields: ["tags", "companyTags"],
  },
  {
    title: "Test Cases",
    tag: "testcases",
    description: "Define sample and edge test cases",
    component: <TestCases />, // ✅ Fixed
    icon: <ClipboardCheck className="w-5 h-5" />,
    fields: ["testcases"],
  },
  {
    title: "Code Setup",
    tag: "code-setup",
    description: "Provide starter code and reference solutions",
    component: <CodeSetup />, // ✅ Fixed
    icon: <Code className="w-5 h-5" />,
    fields: ["codesnippets", "referencesolutions"],
  },
  {
    title: "Examples",
    tag: "examples",
    description: "Add example input/output with explanations",
    component: <Examples />, // ✅ Fixed
    icon: <FileText className="w-5 h-5" />,
    fields: ["examples"],
  },
  {
    title: "Additional Details",
    tag: "additional-details",
    description: "Include extra details like constraints",
    component: <AdditionalDetail />, // ✅ Fixed
    icon: <Lightbulb className="w-5 h-5" />,
    fields: ["constraints", "hints", "editorial"],
  },
  {
    title: "Review & Submit",
    tag: "final",
    component: <Preview />,
    description: "Verify all entered information",
    icon: <CheckCircle className="w-5 h-5" />,
  },
];

const EditProblem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [direction, setDirection] = useState(1);
  const { getProblemById, isLoading, problem, updateProblem } =
    useProblemStore();
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

  const fetchData = async () => {
    try {
      await getProblemById(id);
    } catch (error) {
      console.log("Error getting problem: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, getProblemById]);

  useEffect(() => {
    if (problem) {
      methods.reset(problem);
    }
  }, [problem, methods.reset]);

  const nextStep = async () => {
    const currentStepFields = steps[currentStep - 1].fields;
    const isValid = await methods.trigger(currentStepFields);
    if (isValid && currentStep < steps.length) {
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

  const onSubmit = async (data) => {
    try {
      await updateProblem({ data, id, navigate });
    } catch (error) {
      console.log("Error creating problem: ", error);
    }
  };

  if (isLoading) return <Loader />;
  return (
    <Wizard
      steps={steps}
      currentStep={currentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      completedSteps={completedSteps}
      setCurrentStep={setCurrentStep}
      formMethods={methods}
      onSubmit={onSubmit}
      direction={direction}
      setDirection={setDirection}
      updateProblem={true}
    >
      <FormProvider {...methods}>
        <form id="update-problem" onSubmit={methods.handleSubmit(onSubmit)}>
          {steps[currentStep - 1].component}
        </form>
      </FormProvider>
    </Wizard>
  );
};

export default EditProblem;
