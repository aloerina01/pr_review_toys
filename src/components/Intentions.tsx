import { h, FunctionComponent } from 'preact';

const INTENTIONS = {
  Idea: {
    label: 'アイデア',
    markdown:
      '![アイデア](https://user-images.githubusercontent.com/4443321/124096960-0e039f00-da96-11eb-8bf6-995e2abef13f.png)',
  },
  Question: {
    label: '質問したい',
    markdown:
      '![質問したい](https://user-images.githubusercontent.com/4443321/125248209-c64f0400-e32e-11eb-9b98-f7622806f2d6.png)',
  },
  Discussion: {
    label: '議論したい',
    markdown:
      '![議論したい](https://user-images.githubusercontent.com/4443321/124096964-0e9c3580-da96-11eb-9e8c-f2bffa49c745.png)',
  },
  Improvement: {
    label: '修正したい',
    markdown:
      '![修正したい](https://user-images.githubusercontent.com/4443321/124096966-0f34cc00-da96-11eb-8e87-551cb59a1b85.png)',
  },
};

export const Intentions: FunctionComponent<{ onClick: (markdownText: string) => void }> = ({
  onClick,
}) => (
  <ul class="intension-list">
    <li class="intension-item" onClick={() => onClick(INTENTIONS.Idea.markdown)}>
      {INTENTIONS.Idea.label}
    </li>
    <li class="intension-item" onClick={() => onClick(INTENTIONS.Question.markdown)}>
      {INTENTIONS.Question.label}
    </li>
    <li class="intension-item" onClick={() => onClick(INTENTIONS.Discussion.markdown)}>
      {INTENTIONS.Discussion.label}
    </li>
    <li class="intension-item" onClick={() => onClick(INTENTIONS.Improvement.markdown)}>
      {INTENTIONS.Improvement.label}
    </li>
  </ul>
);
