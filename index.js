var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]
let output = [];
input.forEach(function(inputItem) {
   let outputItem ={};
   outputItem.id = inputItem.id;
   outputItem.title = inputItem.title;
   inputItem.childrens.forEach(function(inputchildrensItem){
       let outputchildrensItem ={};
   outputchildrensItem.id = inputchildrensItem.id;
   outputchildrensItem.title = inputchildrensItem.title;
   outputchildrensItem.childrens = [];
   output.push(outputchildrensItem);
   });
   outputItem.childrens = [];
output.push(outputItem);
});

//console.log(output);
output.sort((firstItem, secondItem) => firstItem.id - secondItem.id);

console.log(output);
