let allProjects = [];
async function fetchProjects() {
    await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
    .then(res => res.json())
    .then(data => {
       allProjects = data;
       currentData = data;        renderData(data)
    })
    .catch(err => console.log(err))
}

// fetchProjects()
document.addEventListener('DOMContentLoaded',() =>{
    fetchProjects()
})

searchKeyElmt = document.getElementById("searchKey");
searchBtnElmt = document.getElementById("searchBtn");

searchBtnElmt.addEventListener("click", () => {
    const keyword = searchKeyElmt.value.toLowerCase();

    const filteredProjects = allProjects.filter(p =>
        p.ProjectName.toLowerCase().includes(keyword) ||
        p.Department.toLowerCase().includes(keyword) ||
        p.priority.toLowerCase().includes(keyword) ||
        p.status.toLowerCase().includes(keyword) 
        // p.startDate.includes(keyword) ||
        // p.EndDate.includes(keyword)
        
    );

    currentData = filteredProjects;
    currentPage = 1;
     renderData(filteredProjects);
})

const statusFilter = document.getElementById("selectStatus");

statusFilter.addEventListener("change", () => {
    const statusValue = statusFilter.value.toLowerCase();

    const filtered = allProjects.filter(p => {
        return (
            statusValue === "" || 
            p.status.toLowerCase() === statusValue
        );
    });

    renderData(filtered);
});

 const priorityFilter = document.getElementById("selectPriority");
 const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", () => {
    const priorityValue = priorityFilter.value.toLowerCase();

    const filtered = allProjects.filter(p => {
        return (
            priorityValue === "" || 
            p.priority.toLowerCase() === priorityValue
        );
    });

    renderData(filtered);
});

let currentPage = 1;
const rowsPerPage = 10;

function renderData(data) {
    const start = (currentPage - 1) * rowsPerPage;
    const paginated = data.slice(start, start + rowsPerPage);

    document.getElementById("projectsRows").innerHTML = paginated.map((p, i) => `
        <tr>
            <td>${start + i + 1}</td>
            <td>${p.ProjectName}</td>
            <td>${p.Department}</td>
            <td>${p.priority}</td>
            <td>${p.status}</td>
            <td>${p.startDate}</td>
            <td>${p.EndDate}</td>
        </tr>
    `).join("");

    setupPagination(data);
}

function setupPagination(data){
    const pageCount = Math.ceil(data.length / rowsPerPage);
    const pagination = document.getElementById("pagination");

    pagination.innerHTML = "";

    //previous button
    pagination.innerHTML +=  `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
        </li>
    `;

    // page numbers 
    for (let i = 1; i <= pageCount; i++) {
        pagination.innerHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }

    // next button
    pagination.innerHTML += `
        <li class="page-item ${currentPage === pageCount ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
        </li>
    `;
}

function changePage(page) {
    const totalPages = Math.ceil(currentData.length / rowsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderData(allProjects);
}
