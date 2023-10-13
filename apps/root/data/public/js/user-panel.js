$(document).ready(
    function(){

        var myAccount = localStorage.getItem('my-account');

        
        if (myAccount) {
            html = renderUserPanel(myAccount);
            $('#user-panel').replaceWith(html);
            $("#user-menu-button").click( e => {
                $("#user-panel-menu").toggleClass('hidden');
            });
            let account = JSON.parse(myAccount);
            $(document).trigger('my-account', [account]);

        } else {
            html = renderLoginPanel();
            $('#user-panel').replaceWith(html);
            $(document).trigger('my-account', []);
        }
        
        

        $("#logout").click((e) => {
            e.preventDefault();
            logout();
        });

        function renderLoginPanel() {
            var currentURL = encodeURIComponent(window.location.href);
            var html = `
    <div id="user-panel" class="flex items-center ml-3">
        <div>
            <a href="/login?redirect=${currentURL}" type="button"
                class="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button" aria-expanded="false">
                <span class="sr-only">Open user menu</span>
                <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
</svg>
            </a>
        </div>
    </div>
        
`;
            return html;
        }
        

        function renderUserPanel(myAccount) {
            myAccount = JSON.parse(myAccount);
            let picture = myAccount.picture;
            let name = myAccount.name;
            
            
            let html = `
        <div id="user-panel" class="ml-3 w-10">
            <div class="text-right">
                <button type="button"
                    class="text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button" aria-expanded="false">
                    <img class="w-8 h-8 rounded-full"
                        src="${picture}" alt="user photo">
                </button>
            </div>
            <div class="relative">
            <div id="user-panel-menu" class="w-60 absolute z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-1 py-3" role="none">
                    <p class="text-sm text-gray-900 dark:text-white" role="none">
                        <svg class="w-3 h-3 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                        </svg>
                        ${name}
                    </p>
                    
                </div>
                <ul class="py-1" role="none">
                    <li id="logout">
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">Sign out</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
`;
            return html;
        }


        function logout() {

            localStorage.removeItem('my-account');
            let html = renderLoginPanel();
        
            $('#user-panel').replaceWith(html);

            $(document).trigger('my-account', []);
    
            $("#logout").click((e) => {
                e.preventDefault();
                logout();
            });
        }

    }
);
