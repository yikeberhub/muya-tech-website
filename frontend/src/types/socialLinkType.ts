export interface SocialLink {
    id: number;
    platform: string; 
    url: string;
    icon_class:string;
    created_at?: string;
    updated_at?: string;
  }
  
  export interface SocialLinkPayload {
    platform: string;
    url: string;
    icon_class:string;
  }
  