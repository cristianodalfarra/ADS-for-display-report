//https://console.cloud.google.com/apis/api/adsense.googleapis.com/overview?project=project-id-0746273705847916871&duration=PT1H


function getLastNdays(nDaysAgo) {
  var today = new Date();
  var before = new Date();
  before.setDate(today.getDate() - nDaysAgo);
  return Utilities.formatDate(before, 'GMT', 'yyyy-MM-dd');
}

function adClients() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('AdClients');
  var clients = AdSense.Adclients.list().getItems();
  for (var i=0; i<clients.length; i++) {
    sheet.getRange('A' + String(i+2)).setValue(clients[i].getId());
    sheet.getRange('B' + String(i+2)).setValue(clients[i].getProductCode());
  }
}

function listAdClients() {
  // Retrieve ad client list in pages and log data as we receive it.
  var pageToken, adClients;
  do {
    adClients = AdSense.Adclients.list({
      maxResults: 50,
      pageToken: pageToken
    });
    if (adClients.items) {
      for (var i = 0; i < adClients.items.length; i++) {
        var adClient = adClients.items[i];
        Logger.log('Ad client for product "%s" with ID "%s" was found.',
            adClient.productCode, adClient.id);
        Logger.log('Supports reporting: %s',
            adClient.supportsReporting ? 'Yes' : 'No');
      }
    } else {
      Logger.log('No ad clients found.');
    }
    pageToken = adClients.nextPageToken;
  } while (pageToken);
}

///////////////////////////////////////////////////////////////////////////////

function generateReport() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Reports');
  var startDate = getLastNdays(1)
  var endDate = startDate
  var adClientId = "pub-4470673017051636"
  
  var startDate_1 = getLastNdays(8)
  var endDate_1 = startDate_1

  
  var args = {
    //'filter': ['AD_CLIENT_ID==' + adClientId],
    'metric': ['PAGE_VIEWS', 'AD_REQUESTS', 'EARNINGS'],
    'dimension': ['DAY']};
  var report = AdSense.Reports.generate(startDate, endDate, args).getRows();
  sheet.getRange('A2:c2').setValues(report);
    
  
  
  var report = AdSense.Reports.generate(startDate_1, endDate_1, args).getRows();
   sheet.getRange('A3:c3').setValues(report); 
}


//////////////////////////////////////////////////////////////////////// 2 weeeks

function generateReport_2weeks() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Reports_2weeks');
  var startDate = getLastNdays(1)
  var endDate = startDate
  var adClientId = "pub-4470673017051636"
  
  var startDate_1 = getLastNdays(8)
  var endDate_1 = startDate_1

  
  var args = {
    //'filter': ['AD_CLIENT_ID==' + adClientId],
    'metric': ['PAGE_VIEWS', 'AD_REQUESTS', 'EARNINGS'],
    'dimension': ['DAY']};
  var report = AdSense.Reports.generate(startDate, endDate, args).getRows();
  sheet.getRange('A2:c2').setValues(report);
    
  
  
  var report = AdSense.Reports.generate(startDate_1, endDate_1, args).getRows();
   sheet.getRange('A3:c3').setValues(report); 

}


//////////////////////////////// last week

  function compareReport() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('CompareReport');
  
  sheet.getRange(2,1,10000, 4).clear({contentsOnly: true});  //row,col,nrow,ncols
  sheet.getRange(2,9,10000, 4).clear({contentsOnly: true});   
  
    var startDate = getLastNdays(1)
  var endDate = startDate
  var adClientId = "pub-4470673017051636"
  
  var startDate_1 = getLastNdays(8)
  var endDate_1 = startDate_1

  
  //var startDate = Browser.inputBox("Enter a start date (format: 'yyyy-mm-dd')");
  
  //var endDate = Browser.inputBox("Enter an end date (format: 'yyyy-mm-dd')");
  // var adClientId = Browser.inputBox("Enter an ad client id");
  var args = {
    //'filter': ['AD_CLIENT_ID==' + adClientId],
    'metric': ['PAGE_VIEWS', 'AD_REQUESTS', 'EARNINGS'],
    'dimension': ['CUSTOM_CHANNEL_NAME']};
  var report = AdSense.Reports.generate(startDate, endDate, args).getRows();
  a= report.length+1
  sheet.getRange('A2:d'+ a).setValues(report);
    
  
  var report = AdSense.Reports.generate(startDate_1, endDate_1, args).getRows();
   sheet.getRange('i2:l'+a).setValues(report); 
    
//  for (var i=0; i<report.length; i++) {
//    var row = report[i];
//    sheet.getRange('A' + String(i+2)).setValue(row[0]);
//    sheet.getRange('B' + String(i+2)).setValue(row[1]);
//    sheet.getRange('C' + String(i+2)).setValue(row[2]);
//    sheet.getRange('D' + String(i+2)).setValue(row[3]);
//    //sheet.getRange('D' + String(i+2)).setValue(row[3]);
//    //sheet.getRange('E' + String(i+2)).setValue(row[4]);
//  }
//  
//  var report = AdSense.Reports.generate(startDate_1, endDate_1, args).getRows();
//  for (var i=0; i<report.length; i++) {
//    var row = report[i];
//    sheet.getRange('I' + String(i+2)).setValue(row[0]);
//    sheet.getRange('J' + String(i+2)).setValue(row[1]);
//    sheet.getRange('K' + String(i+2)).setValue(row[2]);
//    sheet.getRange('L' + String(i+2)).setValue(row[3]);
//    //sheet.getRange('E' + String(i+2)).setValue(row[4]);
//  }
  }


///////////////////////////////////////////////////////////////////////////////////////////////////////////
function compareReport_2weeks() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('CompareReport_2weeks');
  
  sheet.getRange(2,1,10000, 4).clear({contentsOnly: true});  //row,col,nrow,ncols
  sheet.getRange(2,9,10000, 4).clear({contentsOnly: true});   
  
  var startDate = getLastNdays(1)
  var endDate = startDate
  var adClientId = "pub-4470673017051636"
  
  var startDate_1 = getLastNdays(15)
  var endDate_1 = startDate_1

  
  //var startDate = Browser.inputBox("Enter a start date (format: 'yyyy-mm-dd')");
  
  //var endDate = Browser.inputBox("Enter an end date (format: 'yyyy-mm-dd')");
  // var adClientId = Browser.inputBox("Enter an ad client id");
  var args = {
    //'filter': ['AD_CLIENT_ID==' + adClientId],
    'metric': ['PAGE_VIEWS', 'AD_REQUESTS', 'EARNINGS'],
    'dimension': ['CUSTOM_CHANNEL_NAME']};
  var report = AdSense.Reports.generate(startDate, endDate, args).getRows();
  a= report.length+1
  sheet.getRange('A2:d'+ a).setValues(report);
    
  
  var report = AdSense.Reports.generate(startDate_1, endDate_1, args).getRows();
   sheet.getRange('i2:l'+a).setValues(report); 
  
  
  
  }

function compareReport_test() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('CompareReport');
 sheet.getRange(2,9,10000, 4).clear({contentsOnly: true}); 
}


function generateReport_test() {
 

}
