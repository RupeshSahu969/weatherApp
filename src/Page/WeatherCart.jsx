import React from "react";
import styled from "styled-components";

const WeatherCart = ({ data }) => {
  const sunrise = data?.sys?.sunrise;
  const sunset = data?.sys?.sunset;
  const timezone = data.timezone;
  // sunrise
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour24: false,
  })

  //sunset
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour24: false,
  });

  //timezone
  const zoneTime = new Date(timezone).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour24: false,
  });



  return (
    <>
      <ContainerWraper>
        <TempWrraper>
          <div>
            <span>
              {data.name}, {data?.sys?.country}. Weather
            </span>
          </div>
          <ZoneTime>
          As of {zoneTime}
          </ZoneTime>
         
        </TempWrraper>
        <div>
        <TimeWrapper>
          <h1>{data?.main?.temp.toFixed()}°</h1>
          </TimeWrapper>
        </div>
       
      </ContainerWraper>

      <WindWrapper>
        <Div>
          <div>
            <strong>Higt/Low</strong>
          </div>
          <div>
            <span>
              {data?.main?.temp_max.toFixed()}/{data?.main?.temp_min.toFixed()}
            </span>{" "}
          </div>{" "}
        </Div>
        <Div1>
          <div>
            <strong>Wind</strong>
          </div>
          <div>
            <span>{data?.wind?.speed.toFixed()}km/hr</span>{" "}
          </div>{" "}
        </Div1>{" "}
      </WindWrapper>
      <PressureWrapper>
        <Pressure>
          <div>
            <strong>Humidity</strong>
          </div>
          <div>
            <span>{data?.main?.humidity} %</span>{" "}
          </div>{" "}
        </Pressure>
        <Pressure1>
          <div>
            <strong>Wind Direction</strong>
          </div>
          <div>
            <span>{data?.wind?.deg}° deg </span>{" "}
          </div>{" "}
        </Pressure1>{" "}
      </PressureWrapper>

      <SunriseWrapper>
        <Sunrise>
          <div>
            <strong>Pressure </strong>
          </div>
          <div>
            <span>{data?.main?.pressure} hPa</span>{" "}
          </div>{" "}
        </Sunrise>
        <Sunrise1>
          <div>
            <strong>Sunrise </strong>
          </div>
          <div>
            <span>{sunriseTime}</span>{" "}
          </div>{" "}
        </Sunrise1>{" "}
      </SunriseWrapper>

      <VisibilityWrapper>
        <Visibilit>
          <div>
            <strong>Visibility </strong>
          </div>
          <div>
            <span>{data?.visibility / 1000} km</span>{" "}
          </div>{" "}
        </Visibilit>
        <Visibilit1>
          <div>
            <strong>Sunset </strong>
          </div>
          <div>
            <span>{sunsetTime}</span>{" "}
          </div>
        </Visibilit1>{" "}
      </VisibilityWrapper>
    </>
  );
};

export default WeatherCart;

const ContainerWraper = styled.div`
  border: 1px solid black;
  height: 250px;
  width: 65%;
  margin: auto;
  border-radius: 20px;
  padding-left: 15px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 30px;
  background-color: lightgrey;

`;

const ZoneTime=styled.div`
color:grey;
font-weight: 600;
`
const TempWrraper = styled.div`
  text-align: start;
  font-size: 20px;
  width: 100%;
`;

const TimeWrapper=styled.div`{
  margin-bottom: 25px;
  font-size: 30px;
}`

const WindWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  margin-bottom:10px;
`;
const PressureWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
  margin-bottom:10px;
`;
const SunriseWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
  margin-bottom:10px;
`;

const VisibilityWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
  margin-bottom:10px;
`;
const Div = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  margin-left: 100px;
  margin: auto;
  border-bottom: dotted;
  font-size: 20px;
  margin-bottom:10px;
`;
const Div1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin-right: 150px;
  font-size: 20px;
  margin-left: 10px;
  border-bottom: dotted;
  margin-bottom:10px;
`;
const Pressure = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  margin-left: 100px;
  margin: auto;
  border-bottom: dotted;
  font-size: 20px;
  margin-bottom:10px;
`;
const Pressure1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin-right: 150px;
  font-size: 20px;
  margin-left: 10px;
  border-bottom: dotted;
  margin-bottom:10px;
`;
const Sunrise = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  margin-left: 100px;
  margin: auto;
  border-bottom: dotted;
  font-size: 20px;
  margin-bottom:10px;
`;
const Sunrise1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin-right: 150px;
  font-size: 20px;
  margin-left: 10px;
  border-bottom: dotted;
  margin-bottom:10px;
`;
const Visibilit = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  margin-left: 100px;
  margin: auto;
  border-bottom: dotted;
  font-size: 20px;
  margin-bottom:10px;
`;
const Visibilit1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin-right: 150px;
  font-size: 20px;
  margin-left: 10px;
  border-bottom: dotted;
  margin-bottom:10px;
`;
