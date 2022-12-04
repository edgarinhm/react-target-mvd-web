import { MatchConversation, MatchedUser } from './target-compatible-interface';
import Target from './target-interface';

export interface TargetColletion {
  target: Target;
}

export interface TargetColletionResponse {
  targets: TargetColletion[];
  matchConversation: MatchConversation[];
  matchedUser: MatchedUser[];
}

export interface TargetCreateResponse {
  target: Target;
  matchConversation: MatchConversation[];
  matchedUser: MatchedUser;
}
