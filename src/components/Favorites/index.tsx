import { Grid, Divider } from "@pankod/refine-mui";
import CustomCard from "../CustomCard";
import PostCard from "../PostCard";
import Quote from "../Quote";
import { useSelector } from "react-redux";

const Favorites = () => {
  let postsData = useSelector((state: any) => state.posts.postsList) ?? [];
  return (
    <Grid container justifyContent="center" direction="row" spacing={3}>
      <Grid item md={6}>
        {postsData.map((data: any, index: number) => (
          <PostCard
            liked={index * 2}
            shared={index * 5}
            commented={index * 3}
            date={data["date"]}
            content={data["content"]}
            image={data["image"]}
            avatar={data["avatar"]}
            name={data["name"]}
          />
        ))}
      </Grid>
      <Grid item md={6}>
        {postsData.slice(2, 7).map((data: any, index: number) => (
          <PostCard
            liked={index * 2}
            shared={index * 5}
            commented={index * 3}
            date={data["date"]}
            content={data["content"]}
            image={data["image"]}
            avatar={data["avatar"]}
            name={data["name"]}
          />
        ))}
        <Divider sx={{ marginTop: "12px", background: "none" }} />
        <CustomCard liked={1} shared={20} commented={15}>
          <Quote
            align="left"
            content="The more you know, the more you know you don't know."
            footnote="Aristotle"
          />
        </CustomCard>
      </Grid>
    </Grid>
  );
};

export default Favorites;
