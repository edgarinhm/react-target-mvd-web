export interface MapMarker {
  location: google.maps.LatLngLiteral;
  id: number;
  name?: string;
  icon?: string;
  radius?: number;
  topic?: string;
}
