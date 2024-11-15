const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const popup = document.getElementById('popup');

// 定义不同的链接
const link1 = 'www.u1983152.nyat.app:50869';
const link2 = 'mc.liveou.top:50869';
const link3 = 'v6.liveou.top';

button1.addEventListener('click', function () {
  copyToClipboard(link1);
  popup.textContent = '已复制链接到剪贴板，请到直接连接中粘贴';
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});

button2.addEventListener('click', function () {
  copyToClipboard(link2);
  popup.textContent = '已复制链接到剪贴板，请到直接连接中粘贴';
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});

button3.addEventListener('click', function () {
  copyToClipboard(link3);
  popup.textContent = '已复制链接到剪贴板，请到直接连接中粘贴';
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
/*
document.getElementById('ylButton').addEventListener('click', function() {
  window.location.href = 'game.html';
});
*/
