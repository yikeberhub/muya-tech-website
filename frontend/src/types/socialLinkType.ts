export interface SocialLink {
    id: number;
    platform: string; // e.g., "Facebook", "Twitter"
    url: string;
    created_at?: string;
    updated_at?: string;
  }
  
  export interface SocialLinkPayload {
    platform: string;
    url: string;
  }
  