function doPost(e) {
  // Get the spreadsheet and sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("sheet1"); // Change "Sheet1" to your sheet name

  // Parse the incoming data
  const data = JSON.parse(e.postData.contents);

  // Create a new row with the data
  const newRow = [];

  // Add data in the desired order
  const headers = [
    'Timestamp', 'Operator Name', 'Company Name', 'Signature',
    'chassis_ok', 'chassis_not_ok', 'chassis_remarks',
    'boom_ok', 'boom_not_ok', 'boom_remarks',
    'axle_ok', 'axle_not_ok', 'axle_remarks',
    'turntable_ok', 'turntable_not_ok', 'turntable_remarks',
    'platform_ok', 'platform_not_ok', 'platform_remarks',
    'startstop_ok', 'startstop_not_ok', 'startstop_remarks',
    'engineoil_ok', 'engineoil_not_ok', 'engineoil_remarks',
    'fanbelt_ok', 'fanbelt_not_ok', 'fanbelt_remarks',
    'radiatorwater_ok', 'radiatorwater_not_ok', 'radiatorwater_remarks',
    'engineoilleak_ok', 'engineoilleak_not_ok', 'engineoilleak_remarks',
    'exhaust_ok', 'exhaust_not_ok', 'exhaust_remarks',
    'hydoil_ok', 'hydoil_not_ok', 'hydoil_remarks',
    'hydoilleak_ok', 'hydoilleak_not_ok', 'hydoilleak_remarks',
    'hose_ok', 'hose_not_ok', 'hose_remarks',
    'groundplatform_ok', 'groundplatform_not_ok', 'groundplatform_remarks',
    'emergencystop_ok', 'emergencystop_not_ok', 'emergencystop_remarks',
    'footswitch_ok', 'footswitch_not_ok', 'footswitch_remarks',
    'wiring_ok', 'wiring_not_ok', 'wiring_remarks',
    'battery_ok', 'battery_not_ok', 'battery_remarks',
    'travelling_ok', 'travelling_not_ok', 'travelling_remarks',
    'swing_ok', 'swing_not_ok', 'swing_remarks',
    'boomupdown_ok', 'boomupdown_not_ok', 'boomupdown_remarks',
    'tele_ok', 'tele_not_ok', 'tele_remarks',
    'body_ok', 'body_not_ok', 'body_remarks',
    'radiator_ok', 'radiator_not_ok', 'radiator_remarks',
    'overheadguard_ok', 'overheadguard_not_ok', 'overheadguard_remarks',
    'overheadclamp_ok', 'overheadclamp_not_ok', 'overheadclamp_remarks',
    'hydtank_ok', 'hydtank_not_ok', 'hydtank_remarks',
    'platformhandguard_ok', 'platformhandguard_not_ok', 'platformhandguard_remarks'
  ];
  
  // Add timestamp as the first element
  newRow.push(new Date());

  // Add operator name, company name, and signature
  newRow.push(data['operatorName'] || '');
  newRow.push(data['companyName'] || '');
  newRow.push(data['signatureData'] || '');

  // Loop through the headers and add data to the new row
  for (let i = 4; i < headers.length; i++) {
      const header = headers[i];
      newRow.push(data[header] || '');
  }
  // Append the new row to the sheet
  sheet.appendRow(newRow);

  return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
    