const getCsv = require('get-csv');

const loadCsvService = require('../service/loadCsv.service');

exports.test = (req , res )=>{
    try{        
        res.status(200).json({data: "Hello World From NodeJS"})
    }
    catch(err){
        console.log(err.message);
        res.status(404).json({error: err.message})
    }
}

exports.csvLoader = async(req , res)=>{
    try{
        //Get data from CSV 
        var listOfPurchaseRecords = await getCsv(req.body.loadCsvUrl)
           console.log("Purchase Record", typeof listOfPurchaseRecords)
        
           listOfPurchaseRecords.forEach(async(data)=>{
                console.log(data);
                await loadCsvService.loadData(data);
                
           });

        res.status(200).json("Loading data in database!!!")


    }
    catch(err){
        console.log("Error", err.message);
        res.status(404).json({error: err.message})
    }
}