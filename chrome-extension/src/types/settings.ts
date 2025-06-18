export interface UserSettings {
  token: string;
  baseURL: string;
  evaluation: EvaluationSettings;
}

export type StrictnessLevel = "strict" | "moderate" | "loose";
export type FeedbackTone = "formal" | "friendly" | "constructive";
export type FeedbackLength = "short" | "medium" | "detailed";

export interface EvaluationSettings {
  strictness: StrictnessLevel;
  tone: FeedbackTone;
  length: FeedbackLength;
  customFeedbackPrompt: string;
}
