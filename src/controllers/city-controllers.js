const {CityService}=require('../services/index')

const cityService = new CityService();

const create = async(req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully inserted the city into the table',
            err:{}
        })
        
    } catch (error) {
        console.log('something went wrong at city-controller');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create the City',
            err:error
        })
    }
}

const destroy = async(req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted the city from the table',
            err:{}
        })
        
    } catch (error) {
        console.log('something went wrong at city-controller');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the City',
            err:error
        })
    }
    
}
const update = (req,res)=>{
    
}
const get = (req,res)=>{
    
}