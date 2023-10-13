$(document).on('my-account', (event, account) => {
    

    let follower_svg = `
<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
</svg>
    `;
    
    let like_svg = `
<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
</svg>   
    `;

    if (_LIKE_BTN_ === 'follower') {
        like_svg = follower_svg;
    }

    function renderHTML() {
        let html = `
    <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        ${like_svg}
        <span class="sr-only">Likes</span>
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">${likes_count}</div>
    </button>
`;

        if (!account) {
            var currentURL = encodeURIComponent(window.location.href);
            var loginURL = `/login?redirect=${currentURL}`;
            html = `
        <a href="${loginURL}" type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Followers
            <span class="sr-only">Followers</span>
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">${likes_count}</div>
        </a>
`;
        }
        
        return html;
    }


    let html = renderHTML();
    $('#like-toggle').replaceWith(html);
   

    $("#like-toggle").on("click", event => {
        event.preventDefault();
        
        let data = {
            clazz: _DOC_CLAZZ_,
            doc: _DOC_NAME_
        };

        let headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + account.token,
        };
        
        loading(true);
        axios({
            method: 'post',
            url: '/user/like',
            data,
            headers,
        }).then(result => {
            //addNewComment(creq);
            setTimeout(function(){
                loading(false);
                window.location.reload(true);
            }, 2000);
            
        }).catch(err => {
            loading(false);
        });
        
    });

    
});