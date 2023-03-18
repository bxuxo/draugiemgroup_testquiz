# draugiemgroup_testquiz

Šis ir pabeigts quiz darbs pēc Draugiem Group prasībām.

Taisīts uz React, palaists ar "npm start" un otrs localhost serveris, kur atrodas API ar php kodu, kā arī datubāzes, atrodas uz cita localhost servera, kas palaists uz XAMPP.
React ir uz localhost:3000, PHP api ir uz localhost:80

Datubāzes:

quiz_data.sql => datubāze, kas satur visus quizus. 
Struktūras paskaidrojums:
id -> primārā atslēga, auto increment
quiz_name -> quiza vārds jeb tematika
answers_data -> masīvs, kas satur masīvus ar individuāliem jautājumiem. Katrā jautājuma masīvā ir masīvs, kas satur visas atbildes un vai tā ir pareizā atbilde.

results.sql => datubāze, kas satur visus rezultātus par izpildi.
Struktūras paskaidrojums:
id -> primārā atslēga, auto increment
completed_quiz_id -> identifikators, kas norāda uz to quizu, kurš tika aizpildīts
score -> saņemtais punktu skaits
max_score -> maksimāli iespējamais punktu skaits
uname -> ievadītais vārds

Mapīte "api":
Šajā mapītē stāv faili, kuri tiek izmantoti lai ar PHP varam ielikt datubāzē informāciju.
util.php -> fails priekš datubāzes klasēm. Ir viena klase, kas saucas "access", kura ir priekš datubāzes konstruktora, un otra klase kas saucas "quiz", kas extendo access, un tā ir domāta priekš datubāzes darbībām, kā saņemt visus quizus utml.
api.php -> šis ir API fails priekš quiz lapas. Tas tiek izmantots lai paņemtu un ieliktu datus tabulās.

Mapīte "react":
Šajā mapītē ir visi React faili, kas savelk kopā visu projektu un kur viss tiek zīmēts.
React iemācijos salīdzinoši nesen, tāpēc lūdzu piedodiet ja ir izmantoti kādi slikti piemēri.

Šis projekts man grūtības nesagādāja, un esmu gatavs mācīties to, ko nezinu vai ko vajag uzlabot.
