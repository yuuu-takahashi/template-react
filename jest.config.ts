import { TextEncoder } from 'util';

import type { Config } from '@jest/types';
import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
