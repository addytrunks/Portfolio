import axios from "axios";
import { PageInfo, Project, Social, Technology } from "./type";

export const fetchSkills = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);

  const data: Technology[] = await res.data;

  return data;
};

export const fetchSocials = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`
  );

  const data: Social[] = await res.data;

  return data;
};

export const fetchProjects = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`
  );

  const data: Project[] = await res.data;

  return data;
};

export const fetchPageInfo = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`
  );

  const data: PageInfo = await res.data;

  return data;
};
