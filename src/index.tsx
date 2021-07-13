import { renderToy } from './renderToy';
import './style.css';

// main
const tabContainers = document.querySelectorAll('tab-container');
tabContainers.forEach(container => renderToy(container));

// 動的に markdown editor が追加されたときに Toy を追加する
const mutationObserver = new MutationObserver(() => {
  const tabContainers = document.querySelectorAll('tab-container');
  tabContainers.forEach(container => renderToy(container));
});
mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true });