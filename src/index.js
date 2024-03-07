var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tabs = __spreadArray([], document.querySelectorAll('#top__nav ul li a'), true);
var mainContent = document.getElementById('content');
tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        tabs.forEach(function (tab) { return tab.classList.remove('active'); });
        tab.classList.add('active');
        var href = tab.getAttribute('href');
        fetch(href.slice(1))
            .then(function (response) { return response.text(); })
            .then(function (html) { return mainContent.innerHTML = html; })
            .catch(function (error) { return console.error(error); });
    });
});
