import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import { Intentions } from './Intentions';

const LABEL = 'Add your intentions';

export const Toy: FunctionComponent<{ containerEl: Element }> = ({ containerEl }) => {
  const [isShown, setShown] = useState(false);
  const onClickToyIcon = () => {
    setShown(!isShown);
  };
  const textarea = containerEl.querySelector('textarea');
  const onClickIntention = (markdownText: string) => {
    if (!textarea) {
      return;
    }
    textarea.value += markdownText;
    textarea.defaultValue = textarea.value;
  };
  return (
    <div
      class="details-reset details-overlay flex-auto toolbar-item select-menu select-menu-modal-right js-saved-reply-container hx_rsm pr-review-toy"
      onClick={onClickToyIcon}
    >
      <div
        class="text-center tooltipped tooltipped-sw menu-target py-2 p-md-1 hx_rsm-trigger ml-1"
        aria-label={LABEL}
      >
        <span>☆</span>
        <span class="dropdown-caret hide-sm"></span>
      </div>
      <div
        style={`z-index: 99;display:${isShown ? 'block' : 'none'}`}
        class="select-menu-modal position-absolute right-0 js-saved-reply-menu hx_rsm-modal"
      >
        <div class="select-menu-header d-flex">
          <span class="select-menu-title flex-auto">Select a intention</span>
        </div>
        <div>
          <Intentions onClick={onClickIntention} />
        </div>
      </div>
    </div>
  );
};