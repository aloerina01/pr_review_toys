import { h, render } from 'preact';
import { Toy } from './components/Toy';

const _isTemplate = (toolbar: Element): boolean => {
  const toolbarPurpose = toolbar.getAttribute('for');
  return Boolean(toolbarPurpose && toolbarPurpose.includes('new_inline_comment_diff_${anchor}_${position}'));
}

const _isAlreadyAppended = (toolbar: Element): boolean => {
  const toolbarItems = Array.from(toolbar.children);
  return toolbarItems.some((toolbarItem) =>
    toolbarItem.className?.includes('pr-review-toy') 
  );
}

export const renderToy = (targetTabConteiner: Element | null): void => {
  if (!targetTabConteiner) {
    return;
  }
  const toolbars = targetTabConteiner.querySelectorAll('markdown-toolbar');
  toolbars.forEach((toolbar) => {
    // toolbar が存在しない場合はパス
    if (!toolbar || !toolbar.childNodes) {
      return;
    }
    // toolbar が inline comment 用の隠し Template だった場合はパス
    if (_isTemplate(toolbar)) {
      return;
    }
    // すでに Toy が足されている場合はパス
    if (_isAlreadyAppended(toolbar)) {
      return;
    }
    
    console.log('append', toolbar);
    const container = toolbar.appendChild(document.createElement('div'));
    render(<Toy containerEl={targetTabConteiner} />, toolbar, container);
  });
};