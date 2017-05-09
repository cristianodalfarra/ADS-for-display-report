function productName() {
  
 var ss = SpreadsheetApp.getActiveSpreadsheet();  
 
  var sheet = ss.getSheetByName("impressions2017");
   var data = sheet.getDataRange().getValues();
  var i=0;
   var r=1  ;
  for(i in data) 
  { 
    
    var row = data[i];
  
    
    //elenco
     if (row[3].indexOf("ASP") !=-1)            {sheet.getRange(r,15).setValue('CAT');}
    if (row[3].indexOf("CAT") !=-1)         {sheet.getRange(r,15).setValue('CAT');}
    if (row[3].indexOf("LOCAND") !=-1)         {sheet.getRange(r,15).setValue('CAT');}
    if (row[3].indexOf("CONSIGLIA") !=-1)         {sheet.getRange(r,15).setValue('CAT');}
    if (row[3].indexOf("elenco") !=-1)         {sheet.getRange(r,15).setValue('CAT');}
    if (row[3].indexOf("DCX1_") !=-1 && row[1].indexOf("300 x 200") !=-1)         {sheet.getRange(r,15).setValue('CAT');}
    if (row[1].indexOf("Fuori pagina") !=-1 )         {sheet.getRange(r,15).setValue('CAT');}
    
    if (row[3].indexOf("HP") !=-1)         {sheet.getRange(r,15).setValue('HP');}
    
    
    // dettaglio
    
    if (row[3].indexOf("DET") !=-1)         {sheet.getRange(r,15).setValue('DET');}
    if (row[3].indexOf("HALF_PAGE") !=-1 || row[3].indexOf("Half_page_") !=-1)     {sheet.getRange(r,15).setValue('DET');}
    if (row[3].indexOf("INPAGE") !=-1)         {sheet.getRange(r,15).setValue('DET');}
    
    
    if (row[3].indexOf("WBOX_DET") !=-1)         {sheet.getRange(r,15).setValue('WBOX_DET');}
    
    if (row[3].indexOf("_MOB_CAT") !=-1)         {sheet.getRange(r,15).setValue('MOBILE_CAT');}
    if (row[3].indexOf("_MOB_DET") !=-1)         {sheet.getRange(r,15).setValue('MOBILE_DET');}
    if (row[3].indexOf("DCX1_") !=-1 && row[1].indexOf("320 x 50") !=-1)         {sheet.getRange(r,15).setValue('MOBILE_CAT');}
      if (row[3].indexOf("_MOB_HP") !=-1)         {sheet.getRange(r,15).setValue('MOBILE_HP');}
    
    //da aggiungere come colonna 16 solo per mobile:
    
    if (row[3].indexOf("_MOB_CAT_LEADBOTTOM") !=-1)         {sheet.getRange(r,16).setValue('MOBILE_CAT_LEADBOTTOM');}
    if (row[3].indexOf("_MOB_CAT_LEADTOP") !=-1)         {sheet.getRange(r,16).setValue('MOBILE_CAT_LEADTOP');}
    
    if (row[3].indexOf("_MOB_DET_LEADBOTTOM") !=-1)         {sheet.getRange(r,16).setValue('MOBILE_DET_LEADBOTTOM');}
    if (row[3].indexOf("_MOB_DET_LEADTOP") !=-1)         {sheet.getRange(r,16).setValue('MOBILE_DET_LEADTOP');}
    if (row[3].indexOf("DCX1_") !=-1 && row[1].indexOf("320 x 50") !=-1)  {sheet.getRange(r,16).setValue('MOBILE_CAT_LEADTOP');}       
    
    if (row[3].indexOf("_MOB_HP_LEADBOTTOM") !=-1)         {sheet.getRange(r,16).setValue('MOBILE_HP_LEADTOP');}
    
    //ADV_MOB_CAT_LEADBOTTOM 
    //ADV_MOB_CAT_LEADTOP 
    
    //ADV_MOB_DET_LEADTOP 
    //ADV_MOB_DET_LEADBOTTOM 
    
    //ADV_MOB_HP_LEADBOTTOM 
    
    
    if (row[3].indexOf("PUB_") !=-1)         {sheet.getRange(r,15).setValue('PUB');}
    
    if (row[3].indexOf("MB_") !=-1)         {sheet.getRange(r,15).setValue('MiaBakeca');}
    if (row[3].indexOf("_MB") !=-1)         {sheet.getRange(r,15).setValue('MiaBakeca');}
    
    
    if (row[3].indexOf("PREFERITI") !=-1)         {sheet.getRange(r,15).setValue('PREFERITI');}
    
    if (row[3].indexOf("LASTVIEW") !=-1)         {sheet.getRange(r,15).setValue('LASTVIEW');}
    
    if (row[3].indexOf("VETRINA") !=-1)         {sheet.getRange(r,15).setValue('VETRINA');}
    
    if (row[3].indexOf("GESTIONE") !=-1)         {sheet.getRange(r,15).setValue('GESTIONE');}
    
    if (row[3].indexOf("ADEXCHANGE") !=-1)         {sheet.getRange(r,15).setValue('ADEXCHANGE');}
    

    
//
//if (row[0].indexOf("Locandina") ==-1 && 
//        row[0].indexOf("Vetrina Base") ==-1 &&
//        row[0].indexOf("Vetrina Turbo") ==-1 &&
//        row[0].indexOf("Toplist") ==-1  && 
//         row[0].indexOf("Crediti Top List") ==-1  &&  
//           row[0].indexOf("Vetrina Seo") ==-1  &&
//             row[0].indexOf("Vetrina 3 Mesi +") ==-1  &&
//              row[0].indexOf("Vetrina 6 Mesi +") ==-1  && 
//                row[0].indexOf("Vetrina 12 Mesi +") ==-1  &&
//        i>0 &&
//          row[0].length >0 
//        )        {sheet.getRange(r,15).setValue('Altro');}
    r=r+1;
  }
}
///////////////////DA ESEGUIRE

