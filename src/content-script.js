import {gitHubInjection} from './github-injection';
import {observe} from './lib/simplified-element-observer';

const preventMergeLabelName = '🥦 Pending Merge';

function getPreventLabel() {
  const labelDoms = document.querySelectorAll('.js-issue-labels .IssueLabel');

  const i = [...labelDoms]
    .map((dom) => dom.innerText)
    .findIndex((l) => l === preventMergeLabelName);

  return i !== -1 ? labelDoms[i] : undefined;
}

const messageDomId = 'github-prevent-label-merge-message';

function mergeButtonControl() {
  const mergeButtonContainer = document.querySelector('.merge-message');
  if (!mergeButtonContainer) {
    return;
  }
  const preventLabelDom = getPreventLabel();
  const mergeBoxDom = mergeButtonContainer.querySelector('.js-merge-box');

  if (!preventLabelDom) {
    mergeBoxDom.classList.remove('github-prevent-label-merge-hidden');
    const messageDom = document.querySelector(`#${messageDomId}`);
    if (messageDom) {
      messageDom.classList.add('github-prevent-label-merge-hidden');
    }
    return;
  }

  if (!document.querySelector(`#${messageDomId}`)) {
    const messageDom = document.createElement('div');
    messageDom.id = messageDomId;
    messageDom.appendChild(preventLabelDom.cloneNode(true));

    const textDom = document.createElement('span');
    textDom.innerText = 'cannot merge since this label attached';
    messageDom.appendChild(textDom);
    mergeButtonContainer.appendChild(messageDom);
  }
  if (mergeBoxDom) {
    mergeBoxDom.classList.add('github-prevent-label-merge-hidden');
  }
}

function observeElement() {
  observe(
    document.querySelector('#discussion_bucket'),
    () => {
      mergeButtonControl();
    },
    {subtree: true},
  );
}

gitHubInjection(() => {
  observeElement();
});
