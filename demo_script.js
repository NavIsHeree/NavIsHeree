$(document).ready(function () {
  $('#demo_setAlarmBtn').click(function () {
    const alarmTime = $('#demo_alarmTime').val();

    // TODO: Send alarmTime to server to store in the database
    // You need to implement the server-side logic to handle this data

    alert(`Alarm set for ${alarmTime}`);
  });

  $('#demo_snoozeBtn').click(function () {
    // TODO: Send snooze action to the server to update the snooze data
    // You need to implement the server-side logic to handle this action

    alert('Snooze button clicked');
  });

  $('#demo_fetchDataBtn').click(function () {
    window.location.href = 'fetch-data.html'; // Redirect to the Fetch Data page
  });

  function displayData(data) {
    const alarmDataDiv = $('#demo_alarmData');
    alarmDataDiv.empty();

    if (data.length === 0) {
      alarmDataDiv.append('<p>No data available.</p>');
    } else {
      data.forEach(entry => {
        const entryHtml = `<p>Time Slept: ${entry.sleepTime} minutes, Distance Covered: ${entry.distanceCovered} meters, Ringing Time: ${entry.ringingTime} seconds</p>`;
        alarmDataDiv.append(entryHtml);
      });
    }
  }
});
