# Deadlock App
## Proposal 
My application is going to be a database for the game Deadlock. This application will help centralize all the main information about the game, helping both newer and more experienced players. The main features would include a characters page, an items page, and a page to display builds, with the ability to create builds and specific user functions being added later on. For my tech stack, I'm leaning towards using React and using SQLite for the backend. This way, I can have the stylized frontend I’m looking for while also having an efficient way of storing data, especially since I’m using data I’m not necessarily going to need to update the database, and any build list would only need to be stored on the user’s profile which I could probably use local storage to implement. My goal with this project is to use AI as little as possible, mainly for debugging purposes, so I can have a good overall understanding of the code I’m creating.
## Tech Stack
- Frontend: React 
- Backend: Express
- No AI was used in the creation of this app
##Status:
MVP done, needing to add build creation and displaying and cloud deployment
## Setup Instructions
2. Use these commands to copy the repo
```bash
git clone https://github.com/yuhdotpng/Deadlock_App.git
cd Recipe_frontend
code .
```
3. Make sure you have docker desktop created, set up, and open on your machine
4. Run `docker-compose up`
5. You should now be able to view the backend API health check at http://localhost:5000/api/health and the entire app at http://localhost:3000/
