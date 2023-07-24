Final Capstone project

#This is a full stack MERN application, it's an inventory management system.

##What can a person do on the website?

###There are admin and normal user access. A normal user can only view the stock that is in stock currently, whereas an admin user can add, remove, update and view all stock.

##Frontend built with React

##Backend built with Express,js and Mongoose

#How to run the app?

##Download the project folder to your local machine
##Navigate to the backend
##type npm install in the terminal 
##type npm start in the terminal

##Navigate to the frontend
##type npm install in the terminal 
##type npm start in the terminal

#How to test the app?
##first navigate to the backend
##type npm install in the terminal 
##type npm test in the terminal

##then navigate to the frontend
##type npm install in the terminal 
##type npm test in the terminal

###Planning stages of this application below

#Inventory management app

This app is created to make inventory management easier for a small to medium sized business. In this readme file I will explain the system architecture as well as the system requirements.

##Software requirements

###System architecture

####Stack

For this app, I have decided to use the MERN stack (MongoDb.js, Express.js, React.js and Node.js). The reason for choosing this stack was that JavaScript is the best language for most web applications, and it makes it easier to use the different JavaScript frameworks when creating the app to be sure that the different technologies can communicate with each other easily, as well as using a popular stack like the MERN stack, makes future updates and changes easier to maintain as there should be support for these technologies for years to come.

####Framework

I have decided to use Create React App (CRA) for this project, the reason being, that I am more comfortable with CRA than other tools. CRA also supplies you with all of the boilerplate code needed to create a React application from the start. This means that it is quicker to use CRA than to start from scratch.


####Styling

Styling the app is just as important as deciding wich frameworks to use, for this app, I will be using vanilla CSS with some React-Bootstrap. I will be using vanilla CSS because it gives you a lot of freedom when styling an applicatiom, and React-Bootstrap will be used to make styling of certain components easier, as React-Bootstrap includes a lot of components, like; responsive forms, cards to display information and navbars.
 
###System requirements

This inventory management system will make the lives of employees and employers a lot easier when it comes to their stock/inventory, as users won't need to use papers and huge folders to keep track of inventory. The inventory will be at the tip of their fingers and the users will be able to see stock change in real-time, no more time wasting to check a folder for stock.

There will be 2 main focus points in this app, first being a normal user and secondly, being an admin user.

Normal user
What can a normal user do in the app?
A normal end-user will have limited functionality, meaning they would only be able to do certain things, like; check stock levels, use a certain item from stock, and do stock takes.

Admin user
What can an admin user do in the app?
An admin user will have full functionality of the web app, they would be able to check stock levels, use items from stock, do stocktakes, add and remove items from the stock.

Whether using the app as a user or an admin user, this app should make life easier for the users, as the processes discussed above can be done quicker and more efficiently meaning more time to spend with customers and other duties instead of looking up stock levels.

##User stories

###User story 1

I own a small shop that sells vape related items. My employees sometimes spend more time than needed to check up stock levels in a binder that we have in the admin office, or looking through the physical stock to find the item the customer is looking for.

###User story 2

I work for a small vape shop. When a customer requests a certain item, it's time consuming looking for the item int he stockroom or on the shelves, and sometimes when going through the stock binder, I can't read some people's handwriting, meaning I have to go and physically look for the stock, and I have wasted a lot of time with not fruitful outcome

###User story 3

I work for a small shop as a sales assistant, when customers are requesting certain items, and it takes us long to find the item, clients get irritated and some might even leave because of the wait time. This not only affects my boss's company, but it also affects my personal commission as it's a lost sale. I need something that I can use to quickly lookup stock levels of an item, so that I can tell the customer immediately whether the item they want is in stock or not.

There are a lot of inventory management systems available out there today, so the competition is strong, but I believe that with my simple to use and understand app, clients would opt for my app before others. 

My applicatiom's UI will not be cluttered with unnecessary information, a user would be able to go straight to the point that they need, without wasting their time and resources. My application is modular as well, meaning that it can easily be adapted to the client's needs. Do you have 2 companies? No problem, each company can have their own system and you as an admin can have admin access to both from the same system.