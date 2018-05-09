var panels = chrome && chrome.devtools && chrome.devtools.panels;
var bkg = chrome.extension.getBackgroundPage();

var getPropsForSidebar = function () {
    console.log('???', $0);
    if ($0) {
        return Object.assign({}, $0.__data__, $0.__data);
    }
};

var getob = function () {
    return {test: 2};
}

var createSidebarPaneCallback = function (sidebar) {
    // sidebar.setPage("hello.html");

    // Update element properties
    function updateElementProperties() {
        // sidebar.setExpression("(" + getPropsForSidebar + ")()");        
        sidebar.setObject(getPropsForSidebar());        
    }

    // Immediately update data on selection change
    panels.elements.onSelectionChanged.addListener(updateElementProperties);

    // Update data periodically
    setInterval(updateElementProperties, 1000);
};

panels.create("Polymer Prism", "icon128.png", "hello.html", function(panel) {
    bkg.console.log('Hi', panel);
});
panels && panels.elements.createSidebarPane("Polymer Prism", createSidebarPaneCallback);
bkg.console.log(panels);
bkg.console.log(panels.elements);