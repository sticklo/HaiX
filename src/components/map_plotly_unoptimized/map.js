import React from "react";
import Plot from "react-plotly.js";
import importedData from "./../../linkedin_data_for test (2).json";


const MappedComponent = () => {
  let twitterData =
    importedData["stats"]["linkedin"]["timelineStats"][
      "organisationFollowersLifetime"
    ][0]["followers_split"]["followerCountsByCountry"];
  
    
  

  let twitterCountries = [];
  let twitterPopulationFollowers = [];
 

  for (let i = 0; i < twitterData.length; i++) {
    twitterCountries.push(twitterData[i]["countryText"]);
    twitterPopulationFollowers.push(
      twitterData[i]["followerCounts"]["organicFollowerCount"]
    );
  }

 
  return (
    <div id="myDiv">
      <Plot
        data={[
          {
            type: "choropleth",
            locationmode: "country names",
            locations: twitterCountries,
            z: twitterPopulationFollowers,
            text: twitterCountries,
            colorscale: "Blues",
          },
        ]}
        layout={{
          width: 900,
          height: 600,
          title: "2022 Follower count by Country",
          geo: {
            scope: "world",
            draggable: false,
            raiseondrag: false,
            countrycolor: "rgb(255, 255, 255)",
            showland: true,
            landcolor: "rgb(217, 217, 217)",
            showlakes: true,
            lakecolor: "rgb(255, 255, 255)",
            subunitcolor: "rgb(255, 255, 255)",
            lonaxis: {},
            lataxis: {},
          },
          margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 2
        }
          
        }}
      />
    </div>
  );
};

export default MappedComponent;
