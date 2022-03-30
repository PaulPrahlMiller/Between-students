# Fullstack Development Project

## Initial set-up

1. Fork this repository to create a version on your own github account

2. Clone the repository from your account to your local machine

3. Add a remote that will point to the main repo with the following command:

   `git remote add upstream https://github.com/pjm-hkr/fullstack-project.git`

4. Check your remotes (You should have both an "origin" and "upstream" remote). Origin points to the fork you created and upstream points to the main project repo:

   `git remote -v`

5. Follow the link at the bottom of the page to read about the git workflow we will use for the project.

6. Create a .env file in the project root and add the following environment variable.

   DATABASE_URL = mongodb+srv://&lt;username&gt;:&lt;password&gt;@fullstack-project.qsat4.mongodb.net/fullstack-project?retryWrites=true&w=majority

7. Replace &lt;username&gt; and &lt;password&gt; with your provided login credentials.

8. Run the following commands from the project root directory:

   `npm install`
   `npm run install-client`

## Run the application

From the project root directory run the following command:

`npm run dev`

## Additional links

Some things that may be helpful for us.

- A github [workflow](https://medium.com/@androidmatheny/using-git-and-github-on-group-projects-d636be2cdd4d) for teams.
