import { BgColor } from 'src/app/types/enum';

export interface Menu {
  title: string;
  subtitle: string;
  startIndex: number;
  options: Option[];
}

interface Option {
  text: string;
  color: BgColor;
}
