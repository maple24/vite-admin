export type resource = {
  id: string;
  name: string;
};

export interface resourceInterface {
  success: boolean
  message: string
  number: number
  data: resource[]
}

export enum resourceType {}

export type testScript = {
  description: string
  expectedResult: string
}