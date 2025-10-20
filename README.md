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
