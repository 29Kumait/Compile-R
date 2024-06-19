import { useContent } from "./ContentContext.jsx";
import stylex from "@stylexjs/stylex";

const stylesContentList = stylex.create({
  ContentList: {
    fontSize: "1rem",
    margin: "29px",
    color: "rgb(245, 245, 247)",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    height: "auto",
    justifyContent: "center",
    marginEnd: "auto",
    marginStart: "auto",
    paddingEnd: 8,
    paddingStart: 8,
    maxWidth: "calc(80% - 30px)",
    backgroundColor: "rbg(106,115,123)",
    paddingTop: 49,
    paddingBottom: 29,
    textAlign: "center",
  },
});

const ContentList = () => {
  const { contents, loading, error } = useContent();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul data-loaded={contents.length > 0}>
      {contents.map((content) => (
        <li {...stylex.props(stylesContentList.ContentList)} key={content._id}>
          {content.description}
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
