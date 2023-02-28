chrome.runtime.onInstalled.addListener(function () {
    chrome.downloads.onCreated.addListener(function (downloadItem) {
        console.log("test:2");
        chrome.downloads.search({ limit: 1, orderBy: ['-startTime'] }, function (results) {
            if (results.length > 0) {
                var lastDownload = results[0];
                var filePath = lastDownload.filename;
                var fileUrl = 'file://' + filePath;
                var downloadObj = { name: lastDownload.filename, link: fileUrl };
                console.log(downloadObj);
            }
        });
    });
});
console.log("test:1");