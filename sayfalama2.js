const galleryItems2 = [
    {
        href: "muhlama.html",
        imgSrc: "fotograflar/66003ffd85fd1ac39a541e58_92116836_1861479883988321_6283392508139405312_n-p-800.jpg",
        alt: "Lezzet 1",
        title: "Muhlama"
    },
    {
        href: "kavurma.html",
        imgSrc: "fotograflar/660052d4ddd6593df71f5a60_1b2e26_19fe4aa356364add90f3489f9fdd2497~mv2.webp",
        alt: "Lezzet 2",
        title: "Rize Kavurması (Hurda)"
    },
    {
        href: "hamsiliPilav.html",
        imgSrc: "fotograflar/6600545a96b8dc6eec0232eb_1000_F_465273373_P50pqbwSnnn0VxSOOzwYDk0ieiVj8ovu-p-800.jpg",
        alt: "Lezzet 3",
        title: "Hamsili Pilav"
    },
    {
        href: "mısırEkmeği.html",
        imgSrc: "fotograflar/66005606685e4750b329d008_unnamed.jpg",
        alt: "Lezzet 4",
        title: "Mısır Ekmeği"
    },
    {
        href: "karalahanaCorbası.html",
        imgSrc: "fotograflar/660058e4ebd7404f85665799_650x344-rize-kara-lahana-corbasina-sahip-cikti-1702742894452.webp",
        alt: "Lezzet 5",
        title: "Karalahana Çorbası"
    },
    {
        href: "pide.html",
        imgSrc: "fotograflar/660059bad563105ac60178fb_rizeliler-dernegi_peynirli-rize-pidesi-2022-08-17-112732-31.webp",
        alt: "Lezzet 6",
        title: "Derepazarı Pidesi"
    },
    {
        href: "hamsikoli.html",
        imgSrc: "fotograflar/66005afd442d6de37d729502_hamsikoli.jpeg",
        alt: "Lezzet 7",
        title: "Hamsikoli"
    },
    {
        href: "tavali.html",
        imgSrc: "fotograflar/66005c44de98e0fec26551fc_20211220105322816_IMG_0594-p-500.jpeg",
        alt: "Lezzet 8",
        title: "Turşu Tavalisi"
    },
    {
        href: "cayMaması.html",
        imgSrc: "fotograflar/WhatsApp Görsel 2024-07-21 saat 22.47.12_725be0f2.jpg",
        alt: "Lezzet 9",
        title: "Çay Maması (Doğrama)"
    },
    {
        href: "enisteLokumu.html",
        imgSrc: "fotograflar/66005ff1ebd7404f856c341e_eniste-lokumu-rize-151822.jpg",
        alt: "Lezzet 10",
        title: "Enişte Lokumu"
    },
    {
        href: "lazBoregi.html",
        imgSrc: "fotograflar/660060f4442d6de37d775b64_laz-boregi-p-500.jpg",
        alt: "Lezzet 11",
        title: "Laz Böreği"
    },
    {
        href: "pepecura.html",
        imgSrc: "fotograflar/660061cc592918402eddc2e7_pepecura-p-800.webp",
        alt: "Lezzet 12",
        title: "Pepeçura"
    },
    {
        href: "sutlac.html",
        imgSrc: "fotograflar/660185dd187a2599c5d27f4d_d8a387983d77be673e27c06b0898e2cc.jpg",
        alt: "Lezzet 13",
        title: "Turbo Sütlaç"
    },
    {
        href: "kocakarıGerdanı.html",
        imgSrc: "fotograflar/2LBmxsmgfEe6ohgc6RRCcw.webp",
        alt: "Lezzet 14",
        title: "Kocakarı Gerdanı"
    },
    {
        href: "kabakReceli.html",
        imgSrc: "fotograflar/659303d6-8387-4c9d-84d4-2bb1b3dec016.jpg",
        alt: "Lezzet 15",
        title: "Pekmezli Kabak Reçeli"
    },
    {
        href: "kabakSütlac.html",
        imgSrc: "fotograflar/kabak-sutlaci-33e75f.jpg",
        alt: "Lezzet 16",
        title: "Kabak Sütlacı"
    },
    {
        href: "vurmaLahana.html",
        imgSrc: "fotograflar/20211220131401016_IMG_0653.jpg",
        alt: "Lezzet 17",
        title: "Vurma Lahana"
    },
    {
        href: "haslama.html",
        imgSrc: "fotograflar/images (1).jpg",
        alt: "Lezzet 18",
        title: "Karalahana Haşlaması"
    },
    {
        href: "karalahanaSarma.html",
        imgSrc: "fotograflar/Karadeniz-usulu-etli-karalahana-sarmasi-3-850x471.webp",
        alt: "Lezzet 19",
        title: "Etli Karalahana Sarması"
    },
    {
        href: "kabakPilavı.html",
        imgSrc: "fotograflar/bal-kabak-pilavı-tarifi.jpg",
        alt: "Lezzet 20",
        title: "Kabak Pilavı"
    },
    {
        href: "cıgırtma.html",
        imgSrc: "fotograflar/maxresdefault.jpg",
        alt: "Lezzet 21",
        title: "Hurdalı Çığırtma"
    },
    {
        href: "hamsiTava.html",
        imgSrc: "fotograflar/hamsi-tava-yeni-one-cikan.jpg",
        alt: "Lezzet 22",
        title: "Hamsi Tava"
    },
    {
        href: "balıkCorbası.html",
        imgSrc: "fotograflar/kapak_161638.jpg",
        alt: "Lezzet 23",
        title: "Balık Çorbası"
    },
    {
        href: "kuruFasulye.html",
        imgSrc: "fotograflar/serap-akgun-etli-kuru-fasulye.webp",
        alt: "Lezzet 24",
        title: "Çayeli Kuru Fasulye"
    },
];

