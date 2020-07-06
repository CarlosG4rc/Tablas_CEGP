function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}

function getelemento(){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1-S-e9_uWrQlgPUdZ8BT6KBlsO78HXgh9EJNwPfLeKRE/edit#gid=0');
    var sheet = ss.getSheetByName('BDRep');
    var elemento = sheet.getRange('A2').getValue();
    return elemento;
    
}
