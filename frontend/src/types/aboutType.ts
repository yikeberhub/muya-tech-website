export interface About {
    id: number;
    title: string;
    content: string;
    mission?: string;
    vission?: string;
    image_url?: string;
    created_at?: string;
    updated_at?: string;
  }
  
  // Payload for create/update
  export interface AboutPayload {
    title: string;
    content: string;
    mission?: string;
    vission?: string;
    image_url?: string;
  }
  