const itemsPerPage2 = 12;
let currentPage2 = 1;
const totalItems2 = galleryItems2.length;

// Sayfa numarasını URL'den veya localStorage'dan al
function getCurrentPage2() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page2')) || parseInt(localStorage.getItem('currentPage2')) || 1;
    return page;
}

function setCurrentPage2(page) {
    currentPage2 = page;
    localStorage.setItem('currentPage2', page);
}

function paginate2(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function loadGalleryItems2() {
    const gallery2 = document.getElementById('gallery2');
    gallery2.innerHTML = '';

    const paginatedItems = paginate2(galleryItems2, itemsPerPage2, currentPage2);
    paginatedItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery2-item');
        
        galleryItem.innerHTML = `
            <a href="${item.href}">
                <img src="${item.imgSrc}" alt="${item.alt}">
                <h3>${item.title}</h3>
            </a>
        `;

        gallery2.appendChild(galleryItem);
    });

    // URL'ye sayfa parametresini ekle
    const newUrl = `${window.location.pathname}?page2=${currentPage2}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
}

function loadPagination2() {
    const pagination2 = document.getElementById('pagination2');
    pagination2.innerHTML = '';

    const totalPages = Math.ceil(totalItems2 / itemsPerPage2);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination2-button');
        if (i === currentPage2) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            setCurrentPage2(i);
            loadGalleryItems2();
            loadPagination2();
        });

        pagination2.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setCurrentPage2(getCurrentPage2());
    loadGalleryItems2();
    loadPagination2();

    const prevPageButton2 = document.getElementById('prevPage2');
    const nextPageButton2 = document.getElementById('nextPage2');

    prevPageButton2.addEventListener('click', () => {
        if (currentPage2 > 1) {
            setCurrentPage2(currentPage2 - 1);
            loadGalleryItems2();
            loadPagination2();
        }
    });

    nextPageButton2.addEventListener('click', () => {
        if (currentPage2 < Math.ceil(totalItems2 / itemsPerPage2)) {
            setCurrentPage2(currentPage2 + 1);
            loadGalleryItems2();
            loadPagination2();
        }
    });
});
