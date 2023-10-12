$(document).on('my-account', (event, account) => {
    

    function renderHTML() {
        let html = `
    <button id="follower-toggle" type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="inline w-5 h-5 s" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
  
        Followers
        <span class="sr-only">Followers</span>
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">${followers_count}</div>
    </button>
`;

        if (!account) {
            var currentURL = encodeURIComponent(window.location.href);
            var loginURL = `/login?redirect=${currentURL}`;
            html = `
        <a href="${loginURL}" type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Followers
            <span class="sr-only">Followers</span>
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">${followers.length}</div>
        </a>
`;
        }
        
        return html;
    }


    let html = renderHTML();
    $('#follower-toggle').replaceWith(html);
   

    $("#follower-toggle").on("click", event => {
        event.preventDefault();
        
        let data = {
        };

        let headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + account.token,
        };
        
        loading(true);
        axios({
            method: 'GET',
            url: '/blog/follower/toggle',
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