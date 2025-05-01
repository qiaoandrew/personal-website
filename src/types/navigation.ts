export type HeaderMenuItem = {
  id: string;
  href: string;
  label: string;
  subItems: HeaderMenuSubItem[];
};

export type FooterMenuItem = {
  id: string;
  label: string;
  subItems: SubItem[];
};

export type SubItem = {
  id: string;
  href: string;
  label: string;
};

export type HeaderMenuSubItem = SubItem & {
  description: string;
};
