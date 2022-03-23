export default interface TargetResponse {
  target: {
    id: number;
    title: string;
    lat: number;
    lng: number;
    radius: number;
    topicId: number;
  };
}
