const { Service } = require('../Models/Service')

const serviceController = {
  
    create: async (req, res) => {
     try {
        const service = {
          name: req.body.name,
          description: req.body.description,
          date: req.body.date,
          price: req.body.price,
          image: req.body.image
        }

        const response = await Service.create(service);

        res.status(201).json({response, msg: "Service created successfully"});
     } catch (error) {
        console.error(error);
     }

    },
    getAll: async (req, res) => {
        try {
          const service = await Service.find();

          res.status(201).json(service);
        } catch (error) {
          console.error(error);
        }
    },
    get: async (req, res) => {
       try{
         const id = req.params.id;

         const service = await Service.findById(id);
         if(!service){
          res.status(404).json({error: 'Servico esta funcionando'});
          return;
         }

         res.status(201).json(service);
       }catch (error) {
         console.error(error);
         
       }
    },
    delete: async (req, res) => {
      try {
        const id = req.params.id;

        const service = await Service.findById(id);
        res.json(service);

        if(!service){
          res.status(404).json({msg: 'Service not found'})
          return;
        }

        const deleteService = await Service.findAndDeleteById(id);

        res.status(204).json({deleteService, msg: 'Deleted service successfully'});

      } catch (error) {
        console.error(error);
      }
    },
    update: async (req, res) => {
        const id = req.params.id;

        const service = {
          name: req.body.name,
          description: req.body.description,
          date: req.body.date,
          price: req.body.price,
          image: req.body.image
        }

        const updateService = Service.findByIdAndUpdate(id);
    } 
  }
module.exports = serviceController;
