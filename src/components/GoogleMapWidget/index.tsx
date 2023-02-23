import {
  Card,
  CardContent,
  ListItem,
  ListItemText,
  Avatar,
  Paper,
  Box,
} from "@pankod/refine-mui";
import { Fragment, FC, Key } from "react";
import LocationOn from "@mui/icons-material/LocationOn";
import {
  GoogleMap,
  MarkerClustererF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import ContentLoader from "../ContentLoader";

const placesData = [
  {
    id: 1,
    name: "Pigeon Rocks",
    title: "Pigeon Rocks",
    lat: 33.880099,
    lng: 35.597189,
  },
  {
    id: 2,
    name: "City Mall",
    title: "City Mall",
    lat: 33.880099,
    lng: 35.597189,
  },
  {
    name: "National Museum of Beirut",
    title: "National Museum of Beirut",
    lat: 33.8743825,
    lng: 35.5392875,
    id: 3,
  },
];

const containerStyle = {
  width: "100%",
  height: "600px",
};
interface IMapWithAMarkerProps {
  places: any;
  [x: string]: any;
}

const MapWithAMarker: FC<IMapWithAMarkerProps> = ({ places, ...rest }) => {
  const center = {
    lat: 33.890515,
    lng: 35.516033,
  };
  return (
    <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle}>
      {places?.length > 0 && (
        <MarkerClustererF>
          {(clusterer) => {
            return (
              <Fragment>
                {places.map((place: { id: Key; lat: number; lng: number }) => {
                  return (
                    <MarkerF
                      key={place.id}
                      position={{ lat: place.lat, lng: place.lng }}
                      clusterer={clusterer}
                    />
                  );
                })}
              </Fragment>
            );
          }}
        </MarkerClustererF>
      )}
    </GoogleMap>
  );
};

const GoogleMapWidget = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: (process.env.REACT_APP_GOOGLE_KEY as string) ?? "",
    // ...otherOptions
  });
  return (
    <Paper>
      {isLoaded ? (
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "100%",
            "& > Box": {
              height: "100%",
            },
          }}
        >
          <MapWithAMarker
            places={placesData}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "700px" }} />}
          />
        </Box>
      ) : (
        <ContentLoader />
      )}
      <Box
        sx={{
          display: "block",
        }}
      >
        <Card sx={{}}>
          <CardContent>
            <ListItem>
              <Avatar
                sx={{
                  marginRight: 1,
                  "& svg": {
                    fontSize: 24,
                  },
                  "&$sm": {
                    width: 30,
                    height: 30,
                  },
                  "&$mc": {
                    width: 24,
                    height: 24,
                    top: 0,
                    left: 8,
                    marginRight: 0,
                  },
                }}
              >
                <LocationOn />
              </Avatar>
              <ListItemText
                primary="Current Location"
                secondary="National Museum of Beirut."
              />
            </ListItem>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
};
export default GoogleMapWidget;
