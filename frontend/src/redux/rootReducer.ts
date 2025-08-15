// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import themeReducer from "./slices/themeSlice";
import usersReducer from "./slices/usersSlices";
import projectsReducer from './slices/projectsSlice';
import servicesReducer from './slices/servicesSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import aboutUsReducer from './slices/aboutUsSlice';
import teamMembersReducer from "./slices/teamMemberSlice";
import SocialLinksReducer from "./slices/socialLinkSlice";
import companyInfoReducer from "./slices/companyInfoSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  users: usersReducer,
  projects:projectsReducer,
  services: servicesReducer,
  testimonials: testimonialsReducer,
  aboutUs: aboutUsReducer,
  teamMembers: teamMembersReducer,
  socialLinks: SocialLinksReducer,
  companyInfo: companyInfoReducer,
  
});

export default rootReducer;