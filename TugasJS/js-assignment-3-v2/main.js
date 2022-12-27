// for (let i = 0; i < 2 ; i++){
//     for (let j = 0; j < 2 ; j++){
//         console.log (j);
//     }
// }

const promise = new Promise ((resove, reject) => {
    reject (Error('Some error occurred'));
})
promise.catch (error => console.log(error.message));
promise.catch (error => console.log(error.message));

// function rekapSalesByName(data, name) {
//     // TODO: answer here
   
// }

// function salesReport(data, correction) {
//     // TODO: answer here
//     const dataPenjualan = data.map(sales => {
//         return sales.totalSales
//     });
    
//     const total = dataPenjualan.reduce((a,b) => a+b,0)
//     const allName = data.map(name => {
//         return name.salesName
//     })
//     console.log (dataPenjualan)
    
//     const penjualan = data.map(data => {
//         return data.totalSales
//     })
    
//     const sales = (arr1,arr2) => {
//         const obj = {};
//         arr1.forEach((element,index) => {
//             obj[element] = arr2[index];
//             for(let i = 0;i < arr1.length;i++){
                
//             }
//         });
//         return obj;
//     }
//     return {
//         monthlySales : total,
//         totalSalesByName: sales(allName,penjualan)
//     }
// }

// const unique = (value,index,self) => {
//     return self.indexOf(value) === index;
// }

// const data = [
//     {
//         salesName: 'Udin',
//         totalSales: 100,
//         salesDate: 1
//     },
//     {

//         salesName: 'Poltak',
//         totalSales: 100,
//         salesDate: 1
//     },
//     {
//         salesName: 'Poltak',
//         totalSales: 50,
//         salesDate: 2
//     },
//     {
//         salesName: 'Adi',
//         totalSales: 100,
//         salesDate: 1
//     },
//     //{
//       //  salesName: 'Sri',
//         //totalSales: 100,
//        // salesDate: 1
//    // },//
// ];

// const name = data.map(name => {
//     return name.salesName
// }).filter(unique);



// console.log(salesReport(data,name))

// module.exports = {
//     salesReport,
// }
