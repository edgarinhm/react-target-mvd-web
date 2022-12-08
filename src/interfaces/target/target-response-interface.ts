import { MatchConversation, MatchedUser } from './target-compatible-interface';
import Target from './target-interface';

export interface TargetCollection {
  target: Target;
}

export interface TargetCollectionResponse {
  targets: TargetCollection[];
  matchConversation: MatchConversation;
  matchedUser: MatchedUser[];
}

export interface TargetCreateResponse {
  target: Target;
  matchConversation: MatchConversation;
  matchedUser: MatchedUser;
}
