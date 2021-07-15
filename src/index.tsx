import { renderToy } from './renderToy';
import './style.css';

// main
const targetEls = document.querySelectorAll('.js-previewable-comment-form');
targetEls.forEach(targetEl => renderToy(targetEl));

// 動的に markdown editor が追加されたときに Toy を追加する
const mutationObserver = new MutationObserver(() => {
  const targetEls = document.querySelectorAll('.js-previewable-comment-form');
  targetEls.forEach(targetEl => renderToy(targetEl));
});
mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true });