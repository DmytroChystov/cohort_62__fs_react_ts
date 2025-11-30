import "./styles.css"

interface Car {
brand: string;
price: number;
isDiesel: boolean;
}

function Homerwork_06() {
    const cars: Car[] = [
        { brand: "BMW", price: 20000, isDiesel: true }, 
        { brand: "Mercedes", price: 22000, isDiesel: false }, 
        { brand: "Porshe", price: 50000, isDiesel: true }, 
        { brand: "Nissan", price: 25000, isDiesel: false }, 
        { brand: "Audi", price: 50000, isDiesel: true } 
    ];

    return (
        <div className="cars_list_wrapper">
            {cars.map((car) => (
                <div className="card_card" key={car.brand}>
                    <h3 className="car_title">Brand: {car.brand}</h3>
                    <p className="car_price">Price: ${car.price}</p>
                    <p className="car_engine">
                        Engine Type: {car.isDiesel ? "Diesel" : "Petrol"}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Homerwork_06;