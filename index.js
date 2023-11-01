const getDetails = async () => {
  const getResponse = await fetch(
    "https://api.coronavirus.data.gov.uk/v1/data"
  );
  const getData = await getResponse.json(getResponse);
  const latestData = getData.data[0];
  document.getElementById("date").innerHTML = latestData.date;
  document.getElementById("area").innerHTML = latestData.areaName;
  document.getElementById("deathRate").innerHTML = latestData.deathRate;
  document.getElementById("latest").innerHTML = latestData.latestBy;
  console.log(getData.data);
};
getDetails();
