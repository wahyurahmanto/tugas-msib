function salesReport(data, correction) {
    const dataAdi = data.filter(name => name.salesName === 'Adi'); 
    const dataBudi = data.filter(name => name.salesName === 'Budi'); 
    const dataPoltak = data.filter(name => name.salesName === 'Poltak');
    const dataSri = data.filter(name => name.salesName === 'Sri'); 
    const dataUdin = data.filter(name => name.salesName === 'Udin'); 
    
    const totalsalesAdi = dataAdi.map(penjualan => penjualan.totalSales).reduce((a,b) => a+b, 0);
    const totalsalesBudi = dataBudi.map(penjualan => penjualan.totalSales).reduce((a,b) => a+b, 0);
    const totalsalesPoltak = dataPoltak.map(penjualan => penjualan.totalSales).reduce((a,b) => a+b, 0);
    const totalsalesSri = dataSri.map(penjualan => penjualan.totalSales).reduce((a,b) => a+b, 0);
    const totalsalesUdin = dataUdin.map(penjualan => penjualan.totalSales).reduce((a,b) => a+b, 0);
    
    const totalSalesByName = [
        {
            'name':'Adi',
            'total': totalsalesAdi
        },
        {
            'name':'Budi',
            'total': totalsalesBudi
        },
        {
            'name':'Poltak',
            'total': totalsalesPoltak
        },
        {
            'name':'Sri',
            'total': totalsalesSri
        },
        {
            'name':'Udin',
            'total': totalsalesUdin
        },
        
    ]
    const monthlySales = totalSalesByName.map(totalsales => totalsales.total).reduce((a,b) => a+b, 0);
    const maxsales = totalSalesByName.sort(function (a, b) {
        return a.total - b.total;
    }).reverse();
    const rekap = 
    {
        'monthlySales':monthlySales,
        'totalSalesByName':{
            'Budi': Number(totalSalesByName.filter(sales => sales.name === 'Budi').map(jumlah => jumlah.total).join('')),
            'Adi': Number(totalSalesByName.filter(sales => sales.name === 'Adi').map(jumlah => jumlah.total).join('')),
            'Poltak': Number(totalSalesByName.filter(sales => sales.name === 'Poltak').map(jumlah => jumlah.total).join('')),
            'Sri': Number(totalSalesByName.filter(sales => sales.name === 'Sri').map(jumlah => jumlah.total).join('')),
            'Udin': Number(totalSalesByName.filter(sales => sales.name === 'Udin').map(jumlah => jumlah.total).join('')),
        },
        'bestSalesman':'Penjualan terbanyak dilakukan oleh '+maxsales[0].name+' dengan total penjualan dalam 1 bulan sebesar '+maxsales[0].total
      }
    return rekap;
}


const data = [
    {
        salesName: 'Udin',
        totalSales: 100,
        salesDate: 1 
    },
    {
        salesName: 'Poltak',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Poltak',
        totalSales: 50,
        salesDate: 2
    },
    {
        salesName: 'Adi',
        totalSales: 100,
        salesDate: 1
    },
    {
        salesName: 'Adi',
        totalSales: 100,
        salesDate: 2
    },
];
 console.log (salesReport(data));
module.exports = {
    salesReport,
}
