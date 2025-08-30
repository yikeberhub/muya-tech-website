// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import themeReducer from "./slices/themeSlice";
import usersReducer from "./slices/userSlice";
import projectsReducer from './slices/projectSlice';
import servicesReducer from './slices/serviceSlice';
import productReducer from './slices/productSlice';
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
  products: productReducer,
  testimonials: testimonialsReducer,
  aboutUs: aboutUsReducer,
  teamMembers: teamMembersReducer,
  socialLinks: SocialLinksReducer,
  companyInfo: companyInfoReducer,
  
});

export default rootReducer;