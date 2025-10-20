export function calculateBPRisk(systolic, diastolic) {
  if (systolic >= 180 || diastolic >= 120) return 4;
  if (systolic >= 160 || diastolic >= 100) return 3;
  if (systolic >= 140 || diastolic >= 90) return 2;
  if (systolic >= 130 || diastolic >= 80) return 1;
  return 0;
}

export function calculateTempRisk(temp) {
  if (temp >= 104) return 4;
  if (temp >= 102) return 3;
  if (temp >= 100.4) return 2;
  if (temp >= 99.5) return 1;
  return 0;
}

export function calculateAgeRisk(age) {
  if (age >= 85) return 3;
  if (age >= 65) return 2;
  if (age >= 45) return 1;
  return 0;
}

export function totalRiskScore(patient) {
  const bp = calculateBPRisk(patient.systolic_bp, patient.diastolic_bp);
  const temp = calculateTempRisk(patient.temperature);
  const age = calculateAgeRisk(patient.age);
  return bp + temp + age;
}