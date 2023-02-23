import { FC, ReactNode } from "react";
import { alpha, Box, Button, CircularProgress } from "@pankod/refine-mui";

interface IListEmptyResult {
  loader: any;
  placeholder: string;
  loading: boolean;
  title: string;
  actionTitle: string;
  content: string;
  onClick: () => {};
  children: ReactNode;
}

const ListEmptyResult: FC<IListEmptyResult> = ({
  loader,
  placeholder,
  loading,
  title,
  actionTitle,
  content,
  onClick,
  children,
}): JSX.Element => {
  if (loading || loader) {
    return (
      <>
        {placeholder ? (
          placeholder
        ) : (
          <Box
            sx={{
              flexDirection: "row",
            }}
          >
            <CircularProgress size={16} />
            <span className="ml-2">Loading...</span>
          </Box>
        )}
      </>
    );
  } else {
    return (
      <Box
        sx={{
          flexDirection: "column",
          minHeight: 250,
          height: "100%",
          display: "flex",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          border: `1px solid ${alpha("#000", 0.12)}`,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        {children ? (
          children
        ) : (
          <>
            {title && (
              <Box component="h4" fontSize={28} color="primary.main" mb={3}>
                {title}
              </Box>
            )}
            <Box fontSize={18} component="p" color="secondary.main">
              {content}
            </Box>

            {actionTitle && (
              <Button
                color="primary"
                variant="contained"
                style={{ marginTop: 30, height: 45, minWidth: 150 }}
                onClick={onClick}
              >
                {actionTitle}
              </Button>
            )}
          </>
        )}
      </Box>
    );
  }
};

export default ListEmptyResult;
