export interface ProgramItem {
  id: string;
  name: string;
  code: string;
  description: string;
  stage: "IDEATION" | "VALIDATION" | "INCUBATION" | "ACCELERATION" | "SCALE";
  progressPercentage: number;
  budgetAllocated: string;
  sponsor: string;
  targetDate: string;
  activeInnovators: number;
}
