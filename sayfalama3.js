const galleryItems3 = [
    {
        href: "rizeBezi.html",
        imgSrc: "fotograflar/120460,rize-bezi-4.png",
        alt: "Diğer 1",
        title: "Rize Bezi (Feretiko)"
    },
    {
        href: "hemsinCorabı.html",
        imgSrc: "fotograflar/1674746122.jpg",
        alt: "Diğer 2",
        title: "Hemşin Çorabı"
    },
    {
        href: "simit.html",
        imgSrc: "fotograflar/images (2).jpg",
        alt: "Diğer 3",
        title: "Rize Simidi"
    },
    {
        href: "sepet.html",
        imgSrc: "fotograflar/fotoraf0016_5.jpg",
        alt: "Diğer 4",
        title: "Rize Sepeti"
    },
    {
        href: "bakır.html",
        imgSrc: "fotograflar/unnamed.png",
        alt: "Diğer 5",
        title: "Bakır"
    },
    {
        href: "cay.html",
        imgSrc: "fotograflar/kapak_123630.jpg",
        alt: "Diğer 6",
        title: "Çay"
    },
    {
        href: "iskemle.html",
        imgSrc: "fotograflar/iskemle.jpg",
        alt: "Diğer 7",
        title: "Rize Hasır İskemle"
    },
    {
        href: "bal.html",
        imgSrc: "fotograflar/333463,anzer-bali-2jpg.png",
        alt: "Diğer 8",
        title: "Anzer Balı"
    },
    {
        href: "kemence.html",
        imgSrc: "fotograflar/4af187e2fed9edc1c873a4b343a3572c.jpg",
        alt: "Diğer 9",
        title: "Karadeniz Kemençesi"
    },
    {
        href: "tulum.html",
        imgSrc: "fotograflar/images (7).jpeg",
        alt: "Diğer 9",
        title: "Tulum"
    },
    {
        href: "horon.html",
        imgSrc: "fotograflar/YlmiQpAPV61a.jpg",
        alt: "Diğer 10",
        title: "Horon"
    },
    {
        href: "keşan.html",
        imgSrc: "fotograflar/images (8).jpeg",
        alt: "Diğer 11",
        title: "Keşan Bezi"
    },
    {
        href: "puşi.html",
        imgSrc: "fotograflar/e12462f6faccbe75912f9b30462a9996.jpg",
        alt: "Diğer 12",
        title: "Rize Tipi Puşi"
    },
];

const itemsPerPage3 = 12;
let currentPage3 = 1;
const totalItems3 = galleryItems3.length;

// Sayfa numarasını URL'den veya localStorage'dan al
function getCurrentPage3() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page3')) || parseInt(localStorage.getItem('currentPage3')) || 1;
    return page;
}

function setCurrentPage3(page) {
    currentPage3 = page;
    localStorage.setItem('currentPage3', page);
}

function paginate3(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function loadGalleryItems3() {
    const gallery = document.getElementById('gallery3');
    gallery.innerHTML = '';

    const paginatedItems = paginate3(galleryItems3, itemsPerPage3, currentPage3);
    paginatedItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery3-item');
        
        galleryItem.innerHTML = `
            <a href="${item.href}">
                <img src="${item.imgSrc}" alt="${item.alt}">
                <h3>${item.title}</h3>
            </a>
        `;

        gallery.appendChild(galleryItem);
    });

    // URL'ye sayfa parametresini ekle
    const newUrl = `${window.location.pathname}?page3=${currentPage3}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
}

function loadPagination3() {
    const pagination = document.getElementById('pagination3');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalItems3 / itemsPerPage3);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination3-button');
        if (i === currentPage3) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            setCurrentPage3(i);
            loadGalleryItems3();
            loadPagination3();
        });

        pagination.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setCurrentPage3(getCurrentPage3());
    loadGalleryItems3();
    loadPagination3();

    const prevPageButton = document.getElementById('prevPage3');
    const nextPageButton = document.getElementById('nextPage3');

    prevPageButton.addEventListener('click', () => {
        if (currentPage3 > 1) {
            setCurrentPage3(currentPage3 - 1);
            loadGalleryItems3();
            loadPagination3();
        }
    });

    nextPageButton.addEventListener('click', () => {
        if (currentPage3 < Math.ceil(totalItems3 / itemsPerPage3)) {
            setCurrentPage3(currentPage3 + 1);
            loadGalleryItems3();
            loadPagination3();
        }
    });
});
