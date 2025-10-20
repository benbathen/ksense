# Ksense Healthcare API Assessment

A Node.js implementation that retrieves patient data, computes health risk scores, and submits alerts.

## Features
- Uses Axios for API calls
- Supports local mock data
- Modular risk scoring and filtering
- Ready for deployment to Ksense submission endpoint

## Usage

```bash
npm install
node index.js
```

### Toggle between mock and live API
To use real API data, set:
```js
runAssessment(false);
```
“As of 10/20/2025, the Ksense API endpoint http://assessment.ksensehealth.com/api is not resolving (DNS lookup failure).
Therefore, this submission demonstrates the complete implementation and logic using mock data that mirrors the API schema.”