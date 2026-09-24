export interface FacilitySpaceItem {
  id: string;
  name: string;
  category: "MakerLab & Prototyping" | "Immersive AR/VR Studio" | "Executive Boardroom" | "Collaboration Arena";
  capacity: number;
  description: string;
  equipment: string[];
  available: boolean;
  imageUrl?: string;
}

export interface FacilityBookingItem {
  id: string;
  spaceName: string;
  userName: string;
  startTime: string;
  endTime: string;
  purpose: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
}
