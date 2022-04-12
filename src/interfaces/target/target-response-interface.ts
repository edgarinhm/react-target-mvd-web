import Target from './target-interface';

export interface TargetColletion {
  target: Target;
}

export interface TargetColletionResponse {
  targets: TargetColletion[];
}
