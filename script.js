
function isValidDate(date) {
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;       // méthode regex pour valider le format de date dd/mm/aaaa (2charactères /2charactères /4charactères)
    const match = date.match(dateRegex);                   // Vérification du format et renvoyer false si ça ne match pas
    if (!match) {
        return false;
    }
    const day = parseInt(match[1], 10);                    // déclaration de constantes pour stocker chaque groupe de la date validée(D/M/Y) et conversion en integer
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    if (month < 1 || month > 12 || year < 1000 || year > 9999) {     // condition pour vérifier que l'année et le mois s'inscrivent bien dans une plage donnée   
        return false;                                               
       
    }

   
    const daysInMonth = new Date(year, month, 0).getDate();        // constante contenant l'objet date et récuperant le dernier jour d'un mois spécifié d'une année spécifié pour gérer les fin de mois (28_29_30_31) et les années bisextiles

    
    return day >= 1 && day <= daysInMonth;                    // On vérifie ensuite avec notre constante que la date donnée est valide selon le nombre de jours dans le mois
}


console.log(isValidDate("13/08/2003")); 
