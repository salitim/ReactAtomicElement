Brouillons

ProviderMoleculus de faire passer un context avec celui ci quand il change il va checker les composants existant dans le DOM puis vidé les styles dans le head de la page html qui ne correspondent pas à nos components répertorié dans notre context puis écrire les styles de bases de nos composants dans le head

le composant va lui faire changer le context qui va déclancher un ajout de balise style avec son style dans le html et le retirer lorsqu'il se démontera

le makestyle va ajouter le style dans le head et le détruire (le style) au démontage du composant
