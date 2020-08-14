import { BgColor } from 'src/app/types/enum';
import { Menu } from './menu.model';

interface Options {
  figuresOfSpeech: Menu;
  wordStructures: Menu;
}

export const MenuOptions: Options = {
  figuresOfSpeech: {
    title: 'Figures of Speech',
    subtitle: 'fun ways to use language',
    startIndex: 12,
    fontStyle: { 'font-style': 'italic' },
    options: [
      { text: 'synonyms', color: BgColor.Yellow },
      { text: 'antonyms', color: BgColor.Pink },
      { text: 'homophones', color: BgColor.YellowGreen },
      { text: 'puns', color: BgColor.Orange },
      { text: 'homographs', color: BgColor.LightPurple },
      { text: 'similes &<br>metaphors', color: BgColor.LightOrange },
      { text: 'onomatopoeia', color: BgColor.Gray },
      { text: 'irony or<br>sarcasm', color: BgColor.LightYellow },
      { text: 'personification', color: BgColor.LightBlue },
      { text: 'hyperbole', color: BgColor.OrangeYellow },
      { text: 'euphemism', color: BgColor.LightViolet },
      { text: 'oxymoron', color: BgColor.Indigo },
      { text: 'rhyme', color: BgColor.Green },
      { text: 'alliteration', color: BgColor.HotPink }
    ]
  },
  wordStructures: {
    title: 'Word Structures',
    subtitle: '',
    startIndex: 1,
    options: [
      {
        text: 'Base Words and Endings<br>ed ing',
        color: BgColor.LightGreen
      },
      { text: 'Base Words and Endings<br>s es', color: BgColor.Green },
      { text: 'Comparative<br>Endings', color: BgColor.LightYellow },
      { text: 'Plurals', color: BgColor.Brown },
      { text: 'Possessives', color: BgColor.Pink },
      { text: 'Contractions', color: BgColor.LightOrange },
      { text: 'Compound<br>Words', color: BgColor.Purple },
      { text: 'Prefixes', color: BgColor.Blue },
      { text: 'Suffixes', color: BgColor.Yellow },
      { text: 'Syllables', color: BgColor.Orange }
    ]
  }
};
