$(document).ready(
    function(){
        let PAGES = 5;

        let page = $('#pagination').data('page');
        let page_count = $('#pagination').data('count');
        let page_url = $('#pagination').data('url');
        let page_start = page % PAGES;
        let page_end = page_start + PAGES;
        if (page_end > page_count - 1) {
            page_end = page_count - 1;
        }

        

        let html = '';

        let links = [];
        
        for (let i = page_start; i < page_end; i++) {
            let link_html = '';
            if (i !== page) {
                link_html = `
                    <li>
                        <a href="${page_url}?page=${i}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${i + 1}</a>
                    </li>
                `;
            } else {
                link_html = `
                    <li>
                        <span aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">${i + 1}</span>
                    </li>
                `;
            }
            links.push(link_html);
        }
        let links_html = links.join('');

        let prev_html = '';
        if (page_start !== 0) {
            prev_html = `
                <li>
                    <a href="${page_url}?page=${page_start}" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    </a>
                </li>
            `;
        }

        let next_html = '';
        if (page_end !== page_count - 1) {
            prev_html = `
                <li>
                    <a href="${page_url}?page=${page_end}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    </a>
                </li>
            `;
        }


        html = `
            <nav aria-label="Page navigation">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                ${prev_html}
                ${links_html}
                ${next_html}
                </ul>
            </nav>            
        `;

        $('#pagination').replaceWith(html);
        
    }
);