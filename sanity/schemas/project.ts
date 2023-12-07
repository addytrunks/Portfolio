import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
    }),
    defineField({
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    }),
    defineField({
      name: "gitHubUrl",
      title: "GitHubUrl",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
  
  ],
});
