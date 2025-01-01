import { readFileSync } from 'fs';
import { join } from 'path';
import { readdirSync } from 'fs';
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { describe, expect, test } from "bun:test";

const schema = JSON.parse(readFileSync(join(__dirname, 'schema.json'), 'utf8'));

const ajv = new Ajv({ removeAdditional: true });
addFormats(ajv);
const validate = ajv.compile(schema);

/* 
const testFilePath = join(__dirname, 'tests', 'working/default-invoice/credit-card.json');
console.log(testFilePath);

const testContent = readFileSync(testFilePath, 'utf8');
const testJson = JSON.parse(testContent);
let isValid = validate(testJson);

console.log(isValid ? 'OK' : 'FAIL');
console.log(validate.errors);
process.exit(); */

const validateTests = (testsDir: string, shouldPass: boolean) => {
    const tests = readdirSync(testsDir);

    for (const testPath of tests) {
        const testDir = join(testsDir, testPath);
        const testFiles = readdirSync(testDir);
        describe(`Testing "${testPath}" format`, () => {
            for (const testFile of testFiles) {
                const testFilePath = join(testDir, testFile);
                
                const testContent = readFileSync(testFilePath, 'utf8');
                const testJson = JSON.parse(testContent);
                test(`${testFile.split('.')[0]}`, () => {
                    const isValid = validate(testJson);
                    if (isValid !== shouldPass) {
                        console.log(validate.errors);
                    }
                    expect(isValid).toBe(shouldPass);
                });
                  
    
    
            }
        });
        
    }
};

const workingTestsDir = join(__dirname, 'tests/working');
const failingTestsDir = join(__dirname, 'tests/failing');
describe(`Testing \x1b[32mworking\x1b[0m examples`, () => {
    validateTests(workingTestsDir, true);
});
describe(`Testing \x1b[31mfailing\x1b[0m examples`, () => {
    validateTests(failingTestsDir, false);
});
