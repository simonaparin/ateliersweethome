export type ProjectCase = {
  title: string;
  location: string;
  situation: string;
  workCompleted: string[];
  role: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export const reconstructionCases: ProjectCase[] = [];

export const hiddenProjectTemplate: ProjectCase = {
  title: "",
  location: "",
  situation: "",
  workCompleted: [],
  role: "",
  images: []
};
