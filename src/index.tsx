import { h, render } from 'preact';
import { Toy } from './components/Toy';
import './style.css';

const renderToy = (targetTabConteiner: Element | null): void => {
  if (!targetTabConteiner) {
    return;
  }
  const toolbars = targetTabConteiner.querySelectorAll('markdown-toolbar');
  toolbars.forEach((toolbar) => {
    if (!toolbar || !toolbar.childNodes) {
      return;
    }
    const toolbarItems = Array.from(toolbar.children);
    const isAlreadyAppended = toolbarItems.some((toolbarItem) =>
      toolbarItem.className?.includes('pr-review-toy')
    );
    if (isAlreadyAppended) {
      return;
    }
    const container = toolbar.appendChild(document.createElement('div'));
    render(<Toy containerEl={targetTabConteiner} />, toolbar, container);
  });
};

// main
const tabContainers = document.querySelectorAll('tab-container');
tabContainers.forEach(container => renderToy(container));

// 動的に markdown editor が追加されたときに Toy を追加する
const mutationObserver = new MutationObserver(() => {
  const tabContainers = document.querySelectorAll('tab-container');
  tabContainers.forEach(container => renderToy(container));
});
mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true });