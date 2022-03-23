export default interface TargetRequest {
  target: {
    title: string;
    lat: number;
    lng: number;
    radius: number;
    topicId: number;
  };
}
