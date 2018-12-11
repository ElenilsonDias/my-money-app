export function selectTab(tabId) {
    //console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabsToShow = {}
    tabIds.forEach(e => {
        //console.log(e)
        return tabsToShow[e] = true}
        )

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}