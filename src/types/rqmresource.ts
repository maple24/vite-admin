export type resource = {
  id: string;
  name: string;
};

export type script = {
  description: string
  expectedResult: string
}

export interface resourceInterface {
  success: boolean
  message: string
  number: number
  data: resource[]
}

export enum resourceType {}

export type testScript = {
  title: string,
  scripts: script[]
}