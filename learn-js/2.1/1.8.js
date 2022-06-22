function showNotification({ top = 0, right = 0, className, html }) {
    let div = document.createElement('div');
    div.className = className + ' ' + 'notification';
    div.style.top = top + 'px';
    div.style.right = right + 'px';
    div.textContent = html;

    document.body.append(div);

    setInterval(() => {
        let vis = getComputedStyle(div).visibility;
        div.style.visibility = vis== 'visible' ? 'hidden' : 'visible';
    }, 1500);

}

showNotification({
    top: 10,
    right: 10,
    html: 'Hello!',
    className: "welcome"
});