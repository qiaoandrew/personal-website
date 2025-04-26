export type HeaderMenuItem = {
  id: string;
  href: string;
  label: string;
  subItems: { id: string; href: string; label: string; description: string }[];
};
