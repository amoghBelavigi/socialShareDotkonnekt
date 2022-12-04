import { useContext } from "react";
import { LinkContext } from "../../context/LinkContext";
import '../addLinks/addLinks.css'
import './removeLinks.css'

export const RemoveLinks = () => {
  const data = useContext(LinkContext);
  const { linkOperation, handleLinkOperations } = data;

  const handleRemove = (id) => {
    const filterLinks = linkOperation.filter((links) => {
      return links.id !== id;
    });

    handleLinkOperations([...filterLinks]);
  };

  return (
    <>
        <h3>Added Apps</h3>
      <div className="container">
        {linkOperation.map((items) => {
          console.log(items);
          return (
            <button
                style={{marginTop: '10px'}}
                onClick={() => {
                  handleRemove(items.id);
                }}
              >
            <div className="icons" key={items.id}>
              {items.icon}
            </div>
            </button>
          );
        })}
      </div>
    </>
  );
};
