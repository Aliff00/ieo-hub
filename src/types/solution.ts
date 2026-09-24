export interface SolutionItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: "AI & Cognitive" | "CleanTech & Energy" | "Industry 4.0" | "HealthTech" | "Smart Cities";
  status: "Active" | "Pilot Ready" | "Commercialized" | "Incubating";
  trlLevel: number;
  tags: string[];
  creatorName: string;
  organization: string;
  createdAt: string;
}

export type SolutionFilterParams = {
  search?: string;
  category?: string;
  status?: string;
  trl?: string;
};
