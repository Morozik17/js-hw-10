// /*
//  Задача №1
// * Напиши функцію findSmallesNumber(numbers)
//  для пошуку найменшого числа в масиві,
//  * при умові що числа унікальні (не повторюються).
//  */

// const findSmallesNumber = function(numbers){
//     let smallNumber = numbers [0]

//     for (const number of numbers) {
//         if (number < smallNumber){
//             smallNumber = number
//         }
//     }
//     return smallNumber;
// }

// const findSmallesNumber = (numbers)=>{
//     let smallNumber = numbers [0]

//     for (const number of numbers) {
//         if (number < smallNumber){
//             smallNumber = number
//         }
//     }
//     return smallNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// .............................
// Задача №2
// Функція checkStorage(available, ordered)
// перевіряє можливість оформлення замовлення
//  і повертає повідомлення про результат.
//  Вона оголошує два параметри,
// значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження,
// доповни код функції таким чином, що:

// Якщо в замовленні вказане число,
// яке перевищує кількість товарів на складі,
// у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered < available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   return message;
// }

// const checkStorage = (available, ordered)=>{
//     let message;

//   if (ordered < available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   return message;
// }

// const checkStorage = (available, ordered)=>

//   (ordered < available) ? "Not enough goods in stock!" : "Order is processed, our manager will contact you."
    

// const r1 = checkStorage(100, 50);

// console.log(r1);

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// .............................


// -------------------------------


// Задача №1 
// Оголоси функцію sayHi, 
// всередині якої додай console.log() 
//  з рядком "Hello, this is my first function!". 
// Після оголошення виклич функцію sayHi. 
 
//  const sayHi = ()=>{ 
//     console.log("Hello, this is my first function!"); 
     
// } 
 
// sayHi(); 
 
// .......... 
// Задача №2 
// Функція add повинна вміти додавати три числа 
//  і виводити результат у консоль. 
// Додай функції add три параметри: a, b і c, 
// які будуть отримувати значення аргументів під час її виклику. 
 
// Доповни console.log() таким чином, 
// щоб він логував рядок 
// "Addition result equals <result>", де < result > - це сума переданих чисел. 
 
// const add = (a, b, c)=>{ 
//     const result = a + b + c; 
//   console.log(`Addition result equals ${result}`); 
 
// } 
 
// add(15, 27, 10); 
// add(10, 20, 30); 
// add(5, 10, 15); 
 
// ......................... 
// Задача №3 
// Доповни код функції add таким чином, 
// щоб вона повертала результат додавання значень трьох параметрів: a, b і c. 
 
// const add = (a, b, c)=>{ 
 
//     return a + b + c 
// } 
 
// console.log(add(15, 27, 10)); 
// console.log(add(10, 20, 30)); 
// console.log(add(5, 10, 15)); 
 
// ............................... 
// Задача №4 
// Функція makeMessage(name, price) складає і повертає повідомлення про покупку. 
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику. 
 
// name - назва товару 
// price - ціна товару 
// Доповни код функції таким чином, щоб у змінну message записувався рядок 
// "You picked <product name>, price per item is <product price> credits", 
// де < product name > і < product price > - це значення параметрів name і price. 
// Використовуй синтаксис шаблонних рядків. 
 
// const makeMessage = (name, price)=>{ 
//   const message = You picked ${name}, price per item is ${price} credits; 
//   return message; 
 
// } 
// const result1 = makeMessage("Radar", 6150); 
// console.log(result1); 
 
// const result2 = makeMessage("Scanner", 3500); 
// console.log(result2); 
 
// const result3 = makeMessage("Reactor", 8000); 
// console.log(result3); 
 
// const result4 = makeMessage("Engine", 4070); 
// console.log(result4); 
 
// ............................. 
// Задача №5 
// Функція calculateTotalPrice рахує і повертає загальну суму покупки. 
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику. 
 
// orderedQuantity - кількість одиниць товару в замовленні; 
// pricePerItem - ціна однієї одиниці товару. 
// Доповни код функції таким чином, 
// щоб у змінну totalPrice записувалася загальна сума покупки - 
// результат множення кількості товарів на ціну одного. 
 
// const calculateTotalPrice = (orderedQuantity, pricePerItem)=>{ 
//   const totalPrice = orderedQuantity * pricePerItem; 
//   return totalPrice; 
// }; 
 
// const result1 = calculateTotalPrice(5, 100); 
// console.log(result1); 
 
// const result2 = calculateTotalPrice(5, 100); 
// console.log(result2); 
 
// const result3 = calculateTotalPrice(5, 100); 
// console.log(result3); 
 
// const result4 = calculateTotalPrice(5, 100); 
// console.log(result4); 
 
// const result5 = calculateTotalPrice(5, 100); 
// console.log(result5); 
 
 
// .......................... 
// Задача №6 
// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) 
// складає і повертає повідомлення про покупку ремонтних дроїдів. 
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику. 
// 
// orderedQuantity - кількість дроїдів у замовленні 
// pricePerDroid - ціна одного дроїда 
// deliveryFee - вартість доставки 
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення 
// у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". 
// Не забудь про ціну доставки в обчисленнях загальної вартості. 
 
// const makeOrderMessage = (orderedQuantity, pricePerDroid, deliveryFee)=>{ 
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee; 
//     let message = `You ordered droids worth
// ${totalPrice} credits. Delivery ${deliveryFee} is included in total price.` 
//   return totalPrice; 
// } 
// const result = makeOrderMessage(2, 100, 50); 
// console.log("result", result); 
 
// makeOrderMessage(4, 300, 100); 
// makeOrderMessage(10, 70, 200); 
 
// ....................... 
// Задача №7 
// Функція isAdult оголошує один параметр age(вік), 
// значення якого буде задаватися під час її виклику. 
// Присвой змінній passed вираз перевірки віку користувача на повноліття. 
// Людина вважається повнолітньою у віці 18 років і старше. 
 
// const isAdult = (age)=>{ 
 
//   const passed = age >= 18; 
//   return passed; 
// } 
 
// const result = isAdult(20); 
// console.log(result); 
 
// isAdult(14); 
// isAdult(8); 
// isAdult(37); 
 
// ..................... 
// Задача №8 
// Функція isValidPassword(password) перевіряє рівність збереженого і введеного паролів 
// і повертає результат перевірки - буль true або false. 
// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. 
// Введений пароль передається у параметр password. 
// 
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. 
// Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні. 
 
// const isValidPassword = (password)=>{ 
//   const SAVED_PASSWORD = 'jqueryismyjam'; 
 
//   const isMatch = isValidPassword === password; 
 
//   return isMatch; 
// } 
//  const result = isValidPassword("mangodab3st"); 
//  console.log(result); 
 
// isValidPassword("kiwirul3z"); 
// isValidPassword("jqueryismyjam"); 