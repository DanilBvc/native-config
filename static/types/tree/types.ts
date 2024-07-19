// qr code scanner
export interface BoundingBox {
  origin: {
    x: number;
    y: number;
  };
  size: {
    height: number;
    width: number;
  };
}

export interface CornerPoint {
  x: number;
  y: number;
}

export interface DetectedObject {
  boundingBox: BoundingBox;
  cornerPoints: CornerPoint[];
  data: string;
  raw: string;
  target: number;
  type: number;
}

// form data for create tree
export interface TreeFormData {
  tree_type_id: string;
  last_name: string;
  first_name: string;
}

// tree type
export interface TreeData {
  additional_slots: unknown[];
  available_slot: number;
  avatar: string | null;
  created_at: string;
  date_of_birth: string | null;
  date_of_dead: string | null;
  description: string | null;
  first_name: string;
  full_name: string;
  id: string;
  last_name: string;
  password: string | null;
  slots: SlotType[];
  type: UserType;
  updated_at: string;
  user: {
    createdAt: string;
    email: string;
    id: string;
    isAccountDisabled: boolean;
    langue: string;
    password: string;
    role: string;
    updatedAt: string;
    username: string;
  };
}

interface UserType {
  audio_limit: number;
  created_at: string;
  id: string;
  name: string;
  photo_limit: number;
  video_limit: number;
}

export interface SlotType {
  comment_text: null | string;
  comment_title: null | string;
  created_at: string;
  id: string;
  index: number;
  link: string;
  slot_type: FileEnum;
  title?: string;
}

export enum FileEnum {
  PHOTO = 'PHOTO',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
}

export interface Cords {
  width: number;
  height: number;
  x: number;
  y: number;
  slot_type?: FileEnum;
}
