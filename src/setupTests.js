// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// sets up the mock and adds the fetchMock -g variable and requires 'fetch' -g to call 'fetchMock' instead of a real fetch
require('jest-fetch-mock').enableMocks()

