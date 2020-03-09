# Proiect Ingineria Programarii

## Echipa

Echipa noastra este formata din:

-   Vilculescu Bogdan ([BogdanVM](https://github.com/BogdanVM));
-   Apostu Robert ([GreenReach](https://github.com/GreenReach));
-   Mortoiu Claudia ([Claudia210](https://github.com/Claudia210));
-   Jurcaneanu Ionut ([Garbulinski](https://github.com/Garbulinski));
-   Martac Dana ([Dana-Maria](https://github.com/Dana-Maria));
-   Dumitru Victor;
-   Serban Denisa.

## Github Repository

Acesta este repository-ul oficial pentru proiectul nostru la Ingineria Programarii la _Facultatea de Matematică și Informatică_ din cadrul _Universității din București_

#### Branches

Vom folosi structura de tip _gitflow_ pentru branches.

##### Structura

-   `master` = branch-ul principal unde se va afla în permanență o versiune complet funcțională a produsului, gata de distribuție;
-   `dev` = branch-ul de dezvoltare. Și aici se va afla tot o versiune funcțională, dar aici se vor adăuga feature-urile la care se lucrează curent;
-   `feature/feature-name` = fiecare feature important al aplicației va avea propriul branch. Astfel, evităm ca diverse bug-uri să afecteze branch-urile `dev` și `master`. În momentul în care se termină lucrul la un feature, branch-ul este _merged_ cu branch-ul de dezvoltare;
-   `fix/fix-name` = același proces ca pentru branch-urile de feature-uri. De fiecare dată când un _fix_ este necesar, un nou branch este creat și pe acel branch se lucrează până când problema e rezolvată. Apoi, branch-ul de fix este _merged_ cu branch-ul `dev`.

##### Comenzi

Acestea sunt cele mai folosite comenzi de _git_.

1. **Prima interacțiune cu repo-ul**

    - `git clone https://github.com/BogdanVM/proiect-ip`;

    - Această comandă va fi executată doar la prima interacțiune cu repo-ul;

    - Un nou folder va fi creat, iar acela este folder-ul unde se va lucra la proiect;

    - Când se realizează orice modificare, trebuie acordată atenție branch-ului curent.

2. **Verificarea branch-ului pe care lucrăm**

    - `git branch`;

    - După executarea acestei comenzi, va fi afișată o listă cu toate branch-urile locale;

    - În dreptul branch-ului curent se află un asterisk (\*).
    - De fiecare dată când începeți lucrul la un nou feature, verificați branch-ul pe care vă aflați.

3. **Verificarea modificărilor făcute pe branch-ul curent**

    - `git status`;

    - Dacă sunt modificări nesalvate pe branch-ul curent, va apărea o listă cu fișiere colorate cu roșu;

4. **Schimbarea branch-ului curent (fara crearea unui nou branch)**

    - `git checkout branch_name`;

    - Această comandă presupune că deja există un branch cu numele dat.

5. **Schimbarea branch-ului curent (cu crearea unuia nou)**

    - `git checkout -b new_branch_name origin_branch`;

    - Această comandă creează un branch nou și apoi mută branch-ul curent către acel branch nou;

    - Acel _origin branch_ spune care este branch-ul din care să fie creat noul branch. În general, acesta va fi `dev`.

6. **Actualizarea spațiului de lucru local**

    - `git pull origin branch_name`;

    - Dacă au avut loc modifcări pe repo care nu sunt salvate local, trebuie întotdeauna executată această comandă;

    - Aceasta va lua ultimele modificări de pe branch-ul specificat și le va salva local.

7. **Adăugarea unor noi fișiere**

    - `git add -A`;

    - După ce ați creat fișiere noi, acestea trebuie adăugate folosind comanda aceasta;

8. **Salvarea modificărilor făcute local**

    - `git commit -am "mesaj sugestiv pentru modificarile facute"`;

    - Această comandă salvează modificările făcute local, evitând astfel pierderi.

9. **Urcarea modificărilor pe repo**

    - `git push origin branch_name`;

    - După ce ați dat commit și considerați că modificările trebuie urcate pe repo, executați această comandă;

    - **_IMPORTANT:_** când vă creați un nou branch local, trebuie să executați această comandă pentru ca acel branch să devină vizibil și global.

10. **Finalizarea unui feature**

    - `git merge feature/feature-name`;

    - După ce este gata lucrul la un branch, se face merge între `dev` și `feature/feature-name`.

##### Workflow

```git
git clone https://github.com/BogdanVM/proiect-ip
git checkout -b feature/feature-name dev

// lucrati la feature

git add -A

git commit -am "mesaj care sa ilustreze modificarile facute de la ultimul commit"

git push origin feature/feature-name

// repetam procesul incepand de la add pana cand feature-ul // e gata

git checkout dev
git merge feature/feature-name

// code review să vedem dacă vor fi salvate modificările

git pull origin dev

// se repetă procesul descris cu fiecare feature (mai puțin // partea de clonare a repo-ului)
```

##### Probleme

Să vedem ce probleme pot apărea când lucrăm cu _git_

1. **Comanda de checkout nu a funcționat**

    - Această problemă este cauzată, _de obicei_, din cauză că există local modificări pe branch-ul curent care nu sunt salvate;

    - Din această cauză, nu se poate schimba branch-ul;

    - Pentru a rezolva această problemă, trebuie doar să facem un nou commit ca să salvăm:

    ```git
    git add -A
    git commit -am "mesaj"
    ```

2. **Pull request has failed**

    - Se poate întâmpla ca atunci când executăm comanda `git pull origin branch_name` să primim o eroare;

    - În acest caz, _de obicei_, avem niște modificări locale cu care _git-ul_ nu știe ce să facă;

    - Astfel, avem 2 cazuri:

        - _Dacă aceste modificări **vrem** să fie salvate_, executăm:

        ```git
        git add -A
        git commit -am "mesaj"
        git push origin feature/feature-name
        ```

        - _Dacă **nu vrem** să fie salvate modificările_, executăm:

        ```git
        git add *
        git stash
        ```

    - După aceea, nu ar trebui să mai fie probleme cu _pull request-ul_.
