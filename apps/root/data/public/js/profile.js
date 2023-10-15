$(document).on('my-account', (event, account) => {
    
    function renderInput() {
        let html = `
    <div id="profile-input" class="flex flex-col items-end p-4 my-6 mx-4 bg-white rounded-lg shadow md:justify-between md:p-6 xl:p-8 dark:bg-gray-800">

        <label for="profile" class="justify-self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Profile[markdown]</label>
        <textarea id="profile-message" rows="4" class="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Markdown profile..."></textarea>
        <div class="basis-1/4">
            <button id="profile-message-button" type="button" class="px-3 py-2 text-xs font-medium text-center text-gray-700 hover:bg-gray-100 dark:text-gray-300  dark:hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        </div>
    </div>
`;

        if (!account) {
            var currentURL = encodeURIComponent(window.location.href);
            var loginURL = `/login?redirect=${currentURL}`;
            html = `
<div id="profile-input" />
`;
        }
        
        return html;
    }

    let user_id = $("#profile-input").data("user");
    if (user_id !== account.id) {
        return;
    }


    let html = renderInput();
    $('#profile-input').replaceWith(html);

    $("#profile-message-button").on("click", event => {
        event.preventDefault();
        var profile = $("#profile-message").val().trim();
       
        if (profile) {
            let data = {
                user_id: account.id,
                value: profile,
            };

            let headers = {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + account.token,
            };
            
            loading(true);
            axios({
                method: 'post',
                url: '/profile/save',
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
        }
    });

    
});