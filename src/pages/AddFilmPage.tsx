import axios from "axios";
import React, { useState } from "react";

const AddFilmPage = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const obj = {
      title,
      image: img,
      content,
    };
    axios({
      method: "post",
      url: "https://at.usermd.net/api/movies",
      data: obj,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login-page__container">
      <div className="login-page">
        <div className="login-page__form">
          <div className="login-page__form--text">
            <span>Dodaj film</span>
          </div>
          <div className="login-page__form--style">
            <form className="login-page__form--width" onSubmit={handleSubmit}>
              <div className="field-width">
                <label htmlFor="username" className="login-page__form--label">
                  Podaj tytuł:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="username"
                  className="input-field"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="field-width">
                <label htmlFor="img" className="login-page__form--label">
                  Podaj link do zdjęcia
                </label>
                <br />
                <input
                  type="text"
                  id="img"
                  className="input-field"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="field-width">
                <label htmlFor="password" className="login-page__form--label">
                  Podaj opis filmu
                </label>
                <br />
                <textarea
                  id="content"
                  rows={5}
                  cols={32}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="btn-container">
                <button className="btn-style">Dodaj film</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFilmPage;
