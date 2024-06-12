import main from "../assets/main.svg";
import ContentForm from "../Components/Content/ContentForm.jsx";
import ContentListWrapper from "../Components/Content/ContentListWrapper.jsx";

const PageLoginAgain = () => {
  return (
    <>
      <ContentForm />
      <ContentListWrapper />
      <img src={main} alt="main" />
    </>
  );
};

export default PageLoginAgain;
