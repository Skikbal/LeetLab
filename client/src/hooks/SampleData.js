import { useEffect, useState } from "react";
import {
  sampleDPProblem,
  sampleStringProblem,
} from "../components/sample/sampleData.js";
export const useSampleData = ({ sampleType = "DP" }) => {
  const [sampleData, setSampleData] = useState(null);
  const [isSampleLoading, setIsSampleLoading] = useState(false);

  useEffect(() => {
    const fetchSampleData = async () => {
      setIsSampleLoading(true);
      try {
        const data =
          sampleType === "DP" ? sampleDPProblem : sampleStringProblem;
        setSampleData(data);
      } catch (error) {
        console.error("Error while fetching sample data:", error);
        setSampleData(null);
      } finally {
        setIsSampleLoading(false);
      }
    };
    fetchSampleData();
  }, [sampleType]);

  return { sampleData, isSampleLoading };
};
