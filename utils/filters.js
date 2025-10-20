import { totalRiskScore } from "./scoring.js";

export function getHighRiskPatients(patients) {
  return patients.filter((p) => totalRiskScore(p) >= 4);
}

export function getFeverPatients(patients) {
  return patients.filter((p) => p.temperature >= 100.4);
}

export function getDataQualityIssues(patients) {
  return patients.filter(
    (p) =>
      p.systolic_bp == null ||
      p.diastolic_bp == null ||
      p.age == null ||
      p.temperature == null
  );
}