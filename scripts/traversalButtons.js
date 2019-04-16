'use strict';

const buttons = Object.values(document.getElementsByClassName('traverse-sections'));

buttons.forEach(button => button.addEventListener('click', () => button.parentNode.nextSibling.nextSibling.scrollIntoView()));