
let currentPage = 1; 


function fetchData(page) {
    return fetch(`http://localhost:3030/api/books?_page=${page}&_limit=12`)

        .then(response => response.json());
}


function displayData(page) {
    fetchData(page).then(data => {
        document.getElementById('dataContainer').innerHTML = data
            .map(item => `
                 <div class="col-md-4">
                <div class="bigCard">
                    <div class="row">
                        <div class="col-md-4">
                            <div>
                                <img src="${item.cover_image}" class="w-100 " alt="">
                            </div>
                        </div>
                        <div class="col-md-8 d-flex justify-content-between ">
                            <div>
                                <h6>${item.title}</h6>
                                <p class="text-muted">${item.author}</p>
                                <h6>₹${item.price}</h6>
                            </div>
                            <div>
                                <i class="fa-solid fa-ellipsis iconDots"></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h6>${item.genre}</h6>
                        <p class="text-muted">${item.description}</p>
                    </div>

                    <div class="smallCard">
                        <div class="d-flex justify-content-between my-0 py-0">
                            <p>Sales</p>
                            <div class="d-flex justify-content-between ">
                                <i class="fa-solid fa-arrow-up me-2 mt-1"></i>
                                <p>${item.rate}</p>
                            </div>
                        </div>
                        <hr class="mt-0 pt-0">
                        <div class="d-flex justify-content-between my-0 py-0">
                            <p>Remaining Products</p>
                            <div class="d-flex justify-content-between align-items-center ">
                                <div class="progress mb-3 me-2">
                                    <div class="progress-bar" role="progressbar" style="width: 50% " aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div>
                                    <p>1269</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                `)
            .join('');
        document.getElementById('pageNum').textContent = `Page ${page}`;
    });
}


document.getElementById('nextBtn').onclick = () => {
    currentPage++;
    displayData(currentPage);
};

document.getElementById('prevBtn').onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        displayData(currentPage);
    }
};


displayData(currentPage);
