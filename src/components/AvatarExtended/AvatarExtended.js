import React, { useState } from "react";
import "./AvatarExtended.scss";

const AvatarExtended = ({ size = "md", img, alt = "", tooltip }) => {
  const [imageError, setImageError] = useState(false);

  const renderDefaultAvatar = () => (
    <div className="avatar-comp-default">
      <i className="icon-avatar avatar-comp-men" />
    </div>
  );

  return (
    <div className="avatar-extended-comp" title={tooltip}>
      {img && !imageError ? (
        <img
          className={`aec-${size}`}
          src={img}
          alt={alt}
          onError={() => setImageError(true)}
        />
      ) : alt ? (
        <div className="aec-alt">
          <img className="aeca-img" alt={alt} />
        </div>
      ) : (
        renderDefaultAvatar()
      )}
    </div>
  );
};

export default AvatarExtended;
