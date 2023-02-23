import { Key, useEffect, useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import { IconButton } from "@pankod/refine-mui";
import { useList, HttpError } from "@pankod/refine-core";
import PeopleIcon from "@mui/icons-material/People";
import CustomCard from "../CustomCard/CustomCard";
import CustomCardHeader from "../CustomCard/CustomCardHeader";
import CustomCardContent from "../CustomCard/CustomCardContent";
import CustomList from "../CustomList";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import DateHelper from "./RequestItem/DateHelper";
import RequestItem from "./RequestItem";
import ActionSnackBar from "./ActionSnackBar";
import ContentLoader from "../ContentLoader";

const NewConnectionsRequestsWidget = () => {
  let connectionData: any[] = [];
  const { data, isLoading, isError } = useList<any, HttpError>({
    resource: "users",
    config: {
      pagination: {
        current: 2,
        pageSize: 21,
      },
    },
    queryOptions: {
      retry: 3,
    },
  });
  const [requests, setRequests] = useState([] as any);
  const [removedRequests, setRemovedRequests] = useState([]);
  const [currentRequest, setCurrentRequest] = useState(null as any);
  const [currentRequestIndex, setCurrentRequestIndex] = useState(-1);
  const [openSnackBar, setSnackBarStatus] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  useEffect(() => {
    if ((data?.total as number) > 0) {
      const usersData = data?.data as any;
      for (let i = 1; i < 10; i++) {
        connectionData.push({
          id: usersData[i]["id"],
          user: {
            id: usersData[i]["id"],
            name: `${usersData[i]["firstName"]} ${usersData[i]["lastName"]}`,
            username: usersData[i]["email"].split("@")[0],
            profile_pic: usersData[i]["avatar"][0]["url"],
          },
          created_at: DateHelper.getCustomDateTime(
            -i * 2,
            "days",
            "YYYY-MM-DD"
          ),
        });
      }
    }
    setRequests(connectionData);
    if (currentRequest) {
      const data = [...removedRequests] as any;
      data.push(currentRequest);
      setRemovedRequests(data);
      setRequests(
        requests.filter((user: { id: number }) => user.id !== currentRequest.id)
      );
      setSnackBarStatus(true);
    } else {
      setCurrentRequestIndex(-1);
      setSnackBarStatus(false);
      setSnackBarMessage("");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requests, data]);

  const reloadRequests = () => {
    setRequests(connectionData);
  };

  const acceptRequest = (request: any, index: number) => {
    setCurrentRequest(request);
    setCurrentRequestIndex(index);
    setSnackBarMessage("");
    setSnackBarMessage("A connection request has been accepted!");
  };

  const rejectRequest = (request: any, index: number) => {
    setCurrentRequest(request);
    setCurrentRequestIndex(index);
    setSnackBarMessage("A connection request has been rejected!");
  };

  const onRemovedRequestsUndo = () => {
    const data = [...requests];
    data.splice(currentRequestIndex, 0, currentRequest);
    setRequests(data);
    if (currentRequest === null) {
      return;
    }
    setRemovedRequests(
      removedRequests.filter(
        (item: { id: number }) => item.id !== currentRequest.id
      )
    );
    handleCloseSnackBar();
  };

  const handleCloseSnackBar = () => {
    setCurrentRequest(null);
  };
  if (isLoading) {
    return <ContentLoader />;
  } else if (isError) {
    return (
      <div>
        <p>"Something went wrong!"</p>
      </div>
    );
  }
  return (
    <CustomCard
      backgroundColor={""}
      backgroundImage={""}
      gradientDirection={""}
      colors={""}
      direction={""}
      className={""}
    >
      <CustomCardHeader
        title="Connections"
        subTitle="5 This week"
        icon={{}}
        avatar={
          <IconButton sx={{ mb: 6, ml: 1, mr: 2 }} disabled>
            <PeopleIcon />
          </IconButton>
        }
        titleProps={{}}
        subTitleProps={{}}
        actions={{}}
        actionMenuClassName={{}}
        actionHandleIcon={""}
        actionHandler={{}}
        actionsPos={""}
        actionsShowOnHover={{}}
        backgroundColor={""}
        gradientDirection={""}
        color={"red"}
        borderWidth={0}
        borderStyle={""}
        alignCenter={""}
      >
        <IconButton sx={{ mb: 6, ml: 2 }} onClick={reloadRequests}>
          <ReplayIcon />
        </IconButton>
      </CustomCardHeader>
      <CustomCardContent liked={0} shared={0} commented={0}>
        <PerfectScrollbar>
          <CustomList
            data={requests}
            renderRow={(item: any, index: Key) => {
              return (
                <RequestItem
                  key={index}
                  item={item}
                  onAccept={acceptRequest}
                  onReject={rejectRequest}
                  itemIndex={index}
                />
              );
            }}
            onEndReached={() => {}}
            footerProps={{
              loading: false,
              footerText: "asd",
            }}
          />
        </PerfectScrollbar>
      </CustomCardContent>

      <ActionSnackBar
        message={snackBarMessage}
        open={openSnackBar}
        onClose={handleCloseSnackBar}
        onUndoAction={onRemovedRequestsUndo}
      />
    </CustomCard>
  );
};

export default NewConnectionsRequestsWidget;
