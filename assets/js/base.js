window.onload = function () {
    shaveDivs();
    startClock();
};

function shaveDivs() {
    var shaveInput = document.getElementById('to-shave');
    if (shaveInput) {
        var selectorsAndHeights = shaveInput.value.split('|');
        for (var i = 0; i < selectorsAndHeights.length; i++) {
            var selectorHeightPair = selectorsAndHeights[i].split(';');
            shave(selectorHeightPair[0], selectorHeightPair[1]);
        }
    }
}

function startClock() {
    var titleEl = document.getElementById('site-name'),
        currentHour = 4,
        currentMinutes = 20;

    titleEl.innerHTML = '<span id="h">' + currentHour + '</span><span id="sc">:</span><span id="m">' + currentMinutes + '</span>';
    var titleHourEl = document.getElementById('h'),
        titleSemicolonEl = document.getElementById('sc'),
        titleMinutesEl = document.getElementById('m');

    setInterval(function () {
        var hourChanged = false,
            currentMinutesStr;

        if (currentMinutes < 59) {
            currentMinutes++;
        } else {
            currentMinutes = 0;
            currentHour = currentHour < 23 ? currentHour + 1 : 0;
            hourChanged = true;
        }
        currentMinutesStr = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;

        if (hourChanged) {
            hourChanged = false;
            titleHourEl.firstChild.nodeValue = ''+currentHour;
        }
        titleMinutesEl.firstChild.nodeValue = currentMinutesStr;

    }, 1000*60);
}