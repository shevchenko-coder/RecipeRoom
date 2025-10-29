document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const content = document.getElementById('content');
    const resultsList = document.getElementById('resultsList');

    
    const searchableItems = content.querySelectorAll('p');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        resultsList.innerHTML = '';

        if (query.length > 0) {
            let hasResults = false;
            searchableItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    
                    const li = document.createElement('li');
                    li.textContent = item.textContent;
                    resultsList.appendChild(li);
                    hasResults = true;
                }
            });

            if (!hasResults) {
                
                const li = document.createElement('li');
                li.textContent = 'Нема.';
                resultsList.appendChild(li);
            }
        }
    });
});
