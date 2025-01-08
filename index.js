// Good luck!
const express = require('express');
const { request } = require('http');
const app = express()

const theBakery = {
    bakeryPhoto: "bakeryPic.jpg",
     makeOrder: [
      { 
         orderName: "Chocolate Cake", 
         clientName: "Sarah Green", 
         clientNumber: "555-1234", 
         Description: "A rich chocolate cake with creamy frosting", 
         AllergyWarning: "Contains dairy, gluten, and eggs", 
         completed: true
   }, 
  { 
         orderName: "Blueberry Muffins", 
         clientName: "John Doe",
         clientNumber: "555-5678", 
         Description: "Soft muffins filled with fresh blueberries",
         AllergyWarning: "Contains gluten, dairy, and eggs",
         completed: false 
  },
  {
         orderName: "Banana Bread", 
         clientName: "Emily White", 
         clientNumber: "555-9876", 
         Description: "Moist banana bread with walnuts",
         AllergyWarning: "Contains nuts, gluten, and dairy",
         completed: true 
  },
  { 
         orderName: "Lemon Tart", 
         clientName: "David Black", 
         clientNumber: "555-1122",
         Description: "A tart with a zesty lemon filling on a buttery crust", AllergyWarning: "Contains gluten, dairy, and eggs",
         completed: false 
  }, 
  { 
         orderName: "Cinnamon Rolls", 
         clientName: "Grace Lee", 
         clientNumber: "555-3344", 
         Description: "Fluffy rolls with cinnamon and a cream cheese glaze", AllergyWarning: "Contains gluten, dairy, and eggs", 
         completed: true
  }
     ],
     recipes: [
       {
         name: "Chocolate Croissant",
         ingredients: "Flour, butter, sugar, chocolate, yeast, salt, water, egg.",
         instructions: "1. Mix flour, yeast, salt, and water. 2. Add butter and sugar. 3. Knead dough and let rise. 4. Roll dough and fill with chocolate. 5. Shape and bake at 375°F for 15 minutes.",
         served: true
       },
       {
         name: "Vanilla Cupcakes",
         ingredients: "Flour, sugar, butter, eggs, vanilla extract, baking powder, milk.",
         instructions: "1. Preheat the oven to 350°F. 2. Cream butter and sugar. 3. Add eggs and vanilla. 4. Mix in dry ingredients, then add milk. 5. Bake for 18-20 minutes.",
         served: false
       },
       {
         name: "Lemon Meringue Pie",
         ingredients: "Flour, butter, sugar, eggs, lemons, cornstarch, cream of tartar.",
         instructions: "1. Preheat the oven to 350°F. 2. Prepare pie crust and bake for 10 minutes. 3. Prepare lemon curd filling with sugar, eggs, and lemon juice. 4. Prepare meringue and bake for 15 minutes.",
         served: true
       },
       {
         name: "Blueberry Muffins",
         ingredients: "Flour, sugar, butter, eggs, blueberries, milk, baking powder.",
         instructions: "1. Preheat the oven to 375°F. 2. Mix dry ingredients, then add wet ingredients. 3. Fold in blueberries. 4. Scoop batter into muffin tins and bake for 20 minutes.",
         served: false
       },
       {
         name: "Cinnamon Rolls",
         ingredients: "Flour, butter, sugar, cinnamon, yeast, eggs, milk.",
         instructions: "1. Prepare dough by mixing flour, sugar, yeast, and milk. 2. Let dough rise. 3. Roll out dough and sprinkle it with cinnamon sugar. 4. Roll up, cut, and bake at 375°F for 25 minutes.",
         served: true
       }
     ]
   }
   
  app.use((request,response,next)=> {
    console.log(request.method + " " + request.url)
    next()
  })

  app.get("/", (request, response) => {
   response.send("<h1>Welcome to my Bakery!</h1>" + theBakery.bakeryPhoto + "<p>use / to go home and /docs to see more navigation options</p>")
  })

  app.get("/docs", (request, response) => {
 response.send("<h2>use /:x/:i (with x being makeOrder or recipes and i being the index you would like to access: 0-4) to reach pages || use / to go home and /docs to see navigation options</h2>")
  })

  app.get("/:x/:i", (request, response) => {
   const x = request.params.x
   const i = request.params.i
  if(x === "makeOrder"){
   response.json(theBakery.makeOrder[i])
  }else if(x === "recipes"){
   response.json(theBakery.recipes[i])
}else{
    response.send(`404 not found!`)
}
 })

   app.use((request, response, next)=>{
    response.send(`404 not found!`)
     next()
 })
   app.listen(3000, () => {
    console.log("Server running")
})
