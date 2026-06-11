type Category = 'Sport' | 'Cruiser' | 'Touring' | 'Dirt' | 'Adventure' | 'Naked' | 'Electric';

interface Motorcycle {
    id: string;
    name: string;
    manufacturer: string;
    category: Category;
    price: number;
    image_url: string;
    created_at: Date;
    description: string;
    year: number;
};
    
async function fetchMotorcycles(): Promise<Motorcycle[]> {
    const response = await fetch(`https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json`);
    const data = await response.json();
    return data;
};

function renderMotorcycleCard(
  motorcycle: Motorcycle
): string {
    return `<div class="motorcycle-card">
    <img class="motorcycle-card-image-container" src="${motorcycle.image_url}" />
    <h1 class="motorcycle-card-title">${motorcycle.name}</h1>
    <h2 class="motorcycle-card-year-badge">${motorcycle.year}</h2>
    <h3 class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</h3>
    <p class="motorcycle-card-description">${motorcycle.description}</p>
    <p class="motorcycle-card-category">${motorcycle.category}</p>
    <p class="motorcycle-card-price">${motorcycle.price}</p>
    <p class="motorcycle-card-engine">horsepower</p>
</div>`;
};

class MotorcycleGalleryApp {
    private allMotorcycles: Motorcycle[] = [];

    renderMotorcycles() {
        const grid = document.getElementById("motorcycle-grid");
        if (!grid) return;
        grid.innerHTML = "";
        
        const count = document.getElementById("results-number");
        if (!count) return;
        count.innerHTML = "";
        
        this.allMotorcycles.forEach(motorcycle => {
            const card = renderMotorcycleCard(motorcycle);
            grid.innerHTML += card;
            });
            
        count.innerHTML = `${this.allMotorcycles.length}`;
        }
}

