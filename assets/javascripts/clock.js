// 实现数字时钟和日期
function updateClock() {
    const now = new Date();

    // 获取时间
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // 获取日期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const dateString = `${year}-${month}-${date} ${day}`;

    // 更新页面内容
    document.getElementById('clock-time').textContent = timeString;
    document.getElementById('clock-date').textContent = dateString;
}

// 每秒更新一次时钟
setInterval(updateClock, 1000);

// 初始化时钟
document.addEventListener('DOMContentLoaded', updateClock);