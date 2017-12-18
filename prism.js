var panels = chrome && chrome.devtools && chrome.devtools.panels;

var getPropsForSidebar = function () {
    if ($0) {
        var props = Object.assign({}, $0.__data__, $0.__data);
        return props;
    }
};

var createSidebarPaneCallback = function (sidebar) {
    panels.elements.onSelectionChanged.addListener(function updateElementProperties() {
        sidebar.setExpression("(" + getPropsForSidebar.toString() + ")()");
    });
};

panels && panels.elements.createSidebarPane("Polymer Prism", createSidebarPaneCallback);