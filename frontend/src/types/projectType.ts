export interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    url?: string;
    created_at?: string;
    updated_at?: string;
  }
  
  // Payload for create/update
  export interface ProjectPayload {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }
  