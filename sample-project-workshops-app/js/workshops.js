(async function() {
    function formatDate( dateStr = '' ) {
        return dateStr.substr( 0, 10 );
    }

    function appendWorkshopCard( workshop ) {
        const workshopsList = document.querySelector( '#workshops-list' );

        const tpl = `
            <div class="card workshops-list-item my-3">
                <img src="${workshop.imageUrl}" class="img-responsive" />
                <h2 class="workshops-list-item-title">${workshop.name}</h2>
                
                <div class="my-3">
                    <div class="my-1">
                        <time datetime="${formatDate(workshop.startDate)}">${workshop.startDate}</time> - <time datetime="${formatDate(workshop.endDate)}">${workshop.endDate}</time>
                    </div>
                    <div>
                        <time>${workshop.time}</time>
                    </div>
                </div>
            </div>
        `;

        workshopsList.innerHTML = workshopsList.innerHTML + tpl;
    }

    try {
        const workshops = await getWorkshops();

        // populate the DOM with workshops
        workshops.forEach(function( workshop ) {
            appendWorkshopCard( workshop );
        });
    } catch( err ) {
        alert( err.message );
    }
}());