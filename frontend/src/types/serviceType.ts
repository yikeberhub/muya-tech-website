export interface Service {
    id: number;
    title: string;
    description: string;
    image_url?: string;
    icon_class?: string;
    created_at?: string;
    updated_at?: string;
  }
  
  // Payload for create/update
  export interface ServicePayload {
    title: string;
    description: string;
    image_url?: string;
    icon_class?: string;
  }
  