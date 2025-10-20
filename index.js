import {
  getHighRiskPatients,
  getFeverPatients,
  getDataQualityIssues,
} from "./utils/filters.js";
import { totalRiskScore } from "./utils/scoring.js";
import { fetchPatients, submitResults } from "./utils/api.js";
import { mockPatients } from "./mockData.js";

async function runAssessment(useMock = true) {
  let patients = [];

  if (useMock) {
    console.log("Using mock data...");
    patients = mockPatients;
  } else {
    console.log("Fetching patients from API...");
    patients = await fetchPatients(1, 20);
  }

  patients.forEach((p) => {
    p.total_risk_score = totalRiskScore(p);
  });

  const highRisk = getHighRiskPatients(patients);
  const feverPatients = getFeverPatients(patients);
  const dataIssues = getDataQualityIssues(patients);

  console.table(patients.map((p) => ({ id: p.patient_id, score: p.total_risk_score })));

  if (!useMock) {
    const res = await submitResults({ highRisk, feverPatients, dataIssues });
    console.log("Submission response:", res);
  } else {
    console.log("Mock Results:");
    console.log({ highRisk, feverPatients, dataIssues });
  }
}

runAssessment(true);