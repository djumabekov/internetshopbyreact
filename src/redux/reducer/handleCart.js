// создаем переменную хранящую массив товаров в корзине
// если в локалсторадж существуют сохраненные данные, то подгружаем их, иначе создаем пустой массив
const cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];


const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type){
        case "ADDITEM":
            //проверяем если продукт уже существует в массиве
            const exist = state.find((x)=>x.id === product.id);
            if(exist){
                //увеличиваем его количество
                const products = state.map((x)=>x.id === product.id ? {...x, qty: x.qty + 1} : x);
                localStorage.setItem('cart', JSON.stringify(products)); // попутно сохраняем в локалсторадж
                return products;
                
            } else{
                // иначе добавляем в массив новый товар
                const product = action.payload;
                const products = [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
                localStorage.setItem('cart', JSON.stringify(products)); // попутно сохраняем в локалсторадж
                return products;
            }
            

            case "DELITEM":
                //проверяем если продукт уже существует в массиве
                const exist1 = state.find((x)=>x.id === product.id);
                if(exist1.qty === 1) {
                     //если количество товара равно 1, то удаляем его с корзины
                    const products = state.filter((x)=>x.id !== exist1.id)
                    localStorage.setItem('cart', JSON.stringify(products));
                    return products;
                } else{
                    //если количество товара больше 1, то уменшяем его количество
                    const products = state.map((x) => x.id === product.id ? {...x, qty: x.qty-1} : x);
                    localStorage.setItem('cart', JSON.stringify(products));
                    return products;
                }
                
        default:
            return state;
            
    }
}
export default handleCart;