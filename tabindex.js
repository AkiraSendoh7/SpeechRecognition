function TabNavigation()
{
    const html = {
        links: [...document.querySelector('.tab-links').children],
        
        /* Não vai ser necessário mas estou utilizando agora*/
        content: [...document.querySelector('.tab-content').children],
        openTab : document.querySelector('[data-open]'),
    }

    function hideAllTabContent()
    {
        html.content.forEach(section => {
            section.style.display = "none";
        });
    }

    function removeAllActiveClasses()
    {
        html.links.forEach (tab => {
            tab.className = tab.className.replace(" active", "")
        })
    }

    function showCurrentTab(id)
    {
        const tabContent = document.querySelector('#' + id);
        tabContent.style.display = "block";
    }

    function chooseTab(event)
    {
        hideAllTabContent();
        removeAllActiveClasses();

        const target = event.currentTarget;
        showCurrentTab(target.dataset.id);

        target.className += " active";
    }

    function listenToChanges()
    {
        html.links.forEach (tab => {
            tab.addEventListener('click', chooseTab);
        })
    }

    function init()
    {
        hideAllTabContent();
        listenToChanges();
        
        html.openTab.click();
    }

    return init();
}

window.addEventListener('load', () => {
    const tabNavigation = TabNavigation();
    tabNavigation.init();
});