import { useState, useContext } from "react";
import "./Links.css";
import { SocialMediaLinks } from "../../socialsLinks";
import { LinkContext } from "../../context/LinkContext";

export const SocialLink = () => {
  const data = useContext(LinkContext);
  console.log({ data });


  const [message, setMessage] = useState("Click on the App You Want To Share On");

  const handleLink = (name) => {
    setMessage(`Link copied to share with ${name}`);
  };

  return (
    <>
      <h1 className="title">{message}</h1>
      <div className="fab">
        <div className="mainop">
        <span>SHARE</span>
        <div class="shareContainer">
          <i class="fab fa-facebook-f"></i>
        <i class="fab fa-share-nodes"></i>
        <i class="material-icons fa-solid fa-share-nodes"></i>
        </div>
        </div>

        <div>
          {data.linkOperation.map((items) => {
            return (
              <div
                key={items.id}
                onClick={() => {
                  handleLink(items.name);
                }}
              >
                <items.component 
                url="https://www.dotkonnekt.com/" 
                quote={"Look at me sharing stuff"} 
                title={"Hi i am lazy"} 
                hashtag="#react">
                  {items.icon}
                </items.component>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
