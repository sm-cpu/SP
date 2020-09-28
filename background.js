$(function () {
    chrome.contextMenus.create({
        id: "Login_To",
        title: "Login To This Page",
        contexts: ["all"],
        onclick: handleContextMenuClick
    });

    function handleContextMenuClick(info, tab) {
        if (tab)
            chrome.tabs.sendMessage(tab.id, {action: 'autofill'});
    }
})