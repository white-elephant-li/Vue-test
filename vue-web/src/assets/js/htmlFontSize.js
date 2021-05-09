// 定义最大的 fontsize
const MAX_FONT_SIZE = 42;

// 监听html文档被解析完成的事件
document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
    html.style.fontSize = fontSize + 'px';
})