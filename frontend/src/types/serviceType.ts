export interface Service {
    id: number;
    title: string;
    description: string;
    image?: string;
    icon?: string;
    created_at?: string;
    updated_at?: string;
  }
  
  // Payload for create/update
  export interface ServicePayload {
    title: string;
    description: string;
    image?: string;
    icon_class?: string;
  }
  

  export interface ServiceResponse{
    services: Service[];
    message?: string;
  }