module.exports.formatDateNaissance = function (dateBrut){
  
  let elements=(String)(dateBrut).split(' ');
  switch (elements[0]) {
    case "Sun":
      elements[0]="dimanche";
      break;
    case "Mon":
      elements[0]="lundi";
      break;
    case "Tue":
      elements[0]="mardi";
      break;
    case "Wed":
      elements[0]="mercredi";
      break;
    case "Thu":
      elements[0]="jeudi";
      break;
    case "Fri":
      elements[0]="vendredi";
      break;
    case "Sat":
      elements[0]="samedi";
      break;
    default:
  }
  switch (elements[1]) {
    case "Jan":
      elements[1]="janvier";
      break;
    case "Feb":
      elements[1]="fevrier";
      break;
    case "Mar":
      elements[1]="mars";
      break;
    case "Apr":
      elements[1]="avril";
      break;
    case "May":
      elements[1]="mai";
      break;
    case "Jun":
      elements[1]="juin";
      break;
    case "Jul":
      elements[1]="juillet";
      break;
    case "Aug":
      elements[1]="août";
      break;
    case "Sep":
      elements[1]="septembre";
      break;
    case "Oct":
      elements[1]="octobre";
      break;
    case "Nov":
      elements[1]="novembre";
      break;
    case "Dec":
      elements[1]="decembre";
      break;
    default:
  }
  return elements[0]+" "+elements[2]+" "+elements[1]+" "+elements[3];
}
