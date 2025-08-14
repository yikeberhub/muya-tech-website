export interface TeamMember {
    id: number;
    name: string;
    position: string;
    photo_url?: string;
    bio?: string;
    social_links?: string; // JSON string or array of links
    created_at?: string;
    updated_at?: string;
  }
  
  // Payload for create/update
  export interface TeamMemberPayload {
    name: string;
    position: string;
    photo_url?: string;
    bio?: string;
    social_links?: string;
  }
  