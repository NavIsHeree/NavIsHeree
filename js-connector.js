const mysql = require('mysql2/promise'); // Using mysql2 for promises support
const { DateTime, Duration } = require('luxon'); // Using Luxon for date and time handling

// Replace these values with your actual database credentials
const dbConfig = {
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'testdb',
};

// Function to insert data into the MySQL database
async function insertAlarmData(sleepTime, distanceCovered, ringingTime) {
  try {
    const connection = await mysql.createConnection(dbConfig);

    // Assuming your table has columns: sleepTime, distanceCovered, ringingTime
    const query = "INSERT INTO testdb (sleepTime, distanceCovered, ringingTime) VALUES (?, ?, ?)";
    const data = [sleepTime, distanceCovered, ringingTime];

    await connection.execute(query, data);

    console.log("Data inserted successfully!");
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

// Function to set up the alarm
async function setUpAlarm() {
  // Replace with your logic to set up the alarm time
  const alarmTime = DateTime.now().plus(Duration.fromObject({ minutes: 30 }));

  // Replace with your logic to obtain distance covered and ringing time
  const sleepTime = 480;
  const distanceCovered = 20;
  const ringingTime = 30;

  // Insert data into the database
  await insertAlarmData(sleepTime, distanceCovered, ringingTime);

  // Replace with your logic to set up the alarm using alarmTime
  console.log(`Alarm set for: ${alarmTime.toISO()}`);
}

// Call the function to set up the alarm
setUpAlarm();
