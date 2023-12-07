interface SanityBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _key: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  name: string;
  email: string;
  role: string;
  backgroundInformation: string;
  heroImage: Image;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  progress: number;
}

export interface Project extends SanityBody {
  title: string;
  image: Image;
  _type: "project";
  linkToBuild: string;
  gitHubUrl: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  url: string;
  title: string;
}
