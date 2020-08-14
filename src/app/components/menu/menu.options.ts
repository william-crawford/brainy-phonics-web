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
    options: [
      { text: 'synonyms', color: BgColor.Yellow },
      { text: 'antonyms', color: BgColor.Pink },
      { text: 'homophones', color: BgColor.LightYellow },
      { text: 'puns', color: BgColor.Orange },
      { text: 'homographs', color: BgColor.Pink },
      { text: 'similes &<br>metaphors', color: BgColor.LightOrange },
      { text: 'onomatopoeia', color: BgColor.Purple },
      { text: 'irony or<br>sarcasm', color: BgColor.Blue },
      { text: 'personification', color: BgColor.Yellow },
      { text: 'hyperbole', color: BgColor.Orange },
      { text: 'euphemism', color: BgColor.LightOrange },
      { text: 'oxymoron', color: BgColor.Purple },
      { text: 'rhyme', color: BgColor.Green },
      { text: 'alliteration', color: BgColor.Yellow }
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
