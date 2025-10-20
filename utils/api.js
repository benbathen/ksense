import axios from "axios";

const BASE_URL = "http://assessment.ksensehealth.com/api";
const API_KEY = "ak_c12c00c308be8502afb44f36c8a9af2373ada137596521e0";

export async function fetchPatients(page = 1, limit = 10) {
  try {
    const url = `${BASE_URL}/patients?page=${page}&limit=${limit}`;
    const res = await axios.get(url, { headers: { "x-api-key": API_KEY } });
    return res.data.data || [];
  } catch (err) {
    console.error("Error fetching patients:", err.message);
    return [];
  }
}


export async function submitResults({ highRisk, feverPatients, dataIssues }) {
  try {
    const url = `${BASE_URL}/submit-assessment`;
    const payload = {
      high_risk_patients: highRisk.map((p) => p.patient_id),
      fever_patients: feverPatients.map((p) => p.patient_id),
      data_quality_issues: dataIssues.map((p) => p.patient_id),
    };

    const res = await axios.post(url, payload, {
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error submitting results:", err.message);
    throw err;
  }
}