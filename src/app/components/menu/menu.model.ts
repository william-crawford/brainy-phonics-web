import { BgColor } from 'src/app/types/enum';

export interface Menu {
  title: string;
  subtitle: string;
  options: Option[];
}

interface Option {
  text: string;
  color: BgColor;
}
