import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = 'report.json';

const sampleError = () => {
    throw new Error('ups error nich');
}

sampleError()