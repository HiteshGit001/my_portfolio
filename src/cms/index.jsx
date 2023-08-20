import { lazy } from 'react';

const HeroBanner = lazy(() => import("../components/HeroBanner/HeroBanner"));
const Page = lazy(() => import('../Page'));
const OptionsContainer = lazy(() => import('../components/OptionsContainer/OptionsContainer'));
const AboutMe = lazy(() => import('../components/AboutMe/Aboutme'));
const Projects = lazy(() => import('../components/Projects/Projects'));
const Experience = lazy(() => import('../components/Experience/Experience'));
const ContactMe = lazy(() => import('../components/ContactMe/ContactMe'));

export const components = {
  page: Page,
  HeroBanner: HeroBanner,
  OptionsContainer: OptionsContainer,
  AboutMe: AboutMe,
  Projects: Projects,
  Experience: Experience,
  ContactMe: ContactMe,
}