export interface InstagramLink {
  url: string;
  thumbnailImageId: string;
  caption: string;
}

export interface Activity {
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  summary: string;
  description: string;
  coverImageId: string;
  images: string[];
  instagramLinks: InstagramLink[];
}
