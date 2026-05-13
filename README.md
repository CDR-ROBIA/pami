# pami
repo pour le code qui controle les pamis 2026

Logiciel utilisé : MakeCode Micro:bit

Types de fichiers disponibles
  Fichier .hex : Prêt à l'emploi. Copiez-le directement sur la carte Micro:bit.
  Fichiers .py (Python) ou .js (Javascript) : Copiez le code sur le site MakeCode, puis téléchargez le   Fichier .hex généré pour la carte.
  Image PDF : Pour visualiser le programme sous forme de blocs.

Fonctionnement du programme
  Choix de la couleur (Équipe)

Le programme utilise une variable couleur pour savoir dans quelle équipe est le robot :
Au démarrage : Une croix (X) s'affiche car aucune couleur n'est choisie (couleur = 0).
Bouton A : Définit la couleur sur Bleu (valeur 1).
Bouton B : Définit la couleur sur Jaune (valeur 2).

  Lancement de l'ordre
Pour envoyer le signal de départ :

En simulation : Appuyez sur A+B.
En réel : Le signal est envoyé dès que la broche P0 est activée.
  Envoi du message (Fonction "envoie ordre")

  
  Une fois l'ordre lancé, la carte suit ces étapes :

Animation : Une flèche s'affiche pour indiquer la diffusion.
  Vérification :
    Si couleur = 1 ➔ Envoie le message radio "grok_bleu".
    Si couleur = 2 ➔ Envoie le message radio "grok_jaune".
    Sinon ➔ Affiche "echec envoie".
    Confirmation : Une coche (V) s'affiche pour confirmer que le message est parti.
