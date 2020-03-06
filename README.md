# Software Engineering Project
## Team
Our team is formed of:
- Vilculescu Bogdan ([BogdanVM](https://github.com/BogdanVM));
- Apostu Robert ([GreenReach](https://github.com));
- Mortoiu Claudia;
- Jurcaneanu Ionut;
- Martac Dana;
- Dumitru Victor;
- Serban Denisa.

## Github Repository
This is the official repository for our project at Software Engineering at the University of Bucharest.

#### Branches
We are going to use the *gitflow* branch structure.

  ##### Structure
  - `master` = the main branch where there will always be a fully working, ready for distribution version of the software;
  - `dev` = the development branch. This is also a fully working version of the app, but there are still features to be added;
  - `feature/feature-name` = each developer is working on a different branch for each feature. This way we avoid bugs interfering with our `dev` and `master` branches. When work is done on a feature, the branch is merged with the development branch;
  - `fix/fix-name` = same process as with the features. Every time a fix is required, a new branch is created and when the problem is fixed, the branch is merged with the development branch.
  
  ##### Commands
  Let's describe the most usual git commands to be run.
  
  1. **First interaction with the repo**
    - `git clone https://github.com/BogdanVM/proiect-ip`;
    -  You only run this command to download the repo on your local machine. 
    -  After this, a folder will be created. That folder will be your workplace when you need to change something to the project.
    
  2. **Move to another branch (without creating a new one)**
    - `git checkout branch_name`;
    -   
