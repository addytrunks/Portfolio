import { PageInfo, Project, Social, Technology } from "./type";
import { client } from "./lib/sanity";
import { groq } from "next-sanity";


export const fetchSkills = async () => {
  const query = groq`
  *[_type == "skill"]
  `;
  const skills: Technology[] = await client.fetch(query);
  
  return skills;
};

export const fetchSocials = async () => {
  const query = groq`
  *[_type == "social"]
  `;
  const socials: Social[] = await client.fetch(query);
  
  return socials;
};

export const fetchProjects = async () => {
  const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
  `;
  const projects: Project[] = await client.fetch(query);
  
  return projects;
};

export const fetchPageInfo = async () => {
  const query = groq`
  *[_type == "pageInfo"][0]
  `;
  const pageInfo: PageInfo = await client.fetch(query);
  
  return pageInfo;
};
