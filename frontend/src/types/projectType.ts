export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;   
  url?: string;
  created_at?: string;
  updated_at?: string;
}


export interface ProjectResponse{
  projects: Project[];
}