function productName_label()
{
  
 var ss = SpreadsheetApp.getActiveSpreadsheet();  
 
  var sheet = ss.getSheetByName("impressions2017");
   var data = sheet.getDataRange().getValues();
  var i=0;
   var r=1  ;
  for(i in data) 
  { 
    
    var row = data[i];
  
    
   if (row[3].indexOf("SQR_DET") !=-1)            {sheet.getRange(r,10).setValue('Box_DETT');}
    if (row[3].indexOf("SQR_CAT") !=-1)            {sheet.getRange(r,10).setValue('200X200');}
    if (row[3].indexOf("SQR_HP") !=-1)            {sheet.getRange(r,10).setValue('BOX_HP');}
    if (row[3].indexOf("HALF_PAGE") !=-1 || row[3].indexOf("Half_page_") !=-1)           {sheet.getRange(r,10).setValue('HALF_PAGE');}
    if (row[3].indexOf("LEAD_CAT") !=-1)            {sheet.getRange(r,10).setValue('LEAD_CAT');}
    if (row[3].indexOf("LEAD_DET") !=-1)            {sheet.getRange(r,10).setValue('LEAD_DET');}
    if (row[3].indexOf("LEAD_HP") !=-1 &&  row[1].indexOf("970 x 90") !=-1)            {sheet.getRange(r,10).setValue('LEAD_HP');}
    if (row[3].indexOf("LEAD_HP") !=-1 &&  row[1].indexOf("970 x 250") !=-1)            {sheet.getRange(r,10).setValue('MASTHEAD');}
    if (row[3].indexOf("LEAD_GESTIONE") !=-1)            {sheet.getRange(r,10).setValue('LEAD_GESTIONE');}
    if (row[3].indexOf("LEAD_LASTVIEW") !=-1)            {sheet.getRange(r,10).setValue('LEAD_LASTVIEW');}
    if (row[3].indexOf("LEAD_MB") !=-1)            {sheet.getRange(r,10).setValue('LEAD_MB');}
    if (row[3].indexOf("LEAD_PREFERITI") !=-1)            {sheet.getRange(r,10).setValue('LEAD_PREFERITI');}
    if (row[3].indexOf("LEAD_PUB") !=-1)            {sheet.getRange(r,10).setValue('LEAD_PUB');}
    if (row[3].indexOf("LEAD_VETRINA") !=-1)            {sheet.getRange(r,10).setValue('LEAD_VETRINA');}
    
    if (row[3].indexOf("SKIN_CAT") !=-1 || row[3].indexOf("PUMA") !=-1)           {sheet.getRange(r,10).setValue('SKIN_CAT');}
    if (row[3].indexOf("SKIN_HP") !=-1)            {sheet.getRange(r,10).setValue('SKIN_HP');}
    
    if (row[3].indexOf("SKY_CAT") !=-1)            {sheet.getRange(r,10).setValue('SKY_CAT');}
    
    if (row[3].indexOf("SKY_LASTVIEW") !=-1)            {sheet.getRange(r,10).setValue('SKY_LASTVIEW');}
    if (row[3].indexOf("SKY_MB") !=-1)            {sheet.getRange(r,10).setValue('SKY_MIABAKECA');}
    if (row[3].indexOf("SKY_PREFERITI") !=-1)            {sheet.getRange(r,10).setValue('SKY_PREFERITI');}
    if (row[3].indexOf("SKY_VETRINA") !=-1)            {sheet.getRange(r,10).setValue('SKY_VETRINA');}
    if (row[3].indexOf("SUPERLEAD_CAT") !=-1)            {sheet.getRange(r,10).setValue('SUPERLEAD_CAT');}
    if (row[3].indexOf("SUPERLEAD_HP") !=-1)            {sheet.getRange(r,10).setValue('SUPERLEAD_HP');}
    if (row[3].indexOf("WBOX_DET") !=-1)            {sheet.getRange(r,10).setValue('WBOX_DET');}
    
    
    if (row[3].indexOf("TXTLINK_HP") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK_HP');}
    if (row[3].indexOf("ASP1") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK');}
    if (row[3].indexOf("ASP2") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK');}
     if (row[3].indexOf("ASP3") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK');}
    
    if (row[3].indexOf("CONSIGLIA") !=-1)            {sheet.getRange(r,10).setValue('CONSIGLIA');}
    if (row[3].indexOf("LOCANDINA") !=-1)            {sheet.getRange(r,10).setValue('LOCANDINA');}
    
    if (row[3].indexOf("INPAGE") !=-1)            {sheet.getRange(r,10).setValue('INPAGE');}
    if (row[3].indexOf("ca-pub") !=-1)            {sheet.getRange(r,10).setValue('ca-pub');}
    
     if (row[3].indexOf("DCX1_") !=-1 &&  row[1].indexOf("300 x 200") !=-1)            {sheet.getRange(r,10).setValue('DCX1_CAT');}
    if (row[3].indexOf("ADEXCHANGE") !=-1 )            {sheet.getRange(r,10).setValue('ADEXCHANGE');}
    
    var x= row[3].substr(0,2);
Logger.log(x);  
      if (x =="R_")            {sheet.getRange(r,10).setValue('RESPONSIVE');}  // RESPONSIVE
	
    if (row[3].indexOf("ADEXCHANGE_leaderboard") !=-1)            {sheet.getRange(r,10).setValue('ADEXCHANGE_leaderboard');}  
    
    
    
    
        if (row[3].indexOf("ADV_MOB_CAT_LEADTOP") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_CAT_LEADTOP');}
        if (row[3].indexOf("ADV_MOB_CAT_LEADBOTTOM") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_CAT_LEADBOTTOM');}
        if (row[3].indexOf("ADV_MOB_DET_LEADTOP") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_DET_LEADTOP');}
        if (row[3].indexOf("ADV_MOB_DET_LEADBOTTOM") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_DET_LEADBOTTOM');}
        if (row[3].indexOf("ADV_MOB_HP_LEADBOTTOM") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_HP_LEADBOTTOM');}
        if (row[3].indexOf("DCX1_") !=-1 &&  row[1].indexOf("320 x 50") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_CAT_LEADTOP');}
  
    r=r+1;
  }
}

////////////////////////////////////////////////INEVASO/////////////////////
function productName_label_inevaso()
{
  
 var ss = SpreadsheetApp.getActiveSpreadsheet();  
 
  var sheet = ss.getSheetByName("inevaso2017");
   var data = sheet.getDataRange().getValues();
  var i=0;
   var r=1  ;
  for(i in data) 
  { 
    
    var row = data[i];
  
    
   if (row[0].indexOf("SQR_DET") !=-1)            {sheet.getRange(r,10).setValue('Box_DETT');}
    if (row[0].indexOf("SQR_CAT") !=-1)            {sheet.getRange(r,10).setValue('200X200');}
    if (row[0].indexOf("SQR_HP") !=-1)            {sheet.getRange(r,10).setValue('BOX_HP');}
    if (row[0].indexOf("HALF_PAGE") !=-1 || row[0].indexOf("Half_page_") !=-1)             {sheet.getRange(r,10).setValue('HALF_PAGE');}
    if (row[0].indexOf("LEAD_CAT") !=-1)            {sheet.getRange(r,10).setValue('LEAD_CAT');}
    if (row[0].indexOf("LEAD_DET") !=-1)            {sheet.getRange(r,10).setValue('LEAD_DET');}
    if (row[0].indexOf("LEAD_HP") !=-1 )            {sheet.getRange(r,10).setValue('LEAD_HP');}
    
    if (row[0].indexOf("LEAD_GESTIONE") !=-1)            {sheet.getRange(r,10).setValue('LEAD_GESTIONE');}
    if (row[0].indexOf("LEAD_LASTVIEW") !=-1)            {sheet.getRange(r,10).setValue('LEAD_LASTVIEW');}
    if (row[0].indexOf("LEAD_MB") !=-1)            {sheet.getRange(r,10).setValue('LEAD_MB');}
    if (row[0].indexOf("LEAD_PREFERITI") !=-1)            {sheet.getRange(r,10).setValue('LEAD_PREFERITI');}
    if (row[0].indexOf("LEAD_PUB") !=-1)            {sheet.getRange(r,10).setValue('LEAD_PUB');}
    if (row[0].indexOf("LEAD_VETRINA") !=-1)            {sheet.getRange(r,10).setValue('LEAD_VETRINA');}
    
    if (row[0].indexOf("SKIN_CAT") !=-1 || row[0].indexOf("PUMA") !=-1 )            {sheet.getRange(r,10).setValue('SKIN_CAT');}
    if (row[0].indexOf("SKIN_HP") !=-1)            {sheet.getRange(r,10).setValue('SKIN_HP');}
    
    if (row[0].indexOf("SKY_CAT") !=-1)            {sheet.getRange(r,10).setValue('SKY_CAT');}
    
    if (row[0].indexOf("SKY_LASTVIEW") !=-1)            {sheet.getRange(r,10).setValue('SKY_LASTVIEW');}
    if (row[0].indexOf("SKY_MB") !=-1)            {sheet.getRange(r,10).setValue('SKY_MIABAKECA');}
    if (row[0].indexOf("SKY_PREFERITI") !=-1)            {sheet.getRange(r,10).setValue('SKY_PREFERITI');}
    if (row[0].indexOf("SKY_VETRINA") !=-1)            {sheet.getRange(r,10).setValue('SKY_VETRINA');}
    if (row[0].indexOf("SUPERLEAD_CAT") !=-1)            {sheet.getRange(r,10).setValue('SUPERLEAD_CAT');}
    if (row[0].indexOf("SUPERLEAD_HP") !=-1)            {sheet.getRange(r,10).setValue('SUPERLEAD_HP');}
    if (row[0].indexOf("WBOX_DET") !=-1)            {sheet.getRange(r,10).setValue('WBOX_DET');}
    
    
    if (row[0].indexOf("TXTLINK_HP") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK_HP');}
    if (row[0].indexOf("ASP1") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK');}
    if (row[0].indexOf("ASP2") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK');}
     if (row[0].indexOf("ASP3") !=-1)            {sheet.getRange(r,10).setValue('TXTLINK');}
    
    if (row[0].indexOf("CONSIGLIA") !=-1)            {sheet.getRange(r,10).setValue('CONSIGLIA');}
    if (row[0].indexOf("LOCANDINA") !=-1)            {sheet.getRange(r,10).setValue('LOCANDINA');}
    
    if (row[0].indexOf("INPAGE") !=-1)            {sheet.getRange(r,10).setValue('INPAGE');}
    if (row[0].indexOf("ca-pub") !=-1)            {sheet.getRange(r,10).setValue('ca-pub');}
    var x= row[0].substr(0,2);
Logger.log(x);  
      if (x =="R_")            {sheet.getRange(r,10).setValue('RESPONSIVE');}  // RESPONSIVE
	
    if (row[0].indexOf("ADEXCHANGE_leaderboard") !=-1)            {sheet.getRange(r,10).setValue('ADEXCHANGE_leaderboard');}  
    
    
    
    
        if (row[0].indexOf("ADV_MOB_CAT_LEADTOP") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_CAT_LEADTOP');}
        if (row[0].indexOf("ADV_MOB_CAT_LEADBOTTOM") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_CAT_LEADBOTTOM');}
        if (row[0].indexOf("ADV_MOB_DET_LEADTOP") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_DET_LEADTOP');}
        if (row[0].indexOf("ADV_MOB_DET_LEADBOTTOM") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_DET_LEADBOTTOM');}
        if (row[0].indexOf("ADV_MOB_HP_LEADBOTTOM") !=-1)            {sheet.getRange(r,10).setValue('ADV_MOB_HP_LEADBOTTOM');}
    
  
    r=r+1;
  }
}





function CriteoGoogle()
{
  
 var ss = SpreadsheetApp.getActiveSpreadsheet();  
 
  var sheet = ss.getSheetByName("impressions2017");
   var data = sheet.getDataRange().getValues();
  var i=0;
   var r=1  ;
  for(i in data) 
  { 
    
    var row = data[i];
  
    
    //elenco
     if (row[0].indexOf("Criteo") !=-1)            {sheet.getRange(r,12).setValue('Criteo-or-google');}
    if (row[0].indexOf("GOOGLE ADEXCHANGE") !=-1)            {sheet.getRange(r,12).setValue('Criteo-or-google');}
   

    





	
   
    


    r=r+1;
  }
}
